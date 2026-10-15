import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const HEART_MASK = "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 185' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 185 C100 185, 200 125, 200 70 C200 23, 157 -10, 121.5 15 C100 31, 100 31, 100 31 C100 31, 100 31, 78.5 15 C43 -10, 0 23, 0 70 C0 125, 100 185, 100 185 Z' fill='black'/%3E%3C/svg%3E\")";

const HeartScratchItem = ({ label, value, onReveal }) => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const isDrawingRef = useRef(false);
    const isRevealedRef = useRef(false);
    const isInitializedRef = useRef(false);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const init = () => {
            const canvas = canvasRef.current;
            if (!canvas || isInitializedRef.current) return;
            const rect = container.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) return;

            isInitializedRef.current = true;
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) return;

            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.scale(dpr, dpr);

            // Rich terracotta foil coating
            ctx.fillStyle = '#B85940';
            ctx.fillRect(0, 0, rect.width, rect.height);

            // Centered SCRATCH text
            ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
            ctx.font = "bold 10px 'Tenor Sans', sans-serif";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('SCRATCH', rect.width / 2, rect.height / 2 + 2);
        };

        init();
        const resizeObserver = new ResizeObserver(init);
        resizeObserver.observe(container);

        return () => resizeObserver.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const checkCompletion = (ctx) => {
            if (isRevealedRef.current) return;
            const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
            let clearedCount = 0;
            const totalSamples = imgData.length / 32;

            for (let i = 3; i < imgData.length; i += 32) {
                if (imgData[i] < 128) clearedCount++;
            }

            if ((clearedCount / totalSamples) * 100 > 40) {
                triggerReveal();
            }
        };

        const triggerReveal = () => {
            if (isRevealedRef.current) return;
            isRevealedRef.current = true;
            canvas.style.transition = 'opacity 0.8s ease-out';
            canvas.style.opacity = '0';
            setTimeout(() => {
                canvas.style.display = 'none';
                if (onReveal) onReveal();
            }, 800);
        };

        const handleMove = (e) => {
            if (!isDrawingRef.current || isRevealedRef.current || !isInitializedRef.current) return;

            if (e.cancelable && e.type.startsWith('touch')) {
                e.preventDefault();
            }

            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) return;

            const canvasRect = canvas.getBoundingClientRect();
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

            const x = clientX - canvasRect.left;
            const y = clientY - canvasRect.top;

            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            const radius = Math.max(16, canvasRect.width * 0.22);
            ctx.arc(x, y, radius, 0, 2 * Math.PI);
            ctx.fill();

            if (Math.random() > 0.2) {
                checkCompletion(ctx);
            }
        };

        const handleStart = (e) => {
            isDrawingRef.current = true;
            handleMove(e);
        };

        const handleEnd = () => {
            isDrawingRef.current = false;
        };

        // Tap/click to reveal easily on mobile
        const handleClick = () => {
            if (!isRevealedRef.current) {
                const ctx = canvas.getContext('2d', { willReadFrequently: true });
                if (ctx) {
                    const canvasRect = canvas.getBoundingClientRect();
                    ctx.globalCompositeOperation = 'destination-out';
                    ctx.beginPath();
                    ctx.arc(canvasRect.width / 2, canvasRect.height / 2, canvasRect.width * 0.45, 0, 2 * Math.PI);
                    ctx.fill();
                    checkCompletion(ctx);
                }
            }
        };

        canvas.addEventListener('mousedown', handleStart);
        canvas.addEventListener('touchstart', handleStart, { passive: false });
        window.addEventListener('mouseup', handleEnd);
        window.addEventListener('touchend', handleEnd);
        canvas.addEventListener('mousemove', handleMove);
        canvas.addEventListener('touchmove', handleMove, { passive: false });
        canvas.addEventListener('click', handleClick);

        return () => {
            canvas.removeEventListener('mousedown', handleStart);
            canvas.removeEventListener('touchstart', handleStart);
            window.removeEventListener('mouseup', handleEnd);
            window.removeEventListener('touchend', handleEnd);
            canvas.removeEventListener('mousemove', handleMove);
            canvas.removeEventListener('touchmove', handleMove);
            canvas.removeEventListener('click', handleClick);
        };
    }, [onReveal]);

    return (
        <div
            ref={containerRef}
            className="relative cursor-crosshair touch-none select-none"
            style={{
                width: '35vw',
                maxWidth: '140px',
                aspectRatio: '1.1 / 1.2',
                maskImage: HEART_MASK,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskImage: HEART_MASK,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                background: '#FDF0E8'
            }}
        >
            {/* The Date text underneath */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-[1] pointer-events-none">
                <span
                    style={{
                        fontFamily: "'Tenor Sans', sans-serif",
                        fontSize: '0.75rem',
                        letterSpacing: '0.15em',
                        color: '#9E7060',
                        textTransform: 'uppercase',
                        marginBottom: '2px'
                    }}
                >
                    {label}
                </span>
                <span
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '1.8rem',
                        fontWeight: 600,
                        color: '#B85940',
                        lineHeight: 1,
                        textShadow: '0 2px 10px rgba(255,255,255,0.8)'
                    }}
                >
                    {value}
                </span>
            </div>

            {/* The Scratchable Canvas Overlay */}
            <canvas ref={canvasRef} className="absolute inset-0 z-[2] w-full h-full" />
        </div>
    );
};

