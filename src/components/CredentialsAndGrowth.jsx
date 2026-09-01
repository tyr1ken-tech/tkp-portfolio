import React, { useState } from 'react';

// Import certificate images as Vite modules
import cert1 from '../assets/cert1.jpg';
import cert2 from '../assets/cert2.jpg';
import cert3 from '../assets/cert3.jpg';
import cert4 from '../assets/cert4.jpg';
import cert5 from '../assets/cert5.jpg';
import cert6 from '../assets/cert6.jpg';
import cert7 from '../assets/cert7.jpg';
import cert8 from '../assets/cert8.jpg';
import cert9 from '../assets/cert9.jpg';
import cert10 from '../assets/cert10.png';
import cert11 from '../assets/cert11.png';
import cert12 from '../assets/cert12.png';
import cert13 from '../assets/cert13.png';

// Certificate data with category mapping
const certificates = [
  {
    id: 1,
    title: "Cisco Packet Tracer Completion",
    image: cert1,
    category: "Technology & IT",
    description: "Demonstration of foundational networking skills and practical experience with the Cisco Packet Tracer platform."
  },
  {
    id: 2,
    title: "Level App 2.0: Startup Participation",
    image: cert2,
    category: "Startup & Innovation",
    description: "Engagement in product exhibition and technopreneurship pitching for the EaseNova startup project."
  },
  {
    id: 3,
    title: "Level App 2.0: Top 15 Finalist",
    image: cert3,
    category: "Startup & Innovation",
    description: "Recognition for delivering a high-quality entrepreneurial presentation and placing among the top 15 competitive startup pitches."
  },
  {
    id: 4,
    title: "IT Specialist Career Transition Seminar",
    image: cert4,
    category: "Technology & IT",
    description: "Training on mapping the professional pathway from an academic science practitioner to a specialized IT professional."
  },
  {
    id: 5,
    title: "Advanced Seminar: Color Theory in Graphic Design",
    image: cert5,
    category: "Technology & IT",
    description: "Academic study of the visual psychology, theory, and practical implementation of color in digital layout and user experience design."
  },
  {
    id: 6,
    title: "ICARI 2025: International Conference Participation",
    image: cert6,
    category: "Academic & Research",
    description: "Academic engagement with global research developments in sustainable technologies and resilient agricultural innovations."
  },
  {
    id: 7,
    title: "ICARI 2025: Research Paper Presenter",
    image: cert7,
    category: "Academic & Research",
    description: "International recognition for co-authoring and presenting the IoT-driven AquaCare system research paper at an agricultural innovation conference."
  },
  {
    id: 8,
    title: "BUGSAI TBI: Lean Canvas Development Lab",
    image: cert8,
    category: "Startup & Innovation",
    description: "Focused workshop training on building, refining, and structuring a lean business model canvas for a startup venture."
  },
  {
    id: 9,
    title: "BUGSAI TBI: Customer Validation Lab",
    image: cert9,
    category: "Startup & Innovation",
    description: "Hands-on training in evaluating market demands and validating customer needs for early-stage startup concepts."
  },
  {
    id: 10,
    title: "BSIT & BSIS Capstone Project Exhibit 2026: Project Presentation",
    image: cert10,
    category: "Academic & Research",
    description: "Engagement in the research exhibition and presentation of the AquaCare IoT-based real-time water quality monitoring system."
  },
  {
    id: 11,
    certificateType: "Certificate of Completion",
    title: "Introduction to Figma Course",
    image: cert11,
    category: "Technology & IT",
    description: "Successful completion of the online course covering UI/UX design fundamentals, digital prototyping, and user interface workflows in Figma.",
    caption: "Successful completion of the online course covering UI/UX design fundamentals, digital prototyping, and user interface workflows in Figma."
  },
  {
    id: 12,
    certificateType: "Certificate of Participation",
    title: "PSITE XI: CyberWISE Seminar-Workshop",
    image: cert12,
    category: "Technology & IT",
    description: "Recognition of active participation and engagement in the PSITE XI seminar-workshop on advancing cybersecurity competence, held at National University Davao.",
    caption: "Recognition of active participation and engagement in the PSITE XI seminar-workshop on advancing cybersecurity competence, held at National University Davao."
  },
  {
    id: 13,
    certificateType: "Certificate of Appearance",
    title: "PSITE XI: CyberWISE Appearance",
    image: cert13,
    category: "Academic & Research",
    description: "Official acknowledgment of attendance and representation at the regional PSITE XI monthly seminar-workshop on cybersecurity held in Davao City.",
    caption: "Official acknowledgment of attendance and representation at the regional PSITE XI monthly seminar-workshop on cybersecurity held in Davao City."
  }
];

