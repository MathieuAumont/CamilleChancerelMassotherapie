import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '/CCLogoBold.png';

const Navigator: React.FC = () => {
    const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };

    return (
        <header className="headerNav">
            <div className="logoContainer">
                <a href="/" className="logoLink">
                    <img src={logoImg} alt="Logo" className="logo" />
                </a>
                <div className="titleLogo">
                    <div>
                        <span></span>
                    </div>
                </div>
            </div>
            
            {/* Navigation desktop */}
            <div className="navContainer desktop-nav">
                <nav className="navLinks">
                    <Link to="/" className="navLink">
                        Accueil
                    </Link>
                    <Link to="/about" className="navLink">
                        À propos
                    </Link>
                    <Link to="/services" className="navLink">
                        Services 
                    </Link>
                </nav>
                <Link to="/rendez-vous">
                    <button id='btn-Nav'>
                        Prendre un rendez-vous
                    </button>
                </Link>
            </div>

            {/* Bouton hamburger mobile */}
            <div className="mobile-nav-container">
                <button 
                    className="hamburger-btn" 
                    onClick={toggleMobileNav}
                    aria-label="Menu"
                >
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                    <div className="hamburger-line"></div>
                </button>
            </div>

            {/* Menu mobile */}
            {mobileNavOpen && (
                <div className="mobile-nav-menu">
                    <nav className="mobile-nav-links">
                        <Link to="/" className="mobile-nav-link" onClick={toggleMobileNav}>
                            Accueil
                        </Link>
                        <Link to="/about" className="mobile-nav-link" onClick={toggleMobileNav}>
                            À propos
                        </Link>
                        <Link to="/services" className="mobile-nav-link" onClick={toggleMobileNav}>
                            Services 
                        </Link>
                        <Link to="/rendez-vous">
                            <button 
                                className="mobile-nav-btn" 
                                onClick={toggleMobileNav}
                            >
                                Prendre un rendez-vous
                            </button>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navigator;

