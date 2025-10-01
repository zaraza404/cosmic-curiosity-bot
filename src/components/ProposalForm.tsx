import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, User, Mail, Phone, Users } from "lucide-react";

// ⚠️ REPLACE THIS WITH YOUR MAKE.COM OR LINDY.AI WEBHOOK URL
const WEBHOOK_URL = "https://your-webhook-url-here.com/webhook";

const ProposalForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Private Session",
    numberOfPeople: "",
    message: "",
    consent: false,
  });


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.numberOfPeople || 
        !formData.message || !formData.consent) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields and accept the consent checkbox.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType,
        number_of_people: formData.numberOfPeople,
        message: formData.message,
        consent: formData.consent,
        submitted_at: new Date().toISOString(),
      };

      console.log("Submitting proposal request:", payload);

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit proposal request");
      }

      toast({
        title: "✨ Thank you! Your proposal request has been received.",
        description: "We'll send you a customized astronomy session proposal within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "Private Session",
        numberOfPeople: "",
        message: "",
        consent: false,
      });

    } catch (error) {
      console.error("Error submitting proposal request:", error);
      toast({
        title: "Oops! Something went wrong.",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="proposal-form" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Request a{" "}
              <span className="text-primary">Proposal</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tell us what you're interested in exploring, and we'll send you a customized proposal.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-minimal space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base">
                Full Name <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-10 h-12 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-base">
                Email Address <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 h-12 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base">
                Phone Number <span className="text-destructive">*</span>
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="pl-10 h-12 rounded-xl"
                  required
                />
              </div>
            </div>

            {/* Service Type */}
            <div className="space-y-3">
              <Label className="text-base">
                I'm interested in: <span className="text-destructive">*</span>
              </Label>
              <RadioGroup 
                value={formData.serviceType} 
                onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                className="space-y-3"
              >
                <div className="flex items-center space-x-3 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <RadioGroupItem value="Private Session" id="private" />
                  <Label htmlFor="private" className="cursor-pointer flex-1 font-normal">
                    Private Session (for individuals/families)
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <RadioGroupItem value="Corporate Event" id="corporate" />
                  <Label htmlFor="corporate" className="cursor-pointer flex-1 font-normal">
                    Corporate Event (for companies/teams)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Number of People */}
            <div className="space-y-2">
              <Label htmlFor="numberOfPeople" className="text-base flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Number of People <span className="text-destructive">*</span>
              </Label>
              <Input
                id="numberOfPeople"
                type="number"
                placeholder="e.g., 1, 5, 20"
                value={formData.numberOfPeople}
                onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                className="h-12 rounded-xl"
                min="1"
                required
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base">
                Tell us about your interest <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="What would you like to explore? Any specific topics or questions?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="min-h-[120px] rounded-xl"
                required
              />
            </div>

            {/* Consent */}
            <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-card/50">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                required
              />
              <Label htmlFor="consent" className="cursor-pointer text-sm leading-relaxed">
                I agree to be contacted via email with my proposal <span className="text-destructive">*</span>
              </Label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button 
                type="submit" 
                className="btn-primary text-base px-10 py-6 h-auto w-full md:w-auto hover:scale-105 active:scale-95"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Request Your Proposal"}
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                🔒 Your information is used only to create your proposal
              </p>
            </div>
          </form>

          {/* Quote */}
          <div className="mt-12 pt-8 border-t border-border/30 text-center">
            <p className="text-sm text-muted-foreground italic">
              "The cosmos is within us. We are made of star-stuff." - Carl Sagan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalForm;
