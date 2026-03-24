import ctaImage from "../../assets/cta-image.png";
import ScrollReveal from "../ui/ScrollReveal";

export default function CTASection() {
  return (
    <section className="bg-white w-full py-[60px] sm:py-[80px] md:py-[100px] xl:py-[100px]">
      {/* CTA Container */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* CTA Card */}
        <ScrollReveal className="w-full max-w-[380px] lg:max-w-none mx-auto bg-[#F7F9FB] rounded-[30px] shadow-[0px_1px_8px_0px_#2121250A] flex flex-col lg:flex-row items-stretch overflow-hidden lg:min-h-[415px]">
          {/* Left Section - Text & CTA */}
          <div className="order-2 lg:order-1 min-w-0 flex-1 flex flex-col gap-[14px] md:gap-[16px] text-center lg:text-left items-center lg:items-start justify-center p-[20px] sm:p-[24px] md:p-[32px] lg:px-[36px] lg:py-[42px] xl:px-[50px] xl:py-[50px]">
            {/* Heading */}
            <h2 className="font-['Bricolage_Grotesque'] font-bold text-[30px] sm:text-[32px] md:text-[32px] lg:text-[36px] leading-[120%] lg:leading-[130%] text-[#212125]">
              Ready to Transform Your HR Operations?
            </h2>

            {/* Description */}
            <p className="font-inter font-normal text-[12px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[140%] text-[#75757A] max-w-[400px]">
              Join companies that automated their HR and freed up 40–60% of HR's
              time.
            </p>

            {/* CTA Button */}
            <div className="flex pt-[6px] sm:pt-[8px] w-auto">
              <button className="w-auto px-6 py-2 bg-[#35B729] text-white font-inter font-medium text-[11px] sm:text-[14px] md:text-[15px] rounded-lg hover:bg-[#2d9620] transition-colors shadow-[0px_2px_8px_0px_#35B72933]">
                Get Started Now
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="order-1 lg:order-2 w-full lg:w-[52%] xl:w-[620px] h-[200px] sm:h-[260px] md:h-[320px] lg:h-auto xl:h-[415px] overflow-hidden lg:rounded-r-[30px]">
            <img
              src={ctaImage}
              alt="Transform HR Operations"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
