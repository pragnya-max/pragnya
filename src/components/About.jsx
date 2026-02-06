import { motion } from 'framer-motion'
import './About.css'

const transition = { duration: 1, ease: [0.6, 0.01, 0.05, 0.9] };

const About = () => {
    return (
        <section id="about" className="section-padding">
            <div className="about-container">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={transition}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="section-title">ABOUT ME</div>
                    <h3><span className="highlight">Creative Video Producer</span> & Designer</h3>
                    <p>
                        With 5+ years of experience in the education sector, I create engaging motion graphics and educational videos.
                        I simplify complex ideas into clear, impactful <span className="highlight">visual stories</span>.
                        I develop videos for school children from Class 1 to Class 10, based on the provided content.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About
