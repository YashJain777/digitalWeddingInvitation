
import { motion } from 'framer-motion';
import NavigationLinks from '../components/NavigationLinks';

const TheWedding = () => (
    <div className="pt-10 bg-wedding-theme min-h-screen">
        {/* Page Hero */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 z-0"
            >
                <img src="/wedding.webp" className="w-full h-full object-cover brightness-[0.4]" alt="The Wedding" />
            </motion.div>
            <div className="relative z-10 text-center text-white space-y-4 px-4">
                <motion.p
                    initial={{ opacity: 0, tracking: '0.1em' }}
                    animate={{ opacity: 1, tracking: '0.6em' }}
                    className="uppercase text-sm font-bold text-wedding-secondary"
                >
                    A Union of Two Souls
                </motion.p>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-fancy text-7xl sm:text-9xl text-gold-gradient py-4"
                >
                    The Wedding
                </motion.h1>
            </div>
        </section>

        {/* Sacred Vows Section */}
        <section className="py-24 bg-gradient-to-b from-wedding-bg to-white">
            <div className="container mx-auto px-6 max-w-4xl text-center space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="font-heading text-4xl text-wedding-dark tracking-widest uppercase">The Eternal Bond</h2>
                    <div className="h-[2px] w-24 bg-wedding-primary mx-auto mb-8"></div>
                    <p className="text-xl text-wedding-text leading-relaxed font-sans italic">
                        &ldquo;Two hearts beat as one, two lives become a single journey. We invite you to witness our sacred vows as we step into our forever together under the blessings of our elders.&rdquo;
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Wedding Day Timeline */}
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1 relative"
                        >
                            <div className="absolute -inset-4 border-2 border-wedding-secondary/20 rounded-[60px] animate-pulse"></div>
                            <div className="card-glass p-6 rounded-[50px] shadow-2xl">
                                <img src="/wedding-ritual.webp" className="w-full h-auto rounded-[40px]" alt="Wedding Ritual" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2 space-y-12"
                        >
                            <div className="space-y-4">
                                <span className="text-wedding-primary font-bold tracking-[0.4em] uppercase text-sm">Tuesday</span>
                                <h3 className="font-fancy text-6xl text-wedding-dark">10th March, 2026</h3>
                                <div className="h-1 w-24 bg-wedding-secondary rounded-full"></div>
                            </div>

                            <div className="space-y-10 relative">
                                {/* Timeline vertical line */}
                                <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-wedding-primary via-wedding-secondary to-transparent"></div>

                                {/* Event 1: Maayra */}
                                <div className="flex gap-8 group">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-wedding-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="text-wedding-primary">🍛</span>
                                    </div>
                                    <div className="space-y-2 pt-1 flex-1">
                                        <p className="font-heading text-3xl text-wedding-dark">Maayra</p>
                                        <p className="text-wedding-secondary font-bold text-xl">12:30 PM</p>
                                        <p className="text-gray-500">A heartwarming ceremony honoring our maternal roots and family legacy.</p>
                                    </div>
                                </div>

                                {/* Event 2: Engagement & Tilak */}
                                <div className="flex gap-8 group">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-wedding-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="text-wedding-secondary">💍</span>
                                    </div>
                                    <div className="space-y-2 pt-1 flex-1">
                                        <p className="font-heading text-3xl text-wedding-dark">Engagement & Tilak</p>
                                        <p className="text-wedding-primary font-bold text-xl">2:30 PM</p>
                                        <p className="text-gray-500">The formal commitment of our union surrounded by the love of our families.</p>
                                    </div>
                                </div>

                                {/* Event 3: Baaraat Nikasi */}
                                <div className="flex gap-8 group">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-wedding-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="text-wedding-dark">🎺</span>
                                    </div>
                                    <div className="space-y-2 pt-1 flex-1">
                                        <p className="font-heading text-3xl text-wedding-dark">Baaraat Nikasi</p>
                                        <p className="text-wedding-secondary font-bold text-xl">Followed by Dinner — 7:00 PM</p>
                                        <p className="text-gray-500">The grand procession, dance, and music as the groom makes his way to the venue.</p>
                                    </div>
                                </div>

                                {/* Event 4: Phere */}
                                <div className="flex gap-8 group">
                                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-red-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <span className="text-red-500">🔥</span>
                                    </div>
                                    <div className="space-y-2 pt-1 flex-1">
                                        <p className="font-heading text-3xl text-wedding-dark">Mangal Phere</p>
                                        <p className="text-wedding-primary font-bold text-xl">Madhya Ratri (Midnight)</p>
                                        <p className="text-gray-500">The sacred fire rituals and seven vows of marriage conducted at midnight.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* Sacred Rituals / Phere Section */}
        <section className="py-24 bg-gradient-to-b from-white to-wedding-bg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="card-glass p-8 md:p-16 rounded-[60px] max-w-5xl mx-auto border border-wedding-secondary/20 shadow-2xl"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <p className="font-heading text-wedding-primary tracking-[0.4em] uppercase text-xs font-bold">Midnight Ritual</p>
                                <h2 className="font-fancy text-6xl sm:text-8xl text-wedding-dark">Mangal Phere</h2>
                            </div>
                            <div className="h-[2px] w-24 bg-wedding-primary mx-auto lg:mx-0"></div>
                            <p className="text-xl text-wedding-text leading-relaxed font-sans font-light">
                                &ldquo;The sacred fire will bear witness as we take the seven steps towards a lifetime of friendship and love. The midnight starlight will bless our new beginning.&rdquo;
                            </p>
                            <div className="inline-flex flex-col gap-2 px-8 py-4 bg-wedding-accent/20 rounded-3xl border border-wedding-secondary/10">
                                <p className="font-heading text-xl text-wedding-dark tracking-widest">TUESDAY • 10 MARCH</p>
                                <p className="text-wedding-primary font-bold text-lg">MADHYA RATRI (MIDNIGHT)</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-10 bg-wedding-secondary/10 rounded-full blur-3xl animate-pulse"></div>
                            <img
                                src="/wedding-phere.png"
                                className="relative w-full h-auto rounded-[50px] shadow-[0_20px_50px_rgba(212,175,55,0.3)] z-10 transition-transform duration-700 group-hover:scale-105"
                                alt="Phere Ceremony"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Enhanced Venue Section */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-12"
                >
                    <div className="space-y-4">
                        <h2 className="font-fancy text-5xl text-wedding-dark">The Grand Venue</h2>
                        <div className="w-20 h-1 bg-wedding-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="card-glass p-12 rounded-[50px] border-2 border-wedding-accent/30 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-wedding-primary to-transparent"></div>
                        <div className="space-y-6 relative z-10">
                            <span className="text-5xl">🏰</span>
                            <h3 className="font-heading text-3xl sm:text-4xl text-wedding-primary uppercase tracking-[0.2em] leading-tight">
                                Anant Resort
                            </h3>
                            <p className="text-lg sm:text-xl text-wedding-text max-w-sm mx-auto font-sans">
                                Behind Jindal Marbles, Chittorgarh
                            </p>
                            <div className="pt-8">
                                <a
                                    href="https://maps.app.goo.gl/89phtRto3un73QWP6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-wedding-primary text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:translate-y-[-2px] hover:shadow-[0_15px_30px_rgba(212,175,55,0.4)] transition-all duration-300"
                                >
                                    Get Location on Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Final Invitation Note */}
        <section className="py-20 bg-wedding-bg/30 text-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-6"
                >
                    <p className="font-script text-3xl text-wedding-secondary">&ldquo;Your presence is the greatest gift we could receive. Join us as we celebrate the magic of love and tradition.&rdquo;</p>
                    <div className="flex justify-center gap-6 text-wedding-primary">
                        <span className="animate-pulse">✧</span>
                        <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>✧</span>
                        <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>✧</span>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Navigation Links */}
        <NavigationLinks />

        <section className="py-24 text-center bg-white">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="space-y-4"
            >
                <p className="font-script text-5xl text-wedding-secondary italic">Together Forever</p>
                <p className="font-heading text-4xl text-gold-gradient tracking-widest uppercase py-4">#PooRa</p>
            </motion.div>
        </section>
    </div>
);

export default TheWedding;
