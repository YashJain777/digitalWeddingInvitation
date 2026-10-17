import { motion } from 'framer-motion';

const ComplimentSection = () => (
    <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-10 md:space-y-16"
            >
                <div className="space-y-4 md:space-y-6">
                    <h2 className="font-fancy text-4xl md:text-5xl text-wedding-primary">With Best Compliments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 font-sans tracking-wide uppercase text-sm">
                        <p>Gunwanti — Late G G Agarwal</p>
                        <p>Rajkumari — Purushottam Agarwal</p>
                        <p>Deepika — Late Prakash Agarwal</p>
                        <p>Ritu — Rakesh Agarwal</p>
                        <p>Deepti — Vishal Agarwal</p>
                        <p>Nitika — Prakhar Agarwal</p>
                        <p className="md:col-span-2">Ritvika, Anushka, Saanvi Agarwal</p>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <h2 className="font-fancy text-4xl md:text-5xl text-wedding-primary">Maternal Family</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 font-sans tracking-wide uppercase text-sm">
                        <p>Vimla — Suresh Chand Jalan</p>
                        <p>Lalita — Prashant Jalan</p>
                        <p>Mihir Jalan</p>
                    </div>
                </div>

                <div className="space-y-4 md:space-y-6">
                    <h2 className="font-fancy text-4xl md:text-5xl text-wedding-primary">Special Requests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 font-sans tracking-wide uppercase text-sm">
                        <p>Ranjana — Late Vivek Agarwal</p>
                        <p>Prachi — Navneet Agarwal</p>
                        <p>Shweta — Kamal</p>
                        <p>Radhika — Deepank</p>
                        <p>Himali — Akshay</p>
                    </div>
                </div>

                <p className="font-script text-2xl md:text-3xl text-wedding-secondary pt-6 md:pt-10 italic">
                    We look forward to celebrating with you!
                </p>
            </motion.div>
        </div>
    </section>
);

export default ComplimentSection;
