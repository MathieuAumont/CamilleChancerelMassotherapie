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
                <a href="/CamilleChancerelMassotherapie/" className="logoLink">
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
                </nav>
                <Link to="/rendez-vous">
                    <button id='btn-Nav'>
                     Prendre un rendez-vous 🌼​
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

