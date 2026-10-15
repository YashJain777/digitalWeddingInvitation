import React from 'react';
import { motion } from 'framer-motion';

const GaneshaSection = () => (
    <section className="py-10 md:py-20 bg-gradient-to-b from-wedding-bg to-wedding-accent/30 relative">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="card-glass p-4 md:p-6 rounded-[30px] md:rounded-[50px]"
            >
                <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-32 h-32 md:w-48 md:h-48">
                        <div className="absolute inset-0 bg-gradient-to-br from-wedding-primary/40 via-wedding-secondary/20 to-transparent blur-3xl scale-150 animate-pulse"></div>
                        <svg viewBox="0 0 300 300" className="w-full h-full relative drop-shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                            <defs>
                                <linearGradient id="ganeshBody" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#D4AF37"></stop>
                                    <stop offset="100%" stopColor="#B49141"></stop>
                                </linearGradient>
                                <linearGradient id="ganeshGold" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#ffd700"></stop>
                                    <stop offset="30%" stopColor="#ffed4a"></stop>
                                    <stop offset="60%" stopColor="#d4af37"></stop>
                                    <stop offset="100%" stopColor="#b8860b"></stop>
                                </linearGradient>
                                <linearGradient id="ganeshCrown" x1="0%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" stopColor="#d4af37"></stop>
                                    <stop offset="50%" stopColor="#ffd700"></stop>
                                    <stop offset="100%" stopColor="#fff8dc"></stop>
                                </linearGradient>
                                <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                                    <stop offset="0%" stopColor="#ffd700" stopOpacity="0.3"></stop>
                                    <stop offset="100%" stopColor="#ffd700" stopOpacity="0"></stop>
                                </radialGradient>
                                <filter id="goldGlow">
                                    <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                                    <feMerge>
                                        <feMergeNode in="blur"></feMergeNode>
                                        <feMergeNode in="SourceGraphic"></feMergeNode>
                                    </feMerge>
                                </filter>
                            </defs>
                            <circle cx="150" cy="130" r="120" fill="url(#haloGlow)"></circle>
                            <circle cx="150" cy="150" r="140" fill="none" stroke="url(#ganeshGold)" strokeWidth="2" strokeDasharray="8,4" opacity="0.6"></circle>
                            <circle cx="150" cy="150" r="135" fill="none" stroke="url(#ganeshGold)" strokeWidth="1" opacity="0.4"></circle>
                            <ellipse cx="195" cy="270" rx="20" ry="12" fill="#ff69b4" opacity="0.8" transform="rotate(0 195 270)"></ellipse>
                            <ellipse cx="188.97114317029974" cy="276" rx="20" ry="12" fill="#ff1493" opacity="0.8" transform="rotate(30 188.97114317029974 276)"></ellipse>
                            <ellipse cx="172.5" cy="280.39230484541326" rx="20" ry="12" fill="#ff69b4" opacity="0.8" transform="rotate(60 172.5 280.39230484541326)"></ellipse>
                            <ellipse cx="150" cy="282" rx="20" ry="12" fill="#ff1493" opacity="0.8" transform="rotate(90 150 282)"></ellipse>
                            <ellipse cx="127.50000000000001" cy="280.39230484541326" rx="20" ry="12" fill="#ff69b4" opacity="0.8" transform="rotate(120 127.50000000000001 280.39230484541326)"></ellipse>
                            <ellipse cx="111.02885682970026" cy="276" rx="20" ry="12" fill="#ff1493" opacity="0.8" transform="rotate(150 111.02885682970026 276)"></ellipse>
                            <ellipse cx="105" cy="270" rx="20" ry="12" fill="#ff69b4" opacity="0.8" transform="rotate(180 105 270)"></ellipse>
                            <ellipse cx="111.02885682970026" cy="264" rx="20" ry="12" fill="#ff1493" opacity="0.8" transform="rotate(210 111.02885682970026 264)"></ellipse>
                            <ellipse cx="127.49999999999997" cy="259.60769515458674" rx="20" ry="12" fill="#ff69b4" opacity="0.8" transform="rotate(240 127.49999999999997 259.60769515458674)"></ellipse>
                            <ellipse cx="150" cy="258" rx="20" ry="12" fill="#ff1493" opacity="0.8" transform="rotate(270 150 258)"></ellipse>
                            <ellipse cx="172.5" cy="259.60769515458674" rx="20" ry="12" fill="#ff69b4" opacity="0.8" transform="rotate(300 172.5 259.60769515458674)"></ellipse>
                            <ellipse cx="188.97114317029974" cy="264" rx="20" ry="12" fill="#ff1493" opacity="0.8" transform="rotate(330 188.97114317029974 264)"></ellipse>
                            <ellipse cx="150" cy="270" rx="30" ry="15" fill="url(#ganeshGold)" filter="url(#goldGlow)"></ellipse>
                            <ellipse cx="150" cy="200" rx="55" ry="65" fill="url(#ganeshBody)"></ellipse>
                            <ellipse cx="150" cy="210" rx="20" ry="15" fill="none" stroke="url(#ganeshGold)" strokeWidth="3" filter="url(#goldGlow)"></ellipse>
                            <circle cx="150" cy="210" r="8" fill="url(#ganeshGold)" filter="url(#goldGlow)"></circle>
                            <ellipse cx="150" cy="110" rx="50" ry="45" fill="url(#ganeshBody)"></ellipse>
                            <ellipse cx="85" cy="110" rx="30" ry="40" fill="url(#ganeshBody)"></ellipse>
                            <ellipse cx="85" cy="110" rx="20" ry="28" fill="#ffb088" opacity="0.5"></ellipse>
                            <ellipse cx="85" cy="110" rx="18" ry="25" fill="none" stroke="url(#ganeshGold)" strokeWidth="2"></ellipse>
                            <ellipse cx="215" cy="110" rx="30" ry="40" fill="url(#ganeshBody)"></ellipse>
                            <ellipse cx="215" cy="110" rx="20" ry="28" fill="#ffb088" opacity="0.5"></ellipse>
                            <ellipse cx="215" cy="110" rx="18" ry="25" fill="none" stroke="url(#ganeshGold)" strokeWidth="2"></ellipse>
                            <path d="M100 80 L110 40 L125 65 L140 25 L150 55 L160 25 L175 65 L190 40 L200 80" fill="url(#ganeshCrown)" filter="url(#goldGlow)"></path>
                            <circle cx="150" cy="35" r="8" fill="#ff0000" filter="url(#goldGlow)"></circle>
                            <circle cx="125" cy="55" r="5" fill="#00ff00"></circle>
                            <circle cx="175" cy="55" r="5" fill="#0088ff"></circle>
                            <circle cx="110" cy="60" r="4" fill="#ff00ff"></circle>
                            <circle cx="190" cy="60" r="4" fill="#00ffff"></circle>
                            <path d="M150 130 Q135 150 130 175 Q127 195 140 200 Q148 202 152 195 Q158 170 150 145" fill="url(#ganeshBody)" stroke="#e85d04" strokeWidth="1"></path>
                            <path d="M135 155 Q145 158 155 155" fill="none" stroke="#e85d04" strokeWidth="1" opacity="0.5"></path>
                            <path d="M133 165 Q143 168 153 165" fill="none" stroke="#e85d04" strokeWidth="1" opacity="0.5"></path>
                            <path d="M131 175 Q141 178 151 175" fill="none" stroke="#e85d04" strokeWidth="1" opacity="0.5"></path>
                            <ellipse cx="125" cy="100" rx="12" ry="8" fill="#1a1a1a"></ellipse>
                            <ellipse cx="175" cy="100" rx="12" ry="8" fill="#1a1a1a"></ellipse>
                            <ellipse cx="128" cy="98" rx="4" ry="3" fill="#ffffff"></ellipse>
                            <ellipse cx="178" cy="98" rx="4" ry="3" fill="#ffffff"></ellipse>
                            <ellipse cx="150" cy="85" rx="5" ry="12" fill="#ff4500"></ellipse>
                            <circle cx="150" cy="76" r="4" fill="url(#ganeshGold)" filter="url(#goldGlow)"></circle>
                            <ellipse cx="85" cy="190" rx="18" ry="35" fill="url(#ganeshBody)"></ellipse>
                            <ellipse cx="215" cy="190" rx="18" ry="35" fill="url(#ganeshBody)"></ellipse>
                            <ellipse cx="85" cy="215" rx="12" ry="5" fill="url(#ganeshGold)" filter="url(#goldGlow)"></ellipse>
                            <ellipse cx="215" cy="215" rx="12" ry="5" fill="url(#ganeshGold)" filter="url(#goldGlow)"></ellipse>
                            <ellipse cx="80" cy="230" rx="15" ry="12" fill="#f5deb3" stroke="url(#ganeshGold)" strokeWidth="2"></ellipse>
                            <path d="M70 225 Q80 235 90 225" fill="none" stroke="#daa520" strokeWidth="1"></path>
                            <ellipse cx="220" cy="230" rx="8" ry="12" fill="url(#ganeshGold)" filter="url(#goldGlow)"></ellipse>
                            <path d="M110 150 Q150 175 190 150" fill="none" stroke="url(#ganeshGold)" strokeWidth="4" filter="url(#goldGlow)"></path>
                            <circle cx="150" cy="165" r="10" fill="url(#ganeshGold)" filter="url(#goldGlow)"></circle>
                            <circle cx="150" cy="165" r="5" fill="#ff0000"></circle>
                            <path d="M120 140 Q100 180 120 240" fill="none" stroke="url(#ganeshGold)" strokeWidth="2" opacity="0.8"></path>
                        </svg>
                    </div>
                </div>
                <h2 className="font-fancy text-xl sm:text-4xl text-gold-gradient mb-4 md:mb-6 py-2 md:py-4 leading-[1.3]">|| Shri Ganeshay Namah ||</h2>

                <div className="mb-6 md:mb-12 text-wedding-text max-w-2xl mx-auto space-y-6 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 relative">
                        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-wedding-primary/20 hidden md:block"></div>
                        <div className="space-y-3 md:space-y-4">
                            <h4 className="font-heading text-lg md:text-xl text-wedding-dark tracking-widest uppercase">The Groom Side</h4>
                            <div className="space-y-1">
                                <p className="text-[10px] md:text-xs uppercase font-bold text-wedding-primary">Grandson of:</p>
                                <p className="font-heading text-base md:text-lg">Smt Gunwanti Agarwal & <br /> Late Dr Girdhar Gopal Ji</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] md:text-xs uppercase font-bold text-wedding-primary">Son of:</p>
                                <p className="font-heading text-base md:text-lg">Smt (Adv) Ritu & <br /> Shri Rakesh Ji Agarwal</p>
                            </div>
                        </div>

                        <div className="space-y-3 md:space-y-4">
                            <h4 className="font-heading text-lg md:text-xl text-wedding-dark tracking-widest uppercase">The Bride Side</h4>
                            <div className="space-y-1">
                                <p className="text-[10px] md:text-xs uppercase font-bold text-wedding-primary">Granddaughter of:</p>
                                <p className="font-heading text-base md:text-lg">Late Smt Jana Devi & <br /> Shri Shivnathmal Devaram Ji</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] md:text-xs uppercase font-bold text-wedding-primary">Daughter of:</p>
                                <p className="font-heading text-base md:text-lg">Smt Sharda & <br /> Late Shri Kailash Ji Kumawat</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="h-[1px] w-24 md:w-32 bg-gradient-to-r from-transparent via-wedding-primary to-transparent"></div>
                    </div>

                    <p className="font-script text-xl md:text-3xl leading-relaxed text-wedding-text italic px-2 md:px-4">
                        "We request the pleasure of your presence for the wedding celebrations of Rahul & Pooja. Your presence will add joy to our new beginnings."
                    </p>
                </div>
            </motion.div>
        </div>
    </section>
);

export default GaneshaSection;
