import React from "react";
import toolplateImg from "../../assets/toolplate.png";
import woofferImg from "../../assets/wooffer.png";
import devtoolImg from "../../assets/devtool.png";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";

const otherSolutions = [
  {
    title: "Toolplate",
    category: "NETWORKING",
    image: toolplateImg,
  },
  {
    title: "Wooffer",
    category: "UTILITIES",
    image: woofferImg,
  },
  {
    title: "DevTool",
    category: "ONLINE GIGS",
    image: devtoolImg,
  },
];

const OtherSolutionsSection = () => {
  return (
    <section className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <ScrollReveal className="flex flex-col items-center text-center">
          <h2 className="font-['Bricolage_Grotesque'] font-semibold text-[34px] sm:text-[28px] text-[#212125] leading-[120%]">
            Explore Other TST Technology{" "}
            <span className="text-[#35B729]">Solutions</span>
          </h2>
          <p className="text-[10px] sm:text-[14px] text-[#75757A] font-inter mt-2">
            We’ve built tools to solve multiple business challenges
          </p>
        </ScrollReveal>

        {/* Card Grid */}
        <StaggerContainer className="mt-[28px] sm:mt-[50px] flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-20 justify-items-center overflow-x-auto sm:overflow-visible snap-x snap-mandatory">
          {otherSolutions.map((solution, index) => (
            <StaggerItem
              key={index}
              className="snap-start shrink-0 sm:shrink w-full max-w-[340px] sm:max-w-none bg-white border border-[#DFE4E8] rounded-[20px] sm:rounded-[30px] overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col lg:w-[400px] lg:h-[441px] p-[12px] sm:p-[25px]"
            >
              {/* Image Container */}
              <div className="w-full h-[190px] sm:h-auto lg:w-[350px] lg:h-[260px] overflow-hidden rounded-[8px] sm:rounded-[10px] mx-auto">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Container (padding removed here because it's now on the card) */}
              <div className="pt-[12px] sm:pt-[25px] flex flex-col flex-1 gap-[10px] sm:gap-[25px]">
                {/* Category Tag & Title Group (to maintain 25px gap between groups) */}
                <div className="flex flex-col gap-[8px] sm:gap-[10px]">
                  {/* Category Tag */}
                  <div>
                    <span className="inline-flex items-center justify-center rounded-full border border-[#35B729]/20 bg-white text-[#35B729] text-[10px] sm:text-[14px] font-bold font-inter uppercase tracking-wide px-3 sm:px-4 h-[18px] sm:h-[26px]">
                      {solution.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="w-full lg:w-[350px] lg:h-[43px] text-[36px] sm:text-[28px] lg:text-[36px] font-semibold text-[#212125] font-['Bricolage_Grotesque'] leading-[120%]">
                    {solution.title}
                  </h3>
                </div>

                {/* Spacer to push CTA to bottom */}
                <div className="flex-1"></div>

                {/* CTA Link */}
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="flex items-center gap-[6px] text-[#212125] text-[14px] font-medium font-inter hover:text-[#35B729] transition-all group/link uppercase tracking-wide"
                  >
                    <span className="sm:hidden">VIEW ALL</span>
                    <span className="hidden sm:inline">KNOW MORE</span>
                    <span className="flex items-center text-[#35B729]">
                      <span>&gt;</span>
                      <span className="opacity-40">&gt;</span>
                    </span>
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="sm:hidden mt-[12px] flex justify-center items-center gap-2">
          <span className="w-[12px] h-[3px] rounded-full bg-[#212125]" />
          <span className="w-[3px] h-[3px] rounded-full bg-[#D1D5DB]" />
        </div>

        {/* Bottom CTA Link */}
        <div className="mt-[40px] flex justify-center">
          <a
            href="#"
            className="flex items-center gap-1 font-inter font-medium text-[16px] hover:underline transition-all"
          >
            <span className="text-[#212125]">Explore</span>
            <span className="text-[#35B729] ml-1">More Resources &gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OtherSolutionsSection;
