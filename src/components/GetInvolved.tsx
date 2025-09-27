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
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Upcoming{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sessions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our expert astronomers for fascinating deep-dives into the most exciting topics in space science. 
            Each session features a presentation followed by live Q&A.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-l from-secondary/20 to-primary/20 rounded-3xl blur-xl"></div>
            <img 
              src={stargazingImage} 
              alt="People stargazing together under the night sky"
              className="relative rounded-3xl shadow-cosmic w-full h-auto animate-float"
            />
          </div>

          <div className="grid gap-6">
            {sessions.map((session, index) => (
              <Card key={index} className="card-cosmic animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    {session.icon}
                    <CardTitle className="text-xl">{session.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{session.description}</p>
                  <Button className="btn-cosmic">
                    {session.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSessions;