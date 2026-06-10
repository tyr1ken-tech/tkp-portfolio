import React from 'react';
import { ArrowUp } from 'lucide-react';

const Experience = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="experience" className="relative w-full bg-transparent py-16 lg:py-20 px-6 md:px-12 lg:px-20 mx-auto max-w-[88rem] flex flex-col items-center z-10">
      {/* Top Header */}
      <div className="flex flex-col items-center mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-3 mb-3 w-full">
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
          <span className="font-poppins font-semibold text-[14px] sm:text-[16px] lg:text-[14px] tracking-[0.41em] text-white uppercase ml-[0.41em]">
            EXPERIENCE
          </span>
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
        </div>
        <h2 className="font-poppins font-extrabold text-[36px] sm:text-[48px] lg:text-[52px] tracking-[-0.03em] text-[#00FFE1] text-center">
          Work & Impact
        </h2>
      </div>

      {/* Experience Card */}
      <div className="w-full bg-[#181B1F] border-[1px] border-[#00FFE1] rounded-[8px] p-8 lg:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        {/* Left Column - Metadata */}
        <div className="flex flex-col gap-6 lg:w-1/3 shrink-0">
          <div className="flex flex-col gap-1.5">
            <span className="font-poppins font-bold text-[12px] sm:text-[14px] tracking-[-0.02em] text-white/50 uppercase">
              DURATION
            </span>
            <span className="font-poppins font-bold text-[16px] sm:text-[18px] tracking-[-0.02em] text-white">
              February 2026 – May 2026
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            <span className="font-poppins font-bold text-[12px] sm:text-[14px] tracking-[-0.02em] text-white/50 uppercase">
              LOCATION
            </span>
            <span className="font-poppins font-bold text-[16px] sm:text-[18px] tracking-[-0.02em] text-white leading-[1.4]">
              Provincial Capitol, Tagum City,<br className="hidden lg:block" /> Davao del Norte, Philippines
            </span>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col flex-grow">
          <div className="flex flex-col mb-6">
            <h3 className="font-poppins font-bold text-[24px] sm:text-[28px] tracking-[-0.02em] text-white mb-1">
              PGDDN- IT Department
            </h3>
            <span className="font-poppins font-medium text-[16px] sm:text-[18px] tracking-[-0.02em] text-[#00FF7B]">
              Programmer & Graphic Designer
            </span>
          </div>

          <div className="flex flex-col gap-2 font-poppins font-light text-[15px] sm:text-[16px] tracking-[-0.02em] text-white/90 leading-[1.6] mb-8">
            <p>- Developed and enhanced the front-end of the PRISM system using Angular, HTML, and CSS, improving usability and user experience.</p>
            <p>- Collaborated with the IT team to implement system enhancements, troubleshoot issues, and optimize application performance.</p>
            <p>- Designed the PRAISE Manual, creating professional layouts and visual assets for organizational documentation.</p>
          </div>

          <div className="flex flex-wrap items-baseline gap-2">
            <span className="font-poppins font-bold text-[14px] sm:text-[16px] tracking-[-0.02em] text-white/50 uppercase">
              TOOLS:
            </span>
            <span className="font-poppins font-bold text-[14px] sm:text-[16px] tracking-[-0.02em] text-white">
              Angular, HTML, CSS, Adobe InDesign, Adobe Illustrator
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-[#00FFE1] text-[#181B1F] hover:bg-[#00FF7B] transition-all duration-300 group shadow-lg hover:shadow-xl z-40"
        title="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      </button>
    </section>
  );
};

export default Experience;
