import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const steps = [
  { title: "Setup & Configuration", desc: "Install HRMS, configure company settings, set work timings (10 AM – 7 PM, etc.), and define leave policy", color: "#4ade80", icon: "⚙️" },
  { title: "Employee Data Import", desc: "Import employee master data (role, department, designation), set up team structure, and assign team leads", color: "#f472b6", icon: "📋" },
  { title: "Team Training", desc: "Train the HR team on leave approvals, analytics dashboard, and reporting. Train team leads on attendance visibility", color: "#4ade80", icon: "👥" },
  { title: "Employee Onboarding", desc: "Show employees self-service portal, clock-in/out process, leave submission, document upload", color: "#4ade80", icon: "🧑‍💼" },
  { title: "Support Included", desc: "24/7 email support, implementation assistance, and monthly optimization check-ins for continuous success.", color: "#4ade80", icon: "🕐" },
];

export default function ImplementationSteps() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const lineHeight = `${((activeIndex + 1) / steps.length) * 100}%`;

  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-green-500">Implementation</span> <span className="text-black">& Support</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">We make your transition smooth and hassle-free</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Left Column - Illustration */}
          <div className="flex-1 w-full flex justify-center">
            <motion.div 
              className="w-full max-w-md h-[400px] rounded-3xl bg-pink-50 flex items-center justify-center border-4 border-pink-100 shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {/* Pink-themed character illustration placeholder */}
              <div className="text-9xl">👩‍💻</div>
            </motion.div>
          </div>

          {/* Right Column - Stepper */}
          <div className="flex-1 w-full relative pt-[10px]">
            {/* Background progress line */}
            <div className="absolute left-[29px] top-0 bottom-0 w-[2px] bg-gray-200 z-0" />
            
            {/* Active Progress Line */}
            <motion.div
              className="absolute left-[29px] top-0 w-[2px] rounded-full z-10"
              animate={{
                height: lineHeight,
                backgroundColor: steps[activeIndex].color,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
              className="flex flex-col gap-10 relative z-20"
            >
              {steps.map((step, index) => {
                const isActive = index === activeIndex;

                return (
                  <motion.div 
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }}
                    className="flex gap-6 cursor-pointer drop-shadow-sm"
                    onClick={() => setActiveIndex(index)}
                  >
                    <motion.div 
                      className="w-[60px] h-[60px] flex-shrink-0 rounded-full flex items-center justify-center text-2xl z-20"
                      initial={false}
                      animate={{
                        backgroundColor: isActive ? step.color : "#d1d5db", // filled colored circle; inactive is gray
                        color: isActive ? "#ffffff" : "#4b5563",
                        scale: isActive ? 1.05 : 1
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {step.icon}
                    </motion.div>

                    <div className="pt-2">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-black' : 'text-gray-400'}`}>
                        {step.title}
                      </h3>
                      <p className={`mt-2 text-gray-500 leading-relaxed max-w-md transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
