'use client'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Copy, Facebook, Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { toast } from 'sonner'
import Link from 'next/link'
const ContactSection = () => {

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "0dd6726a-e718-441c-a5e0-f183546b3a31",
        name,
        email,
        message,
      }),
    });

    const result = await response.json();
    console.log("Web3Forms response:", result);

    if (result.success) {
      form.reset();
      toast.success("Message Sent",{
        duration: 1000
      })
      return
    }
    toast.error("Failed to send message",{
      duration: 1000
    })

  }



  return (
    <div id="contact" className="py-16 px-4 relative">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            whileInView={{ scale: [0.8, 1.1, 1] }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.div
            className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            I&apos;m actively seeking internship opportunities and would love to discuss how I can contribute to your team.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 select-none"
              onClick={()=> navigator.clipboard.writeText("kauchabinod888@gmail.com")}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Mail className="mr-2 h-4 w-4" />
              </motion.div>
              Kauchabinod88@gmail.com
              <Copy className='h-4 w-4'/>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: "https://github.com/BinodMagar60", label: "GitHub", color: "from-gray-700 to-gray-900" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/binod-magar-6bb9b7358/", label: "LinkedIn", color: "from-purple-500 to-purple-700" },
            { icon: Instagram, href: "https://www.instagram.com/binodmagar888/", label: "Instagram", color: "from-red-500 to-red-700" },
            { icon: Facebook, href: "https://www.facebook.com/binod.magar.31354/", label: "Facebook", color: "from-blue-600 to-blue-800" },
          ].map((social, index) => (
            <Link key={social.label} href={social.href} target='_blank'>
            <motion.div 
              key={social.label}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1, type: "spring", bounce: 0.6 }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, 0],
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group`}
            >
              
              <motion.div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              <social.icon className="w-6 h-6 relative z-10" />
              
            </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <motion.div
            className="bg-gradient-to-br from-background to-muted/50 rounded-2xl p-8 shadow-lg border border-muted relative overflow-hidden"
            transition={{ duration: 0.3 }}
          >

            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-blue-600/10 rounded-full blur-xl"
              animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="relative z-10">
              <motion.h3
                className="text-2xl font-bold text-center mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Send Me a Message
              </motion.h3>
              <motion.p
                className="text-muted-foreground text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you!
              </motion.p>

              <form className="space-y-6 text-start" onSubmit={handleSubmit}>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background/50 backdrop-blur-sm focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background/50 backdrop-blur-sm focus:outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </motion.div>



                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    whileFocus={{ scale: 1.02 }}

                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background/50 backdrop-blur-sm   transition-all duration-300 resize-none"
                    placeholder="Your Message"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(139, 92, 246, 0.3)",
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <Mail className="mr-2 h-5 w-5" />
                      </motion.div>
                      Send Message
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactSection