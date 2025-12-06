import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-[#0a0a0a] relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Docking <span className="text-[#8b5cf6]">Bay</span>
                    </h2>
                    <p className="text-gray-400">Ready to initiate collaboration?</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    <motion.a
                        href="mailto:mathan2412005@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors"
                    >
                        <Mail className="w-8 h-8 text-violet-400" />
                        <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="font-semibold text-white">mathan2412005@gmail.com</p>
                        </div>
                    </motion.a>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors"
                    >
                        <Phone className="w-8 h-8 text-cyan-400" />
                        <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="font-semibold text-white">+91-8098297206</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-colors"
                    >
                        <MapPin className="w-8 h-8 text-pink-400" />
                        <div>
                            <p className="text-sm text-gray-400">Location</p>
                            <p className="font-semibold text-white">Madurai, India</p>
                        </div>
                    </motion.div>
                </div>

                <div className="flex gap-4 justify-center mt-12">
                    <a
                        href="https://www.linkedin.com/in/d-madhan-raj-22032b27b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-cyan-400 transition-all transform hover:scale-110"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                        href="https://github.com/MADHANRAJ24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-violet-400 transition-all transform hover:scale-110"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                </div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-gray-600 text-sm"
                >
                    © 2025 Madhan Raj.D | Portfolio
                </motion.footer>
            </div>
        </section>
    );
};

export default Contact;
