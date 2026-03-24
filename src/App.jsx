import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import HRMSSection from "./components/sections/HRMSSection";
import BuiltSection from "./components/sections/BuiltSection";
import ChaosSection from "./components/sections/ChaosSection";
import HRMSPlatformSection from "./components/sections/HRMSPlatformSection";
import Features from "./components/sections/Features";
import CTASection from "./components/sections/CTASection";
import TechnologyStackSection from "./components/sections/TechnologyStackSection";
import SolutionSection from "./components/sections/SolutionSection";
import ImplementationSupportSection from "./components/sections/ImplementationSupportSection";
import IntegrationsSection from "./components/sections/IntegrationsSection";
import DeliveryReliabilitySection from "./components/sections/DeliveryReliabilitySection";
import OtherSolutionsSection from "./components/sections/OtherSolutionsSection";
import ResourcesSection from "./components/sections/ResourcesSection";
import FAQSection from "./components/sections/FAQSection";
import ChallengesFormSection from "./components/sections/ChallengesFormSection";
// Import other sections as you build them

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans gap-0 bg-white">
      <Navbar />
      <Hero />
      <HRMSSection />
      <BuiltSection />
      <ChaosSection />
      <HRMSPlatformSection />
      <Features />
      <CTASection />
      <TechnologyStackSection />
      <SolutionSection />
      <ImplementationSupportSection />
      <IntegrationsSection />
      <DeliveryReliabilitySection />
      <OtherSolutionsSection />
      <ResourcesSection />
      <FAQSection />
      <ChallengesFormSection />
      {/* Add more sections here: Integrations, HowItWorks, FAQ, etc */}
      <Footer />
    </div>
  );
}

export default App;
