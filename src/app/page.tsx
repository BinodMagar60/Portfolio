'use client'
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingElements from "@/components/FloatingElements";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import {motion} from 'framer-motion'





export default function Home() {
  
  return (
    <div className="w-full min-h-screen relative scroll-smooth">
      <FloatingElements />
      {/* Navbar */}
      <Navbar/>
      {/* herosection */}
      <div className="pt-20 pb-16 px-4 relative min-h-screen overflow-hidden">
        <HeroSection/>

        {/* 2 big circles */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-purple-500/10 rounded-full"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <AboutSection/>
      <ProjectSection/>
      <SkillSection/>
      <ContactSection/>
      
    </div>
  );
}
