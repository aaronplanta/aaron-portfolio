import '../css/header.css'
import { useState, useEffect} from 'react';
import menu from '../images/menu-light.png'

export default function Header(){
    // State to track the visibility of the menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Use an effect to add or remove the `overflow: hidden` style on the body
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Enable scrolling
        }
    }, [isMenuOpen]);


    const scrollToSection = (sectionId) => {
        if (sectionId === 'apnp') {
            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMenuOpen(false);
        } else {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            // Close the menu after selecting a section
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="panel">
            {/* Background overlay */}
            {isMenuOpen && <div className="background-overlay"></div>}

            <button onClick={() => scrollToSection('apnp')} id="main">APNP</button>
            <button onClick={() => scrollToSection('about')} id="main">About</button>
            <button onClick={() => scrollToSection('projects')} id="main">Projects</button>
            {/* <button onClick={() => scrollToSection('services')} id="main">Services</button> */}
            <button onClick={() => scrollToSection('contact')} id="main">Contact</button>
            <button onClick={toggleMenu} id="menu">
                <img className="menu" src={menu} alt="Menu" />
            </button>

            {/* Conditionally render the div */}
            {isMenuOpen && (
                <div className="menu-dropdown">
                    <button onClick={() => scrollToSection('apnp')}>HOME</button>
                    <button onClick={() => scrollToSection('about')}>ABOUT</button>
                    <button onClick={() => scrollToSection('projects')}>PROJECTS</button>
                    {/* <button onClick={() => scrollToSection('services')}>SERVICES</button> */}
                    <button onClick={() => scrollToSection('contact')}>CONTACT</button>
                </div>
            )}
        </div>
    )
}