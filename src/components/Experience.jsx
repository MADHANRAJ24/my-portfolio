import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-[#0a0a0a] relative">
            <div className="max-w-4xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Flight <span className="text-[#8b5cf6]">Log</span>
                    </h2>
                </motion.div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 space-y-12 pl-8 md:pl-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative md:flex items-start"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] md:left-1/2 md:-ml-[10px] md:hidden"></div>

                        {/* Content */}
                        <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                            <h3 className="text-xl font-bold text-white">Data Science Intern</h3>
                            <p className="text-violet-400">Sfoenix Technologies</p>
                            <p className="text-sm text-gray-500 mt-1">May 2025 - Jun 2025</p>
                        </div>

                        {/* Center Dot for Desktop */}
                        <div className="absolute left-1/2 -ml-[11px] w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] hidden md:block"></div>

                        <div className="md:w-1/2 md:pl-12">
                            <div className="md:hidden">
                                <h3 className="text-xl font-bold text-white">Data Science Intern</h3>
                                <p className="text-violet-400">Sfoenix Technologies</p>
                                <p className="text-sm text-gray-500 mt-1 mb-4">May 2025 - Jun 2025</p>
                            </div>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                                    Applied advanced data preprocessing to real-world datasets.
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                                    Built and evaluated machine learning models to solve actual business problems.
                                </li>
                                <li className="flex gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0"></span>
                                    Collaborated with teams to present data-driven insights.
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
