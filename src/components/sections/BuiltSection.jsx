import bulbIcon from "../../assets/bulb.png";
import targetIcon from "../../assets/target.png";
import ScrollReveal from "../ui/ScrollReveal";

export default function BuiltSection() {
  return (
    <div className="w-full bg-white flex justify-center py-[60px] md:py-[80px] lg:py-[50px]">
      {/* Main section container */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Wrapper */}
        <ScrollReveal className="flex flex-col gap-6 w-full lg:relative lg:pt-[120px] lg:pb-[350px] lg:min-h-[829.99px]">
          {/* First Card */}
          <div className="bg-white rounded-[30px] lg:rounded-[50px] shadow-[3px_3px_20px_4px_#2121251A] p-[25px] sm:p-[35px] lg:p-[50px] w-full lg:w-[860px] h-auto lg:h-[519px] flex flex-col items-center lg:items-start text-center lg:text-left gap-[25px] lg:gap-[50px]">
            <img
              src={bulbIcon}
              alt="idea icon"
              className="w-[50px] h-[60px] lg:w-[85.7px] lg:h-[100px] ml-0 lg:ml-[7px] object-contain"
            />

            <h3 className="font-['Bricolage_Grotesque'] font-bold text-[24px] lg:text-[36px] leading-[120%] text-[#2E2E2E]">
              <span className="text-[#35B729]">Why</span> We Built This Solution
            </h3>

            <div className="flex flex-col gap-[18px] max-w-[700px]">
              <p className="font-inter text-[16px] lg:text-[24px] leading-[130%] text-[#75757A]">
                We built our HRMS to solve a fundamental problem: growing
                companies struggle to manage their workforce effectively without
                being overwhelmed by administrative overhead.
              </p>

              <p className="font-inter text-[16px] lg:text-[24px] leading-[130%] text-[#75757A]">
                Whether you're a founder wanting control, an HR manager tired of
                repetitive questions, or a team lead needing visibility, this
                system was designed with you in mind.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="w-full lg:w-[600px] h-auto lg:h-[400px] bg-white rounded-[30px] lg:rounded-[50px] shadow-[3px_3px_20px_4px_#2121251A] p-[25px] lg:p-[50px] lg:absolute lg:bottom-[20px] lg:right-[-30px] flex flex-col items-center lg:items-start text-center lg:text-left">
            <img
              src={targetIcon}
              alt="mission icon"
              className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] mb-[20px] lg:mb-[30px]"
            />

            <h4 className="font-['Bricolage_Grotesque'] font-bold text-[24px] lg:text-[36px] leading-[120%] text-[#2E2E2E] mb-[15px] lg:mb-[20px]">
              Our <span className="text-[#35B729]">Mission</span>
            </h4>

            <p className="max-w-[450px] font-inter text-[16px] lg:text-[24px] leading-[130%] text-[#75757A]">
              Give every growing company the HR infrastructure they need to
              scale.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
