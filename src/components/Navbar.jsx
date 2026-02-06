import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'

const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Tools', to: 'tools' },
    { name: 'Work', to: 'work' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
]

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="logo" onClick={closeMenu}>
                    PRAGNYA
                </a>

                <div className="hamburger" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <a
                                href={`#${item.to}`}
                                className="nav-link"
                                onClick={closeMenu}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
