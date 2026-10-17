import { motion } from 'framer-motion';
import { Camera, ExternalLink, Image as ImageIcon, Sparkles } from 'lucide-react';

const DriveSection = () => {
    return (
        <section className="relative overflow-hidden bg-white/70 backdrop-blur-xl border-b border-wedding-primary/20 mt-16 md:mt-20 z-40">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-wedding-accent/20 rounded-full blur-[80px] -z-10" />
            
            <div className="max-w-7xl mx-auto px-4 py-3 md:py-5">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8">
                    
                    {/* branding & text */}
                    <div className="flex items-center gap-3 md:gap-6 text-left transition-all duration-300">
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.05, 1],
                            }}
                            transition={{ 
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="relative flex-shrink-0"
                        >
                            <div className="p-2 md:p-3.5 bg-gradient-to-br from-wedding-accent to-white rounded-2xl md:rounded-3xl shadow-md border border-wedding-primary/15">
                                <Camera className="w-5 h-5 md:w-7 md:h-7 text-wedding-primary" />
                            </div>
                        </motion.div>
                        
                        <div className="flex flex-col">
                            <h3 className="font-heading text-lg md:text-2xl text-wedding-dark font-bold leading-tight tracking-[0.01em]">
                                Capture Our Moments
                            </h3>
                            <p className="text-[10px] md:text-sm text-wedding-text font-inter opacity-75">
                                Click below to view and download our wedding memories.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons - Compact Grid for Mobile */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 w-full lg:w-auto">
                        
                        {/* Drive 1 */}
                        <motion.a 
                            href="https://drive.google.com/drive/folders/1_uCvQeYK_QXN6bygN38if6EOhxrY5PAo?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex flex-col items-center justify-center p-0.5 bg-wedding-primary rounded-xl shadow-md overflow-hidden"
                        >
                            <div className="w-full bg-wedding-primary text-white px-2 py-2.5 md:py-3 rounded-[0.6rem] flex items-center justify-center gap-2">
                                <span className="text-[11px] md:text-sm font-bold">Pre-Wedding Functions</span>
                                <ImageIcon className="w-3 h-3 md:w-4 md:h-4 opacity-70" />
                            </div>
                        </motion.a>

                        {/* Drive 2 (New) */}
                        <motion.a 
                            href="https://drive.google.com/drive/folders/1UNM0X6FQiu0n9HIFFHF48rpShObGt_Pj"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex flex-col items-center justify-center p-0.5 bg-wedding-primary rounded-xl shadow-md overflow-hidden"
                        >
                            <div className="w-full bg-wedding-primary text-white px-2 py-2.5 md:py-3 rounded-[0.6rem] flex items-center justify-center gap-2">
                                <span className="text-[11px] md:text-sm font-bold">Upload Your Photos Here</span>
                                <Sparkles className="w-3 h-3 md:w-4 md:h-4 opacity-70" />
                            </div>
                        </motion.a>

                        {/* KwikPic (More) */}
                        <motion.a 
                            href="https://www.kwikpic.in/auth/login?uCode=FFZEZR"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex flex-col items-center justify-center p-0.5 bg-wedding-accent rounded-xl shadow-sm overflow-hidden col-span-2 md:col-span-1"
                        >
                            <div className="w-full bg-white text-wedding-primary px-2 py-2.5 md:py-3 rounded-[0.6rem] flex items-center justify-center gap-2 border border-wedding-primary/5">
                                <span className="text-[11px] md:text-sm font-bold">Wedding Pictures</span>
                                <ExternalLink className="w-3 h-3 md:w-4 md:h-4 opacity-70" />
                            </div>
                        </motion.a>

                    </div>
                </div>
            </div>
            
            {/* Bottom light streak */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-wedding-primary/10 to-transparent" />
        </section>
    );
};

export default DriveSection;
