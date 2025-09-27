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
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
              Why Our Sessions Are{" "}
              <span className="text-primary">
                Special
              </span>
            </h2>
            
            <p className="text-large text-muted-foreground mb-12">
              Unlike YouTube videos or documentaries, our live sessions offer direct access to working astronomers. 
              Get your questions answered, explore the latest discoveries, and join a community of passionate space enthusiasts.
            </p>
            
            <div className="grid grid-cols-1 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="p-3 bg-primary/10 rounded-2xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-body text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={astronomyImage} 
              alt="Professional astronomer working with advanced telescope equipment"
              className="rounded-3xl shadow-card w-full h-auto animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySpecial;