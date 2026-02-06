import { motion } from 'framer-motion'
import './Skills.css'

const skillsData = [
    "Motion Graphics",
    "Educational Videos",
    "Storyboarding",
    "Visual Design",
    "Presentation Design"
]

const Skills = () => {
    return (
        <section id="skills" className="section-padding">
            <div className="section-title">Skills</div>

            <div className="skills-grid">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1, ease: "backOut" }}
                        viewport={{ once: true }}
                    >
                        <h4 className="skill-title">{skill}</h4>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Skills
