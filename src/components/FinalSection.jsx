import { motion } from 'framer-motion';

const FinalSection = () => (
    <div className="py-12 md:py-24 flex items-center justify-center bg-gradient-to-b from-white to-wedding-bg">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center pb-10 md:pb-20"
        >
            <p className="font-script text-4xl md:text-6xl text-wedding-primary mb-4 drop-shadow-md">Together Forever</p>
            <p className="font-heading text-lg md:text-2xl text-wedding-secondary mb-4 italic">#PooRa</p>
            <p className="font-sans text-sm md:text-base text-gray-500">Thank you for being part of our journey.</p>
        </motion.div>
    </div>
);

export default FinalSection;
