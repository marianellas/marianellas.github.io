import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import InterestsSection from "@/components/InterestsSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Navigation />
      <main>
        <AboutSection />
        <InterestsSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
