import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SessionDetails from "@/components/SessionDetails";
import WhySpecial from "@/components/AstronomyImportance";
import UpcomingSessions from "@/components/GetInvolved";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SessionDetails />
      <WhySpecial />
      <UpcomingSessions />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;
