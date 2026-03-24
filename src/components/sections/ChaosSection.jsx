import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";
import ScrollReveal from "../ui/ScrollReveal";

const chaosCards = [
  {
    title: "HR & Admin Teams",
    bgColor: "bg-[#FFE2EF]",
    height: "lg:h-[464px]",
    bullets: [
      "Constant interruptions for leave/attendance queries",
      "Manual Excel tracking = errors everywhere",
      "No analytics for management review",
      "Document chaos (offers, IDs, banking)",
      "The same questions are asked daily",
    ],
  },
  {
    title: "Founders & Directors",
    bgColor: "bg-[#D9EEF9]",
    height: "lg:h-[442px]",
    bullets: [
      "No visibility on actual productivity",
      "Can't track WFH without micromanaging",
      "Manual salary calculations are full of errors",
      "Employees misusing leave & work hours",
      "No consolidated HR data for decisions",
    ],
  },
  {
    title: "Team Leads & Managers",
    bgColor: "bg-[#ECEDFF]",
    height: "lg:h-[398px]",
    bullets: [
      "No clear view of team availability",
      "Hard to track discipline issues",
      "Can't see learning & growth progress",
      "Dependent on HR for reports",
      "No insights into team attendance patterns",
    ],
  },
  {
    title: "Employees",
    bgColor: "bg-[#FFF6DD]",
    height: "lg:h-[369px]",
    bullets: [
      "No transparency in attendance & leave",
      "Must ask HR for basic information",
      "No place to track personal growth",
      "Confusion around holidays & policies",
      "No visibility into their progress",
    ],
  },
];

export default function ChaosSection() {
  return (
    <div className="w-full bg-white flex justify-center py-[60px] md:py-[80px] lg:py-[50px]">
      <section className="w-full max-w-[1240px] flex flex-col gap-[30px] md:gap-[50px] lg:gap-[70px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Header Content */}
        <ScrollReveal>
          <div className="flex flex-col items-center">
            <h2 className="w-full lg:w-[795px] lg:h-[43px] font-['Bricolage_Grotesque'] font-bold text-[28px] sm:text-[32px] lg:text-[36px] leading-[120%] text-center text-[#212125] mb-2 sm:mb-4">
              The HR Chaos Every{" "}
              <span className="text-[#35B729]">Growing Company</span> Faces
            </h2>
            <p className="w-full lg:w-[521px] lg:h-[20px] font-inter font-normal text-[12px] sm:text-[14px] leading-[140%] text-center text-[#75757A]">
              These pain points are costing you time, accuracy, and control every
              single day.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-[12px] sm:gap-[16px] md:gap-[30px] lg:gap-[40px] w-full max-w-[380px] md:max-w-none mx-auto">
          {chaosCards.map((card, index) => (
            <StaggerItem
              key={index}
              className={`${card.bgColor} rounded-[20px] p-[20px] sm:p-[24px] lg:p-[30px] w-full h-auto ${card.height} shadow-[0px_0px_7px_0px_#2121250D]`}
            >
              <div className="w-full flex flex-col gap-[14px] sm:gap-[18px] lg:gap-[20px]">
                <h3 className="flex items-center font-['Bricolage_Grotesque'] font-medium text-[20px] sm:text-[22px] lg:text-[24px] leading-[120%] text-[#212125]">
                  {card.title}
                </h3>
                <ul className="flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[14px]">
                  {card.bullets.map((bullet, bIndex) => (
                    <li key={bIndex} className="flex items-start">
                      <span className="mr-[8px] mt-[1px] text-[#75757A] text-[14px] sm:text-[16px] lg:text-[18px] leading-[120%]">
                        •
                      </span>
                      <span className="font-inter font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[120%] text-[#75757A]">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </div>
  );
}
