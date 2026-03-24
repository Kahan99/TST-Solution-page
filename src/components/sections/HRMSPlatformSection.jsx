import React from "react";
import ScrollReveal from "../ui/ScrollReveal";
import platformIcon from "../../assets/platform.png";
import puzzleIcon from "../../assets/problem.png";
import ellipse from "../../assets/Ellipse.png";
import ellipsePurple from "../../assets/Ellipse118.png";

export default function HRMSPlatformSection() {
  return (
    <div className="w-full bg-white py-[60px] md:py-[80px] lg:py-[50px] flex justify-center">
      {/* Main container (1240px with automatic 100px margins) */}
      <section className="w-full max-w-[1240px] relative lg:h-[850px] flex flex-col items-center lg:block gap-4 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-0">
        {/* CARD 1 — Bottom Left on Desktop, Top on Mobile */}
        <ScrollReveal
          className="order-2 lg:order-none relative overflow-hidden lg:absolute lg:left-0 lg:bottom-0 
        w-full max-w-[380px] lg:max-w-none lg:w-[800px] min-h-[400px] lg:h-[612px] bg-white rounded-[30px] lg:rounded-[50px] 
        p-8 lg:p-[50px] shadow-[3px_3px_20px_4px_#2121251A] 
        flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:gap-[50px] z-10"
        >
          <img
            src={ellipsePurple}
            alt="purple glow"
            className="absolute -top-[40px] -left-[40px] md:-top-[70px] md:-left-[70px] w-[120px] h-[120px] md:w-[180px] md:h-[180px] object-contain pointer-events-none z-0 opacity-60 blur-[50px]"
          />

          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:gap-[50px] w-full">
            <img
              src={puzzleIcon}
              alt="problem-icon"
              className="w-16 h-16 lg:w-[97.63px] lg:h-[99.1px] object-contain"
            />

            <div className="flex flex-col gap-4 lg:gap-[20px] items-center lg:items-start text-center lg:text-left">
              <h3 className="w-full lg:w-[700px] text-center lg:text-left font-['Bricolage_Grotesque'] font-bold text-2xl lg:text-[36px] leading-[120%] text-[#212125]">
                How This <span className="text-[#35B729]">Problem Started</span>
              </h3>

              <div className="flex flex-col gap-[14px] w-full lg:w-[700px] lg:h-[299px]">
                <p className="font-inter text-base lg:text-[24px] leading-[130%] text-[#75757A]">
                  TST Technology experienced rapid growth from 5 to 30 employees
                  in a few months. Our founder realized: Excel spreadsheets
                  weren't cutting it. HR was answering "Who's here today?"
                  questions instead of building culture. Payroll errors were
                  common. Team leads had zero visibility into their team's
                  attendance.
                </p>

                <p className="font-inter text-base lg:text-[24px] leading-[130%] text-[#75757A]">
                  That's when we decided to build an HRMS that solves the real
                  problems, not just record-keeping, but actual decision-making
                  software.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CARD 2 — Top Right on Desktop, Bottom on Mobile */}
        <ScrollReveal
          delay={0.2}
          className="order-1 lg:order-none relative overflow-hidden lg:absolute lg:right-0 xl:right-[-20px] lg:top-0 
        w-full max-w-[380px] lg:max-w-none lg:w-[700px] min-h-[300px] lg:h-[499px] bg-white rounded-[30px] lg:rounded-[50px] 
        p-8 lg:p-[50px] shadow-[3px_3px_20px_4px_#2121251A] 
        flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:gap-[50px] z-20"
        >
          <img
            src={ellipse}
            alt="bg glow"
            className="absolute -top-[40px] -left-[40px] md:-top-[60px] md:-left-[60px] w-[120px] h-[120px] md:w-[160px] md:h-[160px] object-contain pointer-events-none z-0 opacity-70 blur-[40px] mix-blend-screen"
          />

          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left gap-8 lg:gap-[50px] w-full">
            <img
              src={platformIcon}
              alt="platform-icon"
              className="w-16 h-16 lg:w-[100px] lg:h-[99.87px] object-contain"
            />

            <div className="flex flex-col gap-4 lg:gap-[20px] items-center lg:items-start text-center lg:text-left">
              <h2 className="w-full lg:w-[600px] text-center lg:text-left font-['Bricolage_Grotesque'] font-bold text-2xl lg:text-[36px] leading-[120%] text-[#212125]">
                Our <span className="text-[#35B729]">HRMS Platform</span>
              </h2>

              <p className="font-inter text-base lg:text-[24px] leading-[130%] text-[#75757A]">
                One unified HRMS that brings clarity to founders, automation to
                HR, accuracy to payroll, and independence to employees -
                managing attendance, leaves, documents, analytics, learning
                progress, and daily work reports in one simple, self-service
                system designed to scale with growing teams.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
