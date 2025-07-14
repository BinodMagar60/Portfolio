import { Github, Mail } from "lucide-react"
import { Button } from "./ui/button"
import {motion} from 'framer-motion'
import { useEffect, useState } from "react"
import TypewriterText from "./TypewriterText"
import Image from "next/image"

const HeroSection = () => {

    
const AnimatedCounter = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}


  return (
    <div className="container mx-auto text-center relative z-10 sm:pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-8"
          >
            <motion.div
              className="w-44 h-44 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 2 }}
            >

              <div className="w-full h-full p-4 relative">
                <Image src="https://res.cloudinary.com/dsssvg37w/image/upload/v1752375662/nobackgroundProfilePic_ngrzao.png"
                  fill
                  alt="profile1" className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
                />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-dashed border-blue-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hi, I&apos;m{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Binod Kaucha
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-2 max-w-2xl mx-auto h-16"
          >
            <TypewriterText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Aspiring web developer passionate about building engaging web experiences and constantly learning modern technologies.
          </motion.p>

          {/* stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-8"
          >
            {[
              { label: "Projects", value: 7 },
              { label: "Technologies", value: 6 },
              { label: "GitHub Repos", value: 15 },
            ].map((stat, index) => (
              <motion.div key={stat.label} whileHover={{ scale: 1.1, y: -5 }} className="text-center">
                <motion.div
                  className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent cursor-pointers"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1 + index * 0.2, type: "spring" }}
                >
                  <AnimatedCounter end={stat.value} />+
                </motion.div>
                <div className="text-sm text-muted-foreground cursor-default">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contact">
                <Button
                size={'lg'}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 cursor-pointer"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="https://github.com/BinodMagar60?tab=repositories">
                <Button
                variant={'outline'}
                size={'lg'}
                className="w-full sm:w-auto bg-white border-1 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent cursor-pointer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              </a>
            </motion.div>
          </motion.div>
          

        </div>
  )
}

export default HeroSection