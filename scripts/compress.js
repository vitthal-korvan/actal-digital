import ffmpegPath from 'ffmpeg-static';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import sharp from 'sharp';

ffmpeg.setFfmpegPath(ffmpegPath);

const MAX_WIDTH = 2000; // Resize images wider than this
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80; // For png quantization (if using pngquant-like behavior) or compression level
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 75; // AVIF usually looks good at lower quality settings

const TARGET_DIRS = ['images', 'videos', 'src'];

async function compressImages() {
  console.log('--- Scanning for Images ---');
  // Find all images
  const imageFiles = await glob('**/*.{jpg,jpeg,png,webp,avif}', {
    cwd: process.cwd(),
    ignore: ['node_modules/**', 'dist/**'],
    nodir: true,
  });

  console.log(`Found ${imageFiles.length} images.`);

  for (const file of imageFiles) {
    // Only process files in target dirs
    const inTargetDir = TARGET_DIRS.some(dir => file.startsWith(dir) || file.startsWith(dir + '/') || file.startsWith(dir + '\\'));
    if (!inTargetDir) continue;

    const absolutePath = path.resolve(file);
    const originalStats = fs.statSync(absolutePath);
    const originalSize = originalStats.size;

    try {
      const buffer = fs.readFileSync(absolutePath);
      let sharpInstance = sharp(buffer);
      const metadata = await sharpInstance.metadata();

      let didResize = false;
      if (metadata.width > MAX_WIDTH) {
        sharpInstance = sharpInstance.resize({ width: MAX_WIDTH });
        didResize = true;
      }

      // Re-encode based on format
      if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
        sharpInstance = sharpInstance.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
      } else if (metadata.format === 'png') {
        sharpInstance = sharpInstance.png({ compressionLevel: 8, adaptiveFiltering: true, force: false });
        // NOTE: sharp's png output is lossless by default. To lossy compress, we might need other settings or stick to lossless optimization.
        // We will stick to high compression level.
      } else if (metadata.format === 'webp') {
        sharpInstance = sharpInstance.webp({ quality: WEBP_QUALITY });
      } else if (metadata.format === 'avif') {
        sharpInstance = sharpInstance.avif({ quality: AVIF_QUALITY });
      }

      const outputBuffer = await sharpInstance.toBuffer();
      const newSize = outputBuffer.length;

      if (newSize < originalSize) {
        fs.writeFileSync(absolutePath, outputBuffer);
        const percent = ((originalSize - newSize) / originalSize * 100).toFixed(2);
        console.log(`[COMPRESSED] ${file}: ${(originalSize / 1024).toFixed(2)}kb -> ${(newSize / 1024).toFixed(2)}kb (-${percent}%)`);
      } else {
        console.log(`[SKIPPED] ${file}: New size is larger or same (already optimized?)`);
      }
    } catch (err) {
      console.error(`[ERROR] processing ${file}:`, err.message);
    }
  }
}

async function compressVideos() {
  console.log('\n--- Scanning for Videos ---');
  const videoFiles = await glob('**/*.{mp4,mov}', {
    cwd: process.cwd(),
    ignore: ['node_modules/**', 'dist/**'],
    nodir: true,
  });

  console.log(`Found ${videoFiles.length} videos.`);

  for (const file of videoFiles) {
     // Only process files in target dirs
    const inTargetDir = TARGET_DIRS.some(dir => file.startsWith(dir) || file.startsWith(dir + '/') || file.startsWith(dir + '\\'));
    if (!inTargetDir) continue;

    const absolutePath = path.resolve(file);
    const originalStats = fs.statSync(absolutePath);
    const originalSize = originalStats.size;
    const tempOutput = absolutePath + '.temp.mp4';

    console.log(`Processing video: ${file} ...`);

    await new Promise((resolve, reject) => {
      ffmpeg(absolutePath)
        .outputOptions([
          '-vcodec', 'libx264',
          '-crf', '24', // Constant Rate Factor 23 is default, 24 is slightly more compressed
          '-preset', 'medium',
          '-acodec', 'aac',
          '-b:a', '128k',
          '-movflags', '+faststart' // Web optimization
        ])
        .output(tempOutput)
        .on('end', () => {
             const newStats = fs.statSync(tempOutput);
             const newSize = newStats.size;
             if (newSize < originalSize) {
                fs.copyFileSync(tempOutput, absolutePath);
                fs.unlinkSync(tempOutput);
                const percent = ((originalSize - newSize) / originalSize * 100).toFixed(2);
                console.log(`[COMPRESSED] ${file}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB (-${percent}%)`);
             } else {
                fs.unlinkSync(tempOutput);
                console.log(`[SKIPPED] ${file}: New size is larger.`);
             }
             resolve();
        })
        .on('error', (err) => {
             console.error(`[ERROR] processing video ${file}:`, err.message);
             if (fs.existsSync(tempOutput)) fs.unlinkSync(tempOutput);
             resolve(); // Verify next
        })
        .run();
    });
  }
}

async function main() {
  await compressImages();
  await compressVideos();
}

main();
