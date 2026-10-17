import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#hero' },
        { name: 'Save The Date', href: '#save-the-date' },
        { name: 'Our Story', href: '#our-story' },
        { name: '7 Pheras', href: '#sacred-vows' },
        { name: 'Ceremonies', href: '#ceremonies' },
        { name: 'Wishes', href: '#guest-celebration' }
    ];

    const handleScroll = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#D4AF37]/25 select-none shadow-sm">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
                {/* Monogram Brand */}
                <div
                    onClick={() => handleScroll('#hero')}
                    className="flex items-center gap-2 sm:gap-2.5 cursor-pointer group"
                >
                    <img
                        src="/SR_Logo.png"
                        alt="SR Logo"
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-110 transition-transform filter drop-shadow-xs"
                    />
                    <span className="font-['Great_Vibes',cursive] text-2xl sm:text-3xl text-[#C9963E] group-hover:text-[#B85940] transition-colors">
                        Sakshi &amp; Rohit
                    </span>
                    <Heart className="w-3.5 h-3.5 text-[#B85940] fill-[#B85940] opacity-80 group-hover:scale-125 transition-transform hidden sm:inline-block" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleScroll(item.href)}
                            className="text-xs font-['Tenor_Sans',sans-serif] uppercase tracking-[0.2em] text-[#5A3E2B] hover:text-[#B85940] transition-colors cursor-pointer py-1 relative group"
                        >
                            <span>{item.name}</span>
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C9963E] transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1.5 rounded-lg text-[#5A3E2B] hover:text-[#B85940] transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#D4AF37]/25 overflow-hidden shadow-lg"
                    >
                        <div className="flex flex-col p-5 space-y-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleScroll(item.href)}
                                    className="text-left text-xs font-['Tenor_Sans',sans-serif] uppercase tracking-[0.2em] text-[#5A3E2B] hover:text-[#B85940] py-2 transition-colors border-b border-stone-100 last:border-none"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
