import React from "react";
import securityImg from "../../assets/security 2.png";
import uptimeImg from "../../assets/uptime.png";
import complianceImg from "../../assets/compliance.png";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";

const features = [
  {
    title: "High-Level Data Security",
    description:
      "End-to-end encryption, regular audits, and automated backups keep your employee data secure.",
    image: securityImg,
    gradient:
      "radial-gradient(100% 100% at 50% 0%, rgba(3, 169, 244, 0.15) 0%, rgba(255, 255, 255, 0.15) 75%)",
  },
  {
    title: "99.9% Uptime Guarantee",
    description:
      "Enterprise-grade infrastructure ensures your HRMS is always available when you need it.",
    image: uptimeImg,
    gradient:
      "radial-gradient(100% 100% at 50% 0%, rgba(255, 215, 0, 0.15) 0%, rgba(255, 255, 255, 0.15) 75%)",
  },
  {
    title: "Compliance Ready",
    description:
      "Built to meet Indian labor laws, GDPR standards, and industry compliance requirements out of the box.",
    image: complianceImg,
    gradient:
      "radial-gradient(100% 100% at 50% 0%, rgba(53, 183, 41, 0.15) 0%, rgba(255, 255, 255, 0.15) 75%)",
  },
];

const DeliveryReliabilitySection = () => {
  return (
    <section className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <ScrollReveal className="flex flex-col items-center">
          <h2 className="font-['Bricolage_Grotesque'] font-semibold text-[24px] sm:text-[28px] text-[#212125] text-center leading-[120%]">
            Enterprise-Grade{" "}
            <span className="text-[#35B729]">Delivery & Reliability</span>
          </h2>
          <p className="font-inter text-[10px] sm:text-[14px] text-[#75757A] text-center mt-2 max-w-[600px]">
            Built for teams that care about data security, compliance, and
            customer success
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mt-[30px] sm:mt-[50px] justify-items-center w-full max-w-[320px] sm:max-w-none mx-auto">
          {features.map((feature, index) => (
            <StaggerItem
              key={index}
              style={{ background: feature.gradient }}
              className="w-full lg:w-[380px] h-full lg:h-[415px] rounded-[24px] sm:rounded-[30px] pt-[20px] sm:pt-[40px] pb-[20px] sm:pb-[40px] px-[14px] sm:px-[30px] border border-[#E9EDEF] flex flex-col items-center"
            >
              {/* Card Image */}
              <div className="mb-2 sm:mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-[120px] sm:max-w-[180px] lg:max-w-[266.67px] h-auto object-contain mx-auto"
                />
              </div>

              {/* Card Content */}
              <div className="text-center mt-auto">
                <h3 className="font-['Bricolage_Grotesque'] font-bold text-[18px] sm:text-[22px] lg:text-[24px] text-[#212125] text-center leading-[120%]">
                  {feature.title}
                </h3>
                <p className="font-inter font-normal text-[11px] sm:text-[15px] lg:text-[18px] text-[#75757A] text-center leading-[120%] mt-1 sm:mt-2">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default DeliveryReliabilitySection;
