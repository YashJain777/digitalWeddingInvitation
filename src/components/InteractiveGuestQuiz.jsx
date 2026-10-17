import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, CheckCircle2 } from 'lucide-react';

const MOODS = [
    { id: 'food', label: 'The Food 🍛' },
    { id: 'dance', label: 'Dance Floor 💃' },
    { id: 'love', label: 'The Love ❤️' },
    { id: 'all', label: 'All of It ✨' }
];

const EMOTIONAL_GUESSES = [
    { id: 'rohit', label: 'Rohit', initial: 'R' },
    { id: 'sakshi', label: 'Sakshi', initial: 'S' },
    { id: 'both', label: 'Both', initial: 'B' }
];

const InteractiveGuestQuiz = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedEmotional, setSelectedEmotional] = useState('');
    const [selectedMood, setSelectedMood] = useState('');
    const [note, setNote] = useState('');
    const [advice, setAdvice] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [flyingHearts, setFlyingHearts] = useState([]);
    const [wishes, setWishes] = useState([
        {
            name: 'Pooja & Rohan Mehta',
            mood: 'All of It ✨',
            guess: 'Both',
            note: 'Wishing you both a lifetime of happiness, shared laughter, and beautiful blessings!',
            date: 'Just now'
        },
        {
            name: 'Kunal Singhal',
            mood: 'Dance Floor 💃',
            guess: 'Rohit',
            note: 'Cannot wait for the Binola and dance floor showdown! Congratulations brother!',
            date: '3h ago'
        }
    ]);

    useEffect(() => {
        const saved = localStorage.getItem('vs_guest_wishes');
        if (saved) {
            try {
                setWishes(JSON.parse(saved));
            } catch {
                // ignore
            }
        }
    }, []);

    const triggerHeartShower = () => {
        const hearts = Array.from({ length: 18 }).map(() => ({
            id: Math.random(),
            x: Math.random() * 80 + 10,
            y: Math.random() * 20 + 80,
            size: Math.random() * 20 + 16,
            delay: Math.random() * 0.4
        }));
        setFlyingHearts(hearts);
        setTimeout(() => setFlyingHearts([]), 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) return;

        const newWish = {
            name,
            phone,
            mood: selectedMood || 'All of It ✨',
            guess: selectedEmotional || 'Both',
            note: note || 'Heartiest congratulations to Rohit and Sakshi on this new journey!',
            advice: advice || '',
            date: 'Just now'
        };

        const updated = [newWish, ...wishes];
        setWishes(updated);
        try {
            localStorage.setItem('vs_guest_wishes', JSON.stringify(updated.slice(0, 15)));
        } catch {
            // ignore
        }

        setIsSubmitted(true);
        triggerHeartShower();

        setTimeout(() => {
            setName('');
            setPhone('');
            setSelectedEmotional('');
            setSelectedMood('');
            setNote('');
            setAdvice('');
            setIsSubmitted(false);
        }, 3500);
    };

    return (
        <section id="guest-celebration" className="py-24 px-4 bg-gradient-to-b from-[#FDF0E8] via-[#FFF9F5] to-[#FAF4EF] relative overflow-hidden select-none">
            {/* Flying Hearts Celebration */}
            {flyingHearts.map((h) => (
                <motion.div
                    key={h.id}
                    initial={{ opacity: 1, y: 0, scale: 0.5 }}
                    animate={{ opacity: 0, y: -450, scale: 1.5 }}
                    transition={{ duration: 1.8, delay: h.delay, ease: "easeOut" }}
                    className="fixed z-50 pointer-events-none text-rose-500"
                    style={{ left: `${h.x}%`, bottom: '20%' }}
                >
                    <Heart className="fill-rose-500 text-rose-500" style={{ width: h.size, height: h.size }} />
                </motion.div>
            ))}

            <div className="max-w-2xl mx-auto relative z-10">
                {/* Header matching reference */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <p className="text-xs sm:text-sm font-['Tenor_Sans',sans-serif] text-[#C9963E] uppercase tracking-[0.35em] mb-2 font-semibold">
                        Join the Celebration
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-['Playfair_Display',serif] text-[#2E1810] mb-2">
                        Celebrate <span className="font-['Great_Vibes',cursive] text-[#C9963E] text-5xl sm:text-6xl md:text-7xl ml-1">With Us</span>
                    </h2>
                    <p className="text-[#9E7060] font-['Cormorant_Garamond',serif] italic text-base sm:text-lg">
                        A few fun questions before the big day!
                    </p>
                </motion.div>

                {/* Form Card */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/90 backdrop-blur-xl p-6 sm:p-10 rounded-2xl shadow-xl border border-[#C9963E]/20 space-y-8"
                >
                    {/* Guest Details */}
                    <div>
                        <h3 className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6B4535] font-semibold mb-4">
                            Guest Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-['Cormorant_Garamond',serif] italic text-stone-600 mb-1.5">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white/70 focus:border-[#C9963E] focus:ring-1 focus:ring-[#C9963E] outline-none font-['Cormorant_Garamond',serif] text-base transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-['Cormorant_Garamond',serif] italic text-stone-600 mb-1.5">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white/70 focus:border-[#C9963E] focus:ring-1 focus:ring-[#C9963E] outline-none font-['Cormorant_Garamond',serif] text-base transition-all"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Make a Guess */}
                    <div>
                        <h3 className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6B4535] font-semibold mb-1">
                            Make a Guess
                        </h3>
                        <p className="font-['Cormorant_Garamond',serif] italic text-base text-stone-600 mb-3">
                            Who will get emotional first?
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {EMOTIONAL_GUESSES.map((option) => (
                                <button
                                    key={option.id}
                                    type="button"
                                    onClick={() => setSelectedEmotional(option.label)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all cursor-pointer ${
                                        selectedEmotional === option.label
                                            ? 'border-[#C9963E] bg-[#C9963E]/10 shadow-sm scale-105'
                                            : 'border-stone-200 hover:border-[#C9963E]'
                                    }`}
                                >
                                    <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-sm font-bold text-[#B85940]">
                                        {option.initial}
                                    </span>
                                    <span className="font-['Cormorant_Garamond',serif] text-base font-medium text-stone-800">
                                        {option.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-stone-600 italic mt-2 font-['Cormorant_Garamond',serif]">
                            Reveal after the wedding 😉
                        </p>
                    </div>

                    {/* Your Wedding Mood */}
                    <div>
                        <h3 className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6B4535] font-semibold mb-1">
                            Your Wedding Mood
                        </h3>
                        <p className="font-['Cormorant_Garamond',serif] italic text-base text-stone-600 mb-3">
                            I&apos;m coming for...
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {MOODS.map((mood) => (
                                <button
                                    key={mood.id}
                                    type="button"
                                    onClick={() => setSelectedMood(mood.label)}
                                    className={`px-4 py-2 rounded-full border text-sm font-['Cormorant_Garamond',serif] italic transition-all cursor-pointer ${
                                        selectedMood === mood.label
                                            ? 'border-[#C9963E] bg-[#C9963E] text-white shadow-sm font-semibold scale-105'
                                            : 'border-stone-200 hover:border-[#C9963E] text-stone-700'
                                    }`}
                                >
                                    {mood.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Leave Us a Note */}
                    <div>
                        <h3 className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6B4535] font-semibold mb-1">
                            Leave Us a Note
                        </h3>
                        <p className="font-['Cormorant_Garamond',serif] italic text-base text-stone-600 mb-3">
                            Share a wish or memory.
                        </p>
                        <textarea
                            rows={3}
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            placeholder="Your heartfelt message..."
                            className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white/70 focus:border-[#C9963E] focus:ring-1 focus:ring-[#C9963E] outline-none font-['Cormorant_Garamond',serif] text-base resize-none transition-all"
                        />
                        <p className="text-xs text-stone-600 mt-2 font-['Cormorant_Garamond',serif] italic flex items-center gap-1">
                            <span>🔥</span> This becomes a digital memory book.
                        </p>
                    </div>

                    {/* Words for Forever */}
                    <div>
                        <h3 className="font-['Tenor_Sans',sans-serif] text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6B4535] font-semibold mb-1">
                            Words for Forever
                        </h3>
                        <p className="font-['Cormorant_Garamond',serif] italic text-base text-stone-600 mb-3">
                            Advice for married life.
                        </p>
                        <textarea
                            rows={3}
                            value={advice}
                            onChange={(e) => setAdvice(e.target.value)}
                            placeholder="Your wisdom for the couple..."
                            className="w-full px-4 py-3 rounded-lg border border-stone-200 bg-white/70 focus:border-[#C9963E] focus:ring-1 focus:ring-[#C9963E] outline-none font-['Cormorant_Garamond',serif] text-base resize-none transition-all"
                        />
                    </div>

                    {/* Send Love Button */}
                    <button
                        type="submit"
                        className="w-full py-4 rounded-lg bg-gradient-to-r from-[#C9963E] to-[#B85940] text-white font-['Tenor_Sans',sans-serif] font-semibold text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-[1.01]"
                    >
                        <Heart className="w-5 h-5 fill-white animate-pulse" />
                        <span>Send Love</span>
                        <Send className="w-5 h-5" />
                    </button>

                    {/* Success Alert */}
                    <AnimatePresence>
                        {isSubmitted && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3 text-emerald-800 text-sm font-['Cormorant_Garamond',serif] text-base"
                            >
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                                <div>
                                    <p className="font-bold">Thank you for your blessings! ✨</p>
                                    <p className="text-xs text-emerald-700">Your love is now part of our digital memory book.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.form>

                {/* Digital Memory Wall Preview (Commented out per request) */}
                {/*
                <div className="mt-14 space-y-4">
                    <div className="text-center flex items-center justify-center gap-2 text-[#C9963E]">
                        <h4 className="font-['Tenor_Sans',sans-serif] text-xs uppercase tracking-[0.25em] text-[#6B4535] font-semibold">
                            Digital Blessings Wall
                        </h4>
                        <Sparkles className="w-4 h-4" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {wishes.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/85 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-[#D4AF37]/20 shadow-sm space-y-2"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-['Playfair_Display',serif] font-bold text-stone-900 text-sm sm:text-base">
                                        {item.name}
                                    </span>
                                    <span className="text-[10px] text-stone-600 font-['Inter',sans-serif]">
                                        {item.date}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-1.5 text-[10px]">
                                    {item.mood && (
                                        <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                                            {item.mood}
                                        </span>
                                    )}
                                    {item.guess && (
                                        <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
                                            Emotional: {item.guess}
                                        </span>
                                    )}
                                </div>

                                <p className="font-['Cormorant_Garamond',serif] italic text-stone-700 text-sm sm:text-base leading-snug pt-1">
                                    &ldquo;{item.note}&rdquo;
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                */}
            </div>
        </section>
    );
};

export default InteractiveGuestQuiz;
