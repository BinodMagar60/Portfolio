'use client'

import { useEffect, useState } from "react";
import {motion} from 'framer-motion'

const FloatingElements = () => {
  const [positions, setPositions] = useState<
    { left: string; top: string; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    const generated = [...Array(6)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setPositions(generated);
  }, []);


  if (positions.length === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: pos.left,
            top: pos.top,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: pos.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: pos.delay,
          }}
        >
          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20" />
        </motion.div>
      ))}
    </div>
  );
}

export default FloatingElements

