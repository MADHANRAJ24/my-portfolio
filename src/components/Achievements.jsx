import { motion } from 'framer-motion';
import { Award, Code, Trophy } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            title: "School Topper",
            subtitle: "Class X (91%)",
            icon: <Award className="w-8 h-8 text-yellow-500" />
        },
        {
            title: "HackerRank Certified",
            subtitle: "Problem Solving, Python, SQL",
            icon: <Code className="w-8 h-8 text-green-500" />
        },
        {
            title: "Competitor",
            subtitle: "Hackathons & AI-thons (ML/GenAI)",
            icon: <Trophy className="w-8 h-8 text-violet-500" />
        }
    ];

    return (
        <section id="achievements" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-1/4 h-full bg-cyan-900/10 blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Earned <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Badges</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.subtitle}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
