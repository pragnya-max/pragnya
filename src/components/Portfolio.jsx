import { motion } from 'framer-motion'
import { FaPlayCircle } from 'react-icons/fa'
import './Portfolio.css'

const portfolioItems = [
    { id: 1, title: "University Promo", category: "Motion Graphics", color: "#1c54da" },
    { id: 2, title: "Science Explained", category: "Educational", color: "#fcd476" },
    { id: 3, title: "Corporate Showreel", category: "Video Editing", color: "#ff6b6b" },
    { id: 4, title: "E-Learning Series", category: "Instructional Design", color: "#4ecdc4" },
    { id: 5, title: "Logo Animation", category: "Branding", color: "#45b7d1" },
    { id: 6, title: "Social Media Ads", category: "Digital Marketing", color: "#96ceb4" }
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
                        <div className="portfolio-thumb">
                            <div className="thumb-overlay" style={{ background: item.color }}>
                                <FaPlayCircle />
                            </div>
                        </div>
                        <div className="portfolio-info">
                            <h3>{item.title}</h3>
                            <p>{item.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio
