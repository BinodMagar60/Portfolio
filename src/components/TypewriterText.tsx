"use client"

import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

export default function TypewriterText() {
  const [index, setIndex] = useState(0); // Current title index
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const titles = ["Full-Stack Web Developer", "MERN Stack Developer"];
    const currentTitle = titles[index];

    const typingSpeed = deleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing
        if (charIndex < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentTitle.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % titles.length); // Loop to next title
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <motion.div
      className="text-2xl md:text-3xl font-semibold text-center text-gray-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}

    >
      {displayedText}
      <span className="animate-pulse">|</span>
    </motion.div>
  );
}