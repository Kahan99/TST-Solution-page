import hrmsGraph from "../../assets/hrms-graph.png";
import ScrollReveal from "../ui/ScrollReveal";

const stats = [
  { label: "HR Workload Reduction", value: "50%" },
  { label: "Days Setup Time", value: "0" },
  { label: "Step Implementation", value: "4" },
  { label: "Core Features", value: "11" },
];

export default function HRMSSection() {
  return (
    <div className="w-full bg-white flex justify-center py-[60px] md:py-[80px] lg:py-[50px]">
      <section className="w-full max-w-[1240px] px-4 sm:px-6 md:px-8 lg:px-0">
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] sm:gap-[50px] md:gap-[80px] lg:gap-[100px] items-start lg:h-[564px]">
          {/* Left Column: Content + Image */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="w-full font-['Bricolage_Grotesque'] font-bold text-[36px] sm:text-[48px] lg:text-[60px] leading-[120%] tracking-[0%] text-[#1a1a1a]">
              <span className="text-[#35B729]">Why</span> HR Teams &<br />
              Founders{" "}
              <span className="text-[#35B729]">
                Love Our
                <br />
                HRMS
              </span>
            </h2>
            <p className="mt-6 w-full max-w-[620px] font-['Inter'] font-normal text-[16px] lg:text-[20px] leading-[130%] text-[#75757A]">
              Real results that reduce HR workload, improve visibility, and give
              founders complete control without micromanagement.
            </p>

            {/* Graph Image */}
            <div className="mt-10 w-full max-w-[620px] overflow-hidden">
              <img
                src={hrmsGraph}
                alt="HRMS Results Graph"
                className="block w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column: Statistics */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:pl-0 lg:pl-10">
            {/* Main Statistic */}
            <div className="mb-12">
              <div className="font-inter font-medium text-[64px] md:text-[100px] lg:text-[140px] leading-[120%] text-[#212125]">
                100%
              </div>
              <p className="mt-2 font-inter font-medium text-[16px] lg:text-[20px] leading-[120%] text-[#75757A]">
                Data visibility & control
              </p>
            </div>

            {/* 4-Stat Grid */}
            <div className="grid grid-cols-2 gap-y-10 md:gap-y-12 gap-x-8 w-full max-w-[360px] lg:max-w-none">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="font-inter font-medium text-[36px] lg:text-[50px] leading-[120%] text-[#212125]">
                    {stat.value}
                  </div>
                  <p className="mt-2 font-inter font-medium text-[14px] lg:text-[16px] leading-[120%] text-[#75757A]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
