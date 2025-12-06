import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: "Super Intelligent Trading Bot",
            tagline: "Autonomous market domination.",
            desc: "A fully autonomous trading system powered by LangGraph and Groq LLM. Features real-time market analysis via Angel One API, sentiment-aware decision making, and a self-improving reinforcement learning loop.",
            tools: ["LangGraph", "Angel One API", "Groq LLM", "Sentiment Analysis"],
            tech: ["Python", "FastAPI", "React"]
        },
        {
            title: "The Swarm: LLM Powered Ecosystem",
            tagline: "Built to automate diverse tasks.",
            desc: "Developed a suite of 20+ applications leveraging Large Language Models. Demonstrated versatility in prompt engineering and application integration.",
            tools: ["YouTube Summarizer", "Resume Q&A Tool", "Medical Chatbot"],
            tech: ["LLMs", "LangChain"]
        },
        {
            title: "The Architect: Mini LLM from Scratch",
            tagline: "Understanding the ghost in the machine.",
            desc: "Implemented a language model from the ground up using PyTorch. Designed custom tokenization, embeddings, and transformer-based layers to master core concepts.",
            tools: ["Attention Mechanisms", "Backpropagation"],
            tech: ["PyTorch", "Transformers"]
        },
        {
            title: "The Sentinel: Warranty Claim Fraud Prediction",
            tagline: "Protecting business value.",
            desc: "Applied ML models to detect fraudulent claims within a dataset. Analyzed region, product, and claim value to predict authenticity.",
            tools: ["Feature Engineering", "Fraud Detection"],
            tech: ["ML Models", "Pandas"]
        },
        {
            title: "The Navigator: Traffic Flow Prediction",
            tagline: "Optimizing real-world movement.",
            desc: "Built an ML pipeline to analyze and predict traffic conditions. Utilized Random Forest Classifier with feature engineering on time and car counts.",
            tools: ["Random Forest", "Confusion Matrix"],
            tech: ["Scikit-learn", "Python"]
        }
    ];

    return (
        <section id="projects" className="py-20 bg-[#0a0a0a] bg-opacity-95 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Zero-G <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-400">Deployments</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Featured projects demonstrating weightless innovation.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all group"
                        >
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-2 text-violet-400 group-hover:text-violet-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-cyan-400 mb-4 font-mono">{project.tagline}</p>
                                <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tools.map((tool) => (
                                        <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                                <div className="border-t border-white/10 pt-4 flex gap-4">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs font-bold text-violet-500">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
