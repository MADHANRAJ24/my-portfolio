import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-violet-900/10 blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Mission <span className="text-[#8b5cf6]">Control</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                            Generative AI Data Scientist
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Based in Madurai, India. My mission is to bridge the gap between raw data and autonomous decision-making.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            With a B.Tech in Artificial Intelligence and Data Science (80%), I don't just train models; I build architectures that think. From constructing Mini LLMs from scratch to orchestrating complex Agentic AI workflows using LangGraph and CrewAI, I focus on creating scalable, high-impact solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative"
                    >
                        {/* Abstract representation of "Mission Control" or Code */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <code className="text-sm font-mono text-gray-300">
                                <span className="text-violet-400">class</span> AgenticWorkflow:<br />
                                &nbsp;&nbsp;<span className="text-cyan-400">def</span> __init__(self, mission):<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;self.mission = <span className="text-green-400">"Autonomous Decision Making"</span><br />
                                <br />
                                &nbsp;&nbsp;<span className="text-cyan-400">def</span> execute(self, data):<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;insights = self.analyze(data)<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-violet-400">return</span> insights.scale()<br />
                            </code>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
