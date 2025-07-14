import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, GitBranch, Rocket } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
const SkillSection = () => {

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

    const skills = [
        {
            name: "Frontend",
            icon: Code,
            items: ["React.js", "HTML5", "CSS", "Tailwind CSS", "JavaScript"],
            color: "from-blue-500 to-cyan-500",
        },
        {
            name: "Backend",
            icon: Database,
            items: ["Node.js", "Express.js", "MongoDB"],
            color: "from-green-500 to-emerald-500",
        },
        {
            name: "Tools & Version Control",
            icon: GitBranch,
            items: ["Git", "GitHub", "VS Code", "Postman"],
            color: "from-purple-500 to-pink-500",
        },
        {
            name: "Currently Learning",
            icon: Rocket,
            items: ["Nextjs","Framer-motion"],
            color: "from-orange-500 to-red-500",
        },
    ]

    return (
        <div id="skill" className="py-16 px-4 bg-muted/50 relative overflow-hidden">
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
                        Skills & Technologies
                    </motion.h2>
                    <motion.div
                        className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
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
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ y: -10, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Card className="text-center h-full hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/50 relative overflow-hidden group">
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                    style={{
                                        background: `linear-gradient(135deg, ${skill.color.split(" ")[1]}, ${skill.color.split(" ")[3]})`,
                                    }}
                                />

                                <CardHeader className="relative z-10">
                                    <motion.div
                                        className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <skill.icon className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <CardTitle className="group-hover:text-blue-600 transition-colors">{skill.name}</CardTitle>
                                </CardHeader>

                                <CardContent className="relative z-10">
                                    <div className="space-y-2">
                                        {skill.items.map((item, itemIndex) => (
                                            <motion.div
                                                key={item}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: itemIndex * 0.1 }}
                                                whileHover={{ scale: 1.05, x: 5 }}
                                                viewport={{ once: true }}
                                            >
                                                <Badge
                                                    variant="secondary"
                                                    className="mr-2 mb-2 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all cursor-default"
                                                >
                                                    {item}
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

            {/* Floating Tech Icons */}
            <motion.div
                className="absolute top-10 left-10 text-blue-500/20"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            >
                <Code className="w-8 h-8" />
            </motion.div>
            <motion.div
                className="absolute bottom-10 right-10 text-purple-500/20"
                animate={{ rotate: -360, scale: [1.2, 1, 1.2] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            >
                <Database className="w-8 h-8" />
            </motion.div>
        </div>
    )
}

export default SkillSection