"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section className="relative z-10 w-full bg-[#121212] py-24 px-4 md:px-12">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="text-sm font-semibold uppercase tracking-wider text-indigo-500">More About Me</span>
                    <h2 className="mt-2 mb-12 text-4xl font-bold text-white md:text-5xl">Behind the Code</h2>

                    <div className="space-y-8 text-xl leading-relaxed text-gray-300 md:text-2xl font-light">
                        <p>
                            I&apos;m <span className="text-white font-medium">Saqib</span> — a Full Stack Developer and AI Engineer with 2+ years of production experience across travel-tech, EdTech, and retail sectors.
                        </p>
                        <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] relative overflow-hidden group">
                            <span className="relative z-10 block">
                                I&apos;ve built platforms handling{" "}
                                <span className="text-white border-b-2 border-indigo-500/50">1,000+ monthly users</span>
                                {" "}and ₹15L+/month in real transactions, deployed WhatsApp automation bots, and integrated LLM APIs that replaced hours of manual work with 2-minute AI outputs.
                            </span>
                            {/* Accent Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-500" />
                            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-colors duration-500" />
                        </div>
                        <hr className="border-white/10 my-8" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <p className="text-lg text-gray-400">Beyond code, I manage social media campaigns and influencer strategies, have handled daily recruitment in collaboration with a startup founder, and have led international group tours across the UAE and Philippines.</p>
                            </div>
                            <div className="text-right md:text-left">
                                <p className="text-lg text-gray-400">I bring technical depth, creative output, and operational awareness — rare in a single person. Based in Kolkata. Open to global remote roles.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
