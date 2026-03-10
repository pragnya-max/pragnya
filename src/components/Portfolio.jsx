import { motion } from 'framer-motion'
import { FaPlayCircle } from 'react-icons/fa'
import './Portfolio.css'

const portfolioItems = [
    { id: 1, image: "/imageforshowreels/1.png", title: "Showreel 1" },
    { id: 2, image: "/imageforshowreels/5.png", title: "Showreel 2" },
    { id: 3, image: "/imageforshowreels/9.png", title: "Showreel 3" },
    { id: 4, image: "/imageforshowreels/13.png", title: "Showreel 4" },
    { id: 5, image: "/imageforshowreels/7.jpg", title: "Showreel 5" },
    { id: 6, image: "/imageforshowreels/Wishes 2025.jpg", title: "Showreel 6" }
]

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const Portfolio = () => {
    return (
        <section id="work" className="section-padding" style={{ background: 'var(--bg-section)' }}>
            <div className="section-title">Selected Works</div>

            <div className="portfolio-grid">
                {portfolioItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="portfolio-card"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ ...transition, delay: index * 0.1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                        <div className="portfolio-thumb" style={{ paddingBottom: '100%', position: 'relative', overflow: 'hidden' }}>
                           <img 
                               src={item.image} 
                               alt={item.title} 
                               style={{
                                   position: 'absolute',
                                   top: 0,
                                   left: 0,
                                   width: '100%',
                                   height: '100%',
                                   objectFit: 'cover'
                               }}
                           />
                            <div className="thumb-overlay" style={{ background: 'rgba(0,0,0,0.5)' }}>
                                <FaPlayCircle />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
