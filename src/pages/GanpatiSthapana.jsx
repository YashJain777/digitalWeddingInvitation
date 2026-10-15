import React from 'react';
import { motion } from 'framer-motion';
import NavigationLinks from '../components/NavigationLinks';

const GanpatiSthapana = () => (
    <div className="pt-10 bg-reception-theme min-h-screen">
        {/* Page Hero */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0"
            >
                <img src="/pre-wedding.webp" className="w-full h-full object-cover brightness-50" alt="Ganpati Sthapana" />
            </motion.div>
            <div className="relative z-10 text-center text-white space-y-4 px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="tracking-[0.5em] uppercase text-sm font-bold text-wedding-secondary"
                >
                    Beginnings with Blessings
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-fancy text-7xl sm:text-9xl text-gold-gradient py-4"
                >
                    Ganpati Sthapana
                </motion.h1>
            </div>
        </section>

        {/* Rituals Introduction */}
        <section className="py-24 bg-wedding-bg">
            <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="font-heading text-4xl text-wedding-dark">The Auspicious Start</h2>
                    <p className="text-xl text-wedding-text leading-relaxed font-sans">
                        "As we embark on this sacred journey of love, we seek the divine blessings of Lord Ganesha to remove all obstacles and fill our lives with happiness and prosperity."
                    </p>
                    <div className="flex justify-center gap-4 text-wedding-primary">
                        <span>✧</span><span>✧</span><span>✧</span>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Elegant Timeline Section */}
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <h3 className="font-fancy text-5xl text-wedding-primary">Saturday, 7th March</h3>
                                <div className="h-[2px] w-20 bg-wedding-secondary"></div>
                            </div>

                            {/* Event 1 */}
                            <div className="relative pl-12 border-l-2 border-wedding-accent pb-12">
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-wedding-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                                <div className="space-y-2">
                                    <p className="font-heading text-2xl text-wedding-dark">Ganpati Sthapana</p>
                                    <p className="text-wedding-secondary font-bold text-lg tracking-widest uppercase">3:00 PM</p>
                                    <p className="text-gray-600 font-sans">The divine installation of Lord Ganesha mark the formal beginning of our wedding ceremonies.</p>
                                </div>
                            </div>

                            {/* Event 2 */}
                            <div className="relative pl-12 border-l-2 border-wedding-accent">
                                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-wedding-primary shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
                                <div className="space-y-2">
                                    <p className="font-heading text-2xl text-wedding-dark">Byah Hath</p>
                                    <p className="text-wedding-secondary font-bold text-lg tracking-widest uppercase">4:00 PM</p>
                                    <p className="text-gray-600 font-sans">A traditional ritual signifying the bond and the sacred journey ahead.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="card-glass p-8 rounded-[40px] shadow-2xl overflow-hidden group"
                        >
                            <img src="/ganpati-sthapana.png" className="w-full h-auto rounded-[30px] transition-transform duration-700 group-hover:scale-110" alt="Rituals" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>


        {/* The Couple Section */}
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-fancy text-6xl text-wedding-dark"
                    >
                        The Blessed Couple
                    </motion.h2>
                    <div className="h-1 w-20 bg-wedding-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-wedding-primary/20 rounded-[40px] rotate-3 scale-105 group-hover:rotate-6 transition-transform duration-500"></div>
                        <img
                            src="/other images/img1.jpg"
                            className="relative w-full h-[500px] object-cover rounded-[40px] shadow-2xl z-10"
                            alt="The Groom"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-wedding-secondary/20 rounded-[40px] -rotate-3 scale-105 group-hover:-rotate-6 transition-transform duration-500"></div>
                        <img
                            src="/other images/img2.jpg"
                            className="relative w-full h-[500px] object-cover rounded-[40px] shadow-2xl z-10"
                            alt="The Bride"
                        />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Venue Section */}
        <section className="py-24 bg-wedding-bg">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-glass p-6 rounded-[50px] max-w-4xl mx-auto border-2 border-wedding-primary/10"
                >
                    <div className="space-y-6">
                        <div className="bg-wedding-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                            <span className="text-3xl text-wedding-primary">📍</span>
                        </div>
                        <h2 className="font-heading text-4xl text-wedding-dark uppercase tracking-widest">Venue Details</h2>
                        <div className="space-y-2">
                            <p className="text-2xl font-fancy text-wedding-primary">Anant Resort</p>
                            <p className="text-xl text-wedding-text">Behind Jindal Marbles</p>
                            <p className="text-lg text-wedding-text">Chittorgarh, Rajasthan</p>
                        </div>
                        <div className="pt-8">
                            <a
                                href="https://maps.app.goo.gl/89phtRto3un73QWP6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-wedding-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-[0_10px_20px_rgba(212,175,55,0.3)] transition-all"
                            >
                                Get Directions
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Navigation Links */}
        <NavigationLinks />

        {/* Tagline Footer */}
        <section className="py-20 bg-white text-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-4"
            >
                <p className="font-script text-4xl text-wedding-secondary">Celebrate the joy of tradition.</p>
                <p className="font-heading text-2xl text-gold-gradient">#PooRa</p>
            </motion.div>
        </section>
    </div>
);

export default GanpatiSthapana;
