import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Heart, ZoomIn } from 'lucide-react';

const STORIES = [
    {
        id: 'pottery-1',
        category: 'clay',
        badge: 'The Ceramic Studio',
        tag: 'Molded with Love',
        title: 'Two Hands, One Wheel',
        quote: 'Finding our rhythm in the slow, tactile art of shaping our life together.',
        caption: 'Clay on our hands, joy in our hearts. No poses, just real smiles.',
        image: '/images/pottery-couple.jpg',
        aspect: 'aspect-[4/3]',
        tone: 'from-[#FDF2E9] to-[#F6DDD2]'
    },
    {
        id: 'tennis-1',
        category: 'tennis',
        badge: 'The Tennis Court',
        tag: 'Doubles for Life',
        title: 'Game, Set, Forever',
        quote: 'The easiest doubles partner I could ever ask for—laughing through every rally.',
        caption: 'Matching whites, friendly competition, and a lifetime of shared victories.',
        image: '/images/tennis-couple.jpg',
        aspect: 'aspect-[4/3]',
        tone: 'from-[#EAF2ED] to-[#DDEBE2]'
    },
    {
        id: 'pottery-2',
        category: 'clay',
        badge: 'Clay & Touch',
        tag: 'Artisan Romance',
        title: 'Shaping Our Tomorrow',
        quote: 'Love is not just found—it is crafted with patience and gentle hands.',
        caption: 'The magic of getting our hands messy and building something lasting.',
        image: '/images/pottery-detail.jpg',
        aspect: 'aspect-[4/3]',
        tone: 'from-[#FAF0E6] to-[#F4E1D2]'
    },
    {
        id: 'tennis-2',
        category: 'tennis',
        badge: 'Court-Side Story',
        tag: 'Love All',
        title: 'Between The Sets',
        quote: 'Catching our breath side-by-side, sharing secret jokes and golden light.',
        caption: 'Resting on the wooden bench, knowing we are always on the same team.',
        image: '/images/tennis-bench.jpg',
        aspect: 'aspect-[4/3]',
        tone: 'from-[#EEF5F0] to-[#E3EFE7]'
    }
];

const ClayAndCourtStory = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const filteredStories = activeTab === 'all'
        ? STORIES
        : STORIES.filter(item => item.category === activeTab);

    return (
        <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#FFF8F3] via-white to-[#FAF4EF] relative overflow-hidden">
            {/* Subtle Atmospheric Blobs */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C27D5E]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#2C5E43]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm tracking-[0.35em] uppercase text-[#C9963E] block font-semibold">
                            A Modern Romance
                        </span>
                        <h2 className="font-['Great_Vibes',cursive] text-5xl sm:text-6xl md:text-7xl text-[#6B4535] mt-1 leading-tight">
                            The Art &amp; The Game
                        </h2>
                        <p className="font-['Cormorant_Garamond',serif] italic text-base sm:text-xl text-[#7A5847] leading-relaxed mt-2">
                            Our love story isn't about stiff poses in royal halls. It's about shaping clay with messy hands, sprinting for drop shots, and laughing together through it all.
                        </p>
                    </motion.div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                        {[
                            { key: 'all', label: 'All Moments ✨' },
                            { key: 'clay', label: '🏺 The Pottery Studio' },
                            { key: 'tennis', label: '🎾 The Tennis Court' }
                        ].map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-['Tenor_Sans',sans-serif] tracking-wider transition-all duration-300 border cursor-pointer ${
                                    activeTab === tab.key
                                        ? 'bg-[#B85940] text-white border-[#B85940] shadow-md scale-105'
                                        : 'bg-white/80 text-[#6B4535] border-[#D4AF37]/30 hover:border-[#B85940] hover:bg-white'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Editorial Photo Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
                >
                    <AnimatePresence>
                        {filteredStories.map((story, i) => (
                            <motion.div
                                layout
                                key={story.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative bg-white rounded-3xl p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#D4AF37]/20 flex flex-col justify-between"
                            >
                                {/* Photo Container */}
                                <div
                                    className="relative overflow-hidden rounded-2xl cursor-pointer"
                                    onClick={() => setSelectedPhoto(story)}
                                >
                                    <div className={`w-full ${story.aspect} overflow-hidden bg-stone-100`}>
                                        <img
                                            src={story.image}
                                            alt={story.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Subtle Gradient & Zoom Icon */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                                        <span className="text-white text-xs font-['Tenor_Sans',sans-serif] tracking-widest uppercase">
                                            {story.badge}
                                        </span>
                                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                                            <ZoomIn className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Top Corner Badge */}
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-stone-200 text-[10px] font-['Tenor_Sans',sans-serif] tracking-wider uppercase text-[#6B4535] shadow-sm">
                                        {story.tag}
                                    </div>
                                </div>

                                {/* Text & Captions */}
                                <div className="pt-5 pb-2 px-2 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#2E1810]">
                                            {story.title}
                                        </h3>
                                        <Heart className="w-4 h-4 text-[#B85940] opacity-60 group-hover:opacity-100 transition-opacity" />
                                    </div>

                                    <p className="font-['Cormorant_Garamond',serif] italic text-base sm:text-lg text-[#B85940] leading-snug">
                                        "{story.quote}"
                                    </p>

                                    <p className="font-['Inter',sans-serif] text-xs text-[#7A5847] leading-relaxed pt-1">
                                        {story.caption}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Story Quote Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center p-8 rounded-3xl bg-gradient-to-r from-[#FAF0E6] via-[#FFF5EE] to-[#FAF0E6] border border-[#D4AF37]/30 shadow-sm max-w-3xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-2 text-[#C9963E] mb-2">
                        <span>✧</span>
                        <span className="font-['Tenor_Sans',sans-serif] text-[11px] uppercase tracking-[0.25em]">
                            From Court &amp; Clay to Sacred Vows
                        </span>
                        <span>✧</span>
                    </div>
                    <p className="font-['Cormorant_Garamond',serif] italic text-lg sm:text-2xl text-[#5A3E2B] leading-relaxed">
                        "We learned how to play together, how to build together, and how to hold each other gently. Now, we step into the sacred circle with our families."
                    </p>
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedPhoto(null)}
                                className="absolute top-4 right-4 z-10 p-2.5 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <img
                                src={selectedPhoto.image}
                                alt={selectedPhoto.title}
                                className="w-full max-h-[75vh] object-contain bg-black"
                            />

                            <div className="p-6 bg-gradient-to-t from-black via-stone-900 to-transparent text-white space-y-1">
                                <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-['Tenor_Sans',sans-serif]">
                                    {selectedPhoto.badge} • {selectedPhoto.tag}
                                </div>
                                <h4 className="text-2xl font-['Playfair_Display',serif] font-bold">
                                    {selectedPhoto.title}
                                </h4>
                                <p className="font-['Cormorant_Garamond',serif] italic text-lg text-stone-300">
                                    "{selectedPhoto.quote}"
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ClayAndCourtStory;
