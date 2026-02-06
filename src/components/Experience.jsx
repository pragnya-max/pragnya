import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import './Experience.css'

const experienceData = [
    {
        company: "AvetiLearning",
        role: "Graphics Designer",
        duration: "3 Years • Full-time",
        description: [
            "Designed content-based educational videos for Classes 1–10.",
            "Created engaging graphics, motion visuals, and PowerPoint presentations to support learning."
        ]
    }
]

const transition = { duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] };

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="section-title">Experience</div>
            <p className="section-subtitle">My professional journey in the EdTech industry.</p>

            <div className="timeline-container">
                {experienceData.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ...transition, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="exp-header">
                                <FaBriefcase className="exp-icon" />
                                <h3 className="exp-company">{exp.company}</h3>
                            </div>
                            <h4 className="exp-role">{exp.role}</h4>
                            <span className="exp-duration">{exp.duration}</span>
                            <ul className="exp-description">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default Experience
