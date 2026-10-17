import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

/**
 * FlowerShower & Diya Blessing
 * Traditional Pushpavrishti (Flower Rain of Marigolds & Rose Petals)
 * with a live communal blessing counter and interactive Diya lighting.
 * Fully mobile-responsive.
 */
const FlowerShower = () => {
    const [blessingCount, setBlessingCount] = useState(386);
    const [isDiyaLit, setIsDiyaLit] = useState(false);
    const [petals, setPetals] = useState([]);
    const [recentShower, setRecentShower] = useState(false);

    useEffect(() => {
        const savedCount = localStorage.getItem('vs_blessing_count');
        if (savedCount) {
            setBlessingCount(parseInt(savedCount, 10));
        }
        const savedDiya = localStorage.getItem('vs_diya_lit');
        if (savedDiya === 'true') {
            setIsDiyaLit(true);
        }
    }, []);

    const showerFlowers = () => {
        const newCount = blessingCount + 1;
        setBlessingCount(newCount);
        localStorage.setItem('vs_blessing_count', newCount.toString());
        setRecentShower(true);

        const newPetals = Array.from({ length: 30 }).map(() => ({
            id: Math.random(),
            x: Math.random() * 100,
            y: -20,
            size: Math.random() * 12 + 9,
            rotation: Math.random() * 360,
            type: ['marigold-gold', 'marigold-orange', 'rose-red', 'rose-pink', 'jasmine'][Math.floor(Math.random() * 5)],
            delay: Math.random() * 0.35,
            duration: Math.random() * 2 + 2.2,
            drift: Math.random() * 70 - 35
        }));

        setPetals(prev => [...prev, ...newPetals]);

        setTimeout(() => {
            setPetals(prev => prev.filter(p => !newPetals.find(np => np.id === p.id)));
            setRecentShower(false);
        }, 4500);
    };

    const toggleDiya = () => {
        const nextState = !isDiyaLit;
        setIsDiyaLit(nextState);
        localStorage.setItem('vs_diya_lit', nextState.toString());
        if (nextState) {
            showerFlowers();
        }
    };

    return (
        <>
            {/* Falling Marigold and Rose Petals Layer */}
            <div className="fixed inset-0 pointer-events-none z-[90] overflow-hidden">
                {petals.map((p) => {
                    let bgStyle = 'linear-gradient(135deg, #FF9900, #FFCC00)';
                    let shape = 'rounded-[50%_0_50%_0]';

                    if (p.type === 'marigold-orange') {
                        bgStyle = 'linear-gradient(135deg, #FF6600, #FF9900)';
                        shape = 'rounded-[60%_20%_60%_20%]';
                    } else if (p.type === 'rose-red') {
                        bgStyle = 'linear-gradient(135deg, #C2185B, #880E4F)';
                        shape = 'rounded-[50%_50%_0_50%]';
                    } else if (p.type === 'rose-pink') {
                        bgStyle = 'linear-gradient(135deg, #FF80AB, #F06292)';
                        shape = 'rounded-[50%_50%_50%_0]';
                    } else if (p.type === 'jasmine') {
                        bgStyle = 'linear-gradient(135deg, #FFFFFF, #FFF9C4)';
                        shape = 'rounded-full';
                    }

                    return (
                        <motion.div
                            key={p.id}
                            initial={{
                                opacity: 1,
                                top: '-30px',
                                left: `${p.x}vw`,
                                rotate: p.rotation,
                                scale: 0.8
                            }}
                            animate={{
                                opacity: [1, 1, 0.8, 0],
                                top: '105vh',
                                left: `calc(${p.x}vw + ${p.drift}px)`,
                                rotate: p.rotation + 400,
                                scale: [0.8, 1.1, 0.9]
                            }}
                            transition={{
                                duration: p.duration,
                                delay: p.delay,
                                ease: 'easeIn'
                            }}
                            style={{
                                position: 'absolute',
                                width: p.size,
                                height: p.size,
                                background: bgStyle,
                                boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
                            }}
                            className={shape}
                        />
                    );
                })}
            </div>

            {/* Bottom-Left Ceremonial Blessing Floating Bar (Mobile optimized) */}
            <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-[80] flex items-center gap-2 select-none">
                {/* Shower Pushpavrishti Button */}
                <motion.button
                    onClick={showerFlowers}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white/90 backdrop-blur-xl border border-[#D4AF37]/40 shadow-[0_6px_20px_rgba(201,150,62,0.2)] text-[#5A3E2B] hover:text-[#B85940] transition-all cursor-pointer group"
                >
                    <span className="text-base sm:text-lg group-hover:rotate-12 transition-transform">🌸</span>
                    <div className="flex flex-col text-left">
                        <span className="font-['Tenor_Sans',sans-serif] text-[9px] sm:text-xs uppercase tracking-widest font-bold text-[#B85940] leading-tight">
                            Blessings
                        </span>
                        <span className="font-['Cormorant_Garamond',serif] italic text-[10px] sm:text-[11px] text-[#7A5847] leading-none">
                            {blessingCount} showered
                        </span>
                    </div>
                    {recentShower && (
                        <Sparkles className="w-3.5 h-3.5 text-[#C9963E] animate-spin" />
                    )}
                </motion.button>

                {/* Auspicious Diya Toggle */}
                <motion.button
                    onClick={toggleDiya}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    aria-label="Light a Diya"
                    className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center backdrop-blur-xl transition-all duration-500 cursor-pointer border ${
                        isDiyaLit
                            ? 'bg-gradient-to-br from-[#FFE082] via-[#FFB300] to-[#E65100] border-[#FFD54F] shadow-[0_0_20px_rgba(255,179,0,0.7)]'
                            : 'bg-white/85 border-[#D4AF37]/35 text-stone-600 hover:border-[#D4AF37]'
                    }`}
                >
                    <span className={`text-base sm:text-lg transition-transform ${isDiyaLit ? 'scale-110 filter drop-shadow-[0_0_5px_#FFD54F]' : 'opacity-75'}`}>
                        🪔
                    </span>
                    {isDiyaLit && (
                        <motion.div
                            animate={{
                                scale: [1, 1.35, 1],
                                opacity: [0.8, 0.25, 0.8]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="absolute -inset-1 rounded-full border border-amber-400 pointer-events-none"
                        />
                    )}
                </motion.button>
            </div>
        </>
    );
};

export default FlowerShower;
