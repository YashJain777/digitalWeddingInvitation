import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ChevronRight, ChevronLeft } from 'lucide-react';

const PHERAS = [
    {
        step: 1,
        title: 'Prathama Phera',
        theme: 'Nourishment & Wholeness',
        sanskrit: 'ॐ एकमिषे विष्णुस्त्वान्वेतु',
        meaning: 'May our home always be blessed with wholesome nourishment, physical wellness, and purity of mind.',
        vow: 'We vow to nurture our bodies and souls, cooking together with love, and maintaining a sanctuary of peace in our home.'
    },
    {
        step: 2,
        title: 'Dvitiya Phera',
        theme: 'Inner Strength & Resilience',
        sanskrit: 'ॐ द्वे ऊर्जे विष्णुस्त्वान्वेतु',
        meaning: 'May the divine grant us moral and physical fortitude to face all highs and lows with grace.',
        vow: 'We promise to stand as each other’s greatest strength, lifting one another through life’s unexpected storms and celebrating every win.'
    },
    {
        step: 3,
        title: 'Tritiya Phera',
        theme: 'Prosperity & Wisdom',
        sanskrit: 'ॐ त्रीणि रायस्पोषाय विष्णुस्त्वान्वेतु',
        meaning: 'May our shared endeavors flourish with ethical prosperity, knowledge, and charitable deeds.',
        vow: 'We vow to work passionately towards our shared dreams, manage our life with wisdom, and share our blessings with those in need.'
    },
    {
        step: 4,
        title: 'Chaturtha Phera',
        theme: 'Joy, Harmony & Family',
        sanskrit: 'ॐ चत्वारि मायोभवाय विष्णुस्त्वान्वेतु',
        meaning: 'May our families be united in love, respect, and boundless happiness.',
        vow: 'We promise to honor our parents and elders, treasure our traditions, and fill our home with music, warmth, and laughter.'
    },
    {
        step: 5,
        title: 'Panchama Phera',
        theme: 'Compassion & Future Generations',
        sanskrit: 'ॐ पञ्च प्रजाभ्यः विष्णुस्त्वान्वेतु',
        meaning: 'May our lineage be blessed with noble virtues, bright minds, and deep compassion.',
        vow: 'We vow to nurture our future with patience, unconditional kindness, and exemplary values rooted in love and integrity.'
    },
    {
        step: 6,
        title: 'Shashtha Phera',
        theme: 'Lifelong Health & Balance',
        sanskrit: 'ॐ षड् ऋतुभ्यः विष्णुस्त्वान्वेतु',
        meaning: 'May the six seasons of nature bring longevity, vigor, and serene harmony into our union.',
        vow: 'Whether in quiet clay studios, sunny tennis matches, or cozy winter evenings, we promise to cherish each season of life together.'
    },
    {
        step: 7,
        title: 'Saptama Phera',
        theme: 'Sakha — Eternal Friendship',
        sanskrit: 'ॐ सखे सप्तपदा भव सा मामनुव्रता भव',
        meaning: 'With this seventh step, we become lifelong friends, united in heart and eternal spirit.',
        vow: 'Above all else, we promise to remain best friends forever—partners in court, clay, laughter, and all the adventures of life.'
    }
];

