import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Users, GraduationCap, Calendar } from "lucide-react";
import stargazingImage from "@/assets/stargazing-community.jpg";

const UpcomingSessions = () => {
  const sessions = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Black Holes Unveiled",
      description: "Explore the mysterious nature of black holes, recent discoveries from the Event Horizon Telescope, and what happens at the event horizon.",
      action: "Book Session - Nov 15"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Mars Exploration",
      description: "Join a NASA Mars scientist to discuss Perseverance rover findings, future missions, and the search for ancient life.",
      action: "Book Session - Nov 18"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Exoplanet Hunters",
      description: "Discover how astronomers find planets around other stars and learn about potentially habitable worlds.",
      action: "Book Session - Nov 22"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "James Webb Discoveries",
      description: "See the latest stunning images and groundbreaking discoveries from humanity's most powerful space telescope.",
      action: "Book Session - Nov 25"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Upcoming{" "}
            <span className="text-primary">
              Sessions
            </span>
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Join our expert astronomers for fascinating deep-dives into the most exciting topics in space science. 
            Each session features a presentation followed by live Q&A.
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
                      data-cal-link="yurii-novytskyi-xumaqz/meeting-with-an-astronomy-preofessional"
                      data-cal-namespace="meeting-with-an-astronomy-preofessional"
                      data-cal-config='{"layout":"month_view"}'
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