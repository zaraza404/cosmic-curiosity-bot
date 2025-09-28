import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cosmic.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-display mb-8 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent animate-fade-in">
          Meet Real{" "}
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Astronomers
          </span>
        </h1>
        
        <p className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in [animation-delay:200ms]">
          Join intimate live sessions with professional astronomers. Ask questions, explore fascinating space topics, 
          and get expert insights in small groups of fellow space enthusiasts.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:400ms]">
          <Button 
            className="btn-primary text-base px-8 py-4 h-auto"
            data-cal-link="yurii-novytskyi-xumaqz/meeting-with-an-astronomy-preofessional"
            data-cal-namespace="meeting-with-an-astronomy-preofessional"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Session
          </Button>
          
          <Button variant="outline" className="text-base px-8 py-4 h-auto border-muted-foreground/20 hover:border-primary/30">
            Meet an Astronomer
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;