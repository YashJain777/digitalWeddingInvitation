import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = ({ isOpen }) => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    // Start playing by default when invitation is opened
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !isOpen) return;

        audio.volume = 0.6;

        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);

        audio.addEventListener('play', onPlay);
        audio.addEventListener('pause', onPause);

        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((err) => {
                    console.log("Browser autoplay restriction waiting for user interaction:", err);
                    setIsPlaying(false);
                });
        }

        return () => {
            audio.removeEventListener('play', onPlay);
            audio.removeEventListener('pause', onPause);
        };
    }, [isOpen]);

    // Click on button explicitly toggles play / pause
    const togglePlay = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const audio = audioRef.current;
        if (!audio) return;

        if (!audio.paused) {
            audio.pause();
            setIsPlaying(false);
        } else {
            audio.play()
                .then(() => setIsPlaying(true))
                .catch((err) => console.log("Manual play failed:", err));
        }
    };

    return (
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-[80] select-none">
            <audio
                ref={audioRef}
                src="/wedding-music.mp3"
                loop
                preload="auto"
            />

            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label={isPlaying ? "Stop Music" : "Play Music"}
                title={isPlaying ? "Stop Music" : "Play Music"}
                className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(184,89,64,0.35)] transition-all duration-300 overflow-hidden cursor-pointer bg-[#B85940] hover:bg-[#A34832] text-white border-2 border-white/50"
            >
                {/* Audio pulse wave rings when playing */}
                {isPlaying && (
                    <>
                        <motion.div
                            animate={{
                                scale: [1, 1.5, 1.9],
                                opacity: [0.6, 0.2, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                            className="absolute inset-0 rounded-full bg-[#B85940] -z-10"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1.7],
                                opacity: [0.5, 0.15, 0]
                            }}
                            transition={{
                                duration: 2,
                                delay: 0.6,
                                repeat: Infinity,
                                ease: "easeOut"
                            }}
                            className="absolute inset-0 rounded-full bg-[#D4AF37] -z-10"
                        />
                    </>
                )}

                <div className="relative z-10 pointer-events-none">
                    {isPlaying ? (
                        <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                        <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white/80" />
                    )}
                </div>
            </motion.button>
        </div>
    );
};

export default MusicPlayer;
