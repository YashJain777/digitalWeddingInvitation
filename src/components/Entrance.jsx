import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const Entrance = ({ onOpen }) => {
    const [sparkles, setSparkles] = useState([]);
    const [isOpening, setIsOpening] = useState(false);

    useEffect(() => {
        const newSparkles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 94 + 3}%`,
            top: `${Math.random() * 94 + 3}%`,
            size: `${Math.random() * 4 + 2}px`,
            delay: `${Math.random() * 3}s`,
            duration: `${Math.random() * 2 + 2}s`
        }));
        setSparkles(newSparkles);
    }, []);

    const handleEnter = () => {
        setIsOpening(true);
        setTimeout(() => {
            onOpen();
        }, 700);
    };

    return (
        <motion.section
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white px-4 overflow-hidden select-none"
            style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FDF7F2 100%)' }}
        >
            {/* Ambient Sparkle Dust */}
            <div className="absolute inset-0 pointer-events-none">
                {sparkles.map((sparkle) => (
                    <div
                        key={sparkle.id}
                        className="sparkle bg-[#D4AF37]"
                        style={{
                            left: sparkle.left,
                            top: sparkle.top,
                            width: sparkle.size,
                            height: sparkle.size,
                            animationDelay: sparkle.delay,
                            animationDuration: sparkle.duration
                        }}
                    />
                ))}
            </div>

            {/* Central Luxury Envelope Frame Card */}
            <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-[92vw] max-w-md h-[92vh] max-h-[780px] bg-white/90 backdrop-blur-xl px-5 py-8 text-center relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(184,89,64,0.18)] flex flex-col justify-between items-center"
            >
                {/* Golden Inset Border with Ornate Corners */}
                <div className="absolute inset-2.5 rounded-2xl border border-[#D4AF37]/45 pointer-events-none">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />
                </div>

                {/* Top Subtle Accent */}
                <div className="pt-2">
                    <span className="font-['Tenor_Sans',sans-serif] text-[10px] tracking-[0.35em] uppercase text-[#C9963E] font-medium">
                        Ranka &amp; Surana Family
                    </span>
                </div>

                {/* Main Royal Wedding Logo Crest with Floating Animation */}
                <div className="flex justify-center items-center w-full my-auto cursor-pointer" onClick={handleEnter}>
                    <motion.div
                        animate={{
                            y: [-6, 6, -6],
                            scale: [1, 1.025, 1]
                        }}
                        transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-[78vw] max-w-[340px] aspect-square flex items-center justify-center group"
                    >
                        {/* Golden radiance halo behind logo */}
                        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#D4AF37]/25 via-[#FFE4B5]/30 to-[#FFB6C1]/20 blur-2xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />

                        {/* Royal Crest Image */}
                        <div className="relative w-full h-full flex items-center justify-center p-2">
                            <img
                                src="/SR_Logo.png"
                                alt="Sakshi & Rohit Royal Wedding Crest"
                                className="w-full h-full object-contain filter drop-shadow-[0_12px_28px_rgba(184,89,64,0.22)] group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Typography & Call to Action */}
                <div className="flex flex-col items-center gap-3 w-full pb-2">
                    {/* Hashtag */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="font-['Great_Vibes',cursive] text-3xl sm:text-4xl text-[#D4AF37] text-center drop-shadow-sm shimmer-gold"
                    >
                        #SakshiWedsRohit
                    </motion.div>

                    {/* Welcoming Verse */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="font-['Cormorant_Garamond',serif] italic text-sm sm:text-base text-[#5a3e2b] leading-relaxed text-center px-4 max-w-sm"
                    >
                        We are thrilled to invite you to the joyous celebration of our union.<br />
                        Join us to experience unforgettable memories, traditions, and laughter.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="font-['Tenor_Sans',sans-serif] text-[11px] uppercase text-[#A8583E] tracking-widest font-semibold"
                    >
                        20th – 21st November, 2026 • Chittorgarh
                    </motion.div>

                    {/* Interactive Button */}
                    <motion.button
                        onClick={handleEnter}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="mt-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#C9963E] via-[#D4AF37] to-[#B85940] text-white font-['Tenor_Sans',sans-serif] text-xs uppercase tracking-[0.25em] font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-spin" style={{ animationDuration: '4s' }} />
                        <span>Open Invitation</span>
                        <Heart className="w-3.5 h-3.5 fill-white" />
                    </motion.button>

                    <p className="font-['Cormorant_Garamond',serif] italic text-xs text-[#C2185B] text-center tracking-wider mt-0.5 animate-pulse">
                        Click logo or button to reveal magic ✨
                    </p>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Entrance;
