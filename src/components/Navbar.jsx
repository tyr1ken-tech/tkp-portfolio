import React, { useState } from 'react';
import { Moon, Menu, X, Bookmark } from 'lucide-react';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    // Map nav links to section IDs
    const navLinksData = [
        { name: 'Home', id: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Projects', id: 'portfolio' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' }
    ];

    // Handle smooth scroll to section
    const handleNavClick = (linkName, sectionId) => {
        setActive(linkName);
        
        if (sectionId === 'hero') {
            // Scroll to top for Home
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            // Scroll to section by ID
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        
        // Close mobile menu after clicking
        setIsMobileMenuOpen(false);
    };

    // Handle bookmark functionality
    const handleBookmark = () => {
        if (typeof window !== 'undefined') {
            if (isBookmarked) {
                // Remove bookmark
                setIsBookmarked(false);
                alert('Removed from bookmarks');
            } else {
                // Add bookmark
                if (window.sidebar && window.sidebar.addPanel) {
                    window.sidebar.addPanel(document.title, window.location.href, '');
                } else if (window.external && window.external.AddFavorite) {
                    window.external.AddFavorite(window.location.href, document.title);
                } else {
                    alert(`To bookmark this page, press ${navigator.userAgent.indexOf('Mac') !== -1 ? 'Cmd+D' : 'Ctrl+D'}`);
                }
                setIsBookmarked(true);
            }
        }
    };

    return (
        <div
            className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[98%] max-w-6xl"
        >
            <nav className="flex items-center justify-between w-full px-6 py-3 md:px-8 md:py-4 lg:py-2.5 lg:px-6 bg-[#181C21] border border-[#a4a4a4]/25 rounded-[11px] backdrop-blur-md transition-all duration-300">

                {/* Left: Logo */}
                <div className="flex-shrink-0 cursor-pointer">
                    <span className="font-poppins font-extrabold text-[24px] lg:text-[20px] text-white">
                        TKP.
                    </span>
                </div>

                {/* Center: Navigation Links (Desktop) */}
                <ul className="hidden md:flex items-center justify-center gap-1 lg:gap-4">
                    {navLinksData.map((link) => (
                        <li key={link.name}>
                            <button
                                onClick={() => handleNavClick(link.name, link.id)}
                                className={`font-poppins font-medium text-[20px] lg:text-[15px] tracking-[-0.02em] transition-all duration-300 px-4 py-2 lg:px-3 lg:py-1.5 ${active === link.name
                                    ? 'text-[#00FFE1] bg-[#00FFE1]/10 rounded-[7px]'
                                    : 'text-white hover:text-[#00FFE1]/70 hover:bg-white/5 rounded-[7px]'
                                    }`}
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Right: Moon Icon, Bookmark Icon & Mobile Menu Toggle */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* <button
                        onClick={handleBookmark}
                        className={`flex items-center justify-center transition-colors p-2 lg:p-1.5 rounded-full hover:bg-white/5 ${
                            isBookmarked 
                                ? 'text-[#00FFE1]' 
                                : 'text-white hover:text-[#00FFE1]'
                        }`}
                        aria-label="Bookmark this page"
                        title={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
                    >
                        <Bookmark 
                            className={`w-6 h-6 lg:w-5 lg:h-5 ${isBookmarked ? 'fill-current' : ''}`} 
                        />
                    </button> */}

                    {/* <button
                        className="flex items-center justify-center text-white hover:text-[#00FFE1] transition-colors p-2 lg:p-1.5 rounded-full hover:bg-white/5"
                        aria-label="Toggle Dark/Light Mode"
                    >
                        <Moon className="w-6 h-6 lg:w-5 lg:h-5" />
                    </button> */}

                    <button
                        className="md:hidden flex items-center justify-center text-white p-2 hover:bg-white/5 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden absolute top-[110%] left-0 w-full bg-[#181C21] border border-[#a4a4a4]/25 rounded-[15px] backdrop-blur-md overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 border-transparent'
                    }`}
            >
                <ul className="flex flex-col p-4 gap-2">
                    {navLinksData.map((link) => (
                        <li key={link.name}>
                            <button
                                onClick={() => handleNavClick(link.name, link.id)}
                                className={`w-full text-left font-poppins font-medium text-[18px] tracking-[-0.02em] transition-all duration-300 px-4 py-3 ${active === link.name
                                    ? 'text-[#00FFE1] bg-[#00FFE1]/10 rounded-[7px]'
                                    : 'text-white hover:text-[#00FFE1]/70 hover:bg-white/5 rounded-[7px]'
                                    }`}
                            >
                                {link.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
