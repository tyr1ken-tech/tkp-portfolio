import React from 'react';
import { ArrowRight } from 'lucide-react';

import lmsImage from '../assets/lms.png';
import aquacareImage from '../assets/aquacare.png';
import prismImage from '../assets/prism.png';
import jobhiveImage from '../assets/jobhive.png';
import wellmindImage from '../assets/wellmind.png';
import trabahanapImage from '../assets/trabahanap.png';

const projects = [
  {
    title: "Library Management System",
    image: lmsImage,
    description: "An automated, full-stack administration platform designed to streamline book indexing, user tracking, and borrowing transactions through a responsive dashboard and secure data handling.",
    technologies: ["HTML", "CSS", "Bootstrap", "MySQL", "PHP"]
  },
  {
    title: "AquaCare",
    image: aquacareImage,
    description: "An Internet of Things (IoT) platform that provides real-time water quality monitoring, automated early warning alerts, and analytical reporting to help aquaculture farmers optimize yields and prevent fish mortality.",
    technologies: ["JavaScript", "MySQL", "PHP", "Arduino"]
  },
  {
    title: "PRISM: Provincial Request and Integrated Personnel Management System",
    image: prismImage,
    description: "A centralized workforce administration platform for PGDDN employees that automates personnel requests including justification filings, PTLOS tracking, and pass-slip processing backed by a secure user management module.",
    technologies: ["HTML", "CSS", "Angular", ".NET"]
  },
  {
    title: "JobHive",
    image: jobhiveImage,
    description: "A dynamic recruitment and employment marketplace designed to streamline workforce acquisition and career discovery by efficiently connecting employers with qualified job seekers.",
    technologies: ["HTML", "CSS", "Bootstrap", "MySQL", "PHP"]
  },
  {
    title: "WellMind",
    image: wellmindImage,
    description: "A mobile wellness application that makes mental health care simple and accessible by providing affordable self-help tools, licensed therapists, and safe community spaces.",
    technologies: ["Figma"]
  },
  {
    title: "Trabahanap",
    image: trabahanapImage,
    description: "A mobile employment platform featuring role-specific profiles, a QR code system, and an interactive tracking dashboard to streamline applications and recruitment.",
    technologies: ["Figma"]
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative w-full bg-transparent py-16 lg:py-20 px-6 md:px-12 lg:px-20 mx-auto max-w-[88rem] flex flex-col items-center z-10">
      {/* Top Header */}
      <div className="flex flex-col items-center mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-3 mb-3 w-full">
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
          <span className="font-poppins font-semibold text-[14px] sm:text-[16px] lg:text-[14px] tracking-[0.41em] text-white uppercase ml-[0.41em]">
            PORTFOLIO
          </span>
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white/50"></div>
        </div>
        <h2 className="font-poppins font-extrabold text-[36px] sm:text-[48px] lg:text-[52px] tracking-[-0.03em] text-[#00FFE1] text-center">
          Featured Works
        </h2>
      </div>

      {/* Project Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="flex flex-col bg-[#181B1F] border-[1px] border-[#00FFE1] rounded-[8px] overflow-hidden transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_0_15px_rgba(0,255,225,0.3)]"
          >
            {/* Project Banner Image */}
            <div className="w-full h-[220px] lg:h-[240px] overflow-hidden border-b border-[#00FFE1]/20">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Project Content */}
            <div className="flex flex-col p-6 lg:p-8 flex-grow">
              <h3 className="font-poppins font-semibold text-[20px] tracking-[-0.02em] text-white mb-3 leading-[1.3]">
                {project.title}
              </h3>
              
              <p className="font-poppins font-light text-[15px] sm:text-[16px] tracking-[-0.02em] text-white/90 leading-[1.6] mb-6">
                {project.description}
              </p>
              
              {/* Technology Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <div 
                    key={tech}
                    className="h-[22px] px-2.5 flex items-center justify-center bg-[#00FFE1]/12 rounded-[4px]"
                  >
                    <span className="font-poppins font-semibold text-[10px] tracking-[-0.02em] text-white whitespace-nowrap uppercase">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* View Details CTA */}
              <button className="flex items-center gap-1.5 group cursor-pointer mt-auto self-start">
                <span className="font-poppins font-medium text-[14px] tracking-[-0.02em] text-white group-hover:text-[#00FFE1] border-b border-[#00FFE1] pb-[1px] transition-colors duration-300">
                  VIEW DETAILS
                </span>
                <ArrowRight className="text-white group-hover:text-[#00FFE1] w-4 h-4 group-hover:translate-x-1 transition-all duration-300" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
