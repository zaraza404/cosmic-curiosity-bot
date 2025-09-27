import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, DollarSign, Video, Calendar, Star } from "lucide-react";

const SessionDetails = () => {
  const details = [
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Duration",
      description: "1-2 hours per session",
      detail: "Perfect length for deep dives into fascinating topics"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Group Size",
      description: "8-12 participants max",
      detail: "Small groups ensure personalized attention"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-accent" />,
      title: "Price",
      description: "$45 per session",
      detail: "Incredible value for expert knowledge"
    },
    {
      icon: <Video className="w-8 h-8 text-primary" />,
      title: "Format",
      description: "Live online meetings",
      detail: "Join from anywhere with stable internet"
    },
    {
      icon: <Calendar className="w-8 h-8 text-secondary" />,
      title: "Schedule",
      description: "Multiple times weekly",
      detail: "Find sessions that fit your timezone"
    },
    {
      icon: <Star className="w-8 h-8 text-accent" />,
      title: "What's Included",
      description: "Presentation + Q&A",
      detail: "Expert insights plus your questions answered"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Session{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Details
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our live astronomy sessions. 
            Professional presentations followed by interactive Q&A with real astronomers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {details.map((detail, index) => (
            <Card key={index} className="card-cosmic animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  {detail.icon}
                  <CardTitle className="text-xl">{detail.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-foreground mb-2">{detail.description}</p>
                <p className="text-muted-foreground text-sm">{detail.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="btn-cosmic text-lg px-8 py-4 mr-4">
            Book Your First Session
          </Button>
          <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-4">
            View Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SessionDetails;