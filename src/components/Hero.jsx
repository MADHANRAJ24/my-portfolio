import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/assets/hero_background.png')`,
                }}
            >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-[#0a0a0a]/80"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-[#8b5cf6] font-bold tracking-widest text-sm md:text-base uppercase mb-4">
                        GenAI & Data Science Portfolio
                    </h2>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        Defying Limits with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                            Generative AI
                        </span> & Autonomous Agents.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    I build AI systems that handle the heavy lifting. Specializing in LLMs, Agentic Workflows, and Data Science.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:-translate-y-1"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Floating Elements Animation - Decorative */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -z-10 top-1/2 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -z-10 bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"
                />
            </div>
        </section>
    );
};

export default Hero;
