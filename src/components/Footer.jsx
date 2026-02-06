import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Pragnya Priyadarsini. All rights reserved.</p>
                <p className="footer-credit">Designed with Creativity</p>
            </div>
        </footer>
    )
}

export default Footer
