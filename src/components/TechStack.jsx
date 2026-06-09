import React from 'react';
import {
  SiAngular, SiReact, SiFigma,
  SiPython, SiHtml5, SiPostman,
  SiTypescript, SiBootstrap, SiPhp, SiGit, SiGithub
} from 'react-icons/si';
import { TbBrandAdobeIllustrator, TbBrandAdobeIndesign } from 'react-icons/tb';
import { FaJava, FaCss3Alt, FaJs } from 'react-icons/fa';

const techStack = [
  { name: 'Angular', icon: SiAngular },
  { name: 'React', icon: SiReact },
  { name: 'Figma', icon: SiFigma },
  { name: 'Adobe Illustrator', icon: TbBrandAdobeIllustrator },
  { name: 'Adobe InDesign', icon: TbBrandAdobeIndesign },
  { name: 'Python', icon: SiPython },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'JavaScript', icon: FaJs },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'Java', icon: FaJava },
  { name: 'Postman', icon: SiPostman },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'PHP', icon: SiPhp },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub }
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="relative w-full bg-transparent py-16 lg:py-20 px-6 md:px-12 lg:px-20 mx-auto max-w-[88rem] flex flex-col items-center z-10">
      {/* Top Header */}
      <div className="flex flex-col items-center mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-3 mb-3 w-full">
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
          <span className="font-poppins font-semibold text-[14px] sm:text-[16px] lg:text-[14px] tracking-[0.41em] text-white uppercase ml-[0.41em]">
            INVENTORY
          </span>
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
        </div>
        <h2 className="font-poppins font-extrabold text-[36px] sm:text-[48px] lg:text-[52px] tracking-[-0.03em] text-[#00FFE1] text-center">
          Tech Stack
        </h2>
      </div>

      {/* Tech Stack Grid */}
      <div className="w-full flex flex-wrap justify-center gap-4 lg:gap-6 max-w-[1100px]">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="group flex items-center justify-center gap-3 px-6 py-3 rounded-[50px] border-[0.5px] border-[#00FFE1] bg-transparent hover:shadow-[0_0_15px_rgba(0,255,225,0.4)] transition-all duration-300 hover:scale-[1.03] cursor-default"
            >
              <Icon className="text-white text-[24px] group-hover:text-white transition-colors duration-300" />
              <span className="font-poppins font-semibold text-[16px] tracking-[-0.02em] text-white whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
