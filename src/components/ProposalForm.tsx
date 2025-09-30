import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, User, Mail, Phone, Building, Users, Telescope, Lightbulb, Camera, DollarSign, Calendar, FileText } from "lucide-react";

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
    company: "",
    sessionType: "",
    sessionTypeOther: "",
    topic: "",
    topicOther: "",
    experienceLevel: "",
    groupSize: "",
    equipment: [] as string[],
    budget: "",
    preferredDateTime: "",
    specialRequests: "",
    consent: false,
  });

  const sessionTypes = [
    "Private 1-on-1 Session",
    "Group Presentation",
    "School/Educational Program",
    "Corporate Event",
    "Special Celestial Event Viewing",
    "Astrophotography Consultation",
    "Telescope Buying Guidance",
    "Monthly Membership",
    "Other"
  ];

  const topics = [
    "General Stargazing & Sky Tours",
    "Planets & Solar System",
    "Deep Space Objects (Galaxies, Nebulae)",
    "Astrophotography",
    "Black Holes & Cosmology",
    "Exoplanets & Planet Discovery",
    "Solar/Lunar Eclipses",
    "Meteor Showers & Comets",
    "Space Missions (NASA/ESA Updates)",
    "History of Astronomy",
    "Other"
  ];

  const equipmentOptions = [
    { id: "telescope", label: "Telescope" },
    { id: "binoculars", label: "Binoculars" },
    { id: "camera", label: "Camera for astrophotography" },
    { id: "none", label: "No equipment yet" },
    { id: "na", label: "Not applicable" }
  ];

  const budgetRanges = [
    "Under €100",
    "€100 - €300",
    "€300 - €600",
    "€600 - €1,000",
    "€1,000+",
    "Not sure yet"
  ];

  const handleEquipmentChange = (equipmentId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      equipment: checked 
        ? [...prev.equipment, equipmentId]
        : prev.equipment.filter(id => id !== equipmentId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.sessionType || 
        !formData.topic || !formData.experienceLevel || !formData.consent) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields and accept the consent checkbox.",
        variant: "destructive",
      });
      return;
    }

    // Additional validation for "Other" options
    if (formData.sessionType === "Other" && !formData.sessionTypeOther) {
      toast({
        title: "Please Specify Session Type",
        description: "You selected 'Other' - please specify the session type.",
        variant: "destructive",
      });
      return;
    }

    if (formData.topic === "Other" && !formData.topicOther) {
      toast({
        title: "Please Specify Topic",
        description: "You selected 'Other' - please specify the topic of interest.",
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
        company: formData.company || null,
        session_type: formData.sessionType === "Other" ? formData.sessionTypeOther : formData.sessionType,
        topic: formData.topic === "Other" ? formData.topicOther : formData.topic,
        experience_level: formData.experienceLevel,
        group_size: formData.groupSize || null,
        equipment: formData.equipment,
        budget: formData.budget || null,
        preferred_datetime: formData.preferredDateTime || null,
        special_requests: formData.specialRequests || null,
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
        title: "🌟 Your proposal request has been received!",
        description: "Our astronomy team will send you a customized proposal within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        sessionType: "",
        sessionTypeOther: "",
        topic: "",
        topicOther: "",
        experienceLevel: "",
        groupSize: "",
        equipment: [],
        budget: "",
        preferredDateTime: "",
        specialRequests: "",
        consent: false,
      });

    } catch (error) {
      console.error("Error submitting proposal request:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="proposal-form" className="section-padding bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Request a{" "}
              <span className="text-primary">
                Proposal
              </span>
            </h2>
            <p className="text-large text-muted-foreground mb-8">
              Tell us about your astronomy interests and needs. We'll create a personalized proposal 
              tailored specifically for you or your group.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-minimal space-y-8">
            {/* Your Details Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <User className="w-6 h-6 text-primary" />
                Your Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
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

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-base">
                    Company/School Name
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="company"
                      type="text"
                      placeholder="Optional"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="pl-10 h-12 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Session Preferences Section */}
            <div className="space-y-6 pt-8 border-t border-border/30">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Telescope className="w-6 h-6 text-primary" />
                Session Preferences
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sessionType" className="text-base">
                    Session Type <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.sessionType} onValueChange={(value) => setFormData({ ...formData, sessionType: value })}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select session type" />
                    </SelectTrigger>
                    <SelectContent>
                      {sessionTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.sessionType === "Other" && (
                  <div className="space-y-2">
                    <Label htmlFor="sessionTypeOther" className="text-base">
                      Please Specify <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="sessionTypeOther"
                      type="text"
                      placeholder="Describe your session type"
                      value={formData.sessionTypeOther}
                      onChange={(e) => setFormData({ ...formData, sessionTypeOther: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="topic" className="text-base">
                    Topic of Interest <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.topic} onValueChange={(value) => setFormData({ ...formData, topic: value })}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select topic" />
                    </SelectTrigger>
                    <SelectContent>
                      {topics.map((topic) => (
                        <SelectItem key={topic} value={topic}>{topic}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.topic === "Other" && (
                  <div className="space-y-2">
                    <Label htmlFor="topicOther" className="text-base">
                      Please Specify <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="topicOther"
                      type="text"
                      placeholder="Describe your topic"
                      value={formData.topicOther}
                      onChange={(e) => setFormData({ ...formData, topicOther: e.target.value })}
                      className="h-12 rounded-xl"
                    />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label className="text-base">
                  Experience Level <span className="text-destructive">*</span>
                </Label>
                <RadioGroup value={formData.experienceLevel} onValueChange={(value) => setFormData({ ...formData, experienceLevel: value })}>
                  <div className="flex items-center space-x-2 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="Beginner (No prior knowledge)" id="beginner" />
                    <Label htmlFor="beginner" className="cursor-pointer flex-1">Beginner (No prior knowledge)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="Intermediate (Some astronomy knowledge)" id="intermediate" />
                    <Label htmlFor="intermediate" className="cursor-pointer flex-1">Intermediate (Some astronomy knowledge)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="Advanced (Experienced stargazer)" id="advanced" />
                    <Label htmlFor="advanced" className="cursor-pointer flex-1">Advanced (Experienced stargazer)</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                    <RadioGroupItem value="Mixed Group" id="mixed" />
                    <Label htmlFor="mixed" className="cursor-pointer flex-1">Mixed Group</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="groupSize" className="text-base flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Group Size
                </Label>
                <Input
                  id="groupSize"
                  type="number"
                  placeholder="Leave blank if individual session"
                  value={formData.groupSize}
                  onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                  className="h-12 rounded-xl"
                  min="1"
                />
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6 pt-8 border-t border-border/30">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-primary" />
                Additional Information
              </h3>

              <div className="space-y-2">
                <Label className="text-base flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  Do you have equipment?
                </Label>
                <div className="space-y-3">
                  {equipmentOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2 p-3 rounded-xl border border-border hover:border-primary/30 transition-colors">
                      <Checkbox
                        id={option.id}
                        checked={formData.equipment.includes(option.id)}
                        onCheckedChange={(checked) => handleEquipmentChange(option.id, checked as boolean)}
                      />
                      <Label htmlFor={option.id} className="cursor-pointer flex-1">{option.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-base flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Estimated Budget Range
                  </Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredDateTime" className="text-base flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Preferred Date/Time
                  </Label>
                  <Input
                    id="preferredDateTime"
                    type="text"
                    placeholder="e.g., Weekday evenings, Flexible"
                    value={formData.preferredDateTime}
                    onChange={(e) => setFormData({ ...formData, preferredDateTime: e.target.value })}
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequests" className="text-base flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Special Requests/Additional Details
                </Label>
                <Textarea
                  id="specialRequests"
                  placeholder="Tell us anything else that would help us create the perfect proposal for you..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="min-h-[120px] rounded-xl"
                />
              </div>
            </div>

            {/* Consent & Submit */}
            <div className="space-y-6 pt-8 border-t border-border/30">
              <div className="flex items-start space-x-3 p-4 rounded-xl border border-border bg-background/50">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                  required
                />
                <Label htmlFor="consent" className="cursor-pointer text-sm leading-relaxed">
                  I agree to be contacted via email to receive my personalized astronomy session proposal. <span className="text-destructive">*</span>
                </Label>
              </div>

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="btn-primary text-base px-12 py-6 h-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Your Proposal"}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  🔒 Your information is used solely to create your personalized astronomy session proposal
                </p>
              </div>
            </div>
          </form>

          {/* Quote */}
          <div className="mt-16 pt-8 border-t border-border/30 text-center">
            <p className="text-body text-muted-foreground">
              "The cosmos is within us. We are made of star-stuff." - Carl Sagan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalForm;
