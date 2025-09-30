import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Users, GraduationCap, Calendar } from "lucide-react";
import stargazingImage from "@/assets/stargazing-community.jpg";

const UpcomingSessions = () => {
  const sessions = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Private Constellation Tours",
      description: "Personalized virtual telescope tours exploring your favorite constellations and deep space objects with an expert astronomer.",
      action: "Request Proposal"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Astrophotography Mastery",
      description: "One-on-one consultations on camera settings, post-processing techniques, and capturing stunning images of the night sky.",
      action: "Request Proposal"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Educational Programs",
      description: "Comprehensive astronomy packages for schools, including interactive presentations, Q&A sessions, and custom curriculum integration.",
      action: "Request Proposal"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Monthly Astronomy Club",
      description: "Join our exclusive membership for monthly live sessions, special events, early access to meteor shower parties, and priority booking.",
      action: "Request Proposal"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Popular{" "}
            <span className="text-primary">
              Experiences
            </span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Discover our most requested astronomy services. From personalized stargazing tours to educational programs 
            and monthly memberships, we create cosmic experiences tailored to your interests.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src={stargazingImage} 
              alt="People participating in virtual astronomy session together"
              className="rounded-3xl shadow-card w-full h-auto animate-fade-in"
            />
          </div>

          <div className="grid gap-8">
            {sessions.map((session, index) => (
              <div key={index} className="card-minimal animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
                    {session.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{session.title}</h3>
                    <p className="text-body text-muted-foreground mb-4">{session.description}</p>
                    <Button 
                      className="btn-primary"
                      onClick={() => document.querySelector('#proposal-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {session.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSessions;