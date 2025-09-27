import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Telescope, BookOpen, Lightbulb, Globe } from "lucide-react";
import astronomyImage from "@/assets/astronomy-education.jpg";

const AstronomyImportance = () => {
  const features = [
    {
      icon: <Telescope className="w-8 h-8 text-primary" />,
      title: "Scientific Discovery",
      description: "Astronomy drives technological innovation and helps us understand fundamental physics, leading to breakthroughs that benefit all of humanity."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary" />,
      title: "Education & Inspiration",
      description: "Space exploration inspires students to pursue STEM careers and provides context for understanding our place in the universe."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Innovation Catalyst",
      description: "From GPS to medical imaging, astronomical research has led to countless technologies we use in everyday life."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Perspective",
      description: "Astronomy unites humanity by showing us our shared cosmic heritage and the preciousness of our planet Earth."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Why Astronomy{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Astronomy is more than just looking at stars. It's about understanding our universe, 
              pushing the boundaries of human knowledge, and inspiring the next generation of explorers 
              and scientists who will shape our future.
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

export default AstronomyImportance;