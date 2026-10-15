import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Calendar } from 'lucide-react';

const HomeHero = () => {
    const scrollToNext = () => {
        const nextSec = document.getElementById('save-the-date');
        if (nextSec) {
            nextSec.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden px-4 py-12 select-none"
            style={{ background: '#FDF0E8' }}
        >
            {/* Ambient Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover object-top opacity-30 z-0 pointer-events-none"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/Background.mp4" type="video/mp4" />
            </video>

            {/* Top & Bottom Floral Garlands Framing */}
            <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 pointer-events-none z-[1] opacity-75 bg-gradient-to-b from-[#f5d9d2]/40 via-transparent to-transparent flex justify-center overflow-hidden">
                <svg className="w-full h-full max-w-5xl text-[#d48b94]/25" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0 Q300,90 600,40 Q900,10 1200,60 L1200,0 L0,0 Z" fill="currentColor" />
                    <circle cx="300" cy="50" r="18" fill="rgba(214, 104, 116, 0.2)" />
                    <circle cx="600" cy="35" r="24" fill="rgba(230, 152, 155, 0.25)" />
                    <circle cx="900" cy="45" r="20" fill="rgba(201, 150, 62, 0.2)" />
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none z-[1] opacity-50 bg-gradient-to-t from-[#f5d9d2]/40 to-transparent flex justify-center overflow-hidden">
                <svg className="w-full h-full max-w-5xl text-[#d48b94]/20" viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <path d="M0,80 Q300,20 600,50 Q900,70 1200,30 L1200,80 L0,80 Z" fill="currentColor" />
                </svg>
            </div>

            {/* Golden Decorative Corner Filigree Borders */}
            <div className="absolute inset-4 sm:inset-6 pointer-events-none z-[2]">
                <div className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16 opacity-60 border-t border-l border-[#C9963E]" />
                <div className="absolute top-0 right-0 w-12 sm:w-16 h-12 sm:h-16 opacity-60 border-t border-r border-[#C9963E]" />
                <div className="absolute bottom-0 left-0 w-12 sm:w-16 h-12 sm:h-16 opacity-60 border-b border-l border-[#C9963E]" />
                <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16 opacity-60 border-b border-r border-[#C9963E]" />
            </div>

            {/* Central Frosted Glass Luxury Invitation Card */}
            <motion.div
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                className="relative z-[3] w-full max-w-[560px] rounded-[2rem] text-center flex flex-col items-center bg-white/85 backdrop-blur-2xl border border-[#C9963E]/25 p-7 sm:p-11 shadow-[0_20px_60px_-10px_rgba(92,34,51,0.14)]"
            >
                {/* Inner Card Corner Accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C9963E]/35 rounded-tl" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C9963E]/35 rounded-tr" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-[#C9963E]/35 rounded-bl" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-[#C9963E]/35 rounded-br" />

                {/* Lord Ganesha Icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="mb-2"
                >
                    <img
                        src="/ganesha.png"
                        alt="Shri Ganesh"
                        className="h-14 sm:h-16 w-auto object-contain mx-auto filter drop-shadow-sm"
                    />
                </motion.div>

                {/* Sacred Sanskrit Shloka */}
                <p className="font-['Tenor_Sans',sans-serif] text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#B85940] leading-relaxed mb-4 px-2 font-medium">
                    वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ<br />
                    निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा
                </p>

                {/* Invitation Line */}
                <p className="font-['Cormorant_Garamond',serif] italic text-base sm:text-lg text-[#6B4535] leading-relaxed mb-5 px-4">
                    With the blessings of our families,<br />
                    We warmly invite you to celebrate the wedding of
                </p>

                {/* Bride Info (Sakshi - Silky) */}
                <div className="w-full mb-1">
                    <span className="shimmer-gold block font-['Great_Vibes',cursive] text-6xl sm:text-7xl md:text-8xl leading-tight py-1 drop-shadow-sm">
                        Sakshi
                    </span>
                    <span className="font-['Cormorant_Garamond',serif] italic text-sm text-[#A8583E] block -mt-1 mb-1">
                        (Silky)
                    </span>
                    <p className="font-['Cormorant_Garamond',serif] text-sm sm:text-base font-medium text-[#2E1810]">
                        Daughter of <strong>Mr. Ashok Kumar Ranka &amp; Mrs. Chanchal Ranka</strong>
                    </p>
                    <p className="font-['Cormorant_Garamond',serif] text-xs sm:text-sm italic text-[#5A3E2B] mt-0.5">
                        (Granddaughter of Shri Shankar Lal ji Ranka &amp; Late Smt. Sajjan Devi Ranka)
                    </p>
                </div>

                {/* Ornate Divider with & */}
                <div className="flex items-center justify-center gap-4 my-3 w-full">
                    <div className="h-px w-14 bg-gradient-to-r from-transparent via-[#EEDDD3] to-[#C9963E]/40" />
                    <span className="font-['Great_Vibes',cursive] text-3xl sm:text-4xl text-[#C9963E] leading-none">
                        &amp;
                    </span>
                    <div className="h-px w-14 bg-gradient-to-l from-transparent via-[#EEDDD3] to-[#C9963E]/40" />
                </div>

                {/* Groom Info (Rohit) */}
                <div className="w-full mb-4">
                    <span className="shimmer-gold block font-['Great_Vibes',cursive] text-6xl sm:text-7xl md:text-8xl leading-tight py-1 drop-shadow-sm">
                        Rohit
                    </span>
                    <p className="font-['Cormorant_Garamond',serif] text-sm sm:text-base font-medium text-[#2E1810] mt-1">
                        Son of <strong>Mr. Tej Singh Surana &amp; Mrs. Anita Surana</strong>
                    </p>
                    <p className="font-['Cormorant_Garamond',serif] text-xs sm:text-sm italic text-[#5A3E2B] mt-0.5">
                        (Grandson of Late Shri Shobhagya Singh Ji Surana &amp; Late Smt. Sohan Bai ji Surana)
                    </p>
                </div>

                {/* Date & Venue Badge */}
                <div className="pt-3 border-t border-[#C9963E]/20 w-full space-y-1">
                    <div className="flex items-center justify-center gap-2 text-[#B85940] font-['Tenor_Sans',sans-serif] text-[11px] sm:text-xs tracking-widest uppercase font-bold">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>20th – 21st November, 2026</span>
                    </div>
                    <a
                        href="https://maps.app.goo.gl/89phtRto3un73QWP6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 text-stone-600 hover:text-[#B85940] transition-colors font-['Cormorant_Garamond',serif] italic text-xs sm:text-sm group cursor-pointer"
                    >
                        <MapPin className="w-3.5 h-3.5 text-[#C9963E] group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline underline-offset-4">Anant Resort, Behind Jindal Marbles, Chittorgarh</span>
                    </a>
                </div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <div
                onClick={scrollToNext}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer group"
            >
                <p className="font-['Tenor_Sans',sans-serif] text-[9px] tracking-[0.3em] uppercase text-[#6B4535] group-hover:text-[#B85940]">
                    Scroll
                </p>
                <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="w-4 h-4 text-[#6B4535] group-hover:text-[#B85940]" />
                </motion.div>
            </div>
        </section>
    );
};

export default HomeHero;