const SacredPheras = () => {
    const [activePhera, setActivePhera] = useState(0);

    const handleNext = () => {
        setActivePhera((prev) => (prev + 1) % PHERAS.length);
    };

    const handlePrev = () => {
        setActivePhera((prev) => (prev - 1 + PHERAS.length) % PHERAS.length);
    };

    const current = PHERAS[activePhera];

    return (
        <section id="sacred-vows" className="py-24 px-4 bg-gradient-to-b from-[#FFF9F5] via-[#FFF3EC] to-[#FAF4EF] relative overflow-hidden select-none">
            {/* Background Sacred Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB300]/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <span className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm tracking-[0.35em] uppercase text-[#C9963E] block mb-2 font-semibold">
                        Vedic Rituals &amp; Promises
                    </span>
                    <h2 className="font-['Great_Vibes',cursive] text-5xl sm:text-6xl md:text-7xl text-[#6B4535] leading-tight">
                        The 7 Sacred Vows
                    </h2>
                    <p className="font-['Cormorant_Garamond',serif] italic text-base sm:text-lg text-[#9E7060] mt-1 max-w-lg mx-auto">
                        Seven sacred steps around the holy fire that weave two souls into one eternal bond.
                    </p>
                </motion.div>

                {/* Central Mandala Interactive Circle */}
                <div className="relative mb-12">
                    {/* The 7 Steps Selector Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
                        {PHERAS.map((p, idx) => {
                            const isSelected = activePhera === idx;
                            return (
                                <motion.button
                                    key={p.step}
                                    onClick={() => setActivePhera(idx)}
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`relative px-3.5 sm:px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                                        isSelected
                                            ? 'bg-gradient-to-r from-[#C9963E] to-[#B85940] text-white border-[#C9963E] shadow-md scale-105'
                                            : 'bg-white/80 border-[#D4AF37]/30 text-stone-700 hover:border-[#C9963E]'
                                    }`}
                                >
                                    <span className="text-xs font-bold">
                                        {isSelected ? '🪔' : '✧'}
                                    </span>
                                    <span className="font-['Tenor_Sans',sans-serif] text-[11px] sm:text-xs tracking-wider uppercase font-medium">
                                        Step {p.step}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Vow Presentation Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activePhera}
                            initial={{ opacity: 0, y: 15, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -15, scale: 0.98 }}
                            transition={{ duration: 0.4 }}
                            className="bg-white/90 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl shadow-xl border border-[#D4AF37]/30 max-w-2xl mx-auto relative overflow-hidden"
                        >
                            {/* Inner Corner Accents */}
                            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#C9963E]/40" />
                            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9963E]/40" />
                            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9963E]/40" />
                            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#C9963E]/40" />

                            {/* Flame Header Emblem */}
                            <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#FFE082] to-[#FF8A65]/30 flex items-center justify-center border border-[#FFB300]/40 shadow-inner mb-4">
                                <span className="text-2xl animate-pulse">🪔</span>
                            </div>

                            {/* Step Badge */}
                            <span className="font-['Tenor_Sans',sans-serif] text-[11px] uppercase tracking-[0.3em] text-[#C9963E] font-semibold block mb-1">
                                {current.title} • {current.theme}
                            </span>

                            {/* Sanskrit Shloka */}
                            <h3 className="font-['Tenor_Sans',sans-serif] text-base sm:text-lg text-[#B85940] tracking-wider mb-4 font-bold">
                                {current.sanskrit}
                            </h3>

                            {/* Ancient Meaning */}
                            <p className="font-['Cormorant_Garamond',serif] italic text-base sm:text-lg text-[#5A3E2B] leading-relaxed mb-6 px-2">
                                &ldquo;{current.meaning}&rdquo;
                            </p>

                            {/* Personal Couple Vow */}
                            <div className="pt-4 border-t border-[#D4AF37]/20 bg-[#FFFDF9]/60 p-4 rounded-xl text-left flex items-start gap-3">
                                <Heart className="w-5 h-5 text-[#B85940] fill-[#B85940] flex-shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-['Tenor_Sans',sans-serif] text-[10px] uppercase tracking-wider text-[#C9963E] font-bold block mb-0.5">
                                        Sakshi &amp; Rohit&apos;s Promise:
                                    </span>
                                    <p className="font-['Cormorant_Garamond',serif] italic text-sm sm:text-base text-[#2E1810] leading-snug">
                                        {current.vow}
                                    </p>
                                </div>
                            </div>

                            {/* Step Navigation Controls */}
                            <div className="flex items-center justify-between mt-8 pt-2">
                                <button
                                    onClick={handlePrev}
                                    className="flex items-center gap-1 text-xs font-['Tenor_Sans',sans-serif] uppercase tracking-wider text-stone-600 hover:text-[#B85940] transition-colors cursor-pointer"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    <span>Previous</span>
                                </button>
                                <span className="text-xs font-['Tenor_Sans',sans-serif] text-[#C9963E] font-bold tracking-widest">
                                    {activePhera + 1} / 7
                                </span>
                                <button
                                    onClick={handleNext}
                                    className="flex items-center gap-1 text-xs font-['Tenor_Sans',sans-serif] uppercase tracking-wider text-stone-600 hover:text-[#B85940] transition-colors cursor-pointer"
                                >
                                    <span>Next Vow</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default SacredPheras;
