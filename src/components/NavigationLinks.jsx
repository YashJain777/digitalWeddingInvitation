import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const NavigationLinks = () => {
    const location = useLocation();

    const events = [
        { path: '/reception', img: '/ganpati-sthapana.png', title: 'Ganpati Sthapana', date: '7th March' },
        { path: '/sangeet', img: '/haldi.webp', title: 'Haldi & Mehendi', date: '9th March' },
        { path: '/wedding', img: '/wedding-phere.png', title: 'The Wedding', date: '10th March' },
        { path: '/celebration', img: '/celebration-main.png', title: 'Celebration', date: '13th March' }
    ];

    const filteredEvents = events.filter(event => event.path !== location.pathname);

    return (
        <section className="py-16 bg-wedding-bg/50 border-t border-wedding-accent/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h3 className="font-heading text-wedding-primary tracking-widest uppercase text-xs font-bold mb-2">Continue the Celebration</h3>
                    <h2 className="font-fancy text-4xl text-wedding-dark">Other Events</h2>
                    <div className="h-1 w-12 bg-wedding-secondary mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {filteredEvents.map((event, idx) => (
                        <motion.div
                            key={event.path}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <Link to={event.path}>
                                <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg">
                                    <img
                                        src={event.img}
                                        alt={event.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                                        <p className="text-wedding-secondary font-bold text-[10px] tracking-widest uppercase mb-1">{event.date}</p>
                                        <h4 className="font-heading text-xl text-white">{event.title}</h4>
                                        <span className="mt-2 text-white/70 text-[10px] uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">Explore Details →</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NavigationLinks;
