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
      <div className="relative flex justify-center items-center py-8">
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(200px_60%_at_50%_0%,rgba(124,255,0,0.12)_0%,rgba(124,255,0,0.04)_35%,rgba(124,255,0,0)_70%)]" />
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
