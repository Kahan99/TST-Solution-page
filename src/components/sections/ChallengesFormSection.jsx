import React from "react";
import formIllustration from "../../assets/form.png";
import ScrollReveal from "../ui/ScrollReveal";

const ChallengesFormSection = () => {
  return (
    <section className="w-full bg-[#F7F9FB] py-[60px] sm:py-[80px] md:py-[100px]">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <ScrollReveal className="flex flex-col lg:flex-row gap-[30px] sm:gap-[50px] md:gap-[80px] items-center">
          {/* Left Side: Form */}
          <div className="w-full max-w-[760px] lg:w-1/2 text-center lg:text-left">
            <h2 className="font-['Bricolage_Grotesque'] font-semibold text-[54px] sm:text-[32px] text-[#212125] leading-tight">
              Tell Us About Your HR Challenges
            </h2>
            <p className="text-[12px] sm:text-[14px] text-[#75757A] mt-[10px] max-w-[600px] mx-auto lg:mx-0 font-inter">
              Whether you need our standard HRMS or a customizable solution
              tailored to your company, we’re here to help.
            </p>

            <form
              className="flex flex-col gap-[20px] mt-[30px] text-left"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col md:flex-row gap-[20px]">
                {/* Name Input */}
                <div className="flex flex-col flex-1">
                  <label className="text-[14px] text-[#212125] mb-[6px] font-inter font-medium">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full bg-white border border-[#E5E7EB] rounded-[10px] px-[16px] py-[14px] sm:py-[12px] text-[14px] font-inter focus:outline-none focus:border-[#35B729] focus:ring-1 focus:ring-[#35B729] transition-all"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col flex-1">
                  <label className="text-[14px] text-[#212125] mb-[6px] font-inter font-medium">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full bg-white border border-[#E5E7EB] rounded-[10px] px-[16px] py-[14px] sm:py-[12px] text-[14px] font-inter focus:outline-none focus:border-[#35B729] focus:ring-1 focus:ring-[#35B729] transition-all"
                    required
                  />
                </div>
              </div>

              {/* Challenge Textarea */}
              <div className="flex flex-col">
                <label className="text-[14px] text-[#212125] mb-[6px] font-inter font-medium">
                  What’s your biggest HR challenge right now?
                </label>
                <textarea
                  placeholder="Enter your biggest HR challenge"
                  className="w-full h-[200px] sm:h-[120px] bg-white border border-[#E5E7EB] rounded-[10px] px-[16px] py-[12px] text-[14px] font-inter focus:outline-none focus:border-[#35B729] focus:ring-1 focus:ring-[#35B729] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center lg:justify-start">
                <button
                  type="submit"
                  className="bg-[#35B729] text-white w-[210px] sm:w-auto px-[24px] py-[12px] rounded-[10px] mt-[20px] font-medium font-inter hover:opacity-90 transition-opacity"
                >
                  Get Started Now
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Illustration */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end">
            <img
              src={formIllustration}
              alt="HR Illustration"
              className="w-full max-w-[450px] object-contain"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ChallengesFormSection;
