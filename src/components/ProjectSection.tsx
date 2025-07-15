'use client'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'
import { Badge } from './ui/badge'
import Image from 'next/image'

const ProjectSection = () => {


    const projects = [
        {
            title: "FinStruct",
            description:
                "FinStruct is a project management system for construction based companies can manage their projects, project task, users and workers, and manage the finance.",
            image: "https://res.cloudinary.com/dsssvg37w/image/upload/v1752463405/Screenshot_2025-07-14_090642_fektbs.png",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
            github: "https://github.com/BinodMagar60/FinStruct",
            demo: "",
        },
        {
            title: "PixelKart",
            description: "A simple ecommerce website for selling computer and its parts where customers are also able to sell their stuff.",
            image: "https://res.cloudinary.com/dsssvg37w/image/upload/v1752464007/Screenshot_2025-07-14_091810_ohots7.png",
            technologies: ["React", "TypeScript","Tailwind CSS","Node.js", "Express", "MongoDB"],
            github: "https://github.com/BinodMagar60/PixelKart",
            demo: "https://pixel-kart.vercel.app/",
        },
        {
            title: "Event Manager",
            description: "A simple event manager with charts to show the statics and basic filters.",
            image: "https://res.cloudinary.com/dsssvg37w/image/upload/v1752464491/Screenshot_2025-07-14_092600_hwd5yu.png",
            technologies: ["Nextjs", "Shadcn", "Tailwind CSS","Local Storage"],
            github: "https://github.com/BinodMagar60/EventManagerNextjs",
            demo: "https://eventmanagerbinod.vercel.app/",
        },
        {
            title: "Student-Teacher Portal",
            description: "Student-Teacher Portal is a portal system for schools where student, teacher and administration can login and share important notes, homeworks, give assignment, check result, check exam and daily classes routines, take attendance and do many more things",
            image: "https://res.cloudinary.com/dsssvg37w/image/upload/v1752495163/studetnportal_ng6eq7.png",
            technologies: ["HTML","CSS","JavaScript","Php","SQL"],
            github: "https://github.com/BinodMagar60/studentportal",
            demo: "",
        },
        
    ]

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
    }

    return (
        <section id="projects" className="py-16 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        whileInView={{ scale: [0.8, 1.1, 1] }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.div
                        className="w-20 rounded-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="h-full hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/50">


                                <div className="relative overflow-hidden">
                                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }} className="relative w-full h-48 ">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                        />
                                    </motion.div>

                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                                            <Button size="sm" variant="secondary" asChild>
                                                <Link href={project.github}>
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Code
                                                </Link>
                                            </Button>
                                        </motion.div>
                                        {
                                            project.demo !== "" && (
                                                <motion.div whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }}>
                                                    <Button size="sm" asChild>
                                                        <Link href={project.demo} target='_blank'>
                                                            <ExternalLink className="w-4 h-4 mr-2" />
                                                            Demo
                                                        </Link>
                                                    </Button>
                                                </motion.div>
                                            )
                                        }
                                    </motion.div>
                                </div>

                                <CardHeader>
                                    <CardTitle className="group-hover:text-blue-600 transition-colors">{project.title}</CardTitle>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>

                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <motion.div
                                                key={tech}
                                                initial={{ opacity: 0, scale: 0 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: techIndex * 0.1 }}
                                                whileHover={{ scale: 1.1, rotate: 2 }}
                                                viewport={{ once: true }}
                                            >
                                                <Badge
                                                    variant="outline"
                                                    className="hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all"
                                                >
                                                    {tech}
                                                </Badge>
                                            </motion.div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ProjectSection