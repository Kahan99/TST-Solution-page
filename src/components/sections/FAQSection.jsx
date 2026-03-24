import React, { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";

// Simple ChevronDown SVG component
const ChevronDown = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const faqData = [
  {
    question: "What is included in your HRMS software?",
    answer:
      "Our HRMS includes attendance tracking, leave management, payroll processing, performance evaluation, and employee self-service portals designed to streamline your business operations.",
  },
  {
    question: "Can this HRMS work for remote/hybrid teams?",
    answer:
      "Yes, absolutely. This TST Technology HRMS works for office-based, fully remote, and hybrid teams. Employees can clock in from anywhere, the system tracks Work From Home patterns, and analytics show which team members are remote/office/hybrid. This is especially useful for companies with flexible work policies. The attendance data and leave management work seamlessly, whether your team is in the office or distributed globally.",
  },
  {
    question: "Can we customise leave types (paid, sick, casual, unpaid)?",
    answer:
      "Yes, you can fully customize leave types, set accrual rules, and define approval workflows tailored to your company's policy. The system supports multiple leave categories including paid, sick, casual, and unpaid leaves.",
  },
  {
    question: "Which HR Software is Best for Small Companies?",
    answer:
      "TST HRMS is designed to scale, making it an excellent choice for small companies that need core HR features without the bloat of enterprise systems, providing efficiency at an affordable scale.",
  },
  {
    question: "What is the Best HRMS for Startups?",
    answer:
      "Startups benefit from our platform's flexibility, ease of integration, and ability to handle rapid team growth while maintaining a clean and intuitive user experience.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Set second item open by default as in image

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-[30px] sm:gap-[50px] md:gap-[80px] items-start">
          {/* Left Side Content */}
          <ScrollReveal className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-[#35B729] text-[46px] sm:text-[36px] font-bold leading-tight font-['Bricolage_Grotesque']">
              FAQ’s
            </h2>
            <h3 className="text-[46px] sm:text-[32px] font-semibold text-[#212125] leading-tight font-['Bricolage_Grotesque']">
              Still have question? Let’s talk
            </h3>
            <p className="text-[11px] sm:text-[14px] text-[#75757A] mt-[10px] max-w-[500px] mx-auto lg:mx-0 font-inter leading-[160%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
            <button className="hidden sm:inline-flex lg:inline-flex bg-[#35B729] text-white w-full sm:w-auto px-[24px] py-[12px] rounded-[10px] mt-[20px] font-medium font-inter hover:bg-[#2e9f24] transition-colors">
              Still Have Questions? Let’s Talk
            </button>
          </ScrollReveal>

          {/* Right Side Accordion */}
          <div className="w-full lg:w-1/2">
            <StaggerContainer className="flex flex-col">
              {faqData.map((item, index) => (
                <StaggerItem
                  key={index}
                  className="bg-white rounded-[12px] shadow-[0px_0px_7px_0px_#2121250D] mb-[12px] sm:mb-[16px] overflow-hidden"
                >
                  <div
                    className="p-[16px] sm:p-[20px] cursor-pointer flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-[14px] sm:text-[16px] font-medium text-[#212125] font-inter">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#212125] transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {activeIndex === index && (
                    <div className="px-[16px] sm:px-[20px] pb-[16px] sm:pb-[20px] pt-0">
                      <p className="text-[12px] sm:text-[14px] text-[#75757A] leading-[140%] font-inter">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>
            <div className="sm:hidden mt-[8px]">
              <button className="bg-[#35B729] text-white w-full px-[24px] py-[12px] rounded-[10px] font-medium font-inter hover:bg-[#2e9f24] transition-colors">
                Still Have Questions? Let’s Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
