"use client";

import Hero from "./components/hero";

import DashboardLayout from "./components/stats";
import HowItWorks from "./components/work";
import SecurityFeaturesPage from "./components/secure";
import FortifyFeaturesPage from "./components/essential";
import  FortifyFeaturePage from "./components/feature";
import PricingPage from "./components/plan";
import  HeroCard from "./components/share";
import FortifyFooter from "./components/footer";



export default function HomePage() {
  return (
    <>
      <Hero />
      <DashboardLayout/>
      <div className="relative py-10">
        <div className="absolute inset-0 pointer-events-none [background:linear-gradient(to_top,rgba(124,255,0,0.15),rgba(124,255,0,0.06),rgba(255,255,255,0))]" />
        <div className="relative max-w-none overflow-hidden">
          <svg className="block w-[1600px] h-[160px] mx-auto opacity-80" viewBox="0 0 1600 160" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="limeSoft" x1="0" x2="0" y1="1" y2="0">
                <stop offset="0%" stopColor="#b8f77a" />
                <stop offset="50%" stopColor="#dfffb3" />
                <stop offset="100%" stopColor="#ffffff" />
              </linearGradient>
            </defs>
            <path id="wavePath" d="M0,110 C100,50 200,170 300,110 C400,50 500,170 600,110 C700,50 800,170 900,110 C1000,50 1100,170 1200,110 C1300,50 1400,170 1500,110" fill="none" stroke="none" />
            <text fill="url(#limeSoft)" fontSize="64" fontWeight="700" opacity="0.22" letterSpacing="3" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial">
              <textPath href="#wavePath" startOffset="0">
                INTELLIRITE • INTELLIRITE • INTELLIRITE • INTELLIRITE • INTELLIRITE • INTELLIRITE • INTELLIRITE • INTELLIRITE • INTELLIRITE • INTELLIRITE
              </textPath>
            </text>
          </svg>
          <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_top,rgba(0,0,0,1),rgba(0,0,0,0.05))]" />
        </div>
        <div className="relative flex justify-center items-center mt-4">
          <div className="absolute inset-0 pointer-events-none [background:radial-gradient(200px_60%_at_50%_0%,rgba(124,255,0,0.12)_0%,rgba(124,255,0,0.04)_35%,rgba(124,255,0,0)_70%)]" />
         
        </div>
      </div>
       <FortifyFeaturePage/>
      <SecurityFeaturesPage/>
      <FortifyFeaturesPage/>
      <PricingPage/>
       <HowItWorks/>
  
      <HeroCard/>
      <FortifyFooter/>
    </>
  );
}