const ScratchCardDate = () => {
    const [revealedCount, setRevealedCount] = useState(0);
    const [isFullyRevealed, setIsFullyRevealed] = useState(false);
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

    const handleSingleReveal = useCallback(() => {
        setRevealedCount((prev) => prev + 1);
    }, []);

    // When 3 === revealedCount: trigger confetti & reveal countdown
    useEffect(() => {
        if (revealedCount >= 3 && !isFullyRevealed) {
            setIsFullyRevealed(true);

            // Confetti Cannon from left & right matching reference
            setTimeout(() => {
                const duration = Date.now() + 3000;
                const colors = ['#B85940', '#C9963E', '#E8C07A', '#FFFFFF'];

                const frame = () => {
                    confetti({
                        particleCount: 5,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0, y: 0.6 },
                        colors: colors,
                        zIndex: 9999
                    });
                    confetti({
                        particleCount: 5,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1, y: 0.6 },
                        colors: colors,
                        zIndex: 9999
                    });
                    if (Date.now() < duration) {
                        requestAnimationFrame(frame);
                    }
                };
                frame();
            }, 600);
        }
    }, [revealedCount, isFullyRevealed]);

    // Live Countdown Timer to November 21, 2026
    useEffect(() => {
        if (!isFullyRevealed) return;

        const targetDate = new Date('November 21, 2026 00:00:00').getTime();

        const updateTimer = () => {
            const diff = targetDate - Date.now();
            if (diff <= 0) {
                setCountdown({ days: 0, hours: 0, mins: 0, secs: 0 });
            } else {
                setCountdown({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                    secs: Math.floor((diff % (1000 * 60)) / 1000)
                });
            }
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, [isFullyRevealed]);

    return (
        <section id="save-the-date" className="py-20 px-6 text-center select-none" style={{ background: '#FFF8F3' }}>
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
            >
                <span
                    style={{
                        fontFamily: "'Tenor Sans', sans-serif",
                        fontSize: '0.65rem',
                        letterSpacing: '0.35em',
                        textTransform: 'uppercase',
                        color: '#C9963E',
                        display: 'block',
                        marginBottom: '0.75rem'
                    }}
                >
                    Save The Date
                </span>
                <h2
                    style={{
                        fontFamily: "'Great Vibes', cursive",
                        fontSize: 'clamp(3rem, 10vw, 5rem)',
                        lineHeight: 1.1,
                        color: '#B85940'
                    }}
                >
                    Reveal Our<br />Big Day
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-4 mb-4"
                style={{
                    fontStyle: 'italic',
                    color: '#9E7060',
                    fontSize: '1.1rem'
                }}
            >
                Scratch the hearts to reveal
            </motion.p>

            {/* The 3 Scratch Hearts Container matching reference */}
            <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-4 w-full max-w-[440px] mx-auto mt-8"
            >
                <HeartScratchItem label="DAY" value="21" onReveal={handleSingleReveal} />
                <HeartScratchItem label="MONTH" value="Nov" onReveal={handleSingleReveal} />
                <HeartScratchItem label="YEAR" value="2026" onReveal={handleSingleReveal} />
            </motion.div>

            {/* "The start of a beautiful journey..." message */}
            <AnimatePresence>
                {isFullyRevealed && (
                    <motion.div
                        key="message"
                        className="mt-8"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <p
                            style={{
                                fontFamily: "'Great Vibes', cursive",
                                fontSize: 'clamp(2.2rem, 7vw, 2.8rem)',
                                color: '#B85940'
                            }}
                        >
                            The start of a beautiful journey...
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Live Countdown Timer Boxes matching reference */}
            <AnimatePresence>
                {isFullyRevealed && (
                    <motion.div
                        key="countdown"
                        className="flex justify-center gap-3 mt-6 flex-wrap"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                    >
                        {[
                            { value: countdown.days, label: 'Days' },
                            { value: countdown.hours, label: 'Hrs' },
                            { value: countdown.mins, label: 'Mins' },
                            { value: countdown.secs, label: 'Secs' }
                        ].map((t) => (
                            <div
                                key={t.label}
                                className="flex flex-col items-center justify-center rounded-xl min-w-[70px]"
                                style={{
                                    background: '#FFFFFF',
                                    border: '1px solid #EEDDD3',
                                    padding: '0.8rem 1rem',
                                    boxShadow: '0 20px 60px -10px rgba(92,34,51,0.12)'
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontSize: '1.8rem',
                                        fontWeight: 600,
                                        color: '#B85940',
                                        lineHeight: 1
                                    }}
                                >
                                    {t.value < 10 ? `0${t.value}` : t.value}
                                </span>
                                <small
                                    style={{
                                        fontFamily: "'Tenor Sans', sans-serif",
                                        fontSize: '0.55rem',
                                        letterSpacing: '0.15em',
                                        color: '#9E7060',
                                        textTransform: 'uppercase',
                                        marginTop: '0.3rem'
                                    }}
                                >
                                    {t.label}
                                </small>
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ScratchCardDate;
