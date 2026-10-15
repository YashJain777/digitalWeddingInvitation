import React from 'react';
import { motion } from 'framer-motion';

const JourneySection = () => (
    <section className="py-12 md:py-24 bg-gradient-to-b from-wedding-accent/30 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-wedding-secondary/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-wedding-primary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative group"
                >
                    <div className="absolute -inset-6 border-[12px] border-wedding-secondary/10 -z-10 rounded-3xl group-hover:scale-105 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-wedding-primary/5 rounded-3xl transform rotate-3 -z-20 group-hover:rotate-6 transition-transform duration-700"></div>
                    <img alt="Couple" className="w-full h-auto shadow-2xl rounded-3xl" src="./us.webp" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center lg:text-left space-y-6 md:space-y-8"
                >
                    <div className="space-y-4">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="font-heading text-wedding-primary tracking-[0.4em] uppercase text-sm font-bold"
                        >
                            Our Love Story
                        </motion.h3>
                        <h2 className="font-fancy text-5xl md:text-7xl text-wedding-dark">The Journey</h2>
                    </div>
                    <p className="font-sans text-wedding-text leading-relaxed text-base md:text-xl">
                        From our first meeting to this beautiful day, our journey has been nothing short of a fairytale. We are thrilled to celebrate our love with our cherished friends and family in the divine cities of Udaipur & Beawar.
                    </p>
                    <div className="pt-4 md:pt-6">
                        <span className="font-script text-4xl md:text-5xl text-gold-gradient">Rahul & Pooja</span>
                        <div className="mt-2 md:mt-4 flex justify-center lg:justify-start gap-4 text-wedding-secondary/40">
                            <span>✧</span><span>✧</span><span>✧</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
);

export default JourneySection;
