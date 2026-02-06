import { motion } from 'framer-motion'
import { FaLinkedin, FaInstagram, FaBehance, FaEnvelope } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="section-title">Get In Touch</div>

            <div className="contact-container">
                <motion.form
                    className="contact-form"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
                    viewport={{ once: true }}
                >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-input" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-input" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="form-textarea" placeholder="How can I help you?"></textarea>
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
                </motion.form>

                <motion.div
                    className="contact-socials"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <a href="#" className="social-link"><FaLinkedin /></a>
                    <a href="#" className="social-link"><FaBehance /></a>
                    <a href="#" className="social-link"><FaInstagram /></a>
                    <a href="#" className="social-link"><FaEnvelope /></a>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
