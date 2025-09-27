import Hero from "@/components/Hero";
import SessionDetails from "@/components/SessionDetails";
import WhySpecial from "@/components/AstronomyImportance";
import UpcomingSessions from "@/components/GetInvolved";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen starfield">
      <Hero />
      <SessionDetails />
      <WhySpecial />
      <UpcomingSessions />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
};

export default Index;
