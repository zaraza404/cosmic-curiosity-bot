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
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Group Size",
      description: "8-12 participants max",
      detail: "Small groups ensure personalized attention"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-primary" />,
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
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Schedule",
      description: "Multiple times weekly",
      detail: "Find sessions that fit your timezone"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "What's Included",
      description: "Presentation + Q&A",
      detail: "Expert insights plus your questions answered"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Session{" "}
            <span className="text-primary">
              Details
            </span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our live astronomy sessions. 
            Professional presentations followed by interactive Q&A with real astronomers.
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
          <Button 
            className="btn-primary text-base px-8 py-4 h-auto mr-4"
            data-cal-link="yurii-novytskyi-xumaqz/meeting-with-an-astronomy-preofessional"
            data-cal-namespace="meeting-with-an-astronomy-preofessional"
            data-cal-config='{"layout":"month_view"}'
          >
            Book Your First Session
          </Button>
          <Button variant="outline" className="text-base px-8 py-4 h-auto border-muted-foreground/20 hover:border-primary/30">
            View Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SessionDetails;