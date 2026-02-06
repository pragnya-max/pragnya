import { motion } from 'framer-motion'
import profileImg from '../assets/PROFILE.jpeg'
import './Hero.css'

const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

const firstName = {
    initial: {
        y: 0,
    },
    animate: {
        y: 0,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
};

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={transition}
                >
                    <motion.div
                        className="hero-intro"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...transition, delay: 0.2 }}
                    >
                        Hi, I'm Pragnya
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                        animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        transition={{ ...transition, delay: 0.4 }}
                    >
                        Senior <span className="highlight">Motion Graphics</span> Designer
                    </motion.h1>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...transition, delay: 0.6 }}
                    >
                        Crafting visual stories that simplify complex ideas and enhance learning experiences.
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...transition, delay: 0.8 }}
                    >
                        <a href="#work" className="btn-primary">View My Work</a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ ...transition, delay: 0.4 }}
                >
                    <div className="image-wrapper">
                        <img src={profileImg} alt="Pragnya - Motion Graphics Designer" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
