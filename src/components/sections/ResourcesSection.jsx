import React from "react";
import resource1 from "../../assets/resource1.png";
import resource2 from "../../assets/resource2.png";
import resource3 from "../../assets/resource3.png";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";

const resources = [
  {
    title: "Pre-built Templates vs Custom UI/UX Designs",
    primaryTag: "DEVELOPMENT",
    fileTag: ".pdf",
    image: resource1,
    fileTypeStyle: "text-[#A12229] border-[#F7E1E3]",
  },
  {
    title: "Agile vs Waterfall Methodologies in Software Development",
    primaryTag: "DEVELOPMENT",
    fileTag: ".ppt",
    image: resource2,
    fileTypeStyle: "text-[#F97316] border-[#FFF3E0]",
  },
  {
    title: "Key Features to Include in Your App to Reflect Your Brand Values",
    primaryTag: "GUIDES",
    fileTag: ".docx",
    image: resource3,
    fileTypeStyle: "text-[#1E40AF] border-[#E0E7FF]",
  },
];

const ResourcesSection = () => {
  return (
    <section className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <ScrollReveal className="flex flex-col items-center text-center">
          <h2 className="font-['Bricolage_Grotesque'] font-semibold text-[34px] sm:text-[28px] text-[#212125] leading-[120%]">
            Resources to{" "}
            <span className="text-[#35B729]">Help You Succeed</span>
          </h2>
          <p className="text-[10px] sm:text-[14px] text-[#75757A] font-inter mt-2">
            Learn from our expertise. Free guides, case studies, and best
            practices for your excellence.
          </p>
        </ScrollReveal>

        {/* Card Grid */}
        <StaggerContainer className="mt-[28px] sm:mt-[50px] flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-20 justify-items-center overflow-x-auto sm:overflow-visible snap-x snap-mandatory">
          {resources.map((resource, index) => (
            <StaggerItem
              key={index}
              className="snap-start shrink-0 sm:shrink w-full max-w-[340px] sm:max-w-none bg-white border border-[#E5E7EB] rounded-[20px] sm:rounded-[30px] p-[12px] sm:p-[20px] shadow-[1px_1px_10px_0px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow duration-300 group flex flex-col lg:w-[393px] lg:h-[398px]"
            >
              {/* Image Container */}
              <div className="w-full h-[170px] sm:h-auto lg:w-[353px] lg:h-[250px] overflow-hidden rounded-[12px] sm:rounded-[20px] mx-auto">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Container (using gap-20px as requested) */}
              <div className="flex flex-col flex-1 gap-[12px] sm:gap-[20px] mt-[12px] sm:mt-[20px]">
                {/* Tags Section */}
                <div className="flex items-center gap-2">
                  <div className="w-[90px] sm:w-[112px] h-[20px] sm:h-[25px] rounded-[40px] border border-[#E0FBD7] bg-white flex items-center justify-center">
                    <span className="text-[#35B729] text-[9px] sm:text-[12px] font-bold font-inter uppercase tracking-wide">
                      {resource.primaryTag}
                    </span>
                  </div>
                  <div
                    className={`h-[20px] sm:h-[25px] rounded-[40px] border bg-white flex items-center justify-center px-[10px] sm:px-[12px] ${resource.fileTypeStyle}`}
                  >
                    <span className="text-[9px] sm:text-[12px] font-bold font-inter">
                      {resource.fileTag}
                    </span>
                  </div>
                </div>

                {/* Title Section */}
                <h3 className="w-full lg:w-[353px] lg:h-[48px] text-[16px] sm:text-[20px] font-bold text-[#212125] leading-[120%] font-inter overflow-hidden">
                  {resource.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="sm:hidden mt-[12px] flex justify-center items-center gap-2">
          <span className="w-[12px] h-[3px] rounded-full bg-[#212125]" />
          <span className="w-[3px] h-[3px] rounded-full bg-[#D1D5DB]" />
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-[24px] sm:mt-[40px] flex justify-center">
          <a
            href="#"
            className="flex items-center gap-1 font-inter font-medium text-[12px] sm:text-[16px] hover:underline transition-all"
          >
            <span className="text-[#212125]">Explore</span>
            <span className="text-[#35B729] ml-1">More Resources &gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
