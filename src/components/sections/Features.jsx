import { useRef, useState, useEffect } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import attendanceIcon from "../../assets/attendance.png";
import leaveIcon from "../../assets/leave.png";
import analyticsIcon from "../../assets/analytics.png";
import selfServiceIcon from "../../assets/employee.png";
import progressIcon from "../../assets/progress.png";
import holidayIcon from "../../assets/holiday.png";
import offerLetterIcon from "../../assets/offerletter.png";
import documentIcon from "../../assets/document.png";
import dailyWorkIcon from "../../assets/dailywork.png";

const features = [
  {
    icon: attendanceIcon,
    title: "Attendance & Clock-in Control",
    description:
      "Real-time clock-in/out, automatic working hours calculation, late tracking, and policy-based work timings (10 AM – 7 PM).",
    bullets: [
      "Daily clock-in / clock-out",
      "Real-time hours calculation",
      "Late login tracking",
      "Auto absent/present calculation",
    ],
    footer: "Discipline + Accountability",
  },
  {
    icon: leaveIcon,
    title: "Leave Management System",
    description:
      "Self-service leave requests, approval workflows, balance tracking, and analytics to prevent leave misuse.",
    bullets: [
      "Paid, sick, unpaid leave balance",
      "Leave request & approval flow",
      "Monthly & yearly analytics",
      "Leave without applying detection",
    ],
    footer: "Eliminates Daily Chaos",
  },
  {
    icon: analyticsIcon,
    title: "Organization Analytics Dashboard",
    description:
      "Real-time visibility into attendance, WFH patterns, working hours, and leave consumption – exportable reports for decision-making.",
    bullets: [
      "Employee attendance analytics",
      "WFH analytics by team",
      "Working hour insights",
      "Leave analytics (per employee, per month)",
    ],
    footer: "Data-Driven Decisions",
  },
  {
    icon: selfServiceIcon,
    title: "Employee Self-Service Portal",
    description:
      "Employees manage their attendance, leaves, documents, and progress. HR department not needed for day-to-day queries.",
    bullets: [
      "Check own attendance & leave requests",
      "Access documents anytime",
      "Track personal progress",
    ],
    footer: "40–60% HR Workload Reduction",
  },
  {
    icon: progressIcon,
    title: "Team Progress & Learning Tracking",
    description:
      "Track boost, training completions, group discussions, and learning sessions with verified sources.",
    bullets: [
      "Books read tracking",
      "Courses completed (tagging)",
      "HR participation records",
      "Learning sessions verification",
    ],
    footer: "Very Few HRMS Have This",
  },
  {
    icon: holidayIcon,
    title: "Holiday & Culture Management",
    description:
      "Company holiday calendar, automatic notifications, birthday reminders, and team features to build team culture.",
    bullets: [
      "Holiday calendar alerts",
      "Automatic notifications",
      "Birthday & anniversary reminders",
      "Team engagement features",
    ],
    footer: "Culture Building",
  },
  {
    icon: offerLetterIcon,
    title: "Employee & Offer Letter Management",
    description:
      "Centralized master data, role tracking, offer letter management, and employment lifecycle visibility.",
    bullets: [
      "Complete employee master data",
      "Role, department, designation",
      "Offer letter centralization",
    ],
    footer: "Complete Records",
  },
  {
    icon: documentIcon,
    title: "Document Management & Security",
    description:
      "Secure upload and access for identity documents, bank details, and offers with HR-controlled visibility.",
    bullets: [
      "Document categories (ID, banking, etc.)",
      "Secure upload & access",
      "HR-controlled visibility",
      "Organized storage",
    ],
    footer: "Document Chaos Solved",
  },
  {
    icon: dailyWorkIcon,
    title: "Daily Work Report Submission",
    description:
      "End-of-day accountability without micromanagement. Track team progress and productivity insights.",
    bullets: [
      "End-of-day reporting",
      "Work summary submission",
      "Accountability tracking",
      "No micromanagement",
    ],
    footer: "Accountability + Trust",
  },
];

export default function Features() {
  const trackRef = useRef(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const isIntersecting = useRef(false);
  const isScrolling = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting.current = entry.isIntersecting;
      },
      { threshold: 0.7 } // more reliable on varied screen heights
    );

    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      // Ignore horizontal trackpad swipes natively
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      if (!isIntersecting.current) return;

      const isScrollingForward = e.deltaY > 0;
      const isScrollingBackward = e.deltaY < 0;

      // Unlock conditions to let native scroll take over
      if (activeCardIndex === features.length - 1 && isScrollingForward) return;
      if (activeCardIndex === 0 && isScrollingBackward) return;

      // Lock vertical scroll natively so the page doesn't jitter
      e.preventDefault();

      // Ignore micro-swipes and infinite trackpad inertia for snapping logic
      if (Math.abs(e.deltaY) < 15) return;

      if (isScrolling.current) return;
      isScrolling.current = true;

      let nextIndex = activeCardIndex;
      if (isScrollingForward && activeCardIndex < features.length - 1) {
        nextIndex = activeCardIndex + 1;
      } else if (isScrollingBackward && activeCardIndex > 0) {
        nextIndex = activeCardIndex - 1;
      }

      if (nextIndex !== activeCardIndex) {
        setActiveCardIndex(nextIndex);
        if (trackRef.current) {
          const firstCard = trackRef.current.querySelector('[data-card]');
          if (firstCard) {
            const cardWidth = firstCard.offsetWidth + 20; // 20 = gap
            trackRef.current.scrollTo({ left: nextIndex * cardWidth, behavior: 'smooth' });
          }
        }
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 600); // 600ms debounce ensures strict 1-by-1 snapping
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeCardIndex]);

  // Mouse drag-to-scroll
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const onMouseDown = (e) => {
    dragState.current = {
      isDragging: true,
      startX: e.pageX - trackRef.current.offsetLeft,
      scrollLeft: trackRef.current.scrollLeft,
    };
    trackRef.current.style.cursor = "grabbing";
  };

  const syncActiveIndexToDrag = () => {
    if (trackRef.current) {
      const firstCard = trackRef.current.querySelector('[data-card]');
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 20;
        const newIndex = Math.round(trackRef.current.scrollLeft / cardWidth);
        if (newIndex >= 0 && newIndex < features.length) {
          setActiveCardIndex(newIndex);
          // Gently snap to strictly align the card after drag release
          trackRef.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
        }
      }
    }
  };

  const onMouseLeave = () => {
    if (dragState.current.isDragging) {
      dragState.current.isDragging = false;
      if (trackRef.current) trackRef.current.style.cursor = "grab";
      syncActiveIndexToDrag();
    }
  };

  const onMouseUp = () => {
    if (dragState.current.isDragging) {
      dragState.current.isDragging = false;
      if (trackRef.current) trackRef.current.style.cursor = "grab";
      syncActiveIndexToDrag();
    }
  };

  const onMouseMove = (e) => {
    if (!dragState.current.isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - dragState.current.startX;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - walk;
  };

  return (
    <section className="bg-white w-full py-[60px] md:py-[80px] lg:py-[50px]">
      {/* Section Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center text-center mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[70px] px-4">
          <h2 className="font-['Bricolage_Grotesque'] font-bold text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] leading-[120%] text-[#212125]">
            Powerful <span className="text-[#35B729]">Features</span> Built for
            Every Role
          </h2>
          <p className="mt-3 sm:mt-4 font-inter font-normal text-[11px] sm:text-[13px] lg:text-[16px] leading-[140%] text-[#75757A]">
            From founders to HR to team leads, everyone gets what they need
          </p>
        </div>
      </ScrollReveal>

      {/* Carousel Wrapper */}
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
        {/* Scrollable Track */}
        <div
          ref={trackRef}
          className="flex flex-nowrap gap-[20px] overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide cursor-grab select-none"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {features.map((feature, i) => (
            <div
              key={i}
              data-card
              className="snap-start shrink-0 w-[calc(100%-0px)] sm:w-[calc(50%-10px)] lg:w-[calc((100%-40px)/3)] rounded-[20px] p-[16px] sm:p-[20px] border border-[#E7F4FF] shadow-[0px_0px_7px_0px_#2121250D] flex flex-col gap-[14px] sm:gap-[20px] transition-transform hover:-translate-y-1"
              style={{
                background:
                  "linear-gradient(180deg, rgba(231, 244, 255, 0.3) 0%, rgba(231, 244, 255, 0) 100%)",
              }}
            >
              {/* Icon */}
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] lg:w-[100.00390625px] lg:h-[100px] object-contain"
              />

              {/* Title */}
              <h3 className="w-full max-w-[370px] lg:min-h-[29px] font-['Bricolage_Grotesque'] font-medium text-[22px] sm:text-[24px] lg:text-[24px] leading-[120%] text-[#212125]">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="w-full max-w-[370px] lg:min-h-[66px] font-inter font-normal text-[12px] sm:text-[15px] lg:text-[18px] leading-[130%] text-[#75757A]">
                {feature.description}
              </p>

              {/* Bullet Points */}
              <ul className="w-full max-w-[370px] lg:min-h-[88px] flex flex-col gap-[6px] sm:gap-[8px]">
                {feature.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-[8px]">
                    <span className="mt-[2px] sm:mt-[3px] text-[#75757A] text-[12px] sm:text-[15px] lg:text-[18px] leading-[120%]">
                      •
                    </span>
                    <span className="font-inter font-normal text-[12px] sm:text-[15px] lg:text-[18px] leading-[120%] text-[#75757A]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Footer */}
              <p className="w-full max-w-[370px] lg:min-h-[23px] font-inter font-medium text-[12px] sm:text-[14px] lg:text-[18px] leading-[130%] text-[#212125] pt-[10px] sm:pt-[16px] border-[#E5E7EB]">
                {feature.footer}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
