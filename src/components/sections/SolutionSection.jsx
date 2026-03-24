import founderIcon from "../../assets/founder.png";
import controlIcon from "../../assets/control.png";
import pricingIcon from "../../assets/pricing.png";
import supportIcon from "../../assets/support.png";
import customIcon from "../../assets/custom.png";
import securityIcon from "../../assets/security.png";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";

const solutions = [
  {
    icon: founderIcon,
    title: "Founder-Friendly",
    description:
      "Simple setup, no technical skills required. Your team can be operational in days, not weeks.",
  },
  {
    icon: controlIcon,
    title: "Control Without Micromanagement",
    description:
      "Get visibility into what matters (attendance, productivity, discipline) without becoming a surveillance tool.",
  },
  {
    icon: pricingIcon,
    title: "Transparent Pricing",
    description:
      "No hidden costs. Simple per-employee pricing. Scale up or down as your company grows.",
  },
  {
    icon: supportIcon,
    title: "24/7 Support",
    description:
      "Dedicated support team ready to help. Issues resolved within hours, not days.",
  },
  {
    icon: customIcon,
    title: "Customisation Available",
    description:
      "Need specific workflows? Compliance requirements? We can customise to your exact needs.",
  },
  {
    icon: securityIcon,
    title: "Data Security First",
    description:
      "Your employee data is encrypted, backed up, and protected with bank-level security.",
  },
];

export default function SolutionSection() {
  return (
    <section className="bg-white w-full py-[60px] sm:py-[80px] md:py-[120px] xl:py-[120px]">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col items-center text-center mb-[30px] sm:mb-[40px] md:mb-[60px] lg:mb-[70px]">
          <h2 className="font-['Bricolage_Grotesque'] font-bold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[120%] text-[#212125]">
            Why Do <span className="text-[#35B729]">Others</span> Use{" "}
            <span className="text-[#35B729]">Our Solutions</span>
          </h2>
          <p className="mt-2 font-inter font-regular text-[11px] sm:text-[13px] md:text-[14px] text-[#75757A] leading-[140%] max-w-[320px]">
            What makes our HRMS different from the rest
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center w-full max-w-[340px] sm:max-w-none mx-auto">
          {solutions.map((item, index) => (
            <StaggerItem
              key={index}
              className="bg-[#F7F9FB] rounded-[30px] transition-transform hover:-translate-y-1 hover:shadow-lg duration-300 w-full lg:w-[380px] min-h-[310px] sm:min-h-[360px] md:min-h-[430px] lg:min-h-[410px] lg:h-[410px] relative overflow-hidden group"
            >
              {/* Background Watermark Icon - top: 30px, left: 213px, size: 217px */}
              <img
                src={item.icon}
                alt=""
                className="absolute right-[-25px] top-[18px] w-[140px] h-[140px] sm:right-[-35px] sm:top-[30px] sm:w-[180px] sm:h-[180px] lg:left-[213px] lg:right-auto lg:w-[217px] lg:h-[217px] object-contain opacity-[0.03] select-none pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              />

              {/* Content Container - shifted up to top-[100px] and heights removed to allow text wrapping */}
              <div className="absolute left-[24px] right-[24px] top-[132px] sm:top-[120px] lg:left-[30px] lg:right-auto lg:top-[150px] lg:w-[320px] flex flex-col gap-[16px] sm:gap-[24px] lg:gap-[30px] z-10">
                {/* Icon */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] object-contain"
                />

                {/* Text Block */}
                <div className="flex flex-col gap-[12px]">
                  <h3 className="w-full lg:w-[320px] font-['Bricolage_Grotesque'] font-bold text-[18px] sm:text-[22px] lg:text-[24px] text-[#212125] leading-[120%]">
                    {item.title}
                  </h3>
                  <p className="w-full lg:w-[320px] font-inter font-normal text-[12px] sm:text-[15px] lg:text-[20px] leading-[120%] text-[#75757A]">
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
