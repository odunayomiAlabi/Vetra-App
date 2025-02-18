import "./App.css"
import Footer from "./components/Footer";
import Home from "./components/Home";
import LetsTalk from "./components/LetsTalk";
import WhyChooseVera from "./components/WhyChooseVera";
import FAQAccordion from "./components/accordion/accordion";
import { motion } from 'framer-motion';
import styles from "./components/accordion/accordion.module.css";
import { useState } from "react";
import Testimonial from "./components/testimonial";
import WhatWeDo from "./components/WhatWeDo";


function App() {
    const [serviceFor, setServiceFor] = useState<'businesses' | 'talents'>('businesses');
  return (
    <div className="App">
    <Home />
    <WhatWeDo />
    <WhyChooseVera  />
    <Testimonial />
    <LetsTalk />
    <Footer />
    </div>
  );
}

export default App;
