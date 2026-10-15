import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';

const MOMENTS = [
    {
        id: 1,
        src: '/gallery-1.jpg',
        title: 'Timeless Smiles',
        caption: 'The start of our shared forever, filled with endless laughter.'
    },
    {
        id: 2,
        src: '/gallery-2.jpg',
        title: 'Golden Hour Together',
        caption: 'Basking in the golden light of love and quiet moments.'
    },
    {
        id: 3,
        src: '/gallery-3.jpg',
        title: 'Eyes Full of Love',
        caption: 'When two souls meet, every second turns into poetry.'
    },
    {
        id: 4,
        src: '/gallery-4.jpg',
        title: 'Hand in Hand',
        caption: 'Walking this beautiful journey with you by my side.'
    },
    {
        id: 5,
        src: '/gallery-5.jpg',
        title: 'Pure Joy & Laughter',
        caption: 'No posed smiles—just honest happiness and deep friendship.'
    },
    {
        id: 6,
        src: '/gallery-6.jpg',
        title: 'The Promise of Forever',
        caption: 'Looking forward to all the tomorrows we will write together.'
    }
];

const MomentsGallery = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [likedPhotos, setLikedPhotos] = useState({});

    const toggleLike = (e, id) => {
        e.stopPropagation();
        setLikedPhotos(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleNext = (e) => {
        if (e) e.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % MOMENTS.length);
    };

    const handlePrev = (e) => {
        if (e) e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + MOMENTS.length) % MOMENTS.length);
    };

    return (
        <section id="moments" className="py-24 px-4 bg-gradient-to-b from-[#FDF0E8] via-[#FFF8F3] to-[#FAF4EF] relative overflow-hidden select-none">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/3 right-10 w-72 h-72 bg-[#B85940]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-14"
                >
                    <p className="text-xs sm:text-sm font-['Tenor_Sans',sans-serif] text-[#C9963E] uppercase tracking-[0.35em] mb-2 font-semibold">
                        A Glimpse of Us
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#2E1810] mb-3">
                        Our Beautiful <span className="font-['Great_Vibes',cursive] text-[#C9963E] text-5xl sm:text-6xl md:text-7xl ml-1">Moments</span>
                    </h2>
                    <p className="text-[#9E7060] font-['Cormorant_Garamond',serif] italic text-base sm:text-lg max-w-lg mx-auto">
                        A moment captured in time, forever in our hearts
                    </p>
                </motion.div>

                {/* 6 Photo Grid matching reference site */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
                    {MOMENTS.map((moment, index) => (
                        <motion.div
                            key={moment.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            onClick={() => setActiveIndex(index)}
                            className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#FFF0F5] to-[#FDE2D2] border border-[#D4AF37]/25 cursor-pointer"
                        >
                            <img
                                src={moment.src}
                                alt={moment.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />

                            {/* Floating Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                                <span className="text-white font-['Playfair_Display',serif] text-base font-semibold drop-shadow-sm">
                                    {moment.title}
                                </span>
                                <span className="text-stone-300 font-['Cormorant_Garamond',serif] italic text-xs line-clamp-1">
                                    {moment.caption}
                                </span>
                            </div>

                            {/* Top Right Action Pill */}
                            <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={(e) => toggleLike(e, moment.id)}
                                    className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                                        likedPhotos[moment.id] ? 'bg-rose-500 text-white' : 'bg-black/40 text-white hover:text-rose-400'
                                    }`}
                                >
                                    <Heart className={`w-3.5 h-3.5 ${likedPhotos[moment.id] ? 'fill-white' : ''}`} />
                                </button>
                                <div className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white">
                                    <ZoomIn className="w-3.5 h-3.5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Interactive Lightbox Modal */}
            <AnimatePresence>
                {activeIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                        onClick={() => setActiveIndex(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveIndex(null)}
                                className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Nav Arrows */}
                            <button
                                onClick={handlePrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors cursor-pointer"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={handleNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors cursor-pointer"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image */}
                            <div className="w-full max-h-[70vh] flex items-center justify-center bg-black">
                                <img
                                    src={MOMENTS[activeIndex].src}
                                    alt={MOMENTS[activeIndex].title}
                                    className="max-h-[70vh] w-auto object-contain"
                                />
                            </div>

                            {/* Caption Bar */}
                            <div className="p-6 bg-gradient-to-t from-black via-stone-900 to-transparent text-white flex items-center justify-between">
                                <div>
                                    <h4 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#E8C07A]">
                                        {MOMENTS[activeIndex].title}
                                    </h4>
                                    <p className="font-['Cormorant_Garamond',serif] italic text-base text-stone-300 mt-1">
                                        "{MOMENTS[activeIndex].caption}"
                                    </p>
                                </div>
                                <button
                                    onClick={(e) => toggleLike(e, MOMENTS[activeIndex].id)}
                                    className={`p-3 rounded-full flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                                        likedPhotos[MOMENTS[activeIndex].id]
                                            ? 'bg-rose-500 text-white'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                >
                                    <Heart className={`w-4 h-4 ${likedPhotos[MOMENTS[activeIndex].id] ? 'fill-white' : ''}`} />
                                    <span>{likedPhotos[MOMENTS[activeIndex].id] ? 'Loved' : 'Love'}</span>
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default MomentsGallery;
