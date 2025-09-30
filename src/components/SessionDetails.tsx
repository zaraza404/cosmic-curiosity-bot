import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, DollarSign, Video, Calendar, Star } from "lucide-react";

const SessionDetails = () => {
  const details = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Live Online Sessions",
      description: "One-on-One & Group Presentations",
      detail: "Personal virtual telescope tours, educational talks, and interactive Q&A sessions"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Educational Packages",
      description: "Schools & Corporate Events",
      detail: "Tailored programs for classrooms, team building, and special celebrations"
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Specialized Sessions",
      description: "Astrophotography & Equipment",
      detail: "Expert consultations on telescope buying, photography techniques, and deep space tours"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Premium Experiences",
      description: "Special Events & Memberships",
      detail: "Live meteor showers, eclipse parties, monthly astronomy club, and mission updates"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Special Interest Topics",
      description: "Advanced Astronomy",
      detail: "Cosmology, exoplanets, black holes, and the history of astronomical discovery"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
      title: "Add-On Services",
      description: "Enhance Your Experience",
      detail: "Session recordings, custom star charts, extended Q&A, and materials packs"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Our{" "}
            <span className="text-primary">
              Services
            </span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            From intimate one-on-one sessions to group events, educational programs, and premium experiences. 
            We offer comprehensive astronomy services tailored to your interests and needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {details.map((detail, index) => (
            <Card key={index} className="card-minimal animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-2xl">
                  {detail.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{detail.title}</h3>
                  <p className="text-lg font-medium text-foreground mb-1">{detail.description}</p>
                  <p className="text-body text-muted-foreground">{detail.detail}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-large text-muted-foreground mb-8">
            Ready to explore the cosmos? Request a personalized proposal for your astronomy experience.
          </p>
          <Button 
            className="btn-primary text-base px-8 py-4 h-auto"
            onClick={() => document.querySelector('#proposal-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request a Proposal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SessionDetails;