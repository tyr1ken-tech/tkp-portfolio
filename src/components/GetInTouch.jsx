import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub, FaFigma } from 'react-icons/fa';

const contactLinks = [
  {
    id: 1,
    name: "EMAIL",
    icon: Mail,
    href: "mailto:tyronekenpareja@example.com",
    label: "Email"
  },
  {
    id: 2,
    name: "LINKEDIN",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/tyronekenpareja",
    label: "LinkedIn"
  },
  {
    id: 3,
    name: "GITHUB",
    icon: FaGithub,
    href: "https://github.com/tyronekenpareja",
    label: "GitHub"
  },
  {
    id: 4,
    name: "FIGMA",
    icon: FaFigma,
    href: "https://figma.com/@tyronekenpareja",
    label: "Figma"
  }
];

const GetInTouch = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleContactClick = (href) => {
    window.open(href, "_blank");
  };

  return (
    <>
      <section id="contact" className="relative w-full bg-transparent py-16 lg:py-20 px-6 md:px-12 lg:px-20 mx-auto max-w-[88rem] flex flex-col items-center z-10">
        {/* Top Header */}
        <div className="flex flex-col items-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3 w-full">
            <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
            <span className="font-poppins font-semibold text-[14px] sm:text-[16px] lg:text-[14px] tracking-[0.41em] text-white uppercase ml-[0.41em]">
              CONTACT ME
            </span>
            <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
          </div>
          <h2 className="font-poppins font-extrabold text-[36px] sm:text-[48px] lg:text-[52px] tracking-[-0.03em] text-[#00FFE1] text-center">
            Get In Touch
          </h2>
        </div>

        {/* Contact Links Container */}
        <div className="w-full flex flex-col gap-0">
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon;
            const isHovered = hoveredId === contact.id;

            return (
              <div key={contact.id} className="flex flex-col">
                {/* Contact Link Row */}
                <button
                  onClick={() => handleContactClick(contact.href)}
                  onMouseEnter={() => setHoveredId(contact.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="w-full flex items-center justify-between py-6 lg:py-8 px-0 transition-all duration-300 cursor-pointer group"
                >
                  {/* Contact Name */}
                  <span className={`font-poppins font-semibold text-[32px] sm:text-[36px] lg:text-[40px] tracking-[-0.02em] transition-colors duration-300 ${
                    isHovered ? "text-[#00FFE1]" : "text-white"
                  }`}>
                    {contact.name}
                  </span>

                  {/* Icon - Transitions between platform icon and arrow */}
                  <div className="relative flex items-center justify-center w-8 lg:w-10 h-8 lg:h-10">
                    {/* Platform Icon */}
                    <IconComponent
                      size={32}
                      className={`transition-all duration-300 ${
                        isHovered
                          ? "opacity-0 scale-75"
                          : "opacity-100 scale-100"
                      } ${isHovered ? "text-[#00FFE1]" : "text-white"}`}
                      strokeWidth={1.5}
                    />

                    {/* Arrow Icon */}
                    <ArrowRight
                      size={32}
                      className={`absolute transition-all duration-300 ${
                        isHovered
                          ? "opacity-100 scale-100 translate-x-0"
                          : "opacity-0 scale-75 -translate-x-2"
                      } text-[#00FFE1]`}
                      strokeWidth={1.5}
                    />
                  </div>
                </button>

                {/* Divider Line */}
                <div className={`h-[1px] w-full transition-all duration-300 ${
                  isHovered 
                    ? "bg-white opacity-30 shadow-[0_0_15px_rgba(0,255,225,0.2)]" 
                    : "bg-white opacity-10"
                }`}></div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative w-full bg-[#181B1F] py-4 lg:py-6 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center z-10">
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-poppins font-regular text-[13px] sm:text-[14px] lg:text-[15px] tracking-[-0.02em] text-white/80">
            Designed and Developed by{" "}
            <span className="text-[#00FFE1] font-semibold">Tyrone Ken Pareja</span>
          </p>
          <p className="font-poppins font-regular text-[13px] sm:text-[14px] lg:text-[15px] tracking-[-0.02em] text-white/80">
            All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default GetInTouch;
