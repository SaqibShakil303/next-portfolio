"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "AI CRM + WhatsApp Automation",
        description: "Full-stack CRM serving 15 users managing 550+ records with 5-tier RBAC. WhatsApp lead qualification bot (n8n) with conversational intake and human-agent fallback. AI itinerary generator using LLM API reduces turnaround from hours to under 2 minutes. Full SOP documentation system.",
        tech: ["Angular", "Node.js", "MySQL", "n8n", "WhatsApp API", "Claude API", "RBAC"],
        features: [],
        gradient: "from-blue-600 to-cyan-500",
        linkLabel: "View Case Study →",
    },
    {
        title: "Travel Booking Platform — thesunflowertrip.com",
        description: "Production travel booking system: 102 REST API endpoints, 1,000+ MAU, ₹15L+/month in real transactions, 42-table MySQL schema. 80% API latency reduction (724ms → 146ms). Idempotent Razorpay payment flow with duplicate-charge prevention via DB-level unique constraints.",
        tech: ["Angular", "Node.js", "MySQL", "Razorpay", "Railway CI/CD"],
        features: [],
        gradient: "from-purple-600 to-pink-500",
        linkLabel: "View Case Study →",
    },
    {
        title: "POS & Merchandise Platform — myownprint.com.au",
        description: "Led a 3-person remote team across an 8-month Melbourne engagement. Order lifecycle modelled as a DB-persisted state machine (Pending → Processing → Printed → Shipped → Delivered). Each transition is a logged DB write — fully auditable. 25% frontend load-time improvement.",
        tech: ["Angular", ".NET", "SQL Server", "Remote Team Lead", "Australia"],
        features: [],
        gradient: "from-orange-500 to-red-500",
        linkLabel: "View Case Study →",
    },
    {
        title: "Social Media & Brand Identity — Souvlakia India",
        description: "Managed the complete social media presence for a New Town restaurant. Developed multi-platform growth strategy, designed the menu and all marketing collateral in Canva, produced video content with CapCut/VN, and ran audience growth campaigns from zero.",
        tech: ["Canva", "CapCut", "VN", "Instagram", "Content Strategy", "Menu Design"],
        features: [],
        gradient: "from-fuchsia-600 to-rose-500",
        linkLabel: "View Work →",
    },
    {
        title: "Unity Horror Game",
        description: "Story-based horror demo game with immersive atmospheric environments. 3D scene design, interactive narrative mechanics, and game logic built entirely in Unity3D — demonstrating creative technical depth beyond web development.",
        tech: ["Unity", "C#", "3D", "Game Design", "Horror"],
        features: [],
        gradient: "from-green-500 to-emerald-600",
        linkLabel: "View Demo →",
    },
];

export default function Projects() {
    return (
        <section className="relative z-10 w-full bg-[#121212] py-32 px-4 md:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-4xl font-bold text-white md:text-5xl"
                >
                    Selected Work
                </motion.h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20"
                        >
                            {/* Hover Glow */}
                            <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.gradient} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

                            <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
                            <p className="mb-6 text-gray-400">{project.description}</p>

                            <div className="mb-6 flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {project.features.length > 0 && (
                                <ul className="mb-8 list-inside list-disc text-sm text-gray-500">
                                    {project.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>
                            )}

                            <button className="flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-400">
                                {project.linkLabel}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
