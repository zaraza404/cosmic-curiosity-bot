import Hero from "@/components/Hero";
import AstronomyImportance from "@/components/AstronomyImportance";
import GetInvolved from "@/components/GetInvolved";
import CallToAction from "@/components/CallToAction";
import RetellChatbot from "@/components/RetellChatbot";

const Index = () => {
  return (
    <div className="min-h-screen starfield">
      <Hero />
      <AstronomyImportance />
      <GetInvolved />
      <CallToAction />
      <RetellChatbot />
    </div>
  );
};

export default Index;
