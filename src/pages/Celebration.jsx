
import { motion } from 'framer-motion';
import NavigationLinks from '../components/NavigationLinks';

const Celebration = () => (
    <div className="pt-10">
        {/* Page Hero */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5 }}
                className="absolute inset-0 z-0"
            >
                <img src="/celebration-main.png" className="w-full h-full object-cover brightness-[0.5]" alt="Sangeet & Reception" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-wedding-bg"></div>
            </motion.div>

            <div className="relative z-10 text-center text-white space-y-6 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <span className="inline-block px-6 py-2 border border-wedding-secondary/50 rounded-full text-wedding-secondary text-sm font-bold tracking-[0.4em] uppercase backdrop-blur-sm">
                        The Grand Finale
                    </span>
                    <h1 className="font-fancy text-7xl sm:text-9xl text-gold-gradient py-4 drop-shadow-2xl">
                        Sangeet & Reception
                    </h1>
                    <p className="font-heading text-2xl tracking-[0.2em] text-white/90">FRIDAY • 13 MARCH • 2026</p>
                </motion.div>
            </div>

            {/* Visual disco-ball like sparkle effect */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 bg-wedding-bg relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-wedding-primary/30 to-transparent"></div>
            <div className="container mx-auto px-6 max-w-4xl text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="flex justify-center gap-4 text-wedding-primary">
                        <span className="text-2xl animate-spin-slow">✨</span>
                    </div>
                    <h2 className="font-heading text-4xl text-wedding-dark tracking-[0.2em] uppercase">A Night of Magic</h2>
                    <div className="h-[2px] w-24 bg-wedding-primary mx-auto"></div>
                    <p className="text-xl text-wedding-text leading-relaxed font-sans italic">
                        &ldquo;Under the shimmer of a thousand stars, join us as we dance, celebrate, and create memories that will last a lifetime. A perfect evening of music, love, and laughter awaits.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Detailed Schedule Section */}
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 relative"
                        >
                            <div className="absolute -inset-10 bg-wedding-primary/5 rounded-full blur-[100px]"></div>
                            <div className="card-glass p-10 rounded-[60px] shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8">
                                    <span className="text-6xl text-wedding-primary/20">🕺💃</span>
                                </div>
                                <div className="space-y-12 relative z-10">
                                    <h3 className="font-fancy text-6xl text-wedding-dark mb-8">The Event Flow</h3>

                                    <div className="space-y-10 border-l-2 border-wedding-accent pl-8">
                                        {/* Lunch */}
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-white border-4 border-wedding-primary"></div>
                                            <div className="space-y-2">
                                                <p className="font-heading text-3xl text-wedding-dark">Welcome Lunch</p>
                                                <p className="text-wedding-secondary font-bold text-xl">12:30 PM</p>
                                                <p className="text-gray-500">A warm Udaipur welcome with a feast to start the festivities.</p>
                                            </div>
                                        </div>

                                        {/* High Tea */}
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-white border-4 border-wedding-secondary"></div>
                                            <div className="space-y-2">
                                                <p className="font-heading text-3xl text-wedding-dark">High Tea</p>
                                                <p className="text-wedding-primary font-bold text-xl">4:00 PM</p>
                                                <p className="text-gray-500">Evening refreshments to fuel the energy for the big night.</p>
                                            </div>
                                        </div>

                                        {/* Sangeet & Reception */}
                                        <div className="relative">
                                            <div className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-wedding-primary border-4 border-white shadow-lg"></div>
                                            <div className="space-y-2">
                                                <p className="font-heading text-4xl text-wedding-dark">Sangeet & Reception</p>
                                                <p className="text-wedding-secondary font-bold text-2xl tracking-[0.1em]">7:00 PM ONWARDS</p>
                                                <p className="text-gray-500">The grand celebration featuring performances, dinner, and dancing under the stars.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2 space-y-8"
                        >
                            <span className="text-wedding-primary font-bold tracking-[0.4em] uppercase text-sm">March 13th</span>
                            <h2 className="font-fancy text-7xl text-wedding-dark">Spectrum Resorts</h2>
                            <div className="h-1 w-24 bg-wedding-secondary rounded-full"></div>
                            <p className="text-xl text-wedding-text leading-relaxed">
                                Join us at the breathtaking Spectrum Resorts, where the natural beauty of the Aravalli hills meets the luxury of Udaipur. A perfect setting for our final wedding festivities.
                            </p>
                            <div className="pt-6">
                                <img src="/celebration-main.png" className="w-full h-auto rounded-[40px] shadow-xl border-8 border-white" alt="Celebration glimpse" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* The Couple Spotlight Section */}
        <section className="py-24 bg-wedding-bg overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-fancy text-6xl text-wedding-dark"
                    >
                        The Stars of the Night
                    </motion.h2>
                    <div className="h-1 w-20 bg-wedding-secondary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, rotate: -5 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="card-glass p-4 rounded-[40px] shadow-2xl relative"
                    >
                        <img
                            src="/other images/img1.jpg"
                            className="w-full h-[600px] object-cover rounded-[30px]"
                            alt="Groom Spotlight"
                        />
                        <div className="absolute bottom-10 left-10 text-white z-20">
                            <p className="font-fancy text-4xl text-gold-gradient">Ready to Dance</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: 5 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="card-glass p-4 rounded-[40px] shadow-2xl relative translate-y-12"
                    >
                        <img
                            src="/other images/img2.jpg"
                            className="w-full h-[600px] object-cover rounded-[30px]"
                            alt="Bride Spotlight"
                        />
                        <div className="absolute bottom-10 left-10 text-white z-20">
                            <p className="font-fancy text-4xl text-gold-gradient">The Evening Glow</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Venue Location Section */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center space-y-12"
                >
                    <div className="space-y-4">
                        <span className="text-4xl text-wedding-primary">🏛️</span>
                        <h2 className="font-heading text-4xl text-wedding-dark uppercase tracking-widest leading-tight">Venue Details</h2>
                        <div className="h-1 w-20 bg-wedding-secondary mx-auto"></div>
                    </div>

                    <div className="card-glass p-12 rounded-[60px] border border-wedding-secondary/20 hover:shadow-gold-soft transition-all duration-700 group">
                        <div className="space-y-6">
                            <h3 className="font-fancy text-4xl sm:text-5xl text-wedding-primary group-hover:scale-105 transition-transform duration-500">Anant Resort</h3>
                            <p className="text-lg sm:text-xl text-wedding-text max-w-md mx-auto">
                                Behind Jindal Marbles, Chittorgarh, Rajasthan
                            </p>
                            <div className="pt-8">
                                <a
                                    href="https://maps.app.goo.gl/89phtRto3un73QWP6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-wedding-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:translate-y-[-5px] hover:shadow-[0_20px_40px_rgba(212,175,55,0.4)] transition-all duration-500"
                                >
                                    Navigate to Celebration
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Navigation Links */}
        <NavigationLinks />

        {/* Hashtag Finale */}
        <section className="py-24 text-center bg-wedding-bg">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                <p className="font-script text-6xl text-wedding-secondary italic">Together Forever</p>
                <div className="flex justify-center items-center gap-6 py-6">
                    <span className="h-[1px] w-12 bg-wedding-primary/30"></span>
                    <p className="font-heading text-4xl text-gold-gradient tracking-[0.3em] uppercase">#PooRa</p>
                    <span className="h-[1px] w-12 bg-wedding-primary/30"></span>
                </div>
            </motion.div>
        </section>
    </div>
);

export default Celebration;
