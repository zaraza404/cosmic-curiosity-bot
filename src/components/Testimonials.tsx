import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "I've always been fascinated by space but never knew where to start. These sessions with real astronomers changed everything! Dr. Martinez explained black holes in a way that finally made sense.",
      rating: 5,
      image: "👩‍💻"
    },
    {
      name: "Michael Rodriguez",
      role: "High School Teacher",
      content: "As an educator, I was blown away by the quality of these sessions. My students love hearing about what I learned, and some are now considering astronomy careers!",
      rating: 5,
      image: "👨‍🏫"
    },
    {
      name: "Emma Thompson",
      role: "Retired Nurse",
      content: "At 67, I thought it was too late to learn about astronomy. These sessions proved me wrong! The astronomers are so patient and make complex topics accessible to everyone.",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "David Park",
      role: "College Student",
      content: "Getting to ask questions directly to working scientists is incredible. I learned more in one session than in a whole semester of textbook reading!",
      rating: 5,
      image: "👨‍🎓"
    }
  ];

  return (
    <section className="section-padding bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            What Our{" "}
            <span className="text-primary">
              Participants
            </span>{" "}
            Say
          </h2>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto">
            Join thousands of space enthusiasts who've discovered the joy of learning directly from professional astronomers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-minimal animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-body text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="text-2xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-card rounded-full px-6 py-3 border border-border/50 shadow-minimal">
            <Star className="w-5 h-5 text-primary fill-current" />
            <span className="text-lg font-semibold">4.9/5 average rating</span>
            <span className="text-muted-foreground">from 500+ sessions</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;