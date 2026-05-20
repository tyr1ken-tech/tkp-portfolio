import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const Hero = () => {
    const titles = [
        "UI/UX Designer",
        "Web Developer",
        "Graphic Designer",
        "Layout Artist"
    ];

    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timer;
        const fullText = titles[currentTitleIndex];

        if (!isDeleting && currentText === fullText) {
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && currentText === '') {
            timer = setTimeout(() => {
                setIsDeleting(false);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }, 300);
        } else {
            const typingSpeed = isDeleting ? 50 : 100;
            timer = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentText.length + (isDeleting ? -1 : 1)));
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentTitleIndex]);

    return (
        <section className="w-full flex flex-col lg:flex-row items-center justify-between min-h-screen pt-32 pb-12 px-6 md:px-12 lg:px-24 mx-auto max-w-[88rem]">
            {/* Left Column */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2 z-10">
                {/* Text Content */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-poppins font-semibold text-[32px] md:text-[48px] tracking-[-0.02em] text-white">
                        Hi There! 👋
                    </h2>

                    <h1 className="flex flex-wrap items-end gap-3 mt-1">
                        <span className="font-poppins font-semibold text-[32px] md:text-[48px] tracking-[-0.02em] text-white leading-none">
                            I'm
                        </span>
                        <span className="font-poppins font-extrabold text-[40px] md:text-[64px] tracking-[-0.06em] text-[#00FFE1] leading-none">
                            TYRONE KEN
                        </span>
                    </h1>

                    <h3 className="font-poppins font-medium text-[32px] md:text-[48px] tracking-[-0.02em] text-[#00FFE1] mt-2 leading-tight min-h-[40px] md:min-h-[60px]">
                        {currentText}
                        <span className="animate-pulse font-light">|</span>
                    </h3>

                    <p className="font-poppins font-light text-[16px] md:text-[20px] tracking-[-0.02em] text-white leading-relaxed max-w-[550px] mt-4">
                        Frontend Developer & UI/UX Designer crafting intuitive, accessible digital experiences. Specializing in pixel-perfect layouts and powerful, modern web applications.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                    <button className="flex items-center justify-center gap-2 w-[193px] h-[50px] bg-[#00FFE1] rounded-[6px] text-black font-poppins font-medium hover:bg-[#00e0c6] hover:shadow-[0_0_15px_rgba(0,255,225,0.4)] transition-all duration-300">
                        View My Work
                        <ArrowRight size={20} />
                    </button>

                    <button className="flex items-center justify-center gap-2 w-[142px] h-[50px] bg-[#1B1F24]/66 border border-[#00FFE1]/15 rounded-[6px] text-white font-poppins font-medium tracking-[-0.02em] hover:bg-white/10 hover:border-[#00FFE1]/40 transition-all duration-300 backdrop-blur-sm">
                        <Download size={20} className="text-white" />
                        Resume
                    </button>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-8">
                    <a href="#" className="flex items-center justify-center w-[58px] h-[58px] bg-[#181C21] border border-[#a4a4a4]/25 rounded-full text-white hover:border-[#00FFE1] hover:text-[#00FFE1] hover:shadow-[0_0_15px_rgba(0,255,225,0.2)] transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    </a>
                    <a href="#" className="flex items-center justify-center w-[58px] h-[58px] bg-[#181C21] border border-[#a4a4a4]/25 rounded-full text-white hover:border-[#00FFE1] hover:text-[#00FFE1] hover:shadow-[0_0_15px_rgba(0,255,225,0.2)] transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                    </a>
                    <a href="#" className="flex items-center justify-center w-[58px] h-[58px] bg-[#181C21] border border-[#a4a4a4]/25 rounded-full text-white hover:border-[#00FFE1] hover:text-[#00FFE1] hover:shadow-[0_0_15px_rgba(0,255,225,0.2)] transition-all duration-300">
                        <Mail size={24} strokeWidth={1.5} />
                    </a>
                </div>
            </div>

            {/* Right Column (Illustration) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center mt-16 lg:mt-0 z-10 pl-0 lg:pl-10">
                <img
                    src="/illustration TKP.png"
                    alt="Developer Illustration"
                    className="w-full max-w-[650px] h-auto object-contain drop-shadow-2xl hover:-translate-y-2 transition-transform duration-500"
                />
            </div>
        </section>
    );
};

export default Hero;
