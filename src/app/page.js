"use client"
import { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  const[darkMode,setDarkMode]=useState(false)
  function receiveDarkMode(data){
    setDarkMode(data)
  }
  const home = useRef()
  const projects = useRef()
  const contact = useRef()  
  return (
    <main>
      <Navbar darkMode={receiveDarkMode}/>
      <Hero ref={home} darkMode={darkMode} />
      <Projects ref={projects} darkMode={darkMode}/>
      <Technologies darkMode={darkMode}/>
      <Contact ref={contact} darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </main>
  );
}
