import { motion } from 'framer-motion';
import { Cpu, Navigation, Layers, Database } from 'lucide-react';

const TechStack = () => {
    const categories = [
        {
            title: "The Engine (Core)",
            icon: <Cpu className="w-6 h-6 text-violet-400" />,
            skills: ["Python", "Data Analysis", "Machine Learning", "Deep Learning"],
            border: "border-violet-500/30"
        },
        {
            title: "The Navigation (Agentic AI)",
            icon: <Navigation className="w-6 h-6 text-cyan-400" />,
            skills: ["Large Language Models (LLMs)", "LangChain", "LangGraph", "CrewAI"],
            border: "border-cyan-500/30"
        },
        {
            title: "The Frameworks",
            icon: <Layers className="w-6 h-6 text-pink-400" />,
            skills: ["PyTorch", "TensorFlow", "Flask", "Streamlit"],
            border: "border-pink-500/30"
        },
        {
            title: "The Data",
            icon: <Database className="w-6 h-6 text-emerald-400" />,
            skills: ["PostgreSQL", "Power BI", "Excel", "Big Data"],
            border: "border-emerald-500/30"
        },
    ];

    return (
        <section id="tech" className="py-20 bg-[#0a0a0a] relative">
            <div className="max-w-6xl mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Propulsion <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">Systems</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The technologies that power my autonomous workflows and deep learning models.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`p-6 rounded-2xl bg-white/5 backdrop-blur-sm border ${cat.border} hover:bg-white/10 transition-all hover:-translate-y-2`}
                        >
                            <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{cat.title}</h3>
                            <ul className="space-y-2">
                                {cat.skills.map((skill) => (
                                    <li key={skill} className="text-gray-300 text-sm flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
