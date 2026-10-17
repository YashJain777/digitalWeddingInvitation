import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ZoomIn, X } from 'lucide-react';

const CHAPTERS = [
    {
        id: 'jaipur',
        tabLabel: '🏰 Old City of Jaipur',
        tag: 'Heritage & Royalty',
        title: 'Timeless in the Pink City',
        quote: 'Hand in hand through sunlit sandstone arches, where every street whispers timeless romance.',
        description: 'From historic carved jharokhas to the warm sunset glow over Jaipur’s pink rooftops, our love found its most majestic backdrop in the regal heart of Rajasthan.',
        photos: [
            {
                src: '/images/jaipur-couple.jpeg',
                title: 'Laughter Under the Arches',
                caption: 'Sitting beneath the hand-painted royal arches, sharing candid laughter and sweet conversations.',
                position: 'center 75%'
            },
            {
                src: '/images/jaipur-sunset.jpeg',
                title: 'Grandeur of Patrika Gate',
                caption: 'Standing before the majestic pink facade and sculpted jharokhas, looking ahead to forever.',
                position: 'center 65%'
            }
        ]
    },
    {
        id: 'clay',
        tabLabel: '🏺 The Pottery Studio',
        tag: 'Molded with Love',
        title: 'Two Hands, One Wheel',
        quote: 'Finding our rhythm in the slow, tactile art of shaping life together.',
        description: 'Clay on our hands, joy in our hearts. Love is not found ready-made; it is shaped with gentle hands, mutual patience, and shared smiles.',
        photos: [
            {
                src: '/images/pottery-couple.jpeg',
                title: 'The Ceramic Studio',
                caption: 'Getting our hands messy, laughing through every spin of the wheel.',
                position: 'center 50%'
            },
            {
                src: '/images/pottery-detail.jpeg',
                title: 'Crafting Our Tomorrow',
                caption: 'Patience, gentle touch, and building something that will last forever.',
                position: 'center 45%'
            }
        ]
    },
    {
        id: 'tennis',
        tabLabel: '🎾 The Tennis Court',
        tag: 'Doubles for Life',
        title: 'Game, Set, Forever',
        quote: 'The easiest doubles partner I could ever ask for—laughing through every single rally.',
        description: 'Competitive, fun, and energetic. We learned how to cover each other’s blind spots, sprint for drop shots, and stay on the winning team forever.',
        photos: [
            {
                src: '/images/tennis-couple.jpeg',
                title: 'Doubles Team',
                caption: 'Matching whites, warm sunshine, and an unbeatable partnership.',
                position: 'center'
            },
            {
                src: '/images/tennis-bench.jpeg',
                title: 'Between The Sets',
                caption: 'Catching our breath on the wooden bench, sharing quiet smiles.',
                position: 'center 85%'
            }
        ]
    }
];

const PreWeddingStory = () => {
    const [activeTab, setActiveTab] = useState('jaipur');
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const currentChapter = CHAPTERS.find(c => c.id === activeTab) || CHAPTERS[0];

    return (
        <section id="our-story" className="py-24 px-4 bg-gradient-to-b from-[#FAF4EF] via-[#FFF8F3] to-[#FDF0E8] relative overflow-hidden select-none">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C27D5E]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#B85940]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-2xl mx-auto mb-12"
                >
                    <span className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm tracking-[0.35em] uppercase text-[#C9963E] block mb-2 font-semibold">
                        Pre-Wedding Story
                    </span>
                    <h2 className="font-['Great_Vibes',cursive] text-5xl sm:text-6xl md:text-7xl text-[#6B4535] leading-tight">
                        Court, Clay &amp; Jaipur
                    </h2>
                    <p className="font-['Cormorant_Garamond',serif] italic text-base sm:text-lg text-[#9E7060] mt-1">
                        Three distinct chapters of our story—celebrating play, patience, and the royal charm of the Pink City.
                    </p>

                    {/* Chapter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8">
                        {CHAPTERS.map((chap) => (
                            <button
                                key={chap.id}
                                onClick={() => setActiveTab(chap.id)}
                                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-['Tenor_Sans',sans-serif] tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                                    activeTab === chap.id
                                        ? 'bg-gradient-to-r from-[#C9963E] to-[#B85940] text-white border-[#C9963E] shadow-md scale-105 font-bold'
                                        : 'bg-white/80 text-[#5A3E2B] border-[#D4AF37]/30 hover:border-[#B85940]'
                                }`}
                            >
                                {chap.tabLabel}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Chapter Showcase Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentChapter.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-10"
                    >
                        {/* Story Quote Bar */}
                        <div className="text-center max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-[#D4AF37]/25 shadow-sm space-y-2">
                            <span className="font-['Tenor_Sans',sans-serif] text-[11px] uppercase tracking-[0.25em] text-[#C9963E] font-bold">
                                {currentChapter.tag}
                            </span>
                            <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#2E1810]">
                                {currentChapter.title}
                            </h3>
                            <p className="font-['Cormorant_Garamond',serif] italic text-lg sm:text-xl text-[#B85940] leading-snug">
                                &ldquo;{currentChapter.quote}&rdquo;
                            </p>
                            <p className="font-['Inter',sans-serif] text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto pt-1">
                                {currentChapter.description}
                            </p>
                        </div>

                        {/* Photo Pair Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            {currentChapter.photos.map((photo, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    onClick={() => setSelectedPhoto(photo)}
                                    className="group relative bg-white rounded-3xl p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#D4AF37]/25 cursor-pointer flex flex-col justify-between"
                                >
                                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100">
                                        <img
                                            src={photo.src}
                                            alt={photo.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            style={{ objectPosition: photo.position || 'center' }}
                                            loading="lazy"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none">
                                            <span className="text-white font-['Tenor_Sans',sans-serif] text-xs uppercase tracking-wider drop-shadow-md">
                                                Click to enlarge
                                            </span>
                                            <div className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white">
                                                <ZoomIn className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 px-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <h4 className="font-['Playfair_Display',serif] text-xl font-bold text-[#2E1810]">
                                                {photo.title}
                                            </h4>
                                            <Heart className="w-4 h-4 text-[#B85940] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                        </div>
                                        <p className="font-['Cormorant_Garamond',serif] italic text-sm text-[#7A5847]">
                                            {photo.caption}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
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
                                className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 text-white rounded-full hover:bg-black/90 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <img
                                src={selectedPhoto.src}
                                alt={selectedPhoto.title}
                                className="w-full max-h-[75vh] object-contain bg-black"
                            />

                            <div className="p-6 bg-gradient-to-t from-black via-stone-900 to-transparent text-white space-y-1">
                                <h4 className="text-2xl font-['Playfair_Display',serif] font-bold text-[#E8C07A]">
                                    {selectedPhoto.title}
                                </h4>
                                <p className="font-['Cormorant_Garamond',serif] italic text-base text-stone-300">
                                    &ldquo;{selectedPhoto.caption}&rdquo;
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default PreWeddingStory;
