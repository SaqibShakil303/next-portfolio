"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Digital & Product Lead",
            company: "Sunflower Trip Pvt. Ltd.",
            period: "NOV 2025 — Present",
            achievements: [
                "Recruited multiple candidates as a daily responsibility in direct collaboration with the founder — full-cycle hiring from requirement definition and sourcing through to interviews, selection, and onboarding",
                "Managed and directed a cross-functional team of a graphic designer and a web developer — task assignment, deliverable review, deadline tracking, and performance feedback",
                "Managed @tripsunflower (Instagram) end-to-end — content calendar, influencer outreach and collaboration campaigns, growth strategies, and performance analytics",
                "Built and deployed a WhatsApp Business API lead qualification bot (n8n) with conversational intake logic and human-agent fallback — reduced turnaround from hours to under 2 minutes",
                "Integrated AI-powered itinerary generator using LLM API (Claude/Anthropic) with prompt-engineered JSON output synced directly to CRM lead records",
                "Primary technical contact for 15 daily users on live CRM — investigated and closed 15+ production incidents/month via structured log review and SQL root-cause analysis",
                "Led international group tours for senior traveller groups across Abu Dhabi, Dubai, and the Philippines — complete on-ground logistics, vendor coordination, and real-time issue resolution",
                "Negotiated with B2B vendors including hotels, DMC partners, and transport providers to secure optimal pricing while maintaining service quality",
            ]
        },
        {
            role: "Full Stack Developer",
            company: "Sunflower Trip Pvt. Ltd.",
            period: "APR 2025 — NOV 2025",
            achievements: [
                "Built thesunflowertrip.com — live booking platform with 102 REST API endpoints, 1,000+ MAU, ₹15L+/month in real payment transactions, and a 42-table MySQL schema",
                "Resolved a critical API latency issue: 724ms → 146ms (80% improvement) through systematic log analysis, query restructuring, and index optimisation",
                "Reduced production bug rate 30% (20 → 14/month) via structured pre-release QA checklists and formalised validation handoff procedures",
                "Built 5-tier RBAC system with DB-driven permission model — roles are table rows, configurable at runtime without any redeployment",
                "Configured Railway CI/CD pipeline for automated deployment, enabling same-day hotfix delivery for production incidents",
                "Implemented idempotent Razorpay payment flow with DB-level unique constraints preventing duplicate charges on webhook retry events",
            ]
        },
        {
            role: "Freelance Full Stack Developer & Creative",
            company: "Remote — Australia, UK & India",
            period: "APR 2024 — MAR 2025",
            achievements: [
                "Built myownprint.com.au (Melbourne) — POS/merchandise platform with order lifecycle as a DB-persisted state machine; led a 3-person remote team across an 8-month engagement from MVP to production",
                "Delivered a full-stack EdTech counselling platform solo for a UK education consultancy under a hard client deadline — owned all product, delivery, and deployment decisions independently",
                "Managed the complete social media presence for Souvlakia India (New Town, Kolkata) — multi-platform growth strategy, content creation, and audience engagement from the ground up",
                "Designed the restaurant menu from scratch in Canva and produced all marketing collateral; created advertising posters for myownprint.com.au from client briefs",
                "Produced video content and promotional reels using CapCut and VN; created 3D scenes and environments in Unity3D for creative content projects",
                "Maintained professional async communication with Australian and UK clients across time zones — requirements, change requests, progress updates, and delivery",
            ]
        }
    ];

    return (
        <section className="relative z-10 w-full bg-[#121212] py-24 px-4 md:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-4xl font-bold text-white md:text-5xl"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-8 md:pl-12 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[45px] top-1 h-6 w-6 rounded-full border-4 border-[#121212] bg-indigo-500 md:-left-[61px]" />

                            <div className="flex flex-col gap-2 mb-6 sm:flex-row sm:items-baseline sm:gap-4">
                                <h3 className="text-3xl font-bold text-white">{exp.role}</h3>
                                <span className="text-lg text-indigo-400 font-medium">@ {exp.company}</span>
                            </div>

                            <p className="mb-6 text-sm font-mono text-gray-500">{exp.period}</p>

                            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 max-w-4xl">
                                {exp.achievements.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.2 + (i * 0.05) }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-3 text-gray-400"
                                    >
                                        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
