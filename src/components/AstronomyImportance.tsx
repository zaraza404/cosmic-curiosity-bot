import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Telescope, BookOpen, Lightbulb, Globe } from "lucide-react";
import astronomyImage from "@/assets/astronomy-education.jpg";

const WhySpecial = () => {
  const features = [
    {
      icon: <Telescope className="w-8 h-8 text-primary" />,
      title: "Real Experts",
      description: "Learn directly from professional astronomers, astrophysicists, and researchers actively working in the field."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "Interactive Experience",
      description: "Ask questions, participate in discussions, and get personalized answers to your space curiosities."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Unique Topics",
      description: "Explore cutting-edge discoveries, behind-the-scenes mission details, and fascinating cosmic phenomena."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Small Groups",
      description: "Intimate sessions with only 8-12 participants ensure everyone gets personal attention and meaningful interaction."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Why Our Sessions Are{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Special
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Unlike YouTube videos or documentaries, our live sessions offer direct access to working astronomers. 
              Get your questions answered, explore the latest discoveries, and join a community of passionate space enthusiasts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="card-cosmic animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      {feature.icon}
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl"></div>
            <img 
              src={astronomyImage} 
              alt="Beautiful nebula showing the wonders of space"
              className="relative rounded-3xl shadow-cosmic w-full h-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySpecial;