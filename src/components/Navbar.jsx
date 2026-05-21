import React, { useState } from 'react';
import { Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [active, setActive] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = ['Home', 'About', 'Projects', 'Experience', 'Contact'];

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
                    {navLinks.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => setActive(item)}
                                className={`font-poppins font-medium text-[20px] lg:text-[15px] tracking-[-0.02em] transition-all duration-300 px-4 py-2 lg:px-3 lg:py-1.5 ${active === item
                                    ? 'text-[#00FFE1] bg-[#00FFE1]/10 rounded-[7px]'
                                    : 'text-white hover:text-[#00FFE1]/70 hover:bg-white/5 rounded-[7px]'
                                    }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Right: Moon Icon & Mobile Menu Toggle */}
                <div className="flex items-center gap-2 md:gap-4">
                    <button
                        className="flex items-center justify-center text-white hover:text-[#00FFE1] transition-colors p-2 lg:p-1.5 rounded-full hover:bg-white/5"
                        aria-label="Toggle Dark/Light Mode"
                    >
                        <Moon className="w-6 h-6 lg:w-5 lg:h-5" />
                    </button>

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
                    {navLinks.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => {
                                    setActive(item);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`w-full text-left font-poppins font-medium text-[18px] tracking-[-0.02em] transition-all duration-300 px-4 py-3 ${active === item
                                    ? 'text-[#00FFE1] bg-[#00FFE1]/10 rounded-[7px]'
                                    : 'text-white hover:text-[#00FFE1]/70 hover:bg-white/5 rounded-[7px]'
                                    }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
