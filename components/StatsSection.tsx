"use client";

import { motion } from "framer-motion";

const stats = [
    { value: "1,000+", label: "Monthly active users on live platforms" },
    { value: "₹15L+/mo", label: "Real payment transactions processed" },
    { value: "102", label: "Production REST API endpoints" },
    { value: "80%", label: "API latency reduction achieved" },
    { value: "550+", label: "CRM records managed end-to-end" },
    { value: "5", label: "Countries — clients, tours & deployments" },
];

export default function StatsSection() {
    return (
        <section className="relative z-10 w-full bg-[#121212] py-24 px-4 md:px-12 border-t border-white/5">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-4xl font-bold text-white md:text-5xl"
                >
                    By the Numbers
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:border-white/20 transition-colors"
                        >
                            <p className="text-3xl font-bold text-white md:text-4xl">{stat.value}</p>
                            <p className="mt-2 text-sm text-gray-400 leading-snug">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
