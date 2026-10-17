import { motion } from 'framer-motion';

const Section = ({ title, date, location, image, mapLink, children }) => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="min-h-screen py-24 flex items-center justify-center relative overflow-hidden px-6"
    >
        <div className="absolute inset-0 z-0 bg-cover bg-center grayscale-50 opacity-10" style={{ backgroundImage: `url(${image})` }} />
        <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-6xl font-script text-wedding-primary mb-8">{title}</h2>
            <div className="bg-white/40 backdrop-blur-lg p-12 rounded-3xl border border-white/40 shadow-2xl">
                <p className="text-2xl font-heading mb-4 text-gray-800 tracking-wider uppercase">{date}</p>
                <p className="text-xl text-wedding-secondary mb-8 flex items-center justify-center gap-2">
                    <span className="w-8 h-[1px] bg-wedding-secondary/30" />
                    {location}
                    <span className="w-8 h-[1px] bg-wedding-secondary/30" />
                </p>
                <div className="text-gray-700 leading-relaxed text-lg max-w-2xl mx-auto">
                    {children}
                </div>
                {mapLink && (
                    <motion.a
                        href={mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block mt-12 bg-wedding-primary text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-wedding-primary/30 hover:shadow-wedding-primary/50 transition-all font-sans tracking-widest uppercase text-sm"
                    >
                        Get Directions
                    </motion.a>
                )}
            </div>
        </div>
    </motion.section>
);

export default Section;
