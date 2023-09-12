import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
        <HeroSection />
      <div className="container mx-auto px-12 py-4 bg-[#121212]">
        <AchievementsSection />
        <AboutSection />
        <SkillsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
