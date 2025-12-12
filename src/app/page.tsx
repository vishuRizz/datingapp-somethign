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
      <HowItWorks/>
      <SecurityFeaturesPage/>
      <FortifyFeaturesPage/>
      <FortifyFeaturePage/>
      <PricingPage/>
      <HeroCard/>
      <FortifyFooter/>
    </>
  );
}
