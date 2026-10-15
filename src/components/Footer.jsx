import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="min-h-[85vh] flex flex-col justify-center items-center px-6 py-20 text-center relative overflow-hidden select-none" style={{ background: '#5C2233', color: 'white' }}>
            {/* Ambient golden glow in background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8C07A]/10 rounded-full blur-[140px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full relative z-10 max-w-2xl mx-auto space-y-6"
            >
                {/* Royal Monogram Crest Seal */}
                <div className="flex justify-center mb-4">
                    <motion.div
                        animate={{ y: [-4, 4, -4], scale: [1, 1.02, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-36 h-36 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-[#E8C07A]/20 rounded-full blur-xl pointer-events-none" />
                        <img
                            src="/SR_Logo.png"
                            alt="Sakshi & Rohit Royal Wedding Crest"
                            className="w-full h-full object-contain filter drop-shadow-[0_6px_20px_rgba(0,0,0,0.45)]"
                        />
                    </motion.div>
                </div>

                {/* Monumental Gold Names */}
                <div>
                    <span
                        className="block font-['Great_Vibes',cursive] text-6xl sm:text-7xl md:text-8xl leading-none text-[#E8C07A]"
                        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4)' }}
                    >
                        Sakshi
                        <span className="block text-3xl sm:text-4xl text-[#C9963E] my-2">
                            &amp;
                        </span>
                        Rohit
                    </span>
                </div>

                {/* Hashtag & Dates */}
                <div className="space-y-1">
                    <div className="font-['Great_Vibes',cursive] text-3xl sm:text-4xl text-[#FFD700]">
                        #SakshiWedsRohit
                    </div>
                    <p className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#E8C07A]/80">
                        20th – 21st November, 2026 • Chittorgarh
                    </p>
                </div>

                {/* Golden Heart Divider */}
                <div className="flex items-center justify-center gap-4 max-w-xs mx-auto opacity-50 my-6">
                    <div className="h-px flex-1 bg-[#E8C07A]" />
                    <Heart className="w-4 h-4 text-[#E8C07A] fill-[#E8C07A] animate-pulse" />
                    <div className="h-px flex-1 bg-[#E8C07A]" />
                </div>

                {/* RSVP Card */}
                <div className="bg-black/25 backdrop-blur-md max-w-md mx-auto p-6 rounded-2xl border border-[#E8C07A]/25 space-y-3">
                    <p className="font-['Tenor_Sans',sans-serif] text-xs uppercase tracking-[0.25em] text-[#E8C07A] font-semibold">
                        Warm Regards &amp; RSVP
                    </p>
                    <p className="font-['Cormorant_Garamond',serif] italic text-stone-200 text-sm">
                        "Your gracious presence will make our joyous celebration complete."
                    </p>
                    <div className="font-['Tenor_Sans',sans-serif] text-sm tracking-widest uppercase text-white font-bold pt-1">
                        Ranka &amp; Surana Family
                    </div>
                    <a
                        href="https://maps.app.goo.gl/89phtRto3un73QWP6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-['Cormorant_Garamond',serif] italic text-xs text-[#E8C07A]/90 hover:text-white transition-colors flex items-center justify-center gap-1 group cursor-pointer"
                    >
                        <MapPin className="w-3.5 h-3.5 text-[#E8C07A] group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline underline-offset-4">Anant Resort, Behind Jindal Marbles, Chittorgarh</span>
                    </a>
                </div>
            </motion.div>

            {/* Bottom Credits */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-14 relative z-10 font-['Tenor_Sans',sans-serif] text-xs tracking-[0.2em] text-white/60 uppercase"
            >
                Made with <span className="text-rose-400">♥</span> for Sakshi &amp; Rohit
            </motion.div>
        </footer>
    );
};

export default Footer;
