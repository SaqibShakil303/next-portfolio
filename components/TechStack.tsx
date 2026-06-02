"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Frontend",
        items: ["Angular (v18+)", "TypeScript", "HTML5", "CSS3", "SCSS", "Tailwind CSS"],
        color: "from-blue-500 to-cyan-400"
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "RBAC", "MySQL", "SQL Server"],
        color: "from-green-500 to-emerald-400"
    },
    {
        category: "AI & Automation",
        items: ["Claude API", "OpenAI API", "n8n Workflows", "Prompt Engineering", "WhatsApp Business API", "Chatbot Design", "LLM Integration"],
        color: "from-purple-500 to-pink-400"
    },
    {
        category: "DevOps & Cloud",
        items: ["Railway CI/CD", "Git / GitHub", "Vercel", "Hostinger", "Docker (learning)", "AWS CLF-C02 (in progress)"],
        color: "from-orange-500 to-red-400"
    },
    {
        category: "Creative Tools",
        items: ["Canva", "CapCut", "VN (Video Ninja)", "Unity3D", "Figma"],
        color: "from-fuchsia-500 to-rose-400"
    },
    {
        category: "HR & Operations",
        items: ["Talent Acquisition", "Team Management", "Onboarding", "SOP Documentation", "CRM Operations", "B2B Negotiation", "Vendor Management"],
        color: "from-indigo-500 to-violet-400"
    }
];

export default function TechStack() {
    return (
        <section className="relative z-10 w-full bg-[#121212] py-24 px-4 md:px-12 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-4xl font-bold text-white md:text-5xl"
                >
                    Tech Stack
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-white/10"
                        >
                            <h3 className={`mb-6 text-xl font-bold bg-gradient-to-r ${skillGroup.color} bg-clip-text text-transparent`}>
                                {skillGroup.category}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
