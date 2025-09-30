import Hero from "@/components/Hero";
import SessionDetails from "@/components/SessionDetails";
import WhySpecial from "@/components/AstronomyImportance";
import UpcomingSessions from "@/components/GetInvolved";
import Testimonials from "@/components/Testimonials";
import ProposalForm from "@/components/ProposalForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SessionDetails />
      <WhySpecial />
      <UpcomingSessions />
      <Testimonials />
      <ProposalForm />
    </div>
  );
};

export default Index;
