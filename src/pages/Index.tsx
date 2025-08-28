import { Navigation } from "@/components/Navigation";
import { HeroSlider } from "@/components/HeroSlider";
import { Community } from "@/components/Community";
import { CulturalArtifacts } from "@/components/CulturalArtifacts";
import { BookShowcase } from "@/components/BookShowcase";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSlider />
      <Community />
      <CulturalArtifacts />
      <BookShowcase />

      <Footer />
    </div>
  );
};

export default Index;
