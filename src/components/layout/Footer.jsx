import React from "react";
import logo from "../../assets/Footerl LOGO (1).png";
import google from "../../assets/google.png";
import clutch from "../../assets/clutch.png";
import glassdoor from "../../assets/glassdoor.png";
import iso1 from "../../assets/iso1.png";
import iso2 from "../../assets/iso2.png";
import darkEllipse from "../../assets/footer-dark-ellipse.png";
import greenGlow from "../../assets/footer-green-glow.png";

const footerLinks = [
  {
    title: "About Company",
    links: [
      "About Us",
      "Contact Us",
      "Our Team",
      "Culture And Value",
      "Agile Mindset",
      "Our Journey",
    ],
  },
  {
    title: "Services",
    links: [
      "UI/UX Design",
      "App Development",
      "SaaS Product Development",
      "Web Development",
      "Software Development",
      "IT Consultancy",
      "DevOps as a Service",
      "Virtual CTO as a Service",
    ],
  },
  {
    title: "Other Pages",
    links: [
      "Careers",
      "Privacy Policy",
      "Terms And Conditions",
      "Disclaimer",
      "Sitemap",
      "FAQs",
    ],
  },
  {
    title: "Resources",
    links: ["Resources Library", "Blogs", "Podcast"],
  },
];

