import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Rocket, Mail } from "lucide-react";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the cosmos! 🚀",
        description: "You'll receive updates about the latest space discoveries and events.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Rocket className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
              Ready to{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Book?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Join your first live session with a professional astronomer. Ask questions, explore the cosmos, 
              and connect with fellow space enthusiasts in an intimate, interactive setting.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-card/50 border-border/50 focus:border-primary"
                  required
                />
              </div>
              <Button type="submit" className="btn-cosmic px-8">
                Get Updates
              </Button>
            </div>
          </form>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="btn-cosmic px-8 py-3">
              Book Your First Session
            </Button>
            <Button variant="outline" className="border-secondary/50 text-foreground hover:bg-secondary/10 px-8 py-3">
              Browse All Sessions
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-muted-foreground">
              "The cosmos is within us. We are made of star-stuff." - Carl Sagan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;