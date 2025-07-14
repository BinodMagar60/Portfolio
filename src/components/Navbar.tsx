'use client'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

const Navbar = () => {
    const [hiddenmenu, sethiddenmenu] = useState(true)
    const menuRef = useRef<HTMLDivElement | null>(null)

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })


    const updateMenuVisibility = () => {
        if (window.innerWidth > 640) {
            sethiddenmenu(false)
        } else {
            sethiddenmenu(true) 
        }
    }

    
    useEffect(() => {
        updateMenuVisibility() 

        window.addEventListener('resize', updateMenuVisibility) // listen on resize
        return () => {
            window.removeEventListener('resize', updateMenuVisibility)
        }
    }, [])


    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const isMobile = window.innerWidth <= 640
            if (isMobile && menuRef.current && !menuRef.current.contains(event.target as Node)) {
                sethiddenmenu(true)
            }
        }

        if (!hiddenmenu && window.innerWidth <= 640) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [hiddenmenu])

    return (
        <>
            <motion.div
                className="sticky top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
                style={{ scaleX }}
            />

            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="fixed w-full top-0 backdrop-blur-md z-40 border-b border-gray-200"
            >
                <nav
                    className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center"
                    ref={menuRef}
                >
                    <div
                        className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer sm:pointer-events-none"
                        onClick={() => sethiddenmenu((prev) => !prev)}
                    >
                        {'<BinodDev />'}
                    </div>

                    <motion.div
                        initial={false}
                        animate={hiddenmenu ? 'closed' : 'open'}
                        variants={{
                            open: { opacity: 1, height: 'auto', display: 'flex' },
                            closed: { opacity: 0, height: 0, transitionEnd: { display: 'none' } },
                        }}
                        transition={{ duration: 0.3 }}
                        className="sm:flex flex-col mt-2 justify-center sm:flex-row space-x-6 space-y-2 sm:space-y-0 overflow-hidden"
                    >
                        {['About', 'Projects', 'Skill', 'Contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                                whileHover={{ scale: 1.1, color: '#8b5cf6', transition: { duration: 0 } }}
                                whileTap={{ scale: 0.95 }}
                                className="text-sm font-medium transition-colors relative"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </motion.div>
                </nav>
            </motion.div>
        </>
    )
}

export default Navbar