const categories = [
  "All",
  "Technology & IT",
  "Startup & Innovation",
  "Academic & Research"
];

const CredentialsAndGrowth = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter certificates based on active category
  const filteredCertificates = 
    activeCategory === "All"
      ? certificates
      : certificates.filter(cert => cert.category === activeCategory);

  // Handle category change with animation trigger
  const handleCategoryChange = (category) => {
    setIsAnimating(true);
    setActiveCategory(category);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Animation styles
  const animationStyle = `
    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .cert-card-animate {
      animation: fadeInScale 0.5s ease-out forwards;
    }

    .cert-gallery-animate {
      animation: fadeInUp 0.3s ease-out;
    }
  `;

  return (
    <>
      <style>{animationStyle}</style>
    <section id="credentials" className="relative w-full bg-transparent py-16 lg:py-20 px-6 md:px-12 lg:px-20 mx-auto max-w-[88rem] flex flex-col items-center z-10">
      {/* Top Header */}
      <div className="flex flex-col items-center mb-12 lg:mb-16">
        <div className="flex items-center justify-center gap-3 mb-3 w-full">
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white"></div>
          <span className="font-poppins font-semibold text-[14px] sm:text-[16px] lg:text-[14px] tracking-[0.41em] text-white uppercase ml-[0.41em]">
            CERTIFICATIONS
          </span>
          <div className="h-[1px] w-8 sm:w-16 lg:w-20 bg-white"></div>
        </div>
        <h2 className="font-poppins font-extrabold text-[36px] sm:text-[48px] lg:text-[64px] tracking-[-0.03em] text-[#00FFE1] text-center">
          Credentials & Growth
        </h2>
      </div>

      {/* Category Tabs */}
      <div className="w-full flex justify-center mb-12 lg:mb-16">
        <div className="flex flex-wrap justify-center gap-2 bg-[#242F3A] border-[1px] border-[#00FFE1] rounded-[11px] p-1.5 lg:p-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 lg:px-6 py-2 lg:py-2.5 font-poppins font-medium text-[13px] lg:text-[14px] tracking-[-0.02em] rounded-[8px] transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? "bg-[#1B1F24] text-[#00FFE1] shadow-[0_0_20px_rgba(0,255,225,0.4)]"
                  : "text-white hover:text-[#00FFE1] hover:bg-[#1B1F24]/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Certificate Gallery Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 cert-gallery-animate">
        {filteredCertificates.map((certificate, index) => (
          <div
            key={certificate.id}
            className="flex flex-col bg-transparent overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] group cert-card-animate"
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            {/* Certificate Image Container */}
            <div className="relative w-full h-[280px] lg:h-[320px] overflow-hidden rounded-none border-[1px] border-[#00FFE1]/30 group-hover:border-[#00FFE1] transition-all duration-300">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
              />
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 30px rgba(0, 255, 225, 0.2)"
                }}
              />
            </div>

            {/* Certificate Title */}
            <div className="mt-4 flex flex-col">
              <h3 className="font-poppins font-semibold text-[16px] lg:text-[18px] tracking-[-0.02em] text-white group-hover:text-[#00FFE1] transition-colors duration-300">
                {certificate.title}
              </h3>
              <p className="font-poppins font-light text-[13px] lg:text-[14px] tracking-[-0.02em] text-white/70 mt-2 leading-[1.5]">
                {certificate.description}
              </p>
              <span className="font-poppins font-medium text-[12px] lg:text-[13px] tracking-[-0.02em] text-white/60 mt-3">
                {certificate.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if needed) */}
      {filteredCertificates.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center py-16">
          <p className="font-poppins font-light text-[16px] tracking-[-0.02em] text-white/60">
            No certificates found in this category.
          </p>
        </div>
      )}
    </section>
    </>
  );
};

export default CredentialsAndGrowth;
