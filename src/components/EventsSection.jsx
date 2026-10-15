import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar, Sparkles } from 'lucide-react';

const EVENTS_DAY1 = [
    {
        title: 'Vinayak Sthapana & Kalash',
        date: '20 Nov. 2026',
        time: '9:00 AM Onwards',
        venue: 'Anant Resort, Behind Jindal Marbles, Chittorgarh',
        mapsUrl: 'https://maps.app.goo.gl/89phtRto3un73QWP6',
        img: 'https://i.ibb.co/0Rm6rdXx/ganesh.jpg',
        alt: 'Vinayak Sthapana & Kalash sacred rituals'
    },
    {
        title: 'Carnival',
        date: '20 Nov. 2026',
        time: '2:00 PM Onwards',
        venue: 'Anant Resort, Behind Jindal Marbles, Chittorgarh',
        mapsUrl: 'https://maps.app.goo.gl/89phtRto3un73QWP6',
        img: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800',
        alt: 'Carnival festivities, music, and food'
    },
    {
        title: 'Sagai Dastur',
        date: '20 Nov. 2026',
        time: '4:00 PM Onwards',
        venue: 'Anant Resort, Behind Jindal Marbles, Chittorgarh',
        mapsUrl: 'https://maps.app.goo.gl/89phtRto3un73QWP6',
        img: 'https://i.ibb.co/MdvwTCP/bf92b8341511b0a141eef0dd327db755.jpg',
        alt: 'Sagai Dastur ceremony'
    },
    {
        title: 'Sangeet',
        date: '20 Nov. 2026',
        time: '7:30 PM Onwards',
        venue: 'Anant Resort, Behind Jindal Marbles, Chittorgarh',
        mapsUrl: 'https://maps.app.goo.gl/89phtRto3un73QWP6',
        img: '/sangeet.webp',
        alt: 'Sangeet musical performances and dancing'
    }
];

const EVENTS_DAY2 = [
    {
        title: 'Baraat / Toran',
        date: '21 Nov. 2026',
        time: '9:30 AM Onwards',
        venue: 'Anant Resort, Behind Jindal Marbles, Chittorgarh',
        mapsUrl: 'https://maps.app.goo.gl/89phtRto3un73QWP6',
        img: 'https://i.ibb.co/rfNP0YNh/binola.jpg',
        alt: 'Joyous Baraat procession and Toran ritual'
    },
    {
        title: 'Phera',
        date: '21 Nov. 2026',
        time: 'Auspicious Mahurat',
        venue: 'Anant Resort, Behind Jindal Marbles, Chittorgarh',
        mapsUrl: 'https://maps.app.goo.gl/89phtRto3un73QWP6',
        img: '/wedding.webp',
        alt: 'The holy 7 sacred pheras around the agni kund'
    },
    {
        title: 'Reception',
        date: '21 Nov. 2026',
        time: '7:00 PM Onwards',
        venue: 'Anant Resort, Behind Jindal Marbles, Chittorgarh',
        mapsUrl: 'https://maps.app.goo.gl/89phtRto3un73QWP6',
        img: 'https://i.ibb.co/dsmxWH67/Reception.jpg',
        alt: 'Grand wedding reception under royal lights'
    }
];

