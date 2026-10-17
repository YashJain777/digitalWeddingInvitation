
import { motion } from 'framer-motion';
import NavigationLinks from '../components/NavigationLinks';

const HaldiMehendi = () => (
    <div className="pt-10 bg-sangeet-theme min-h-screen">
        {/* Page Hero */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0"
            >
                <img src="/sangeet.webp" className="w-full h-full object-cover brightness-[0.4]" alt="Haldi & Mehendi" />
            </motion.div>
            <div className="relative z-10 text-center text-white space-y-4 px-4">
                <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="tracking-[0.6em] uppercase text-sm font-bold text-wedding-secondary"
                >
                    Colors of Tradition
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-fancy text-7xl sm:text-9xl text-gold-gradient py-4"
                >
                    Haldi & Mehendi
                </motion.h1>
            </div>
        </section>

        {/* Vibrance Section */}
        <section className="py-24 bg-gradient-to-b from-wedding-bg to-wedding-accent/20">
            <div className="container mx-auto px-6 max-w-4xl text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="font-heading text-4xl text-wedding-dark tracking-widest uppercase">A Splash of Yellow & Green</h2>
                    <p className="text-xl text-wedding-text leading-relaxed font-sans italic">
                        &ldquo;Celebrate the vibrant hues of togetherness. Bind us in the golden glow of Haldi and the intricate patterns of Mehendi as we prepare for our big day.&rdquo;
                    </p>
                </motion.div>

                {/* Decorative elements */}
                <div className="flex justify-center items-center gap-8 text-wedding-primary/40">
                    <span className="text-4xl animate-bounce">❀</span>
                    <div className="w-40 h-[1px] bg-wedding-primary/20"></div>
                    <span className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>❀</span>
                    <div className="w-40 h-[1px] bg-wedding-primary/20"></div>
                    <span className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>❀</span>
                </div>
            </div>
        </section>

        {/* Schedule & Timeline */}
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-wedding-secondary/5 blur-[100px] rounded-full"></div>
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="space-y-4">
                                <span className="text-wedding-primary font-bold tracking-[0.3em] uppercase text-sm">Monday</span>
                                <h3 className="font-fancy text-6xl text-wedding-dark">9th March, 2026</h3>
                                <div className="h-1 w-24 bg-wedding-secondary rounded-full"></div>
                            </div>

                            <div className="space-y-10">
                                {/* Event 1 */}
                                <div className="flex gap-8 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 h-14 rounded-full border-2 border-wedding-primary flex items-center justify-center group-hover:bg-wedding-primary transition-colors duration-500">
                                            <span className="text-wedding-primary group-hover:text-white transition-colors">✨</span>
                                        </div>
                                        <div className="w-[2px] h-full bg-wedding-accent/50 mt-4"></div>
                                    </div>
                                    <div className="pb-10 pt-2 space-y-2">
                                        <p className="font-heading text-3xl text-wedding-dark group-hover:text-wedding-primary transition-colors">Haldi Ceremony</p>
                                        <p className="text-wedding-secondary font-bold text-xl tracking-tighter">10:00 AM ONWARDS</p>
                                        <p className="text-gray-500 max-w-md">Bless the couple with turmeric and love in this joyous morning celebration.</p>
                                    </div>
                                </div>

                                {/* Event 2 */}
                                <div className="flex gap-8 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-14 h-14 rounded-full border-2 border-wedding-secondary flex items-center justify-center group-hover:bg-wedding-secondary transition-colors duration-500">
                                            <span className="text-wedding-secondary group-hover:text-white transition-colors">🌿</span>
                                        </div>
                                    </div>
                                    <div className="pt-2 space-y-2">
                                        <p className="font-heading text-3xl text-wedding-dark group-hover:text-wedding-secondary transition-colors">Mehendi Ceremony</p>
                                        <p className="text-wedding-primary font-bold text-xl tracking-tighter">2:30 PM ONWARDS</p>
                                        <p className="text-gray-500 max-w-md">The beauty of henna and the rhythm of music as we celebrate into the evening.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-wedding-accent/30 rounded-[60px] blur-2xl"></div>
                            <div className="card-glass p-4 rounded-[50px] relative">
                                <img src="/haldi.webp" className="w-full h-auto rounded-[40px] shadow-2xl" alt="Ceremony image" />
                            </div>
                            {/* Floating decorative icon */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white rounded-full p-6 shadow-xl animate-spin-slow flex items-center justify-center">
                                <span className="text-5xl">❁</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* Detailed Venue */}
        <section className="py-24 bg-gradient-to-b from-white to-wedding-bg">
            <div className="container mx-auto px-6 text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto card-glass p-12 rounded-[50px] border border-wedding-primary/20 hover:shadow-gold-soft transition-shadow duration-500"
                >
                    <div className="space-y-8">
                        <div className="inline-block p-4 bg-wedding-accent/20 rounded-2xl mb-4">
                            <span className="text-4xl">🏯</span>
                        </div>
                        <h2 className="font-heading text-4xl text-wedding-dark">The Grand Venue</h2>
                        <div className="h-[2px] w-16 bg-wedding-primary mx-auto"></div>
                        <div className="space-y-4">
                            <p className="text-3xl font-fancy text-wedding-primary">Anant Resort</p>
                            <p className="text-xl text-wedding-text max-w-xs mx-auto leading-relaxed">
                                Behind Jindal Marbles, Chittorgarh
                            </p>
                        </div>
                        <div className="pt-8">
                            <a
                                href="https://maps.app.goo.gl/89phtRto3un73QWP6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block gold-button-premium bg-wedding-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Navigation Links */}
        <NavigationLinks />

        {/* Hashtag Finale */}
        <section className="py-20 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="space-y-4"
            >
                <p className="font-script text-5xl text-wedding-secondary mb-2">Let the festivities begin!</p>
                <p className="font-heading text-3xl text-gold-gradient tracking-[0.2em]">#PooRa</p>
            </motion.div>
        </section>
    </div>
);

export default HaldiMehendi;
