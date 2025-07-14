'use client'
import { motion } from 'framer-motion'
import { Badge } from './ui/badge'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <div id="about" className="py-16 px-4 bg-muted/50 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <motion.h2
            className='text-3xl md:text-4xl font-bold mb-2'
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.div className='w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full'
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg blur-lg opacity-20" />
            <Image
              src="https://res.cloudinary.com/dsssvg37w/image/upload/v1752424345/imgbinod_dgifpu.jpg"
              alt="Binod"
              width={300}
              height={300}
              className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-lg shadow-lg mx-auto relative z-10 object-center"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              I&apos;m a passionate BCA student with a strong interest in full-stack web development, currently learning and building projects using various technologies. I enjoy exploring how code brings ideas to life and love creating interactive digital experiences as I grow my skills.
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Currently seeking internship opportunities where I can contribute to meaningful projects while
              continuing to learn and grow as a developer.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              {["Available for Internships", "Quick Learner", "Team Player"].map(
                (badge, index) => (
                  <motion.div
                    key={badge}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 border border-blue-500/20"
                    >
                      {badge}
                    </Badge>
                  </motion.div>
                ),
              )}
            </motion.div>
          </motion.div>
        </div>
      </div >
    </div >

  )
}

export default AboutSection