

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Standard Imports (Assuming these are in src/Components/)
import Header from "./Components/Header"; 
import Footer from "./Components/Footer"; 
import Home from "./Components/Home";
import About from "./Components/About"; 
import Contact from "./Components/Contact";
import Founder from "./Components/Founder";
import Careers from "./Components/Careers";
import Terms from "./Components/Terms";
import Privacy from "./Components/Privacy";

// Service Page Imports
import Digital from "./Components/Digital"; 
import Digital1 from "./Components/Digital1"; 
import Digital2 from "./Components/Digital2"; 
import Digital3 from "./Components/Digital3"; 
import Digital4 from "./Components/Digital4"; 
import Digital5 from "./Components/Digital5"; 
import Digital6 from "./Components/Digital6"; 

import Content from "./Components/Content";
import Content1 from "./Components/Content1";
import Content2 from "./Components/Content2";
import Content3 from "./Components/Content3";
import Content4 from "./Components/Content4";
import Content5 from "./Components/Content5";
import Content6 from "./Components/Content6";

import Socialmedia from "./Components/Socialmedia";
import Socialmedia1 from "./Components/Socialmedia1";
import Socialmedia2 from "./Components/Socialmedia2";
import Socialmedia3 from "./Components/Socialmedia3";
import Socialmedia4 from "./Components/Socialmedia4";
import Socialmedia5 from "./Components/Socialmedia5";
import Socialmedia6 from "./Components/Socialmedia6";

import Graphic from "./Components/Graphic";
import Graphic1 from "./Components/Graphic1";
import Graphic2 from "./Components/Graphic2";
import Graphic3 from "./Components/Graphic3";
import Graphic4 from "./Components/Graphic4";
import Graphic5 from "./Components/Graphic5";
import Graphic6 from "./Components/Graphic6";

import SEO from "./Components/SEO";
import SEO1 from "./Components/SEO1";
import SEO2 from "./Components/SEO2";
import SEO3 from "./Components/SEO3";
import SEO4 from "./Components/SEO4";
import SEO5 from "./Components/SEO5";
import SEO6 from "./Components/SEO6";

import Webdesign from "./Components/Webdesign";
import Webdesign1 from "./Components/Webdesign1";
import Webdesign2 from "./Components/Webdesign2";
import Webdesign3 from "./Components/Webdesign3";
import Webdesign4 from "./Components/Webdesign4";
import Webdesign5 from "./Components/Webdesign5";
import Webdesign6 from "./Components/Webdesign6";

import Video from "./Components/Video";

import styles from "./App.module.css"; 

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/contact" element={<Contact />} /> 
            <Route path="/careers" element={<Careers />} />
            
            {/* Digital Routes */}
            <Route path="/digital" element={<Digital />} /> 
            <Route path="/digital1" element={<Digital1 />} /> 
            <Route path="/digital2" element={<Digital2 />} /> 
            <Route path="/digital3" element={<Digital3 />} /> 
            <Route path="/digital4" element={<Digital4/>} /> 
            <Route path="/digital5" element={<Digital5 />} /> 
            <Route path="/digital6" element={<Digital6 />} /> 

            {/* Content Routes */}
            <Route path="/content" element={<Content />} />
            <Route path="/content1" element={<Content1 />} />
            <Route path="/content2" element={<Content2 />} />
            <Route path="/content3" element={<Content3 />} />
            <Route path="/content4" element={<Content4 />} />
            <Route path="/content5" element={<Content5 />} />
            <Route path="/content6" element={<Content6 />} />

            {/* Graphic Routes */}
            <Route path="/graphic" element={<Graphic />} />
            <Route path="/graphic1" element={<Graphic1 />} />
            <Route path="/graphic2" element={<Graphic2 />} />
            <Route path="/graphic3" element={<Graphic3 />} />
            <Route path="/graphic4" element={<Graphic4 />} />
            <Route path="/graphic5" element={<Graphic5 />} />
            <Route path="/graphic6" element={<Graphic6 />} />

            {/* SEO Routes */}
            <Route path="/seo" element={<SEO />} />
            <Route path="/seo1" element={<SEO1 />} />
            <Route path="/seo2" element={<SEO2 />} />
            <Route path="/seo3" element={<SEO3 />} />
            <Route path="/seo4" element={<SEO4 />} />
            <Route path="/seo5" element={<SEO5 />} />
            <Route path="/seo6" element={<SEO6 />} />

            {/* WebDesign Routes */}
            <Route path="/webdesign" element={<Webdesign />} />
            <Route path="/webdesign1" element={<Webdesign1 />} />
            <Route path="/webdesign2" element={<Webdesign2 />} />
            <Route path="/webdesign3" element={<Webdesign3 />} />
            <Route path="/webdesign4" element={<Webdesign4 />} />
            <Route path="/webdesign5" element={<Webdesign5 />} />
            <Route path="/webdesign6" element={<Webdesign6 />} />

            {/* Social Media Routes */}
            <Route path="/socialmedia" element={<Socialmedia />} />
            <Route path="/socialmedia1" element={<Socialmedia1 />} />
            <Route path="/socialmedia2" element={<Socialmedia2 />} />
            <Route path="/socialmedia3" element={<Socialmedia3 />} />
            <Route path="/socialmedia4" element={<Socialmedia4 />} />
            <Route path="/socialmedia5" element={<Socialmedia5 />} />
            <Route path="/socialmedia6" element={<Socialmedia6 />} />

            <Route path="/video" element={<Video />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;