const EventsSection = () => {
    return (
        <section id="ceremonies" className="py-24 px-4 bg-gradient-to-b from-[#FAF4EF] via-[#FFF8F3] to-[#FDF0E8] relative overflow-hidden select-none">
            {/* Ambient Lighting Orbs */}
            <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#C27D5E]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-14"
                >
                    <p className="text-xs sm:text-sm font-['Tenor_Sans',sans-serif] text-[#C9963E] uppercase tracking-[0.35em] mb-2 font-semibold">
                        The Celebration Unfolds
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#2E1810]">
                        Sacred <span className="font-['Great_Vibes',cursive] text-[#C9963E] text-5xl sm:text-6xl md:text-7xl ml-1">Ceremonies</span>
                    </h2>
                    <p className="font-['Cormorant_Garamond',serif] italic text-base sm:text-lg text-[#9E7060] mt-1 max-w-lg mx-auto">
                        Two days of joyous traditions, soulful music, and sacred vows at Chittorgarh.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Central Vertical Gold Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#C9963E] via-[#D4AF37] to-transparent hidden md:block" />

                    {/* --- DAY 1 : 20 Nov. 2026 --- */}
                    <div className="relative mb-10 z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-[#FAF4EF] via-white to-[#FAF4EF] border border-[#C9963E]/40 shadow-md"
                        >
                            <Calendar className="w-4 h-4 text-[#C9963E]" />
                            <span className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#B85940] font-bold">
                                20 Nov. 2026
                            </span>
                        </motion.div>
                    </div>

                    <div className="space-y-12 md:space-y-16 mb-16">
                        {EVENTS_DAY1.map((event, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.08 }}
                                    className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-6 ${
                                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    {/* Card Content */}
                                    <div className={`flex-1 w-full ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#D4AF37]/25 inline-block w-full max-w-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                            {/* Date Badge */}
                                            <p className="text-xs font-['Tenor_Sans',sans-serif] text-[#C9963E] uppercase tracking-widest font-semibold mb-1">
                                                {event.date}
                                            </p>

                                            {/* Time with Clock */}
                                            <div className={`flex items-center gap-1.5 mb-2.5 ${isEven ? 'justify-start md:justify-end' : 'justify-start'}`}>
                                                <Clock className="w-3.5 h-3.5 text-[#B85940]" />
                                                <span className="text-xs font-['Tenor_Sans',sans-serif] text-[#B85940] font-medium tracking-wide">
                                                    {event.time}
                                                </span>
                                            </div>

                                            {/* Event Title */}
                                            <h3
                                                className="text-2xl sm:text-3xl font-['Playfair_Display',serif] mb-2 font-bold text-[#B85940]"
                                                style={{ textShadow: '0 2px 10px rgba(192, 138, 154, 0.15)' }}
                                            >
                                                {event.title}
                                            </h3>

                                            {/* Venue */}
                                            <p className="text-xs sm:text-sm font-['Cormorant_Garamond',serif] text-stone-600 mb-3 italic">
                                                Venue: {event.venue}
                                            </p>

                                            {/* Maps Link */}
                                            <a
                                                href={event.mapsUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-1.5 text-xs font-['Tenor_Sans',sans-serif] text-[#C9963E] hover:text-[#B85940] transition-colors uppercase tracking-wider font-semibold ${
                                                    isEven ? 'md:flex-row-reverse' : ''
                                                }`}
                                            >
                                                <MapPin className="w-3.5 h-3.5 text-[#B85940]" />
                                                <span>View on Maps</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Circular Photo Medallion */}
                                    <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-[#C9963E] shadow-xl my-2 md:my-0 group">
                                        <img
                                            src={event.img}
                                            alt={event.alt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 rounded-full ring-2 ring-[#C9963E]/40 ring-inset pointer-events-none" />
                                    </div>

                                    {/* Empty flex slot for symmetry */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* --- DAY 2 : 21 Nov. 2026 --- */}
                    <div className="relative my-10 z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-gradient-to-r from-[#FAF4EF] via-white to-[#FAF4EF] border border-[#C9963E]/40 shadow-md"
                        >
                            <Calendar className="w-4 h-4 text-[#C9963E]" />
                            <span className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#B85940] font-bold">
                                21 Nov. 2026
                            </span>
                        </motion.div>
                    </div>

                    <div className="space-y-12 md:space-y-16">
                        {EVENTS_DAY2.map((event, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <motion.div
                                    key={event.title}
                                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.08 }}
                                    className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-6 ${
                                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                >
                                    {/* Card Content */}
                                    <div className={`flex-1 w-full ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-[#D4AF37]/25 inline-block w-full max-w-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                                            {/* Date Badge */}
                                            <p className="text-xs font-['Tenor_Sans',sans-serif] text-[#C9963E] uppercase tracking-widest font-semibold mb-1">
                                                {event.date}
                                            </p>

                                            {/* Time with Clock */}
                                            <div className={`flex items-center gap-1.5 mb-2.5 ${isEven ? 'justify-start md:justify-end' : 'justify-start'}`}>
                                                <Clock className="w-3.5 h-3.5 text-[#B85940]" />
                                                <span className="text-xs font-['Tenor_Sans',sans-serif] text-[#B85940] font-medium tracking-wide">
                                                    {event.time}
                                                </span>
                                            </div>

                                            {/* Event Title */}
                                            <h3
                                                className="text-2xl sm:text-3xl font-['Playfair_Display',serif] mb-2 font-bold text-[#B85940]"
                                                style={{ textShadow: '0 2px 10px rgba(192, 138, 154, 0.15)' }}
                                            >
                                                {event.title}
                                            </h3>

                                            {/* Venue */}
                                            <p className="text-xs sm:text-sm font-['Cormorant_Garamond',serif] text-stone-600 mb-3 italic">
                                                Venue: {event.venue}
                                            </p>

                                            {/* Maps Link */}
                                            <a
                                                href={event.mapsUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-1.5 text-xs font-['Tenor_Sans',sans-serif] text-[#C9963E] hover:text-[#B85940] transition-colors uppercase tracking-wider font-semibold ${
                                                    isEven ? 'md:flex-row-reverse' : ''
                                                }`}
                                            >
                                                <MapPin className="w-3.5 h-3.5 text-[#B85940]" />
                                                <span>View on Maps</span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Circular Photo Medallion */}
                                    <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full overflow-hidden border-4 border-[#C9963E] shadow-xl my-2 md:my-0 group">
                                        <img
                                            src={event.img}
                                            alt={event.alt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 rounded-full ring-2 ring-[#C9963E]/40 ring-inset pointer-events-none" />
                                    </div>

                                    {/* Empty flex slot for symmetry */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
