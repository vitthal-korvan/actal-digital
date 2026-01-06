
import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const replacementMap = {
    "./BN1.png": "../../images/BN1.png",
    "./DG1.png": "../../images/DG1.png",
    "./DG2.png": "../../images/DG2.png",
    "./DG3.png": "../../images/DG3.png",
    "./DG4.png": "../../images/DG4.png",
};

const componentsDir = path.resolve(__dirname, '../src/Components');

async function main() {
    console.log(`Scanning in: ${componentsDir}`);
    const files = await glob(path.join(componentsDir, '*.jsx').replace(/\\/g, '/')); // glob usually expects forward slashes

    console.log(`Found ${files.length} files.`);

    files.forEach(file => {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        for (const [key, value] of Object.entries(replacementMap)) {
            // Replace exact matches, being careful with quotes
            const regex = new RegExp(`from ['"]${key.replace('.', '\\.')}['"]`, 'g');
            if (content.match(regex)) {
                content = content.replace(regex, `from '${value}'`);
                modified = true;
            }
        }

        if (modified) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated: ${path.basename(file)}`);
        }
    });
}

main();
