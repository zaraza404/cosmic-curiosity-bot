import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Users, GraduationCap, Calendar } from "lucide-react";
import stargazingImage from "@/assets/stargazing-community.jpg";

const GetInvolved = () => {
  const activities = [
    {
      icon: <Eye className="w-8 h-8 text-primary" />,
      title: "Stargazing Events",
      description: "Join local astronomy clubs for guided stargazing sessions and telescope viewing parties.",
      action: "Find Events Near You"
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Astronomy Communities",
      description: "Connect with fellow space enthusiasts, share observations, and learn from experienced astronomers.",
      action: "Join Community"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent" />,
      title: "Educational Resources",
      description: "Access online courses, documentaries, and interactive tools to deepen your space knowledge.",
      action: "Start Learning"
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Space Mission Updates",
      description: "Stay informed about the latest space missions, discoveries, and astronomical events.",
      action: "Subscribe to Updates"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Get{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Involved
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a curious beginner or an experienced stargazer, there are countless ways 
            to explore the universe and connect with the astronomy community.
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
            {activities.map((activity, index) => (
              <Card key={index} className="card-cosmic animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    {activity.icon}
                    <CardTitle className="text-xl">{activity.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <Button variant="outline" className="border-primary/50 hover:bg-primary/10">
                    {activity.action}
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

export default GetInvolved;