const socialIcons = [
  {
    name: "Instagram",
    path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z",
  },
  {
    name: "LinkedIn",
    path: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a2.7 2.7 0 0 0-2.7-2.7c-1.2 0-2 .7-2.3 1.3V10.7h-3v7.8h3v-4.3c0-.6.4-1.1 1-1.1s1 .5 1 1.1v4.3h3m-10.4-9.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8-1.8.8-1.8 1.8.8 1.8 1.8 1.8m1.5 9.1v-7.8h-3v7.8h3z",
  },
  {
    name: "Dribbble",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.61 4.41c1.08 1.45 1.52 3.23 1.34 4.97-1.39-.33-2.88-.47-4.33-.42-.14-.36-.3-.72-.47-1.07 1.41-.65 2.66-1.74 3.46-3.48zm-1.63-1.18c-.68 1.54-1.77 2.53-3.03 3.12-1.01-1.83-2.22-3.42-3.56-4.72 2.37.1 4.54.67 6.59 1.6zm-11.45.6c1.38 1.25 2.63 2.76 3.67 4.51-1.89.56-3.95.73-5.91.56.32-1.92 1.15-3.66 2.24-5.07zm-1.3 6.37c2.18.17 4.45-.04 6.57-.7 1.17 2.05 2.11 4.29 2.76 6.59-2.07.69-4.22.86-6.23.51-1.45-2.07-2.52-4.33-3.1-6.4zm8.67 8.35c-.62-2.12-1.47-4.14-2.51-6.04 1.37-.04 2.79.08 4.14.39-.39 2.05-1.29 3.9-2.61 5.65h.98z",
  },
  {
    name: "Behance",
    path: "M11.63 11.23c0 .87-.24 1.56-.7 2.06s-1.11.75-1.93.75H5v-6.3h3.8c.7 0 1.25.17 1.67.5s.64.84.64 1.52c0 .54-.11.96-.34 1.27s-.55.53-.9.68l-.05.02c.44.1.79.33 1.05.7s.4.87.4 1.5zm-2.05-3.48c0-.28-.08-.5-.24-.65s-.41-.23-.74-.23H7.2v1.8h1.4c.33 0 .58-.08.74-.23s.24-.39.24-.69zm.22 3.48c0-.33-.09-.59-.26-.76s-.46-.26-.85-.26H7.2v2.1h1.5c.39 0 .68-.08.85-.26s.25-.47.25-.82zm10.7-1.18h-5v.9h5v-.9zm-1.12 3.61c-.37.42-.89.63-1.55.63s-1.17-.21-1.55-.63c-.37-.42-.56-1.02-.56-1.8s.19-1.38.56-1.8c.38-.42.89-.63 1.55-.63s1.17.21 1.55.63c.37.42.56 1.02.56 1.8s-.19 1.38-.56 1.8z",
  },
  {
    name: "Pinterest",
    path: "M12.04 2C6.58 2 3 5.58 3 10.96c0 3.78 2.13 7.12 5.23 8.73-.07-.74-.13-1.88.03-2.69.14-.69.9-4.39.9-4.39s-.23-.46-.23-1.14c0-1.07.62-1.87 1.39-1.87.66 0 .98.49.98 1.08 0 .66-.42 1.64-.64 2.55-.18.77.39 1.4 1.15 1.4 1.38 0 2.44-1.45 2.44-3.54 0-1.85-1.33-3.15-3.23-3.15-2.2 0-3.49 1.65-3.49 3.36 0 .67.26 1.38.58 1.77.06.08.07.15.05.23-.05.25-.17.77-.19.87-.03.14-.1.17-.24.1-.9-.42-1.46-1.74-1.46-2.8 0-2.28 1.65-4.37 4.76-4.37 2.5 0 4.45 1.78 4.45 4.16 0 2.48-1.56 4.48-3.73 4.48-.73 0-1.41-.38-1.64-.83l-.45 1.72c-.16.62-.6 1.39-.9 1.86.68.21 1.4.33 2.15.33 5.46 0 9.04-3.58 9.04-8.96C21 5.58 17.5 2 12.04 2z",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#000623] text-white relative overflow-hidden">
      <img
        src={darkEllipse}
        alt=""
        className="absolute top-0 left-0 w-full object-cover pointer-events-none z-0"
      />
      <img
        src={greenGlow}
        alt=""
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[1400px] opacity-80 pointer-events-none z-0"
      />

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-[60px] sm:pt-[80px] md:pt-[120px] pb-[60px] relative z-10">
        {/* Top Section: Newsletter */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src={logo}
              alt="TST Logo"
              className="w-[140px] h-[140px] rounded-[80px] border border-[#FFFFFF1A] bg-[#FFFFFF05] backdrop-blur-[60px] object-contain p-[10px]"
            />
            <span className="text-[14px] text-white font-inter font-semibold leading-[120%] text-center opacity-100">
              TST Tech Matrix PVT. LTD.
            </span>
          </div>

          <h2 className="text-[32px] md:text-[40px] font-semibold text-center mt-[20px] font-['Bricolage_Grotesque'] leading-tight">
            Get Our Latest News & Updates
          </h2>

          <div className="flex items-center justify-center mt-[40px] relative w-full max-w-[450px]">
            <span className="absolute left-[16px] top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="16" rx="4" />
                <path d="m7 9 5 4 5-4" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-[#2E365F] rounded-full pl-[46px] pr-[24px] py-[14px] text-[14px] focus:outline-none focus:border-[#35B729] transition-all"
            />
            <button className="bg-[#35B729] w-[44px] h-[44px] rounded-full flex items-center justify-center absolute right-[4px] hover:bg-[#2e9f24] transition-colors group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-0.5 transition-transform"
              >
                <path d="M7 17L17 7" />
                <path d="M9 7h8v8" />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1E2746] mt-[80px] mb-[60px]" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[40px] text-left">
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h4 className="text-[16px] font-bold mb-[20px] font-['Bricolage_Grotesque']">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-[12px]">
                {column.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href="#"
                      className="text-[14px] text-[#9CA3AF] hover:text-white transition-colors font-inter"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company Column (Custom) */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[16px] font-bold mb-[20px] font-['Bricolage_Grotesque']">
              Company
            </h4>
            <div className="flex flex-col gap-[15px]">
              <div className="flex items-center justify-start gap-3">
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-[14px] text-[#F3F6FF] font-inter">
                  +91 9825582469
                </span>
              </div>
              <div className="flex items-center justify-start gap-3">
                <div className="w-[18px] h-[18px] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-[14px] text-[#F3F6FF] font-inter">
                  contact@tsttechnology.in
                </span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-start gap-3 mt-[10px]">
                {socialIcons.map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-[32px] h-[32px] rounded-full border border-[#1E2746] flex items-center justify-center text-[#35B729] hover:border-[#35B729] transition-all group"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="transition-colors"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ratings Section */}
        <div className="border-t border-[#1E2746] mt-[60px] pt-[40px]">
          <div className="mx-auto w-full max-w-[300px] md:max-w-none md:w-[869px] md:h-[93.3056640625px] flex items-center justify-center gap-y-8 gap-x-6 md:gap-[100px] flex-wrap md:flex-nowrap">
            {/* All Icon Items */}
            {[
              { img: google, name: "Google" },
              { img: clutch, name: "Clutch" },
              { img: glassdoor, name: "Glassdoor" },
              { img: iso1, name: "ISO 9001" },
              { img: iso2, name: "ISO Certified" },
            ].map((r, i) => (
              <div
                key={i}
                className={`w-[110px] md:w-[87px] h-[93.3056640625px] flex flex-col items-center justify-center gap-1 ${
                  i === 0
                    ? "order-1"
                    : i === 1
                      ? "order-2"
                      : i === 3
                        ? "order-3"
                        : i === 4
                          ? "order-4"
                          : "order-5"
                } md:order-none ${i === 2 ? "w-full md:w-[87px]" : ""}`}
              >
                <img
                  src={r.img}
                  alt={r.name}
                  className="w-full h-full object-contain opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[40px] text-center">
          <p className="text-[12px] text-[#6B7280] font-inter">
            © Copyright 2025 TST Technology | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
