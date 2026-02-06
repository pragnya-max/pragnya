import { motion } from 'framer-motion'
import { SiAdobeaftereffects, SiAdobephotoshop, SiOpenai, SiGoogle } from 'react-icons/si'
import { FaVideo, FaPen, FaFilePowerpoint } from 'react-icons/fa' // Fallbacks
import './Tools.css'

const toolsData = [
    { name: "After Effects", icon: <SiAdobeaftereffects /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "CorelDRAW", icon: <FaPen /> },
    { name: "Camtasia", icon: <FaVideo /> },
    { name: "PowerPoint", icon: <FaFilePowerpoint /> },
    { name: "ChatGPT", icon: <SiOpenai /> },
    { name: "Gemini AI", icon: <SiGoogle /> }
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "backOut"
        }
    }
}

const Tools = () => {
    return (
        <section id="tools" className="section-padding">
            <div className="section-title">Tools I Use</div>

            <motion.div
                className="tools-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
            >
                {toolsData.map((tool, index) => (
                    <motion.div key={index} className="tool-item" variants={item}>
                        <div className="tool-icon">
                            {tool.icon}
                        </div>
                        <span className="tool-name">{tool.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Tools
