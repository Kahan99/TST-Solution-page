import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import setupIcon from "../../assets/setup.png";
import importIcon from "../../assets/import.png";
import trainingIcon from "../../assets/training.png";
import onboardingIcon from "../../assets/onboarding.png";
import supportIcon from "../../assets/support2.png";
import img1 from "../../assets/imp.png";
import img2 from "../../assets/emp.png";
import img3 from "../../assets/team.png";
import img4 from "../../assets/onbo.png";
import img5 from "../../assets/247.png";

const steps = [
  {
    icon: setupIcon,
    title: "Setup & Configuration",
    description:
      "Install HRMS, configure company settings, set work timings (10 AM - 7 PM, etc.), and define leave policy",
    image: img1,
    color: "#22C55E",
  },
  {
    icon: importIcon,
    title: "Employee Data Import",
    description:
      "Import employee master data (role, department, designation), set up team structure, and assign team leads",
    image: img2,
    color: "#EC4899",
  },
  {
    icon: trainingIcon,
    title: "Team Training",
    description:
      "Train the HR team on leave approvals, analytics dashboard, and reporting. Train team leads on attendance visibility",
    image: img3,
    color: "#6366F1",
  },
  {
    icon: onboardingIcon,
    title: "Employee Onboarding",
    description:
      "Show employees self-service portal, clock-in/out process, leave submission, document upload",
    image: img4,
    color: "#F59E0B",
  },
  {
    icon: supportIcon,
    title: "Support Included",
    description:
      "24/7 email support, implementation assistance, and monthly optimization check-ins for continuous success.",
    image: img5,
    color: "#0EA5E9",
  },
];

export default function ImplementationSupportSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);
  const [lineHeight, setLineHeight] = useState("auto");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (stepRefs.current[0]) {
        setLineHeight(stepRefs.current[0].offsetTop + stepRefs.current[0].offsetHeight / 2);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const el = stepRefs.current[activeIndex];
    if (el) {
      setLineHeight(el.offsetTop + el.offsetHeight / 2);
    }
  }, [activeIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-[60px] sm:py-[80px] md:py-[120px] xl:py-[120px]">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-[#FAFBFC] rounded-[30px] lg:rounded-[50px] p-6 sm:p-8 md:p-[60px] lg:p-[70px]">
          {/* Section Header */}
          <ScrollReveal>
            <div className="flex flex-col items-center text-center mb-[56px] sm:mb-[50px] md:mb-[60px] lg:mb-[70px]">
              <h2 className="font-['Bricolage_Grotesque'] font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[120%] text-[#212125]">
                <span className="text-[#35B729]">Implementation</span> & Support
              </h2>
              <p className="mt-2 font-inter font-normal text-[12px] sm:text-[14px] text-[#75757A]">
                We make your transition smooth and hassle-free
              </p>
            </div>
          </ScrollReveal>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row gap-[36px] sm:gap-[50px] lg:gap-[80px] xl:gap-[120px] items-center lg:items-start justify-between">
            {/* Left Side: Illustration */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="overflow-hidden w-full max-w-[330px] sm:max-w-[380px] lg:max-w-[500px]">
                <div
                  className="flex transition-transform duration-500"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {steps.map((step, index) => (
                    <div key={index} className="min-w-full flex justify-center">
                      <img
                        src={step.image}
                        alt={`${step.title} illustration`}
                        className="w-full max-w-none object-contain transition-all duration-500 ease-in-out"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Timeline */}
            <div className="flex-1 w-full max-w-[560px] relative">
              {/* Background Vertical Line */}
              <div className="absolute left-[29px] top-0 bottom-0 w-[2px] bg-[#E9EDEF]" />

              {/* Active Progress Line */}
              <motion.div
                className="absolute left-[29px] top-0 w-[2px] rounded-full"
                animate={{
                  height: lineHeight,
                  backgroundColor: steps[activeIndex].color,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              {/* Steps */}
              <div className="flex flex-col gap-[30px] md:gap-[40px] lg:gap-[45px]">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="flex items-start gap-[16px] relative z-20 cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    {(() => {
                      const isActive = activeIndex === index;
                      const activeColor = step.color;

                      return (
                        <>
                          <motion.div
                            className="flex-shrink-0 w-[60px] h-[60px] flex items-center justify-center z-20 rounded-full"
                            animate={{ backgroundColor: isActive ? activeColor : "#FAFBFC" }}
                            transition={{ duration: 0.4 }}
                          >
                            <img
                              src={step.icon}
                              alt=""
                              style={{
                                width: isActive ? "32px" : "60px",
                                height: isActive ? "32px" : "60px",
                                filter: isActive ? "brightness(0) invert(1)" : "none",
                                transition: "all 0.4s ease",
                                objectFit: "contain",
                              }}
                            />
                          </motion.div>

                          {/* Text Content */}
                          <div className="flex flex-col">
                            <h3
                              className={`font-['Bricolage_Grotesque'] text-[18px] transition-colors duration-300 ${
                                isActive
                                  ? "font-semibold text-[#212125]"
                                  : "font-medium text-[#6B7280]"
                              }`}
                            >
                              {step.title}
                            </h3>
                            <p className="mt-[4px] font-inter font-normal text-[14px] leading-[140%] text-[#75757A]">
                              {step.description}
                            </p>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
