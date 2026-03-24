import attendanceIcon from "../../assets/alarm.png";
import ScrollReveal from "../ui/ScrollReveal";
import leaveIcon from "../../assets/true.png";
import analyticsIcon from "../../assets/stats.png";
import selfServiceIcon from "../../assets/setting2.png";
import costIcon from "../../assets/internet.png";
import progressIcon from "../../assets/books.png";
import crossIcon from "../../assets/cros.png";

/**
 * Data for the comparison table.
 * Each row compares a feature in our HRMS vs traditional methods.
 */
const rows = [
  {
    feature: "Attendance Tracking",
    hrmsIcon: attendanceIcon,
    hrms: "Real-time clock-in/out",
    traditional: "Manual, error-prone logs.",
  },
  {
    feature: "Leave Management",
    hrmsIcon: leaveIcon,
    hrms: "Self-service, auto-approval",
    traditional: "Email-based, unstructured.",
  },
  {
    feature: "HR Analytics",
    hrmsIcon: analyticsIcon,
    hrms: "Real-time dashboard",
    traditional: "Manual reports, low insight.",
  },
  {
    feature: "Employee Self-Service",
    hrmsIcon: selfServiceIcon,
    hrms: "Full self-service portal",
    traditional: "Always depend on HR",
  },
  {
    feature: "Cost",
    hrmsIcon: costIcon,
    hrms: "Affordable SaaS",
    traditional: "High effort or high fees.",
  },
  {
    feature: "Team Progress Tracking",
    hrmsIcon: progressIcon,
    hrms: "Books, courses, GDs",
    traditional: "Almost never tracked.",
  },
];

/**
 * IntegrationsSection Component
 * Displays a comparison table between our HRMS and traditional methods.
 * Layout adheres to a 1240px wide system with specific typography (20px Inter Medium).
 */
export default function IntegrationsSection() {
  return (
    <section className="w-full bg-white py-[60px] sm:py-[80px] md:py-[100px]">
      <ScrollReveal className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title - Clamped to 20px Inter Medium as per specification */}
        <div className="flex flex-col items-center text-center mb-[40px] md:mb-[50px]">
          <h2 className="font-['Bricolage_Grotesque'] font-bold text-[30px] sm:text-[34px] md:text-[36px] leading-[120%] text-[#35B729] w-full max-w-[1240px] min-h-[43px]">
            Our <span className="text-[#212125]">HRMS</span> vs Alternatives
          </h2>
        </div>

        {/* 
          DESKTOP VIEW (XL) 
          Specifications: Width 1240px, Height 593px.
          Features a 3-column grid with 'Our HRMS' highlighted in green.
        */}
        <div className="hidden xl:block w-full max-w-[1240px] h-[593px] rounded-[20px] overflow-hidden">
          <div className="grid grid-cols-3 h-[60px] lg:h-[70px]">
            <div className="flex items-center px-[24px] font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left bg-white">
              Feature
            </div>
            <div className="flex items-center px-[24px] font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left bg-[#F0FDF4] border-x border-t border-[#35B729] rounded-t-[20px]">
              Our HRMS
            </div>
            <div className="flex items-center px-[24px] font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left bg-white">
              Traditional HR Methods
            </div>
          </div>

          {rows.map((row, index) => (
            <div key={row.feature} className="grid grid-cols-3 h-[74px]">
              <div
                className={`flex items-center rounded-l-[15px] px-[24px] font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left ${
                  index % 2 === 0 ? "bg-[#F5F6F7]" : "bg-white"
                }`}
              >
                {row.feature}
              </div>

              <div
                className={`flex items-center px-[24px] border-x border-[#35B729] ${
                  index % 2 === 0 ? "bg-[#EDF5EF]" : "bg-[#F0FDF4]"
                } ${index === rows.length - 1 ? "rounded-b-[20px] border-b" : ""}`}
              >
                <div className="flex items-center gap-[10px]">
                  <img
                    src={row.hrmsIcon}
                    alt="check"
                    className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] object-contain"
                  />
                  <span
                    className={`font-inter font-medium text-[20px] leading-[120%] text-left ${
                      index % 2 === 0 ? "text-[#212125]" : "text-[#212125]"
                    }`}
                  >
                    {row.hrms}
                  </span>
                </div>
              </div>

              <div
                className={`flex items-center px-[24px] rounded-r-[15px] ${
                  index % 2 === 0 ? "bg-[#F5F6F7]" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-[10px]">
                  <img
                    src={crossIcon}
                    alt="cross"
                    className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] object-contain"
                  />
                  <span className="font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left">
                    {row.traditional}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 
          TABLET VIEW (MD to LG) 
          Specifications: Removal of outer borders, maintains 3-column comparison.
        */}
        <div className="hidden md:block xl:hidden w-full max-w-[1240px] rounded-[20px] overflow-hidden">
          <div className="grid grid-cols-3">
            <div className="py-[16px] lg:py-[18px] px-[16px] lg:px-[20px] font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left">
              Feature
            </div>
            <div className="py-[16px] lg:py-[18px] px-[16px] lg:px-[20px] font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left bg-[#F0FDF4] border-x border-[#35B729] rounded-t-[16px]">
              Our HRMS
            </div>
            <div className="py-[16px] lg:py-[18px] px-[16px] lg:px-[20px] font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left">
              Traditional HR Methods
            </div>
          </div>

          {rows.map((row, index) => (
            <div key={`${row.feature}-md`} className="grid grid-cols-3">
              <div className="py-[16px] lg:py-[18px] px-[16px] lg:px-[20px] font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left">
                {row.feature}
              </div>

              <div
                className={`py-[16px] lg:py-[18px] px-[16px] lg:px-[20px] bg-[#F0FDF4] border-x border-[#35B729] ${
                  index === rows.length - 1 ? "rounded-b-[16px]" : ""
                }`}
              >
                <div className="flex items-center gap-[10px]">
                  <img
                    src={row.hrmsIcon}
                    alt="check"
                    className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] object-contain"
                  />
                  <span className="font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left">
                    {row.hrms}
                  </span>
                </div>
              </div>

              <div className="py-[16px] lg:py-[18px] px-[16px] lg:px-[20px]">
                <div className="flex items-center gap-[10px]">
                  <img
                    src={crossIcon}
                    alt="cross"
                    className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px] object-contain"
                  />
                  <span className="font-inter font-medium text-[20px] leading-[120%] text-[#212125] text-left">
                    {row.traditional}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 
          MOBILE VIEW (SM)
          Compact 3-column comparison with horizontal scroll and highlighted middle column.
        */}
        <div className="md:hidden w-full overflow-x-auto">
          <div className="min-w-[680px] rounded-[16px] overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="py-[14px] px-[14px] font-inter font-medium text-[18px] leading-[120%] text-[#212125] text-left">
                Feature
              </div>
              <div className="py-[14px] px-[14px] font-inter font-medium text-[18px] leading-[120%] text-[#212125] text-left bg-[#35B729] rounded-t-[16px]">
                Our HRMS
              </div>
              <div className="py-[14px] px-[14px] font-inter font-medium text-[18px] leading-[120%] text-[#212125] text-left">
                Traditional Methods
              </div>
            </div>

            {rows.map((row, index) => (
              <div
                key={`${row.feature}-sm`}
                className="grid grid-cols-3 min-h-[70px]"
              >
                <div
                  className={`py-[12px] px-[14px] font-inter font-medium text-[14px] leading-[120%] text-[#212125] text-left ${
                    index % 2 === 0 ? "bg-[#F5F6F7]" : "bg-white"
                  }`}
                >
                  {row.feature}
                </div>

                <div
                  className={`py-[12px] px-[14px] ${
                    index % 2 === 0 ? "bg-[#EDF5EF]" : "bg-[#35B729]"
                  } ${index === rows.length - 1 ? "rounded-b-[16px]" : ""}`}
                >
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={row.hrmsIcon}
                      alt="check"
                      className="w-[16px] h-[16px] object-contain"
                    />
                    <span
                      className={`font-inter font-semibold text-[14px] leading-[120%] text-left ${
                        index % 2 === 0 ? "text-[#212125]" : "text-[#111827]"
                      }`}
                    >
                      {row.hrms}
                    </span>
                  </div>
                </div>

                <div
                  className={`py-[12px] px-[14px] ${
                    index % 2 === 0 ? "bg-[#F5F6F7]" : "bg-white"
                  }`}
                >
                  <div className="flex items-center gap-[8px]">
                    <img
                      src={crossIcon}
                      alt="cross"
                      className="w-[16px] h-[16px] object-contain"
                    />
                    <span className="font-inter font-medium text-[14px] leading-[120%] text-[#212125] text-left">
                      {row.traditional}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
