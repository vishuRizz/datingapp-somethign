"use client";

import Hero from "./components/hero";
import DashboardLayout from "./components/stats";
import HowItWorks from "./components/work";



export default function HomePage() {
  return (
    <>
      <Hero />
      <DashboardLayout/>
      <HowItWorks/>
   
    </>
  );
}
