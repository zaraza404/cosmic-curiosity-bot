import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What do I need to join a session?",
      answer: "Just a computer, tablet, or smartphone with stable internet connection. We use Zoom for our sessions, which works on all devices. You'll receive a link 24 hours before your session."
    },
    {
      question: "Are sessions suitable for beginners?",
      answer: "Absolutely! Our astronomers tailor their presentations for all levels. Whether you're completely new to astronomy or have some background, you'll learn something new and fascinating."
    },
    {
      question: "How do I book a session?",
      answer: "Simply click 'Book a Session' on any session card, choose your preferred date and time, and complete the secure payment. You'll receive confirmation and joining instructions immediately."
    },
    {
      question: "Can I ask questions during the session?",
      answer: "Yes! That's the best part. Each session includes 30-45 minutes of open Q&A where you can ask our astronomers anything about the topic or space in general."
    },
    {
      question: "What if I can't attend a session I booked?",
      answer: "You can reschedule up to 24 hours before your session at no extra cost. If you cancel with less notice, we offer a 50% credit toward a future session."
    },
    {
      question: "Are sessions recorded?",
      answer: "No, sessions are live-only to encourage participation and protect everyone's privacy. However, you'll receive a summary of key points and recommended resources after each session."
    },
    {
      question: "Who are the astronomers?",
      answer: "Our team includes PhD astronomers, planetary scientists, astrophysicists, and researchers from universities, NASA, ESA, and observatories worldwide. All have active research backgrounds and teaching experience."
    },
    {
      question: "How small are the groups?",
      answer: "We limit each session to 8-12 participants to ensure everyone gets personal attention and can ask questions. This intimate setting creates meaningful discussions and connections."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about joining our live astronomy sessions with professional astronomers.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-cosmic border-0 rounded-2xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Still have questions? Our team is here to help!
          </p>
          <Button className="btn-cosmic">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;