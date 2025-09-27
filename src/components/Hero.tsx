import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cosmic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center starfield overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow animate-fade-in">
          Explore the{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Universe
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
          Journey through the cosmos and discover the wonders of space exploration. 
          From distant galaxies to the secrets of our solar system, unlock the mysteries 
          that have captivated humanity for millennia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button className="btn-cosmic text-lg px-8 py-4">
            Begin Your Journey
          </Button>
          
          <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 text-lg px-8 py-4">
            Watch Mission Videos
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;