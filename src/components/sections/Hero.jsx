import Button from "../ui/Button";
import StaggerContainer from "../ui/StaggerContainer";
import StaggerItem from "../ui/StaggerItem";

export default function Hero() {
  return (
    <div className="w-full bg-white flex justify-center py-[20px] md:py-[30px] lg:py-[30px]">
      <section
        className="flex w-full lg:w-[calc(100%-40px)] h-auto min-h-[500px] lg:h-[calc(100vh-140px)] flex-col items-center justify-center rounded-[20px] text-center px-4 sm:px-6 md:px-8 lg:px-0 py-[40px] md:py-[50px] lg:py-0"
        style={{
          background:
            "linear-gradient(360deg, rgba(221, 247, 238, 0.76) 20%, rgba(255, 255, 255, 0.2) 100%), #FFFFFF",
          boxShadow: "0px 0px 7px 0px #00000008",
        }}
      >
        <StaggerContainer className="mx-auto max-w-4xl">
          <StaggerItem>
            <h1 className="mb-6 text-center text-[26px] sm:text-[32px] md:text-[40px] lg:text-[70px] font-['Bricolage_Grotesque'] font-semibold leading-[120%] tracking-[0%] text-[#1a1a1a]">
              Complete HRMS Solution for
              <br />
              Growing Teams
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="mx-auto mb-10 w-full max-w-[870px] text-center font-inter text-[15px] sm:text-[18px] lg:text-[22px] font-normal leading-[140%] text-[#75757A]">
              Automate attendance tracking, leave management, and HR analytics.
              Reduce HR
              <br className="hidden sm:block" />
              workload by 40-60%. Give founders visibility without
              micromanagement.
            </p>
          </StaggerItem>
          <StaggerItem className="flex flex-row items-center justify-center gap-[10px] sm:gap-[15px] w-full max-w-[380px] mx-auto">
            <Button className="flex items-center justify-center w-1/2 sm:w-[185px] h-[50px] gap-[10px] rounded-[12px] px-[12px] sm:px-[20px] py-[10px] font-inter">
              See Features
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center w-1/2 sm:w-[185px] h-[50px] gap-[10px] rounded-[12px] px-[12px] sm:px-[20px] py-[10px] border-[1.5px] bg-white font-inter"
            >
              Schedule Demo
            </Button>
          </StaggerItem>
        </StaggerContainer>
      </section>
    </div>
  );
}
