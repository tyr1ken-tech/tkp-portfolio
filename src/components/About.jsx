import React from 'react';
import tkpImage from '../assets/tkp image portfolio.png';
import { ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-transparent py-16 lg:py-20 px-6 md:px-12 lg:px-20 mx-auto max-w-[88rem] flex flex-col items-center z-10">
      {/* Top Header */}
      <div className="flex flex-col items-center mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-3 mb-3 w-full">
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
          <span className="font-poppins font-semibold text-[14px] sm:text-[16px] lg:text-[14px] tracking-[0.41em] text-white uppercase ml-[0.41em]">
            Biography
          </span>
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
        </div>
        <h2 className="font-poppins font-extrabold text-[36px] sm:text-[48px] lg:text-[52px] tracking-[-0.03em] text-[#00FFE1] text-center">
          My Expertise
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-10 lg:gap-16 items-center">
        
        {/* Left Column - Image */}
        <div className="w-full flex justify-center lg:justify-end items-center">
          <div className="relative w-full max-w-[380px] lg:max-w-[400px] aspect-[4/5] lg:aspect-[3/4] rounded-[20px] overflow-hidden shadow-2xl">
            <img 
              src={tkpImage} 
              alt="Tyrone Ken Pareja" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full flex flex-col justify-center py-2">
          <h3 className="font-poppins font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[1.3] tracking-[-0.02em] text-white mb-4 lg:mb-5">
            Building responsive web applications with a focus on <span className="text-[#00FFE1]">accessible design</span> and <span className="text-[#00FF7B]">real-time systems.</span>
          </h3>
          
          <p className="font-poppins font-medium text-[15px] sm:text-[16px] lg:text-[15px] leading-relaxed lg:leading-[1.6] tracking-[-0.02em] text-white/90 mb-6 lg:mb-8 max-w-[600px]">
            I'm <span className="text-[#00FFE1]">Tyrone Ken Pareja</span>, a Web Developer, UI/UX Designer, and Graphic Designer based in the Philippines. I bridge the gap between frontend development and layout design to create digital experiences that are technically sound and visually intuitive, ranging from custom UI modules to hardware-integrated software platforms.
          </p>

          <div className="h-[1px] w-full bg-white/10 mb-6 lg:mb-8"></div>

          {/* Info Row */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 lg:gap-24 mb-6 lg:mb-8">
            <div className="flex flex-col gap-1.5">
              <span className="font-poppins font-bold text-[12px] lg:text-[12px] tracking-[-0.02em] text-white/50 uppercase">
                Location
              </span>
              <span className="font-poppins font-bold text-[16px] lg:text-[16px] tracking-[-0.02em] text-white">
                Davao del Norte, PH
              </span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="font-poppins font-bold text-[12px] lg:text-[12px] tracking-[-0.02em] text-white/50 uppercase">
                Status
              </span>
              <span className="font-poppins font-bold text-[16px] lg:text-[16px] tracking-[-0.02em] text-white">
                Open to Work
              </span>
            </div>
          </div>

          <div className="h-[1px] w-full bg-white/10 mb-6 lg:mb-8"></div>

          {/* Skills Tags & CTA */}
          <div className="flex flex-wrap items-center gap-y-4 gap-x-2 w-full">
            {['ANGULAR', 'REACT', 'FIGMA', 'ADOBE ILLUSTRATOR', 'PYTHON', '+10 MORE'].map((skill) => (
              <div 
                key={skill}
                className="h-[22px] px-2.5 flex items-center justify-center bg-[#00FFE1]/12 rounded-[4px]"
              >
                <span className="font-poppins font-semibold text-[10px] tracking-[-0.02em] text-white whitespace-nowrap">
                  {skill}
                </span>
              </div>
            ))}

            <button className="flex items-center gap-1.5 group cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap ml-auto">
              <span className="font-poppins font-medium text-[14px] lg:text-[14px] tracking-[-0.02em] text-white border-b border-[#00FFE1] pb-[1px]">
                GET IN TOUCH
              </span>
              <ArrowRight className="text-white w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
