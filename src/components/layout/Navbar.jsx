import { useState } from "react";
import Button from "../ui/Button";
import logo from "../../assets/Logo.png";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Service",
    "Resources",
    "Portfolio",
    "Careers",
    "About",
    "Contact Us",
  ];

  return (
    <div className="w-full flex justify-center sticky top-0 z-50 py-[15px]">
      <nav className="flex w-full lg:w-[calc(100%-40px)] mx-auto h-[80px] items-center justify-between rounded-[20px] bg-white px-4 lg:px-[30px] shadow-sm border border-slate-100 relative">
        {/* Left Side: Logo + Links */}
        <div className="flex items-center gap-[60px] h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="TST Logo" className="h-[40px] w-auto" />
          </div>

          {/* Links (Hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-between w-[550px] h-full">
            {navItems.map((item) => {
              const isActive = activeItem === item;
              return (
                <div
                  key={item}
                  className="relative flex flex-col items-center justify-center h-full"
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveItem(item);
                    }}
                    className={`flex items-center justify-center h-[19px] text-[16px] leading-[120%] text-center transition-colors font-inter ${item === "Home" ? "w-[46px]" : ""} ${
                      isActive
                        ? "font-medium text-[#35B729]"
                        : "font-normal text-[#838387] hover:text-gray-900"
                    }`}
                  >
                    {item}
                  </a>
                  {isActive && (
                    <div className="absolute bottom-5 h-0.5 w-6 bg-[#35B729] rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTAs and Mobile Menu Toggle */}
        <div className="flex items-center gap-[15px]">
          <div className="hidden lg:flex items-center gap-[15px]">
            <Button
              variant="outline"
              className="px-8 py-2.5 bg-white border-[#35B729] text-[#35B729] rounded-xl"
            >
              Talk to us
            </Button>
            <Button className="px-8 py-2.5 bg-[#35B729] text-white rounded-xl">
              Get Free Quote
            </Button>
          </div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg bg-[#35B729] space-y-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={`block w-5 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-opacity ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[85px] left-0 w-full bg-white rounded-2xl shadow-lg border border-slate-100 p-6 flex flex-col gap-4 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-[16px] leading-[120%] font-inter py-2 border-b border-gray-50 ${
                  activeItem === item
                    ? "font-medium text-[#35B729]"
                    : "font-normal text-[#838387]"
                }`}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <Button
                variant="outline"
                className="w-full justify-center bg-white border-[#35B729] text-[#35B729] rounded-xl py-3"
              >
                Talk to us
              </Button>
              <Button className="w-full justify-center bg-[#35B729] text-white rounded-xl py-3">
                Get Free Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
