"use client"
import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Sunrising from './styles/Sunrising'


export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col bg-primary-200">
      <NavBar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Sunrising/>
        <HeroSection />
        <AboutSection />
        <ProjectsSection id="projects"/>
      </div>
      <Contact id="contacts"/>
      <Footer />
    </main>
  )
} 