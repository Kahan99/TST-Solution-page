import slackIcon from "../../assets/slack.png";
import reactIcon from "../../assets/react.png";
import nodeIcon from "../../assets/node.png";
import mysqlIcon from "../../assets/mysql.png";
import awsIcon from "../../assets/aws.png";
import ScrollReveal from "../ui/ScrollReveal";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";

const technologyLogos = [
  {
    icon: slackIcon,
    name: "Slack",
    glowColor: "rgba(224, 30, 90, 0.15)", // Slack Pink
  },
  {
    icon: reactIcon,
    name: "React",
    glowColor: "rgba(97, 218, 251, 0.15)", // React Blue
  },
  {
    icon: nodeIcon,
    name: "Node.js",
    glowColor: "rgba(104, 160, 99, 0.15)", // Node Green
  },
  {
    icon: mysqlIcon,
    name: "MySQL",
    glowColor: "rgba(0, 117, 143, 0.15)", // MySQL Blue
  },
  {
    icon: awsIcon,
    name: "AWS",
    glowColor: "rgba(255, 153, 0, 0.15)", // AWS Orange
  },
];

export default function TechnologyStackSection() {
  return (
    <section className="bg-white w-full py-[60px] sm:py-[80px] md:py-[100px] xl:py-[100px]">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[28px] sm:gap-[40px] lg:gap-[145px]">
          {/* Left Side: Content */}
          <ScrollReveal className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left lg:pt-[50px]">
            <h2 className="font-['Bricolage_Grotesque'] font-bold text-[36px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-[120%] text-[#212125]">
              <span className="text-[#35B729]">Technology Stack</span> used for
              TST HRMS
            </h2>
            <p className="mt-3 sm:mt-4 font-inter font-normal text-[10px] sm:text-[12px] md:text-[14px] leading-[140%] text-[#75757A] w-full max-w-[605px]">
              Our HRMS is powered by modern, scalable cloud infrastructure
              designed for security and reliability. We use industry-leading
              frameworks and databases to ensure your employee data is
              protected, accessible, and always available. Our tech stack
              prioritizes performance, compliance, and seamless integration with
              your existing tools.
            </p>
            <button className="mt-[18px] sm:mt-[20px] w-auto px-6 py-2 sm:py-3 bg-[#35B729] text-white font-inter font-medium text-[11px] sm:text-[14px] rounded-lg hover:bg-[#2d9620] transition-colors shadow-[0px_2px_8px_0px_#35B72933]">
              Start Your Project
            </button>
          </ScrollReveal>

          {/* Right Side: Logo Grid */}
          <div className="flex-1 w-full max-w-[460px]">
            <StaggerContainer className="grid grid-cols-2 gap-x-[12px] gap-y-[12px] sm:gap-x-[20px] sm:gap-y-[20px] lg:gap-x-[30px] lg:gap-y-[30px]">
              {technologyLogos.map((tech, index) => (
                <StaggerItem
                  key={index}
                  className="relative bg-white rounded-[14px] sm:rounded-[20px] p-[14px] sm:p-[22px] lg:p-[30px] shadow-[0px_10px_30px_0px_rgba(33,33,37,0.03)] border border-slate-50 flex items-center justify-center transition-transform hover:-translate-y-1 overflow-hidden h-[150px] lg:h-[200px]"
                >
                  {/* Subtle Glow Effect */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-40"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.glowColor} 0%, rgba(255,255,255,0) 70%)`,
                    }}
                  />

                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="relative z-10 w-[42px] h-[42px] sm:w-[64px] sm:h-[64px] lg:w-[80px] lg:h-[80px] object-contain"
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
