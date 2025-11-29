import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const employerTestimonials = [
    {
      quote: "ElitePath consistently delivers high-quality candidates that align with our business goals. Their understanding of our industry and company culture has been exceptional.",
      author: "Sarah Mitchell",
      position: "HR Director",
      company: "Global Tech Firm",
    },
    {
      quote: "Fast, reliable, and professional recruitment support. They helped us scale our operations team during a critical growth phase without compromising on quality.",
      author: "James Chen",
      position: "Operations Manager",
      company: "Logistics Company",
    },
    {
      quote: "The level of service and attention to detail sets ElitePath apart. They truly act as partners in our talent acquisition strategy.",
      author: "Emma Rodriguez",
      position: "VP of People & Culture",
      company: "Financial Services Firm",
    },
  ];

  const candidateTestimonials = [
    {
      quote: "They helped me secure a role that truly fits my skills and career aspirations. The interview preparation was invaluable.",
      author: "David Park",
      position: "Software Engineer",
      company: "Tech Industry",
    },
    {
      quote: "The career guidance I received gave me confidence throughout the process. ElitePath's team genuinely cared about my success.",
      author: "Rachel Thompson",
      position: "Marketing Manager",
      company: "Healthcare Sector",
    },
    {
      quote: "Professional, responsive, and supportive. They found me opportunities I wouldn't have discovered on my own.",
      author: "Ahmed Hassan",
      position: "Financial Analyst",
      company: "Banking Industry",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Client Testimonials
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Hear from employers and candidates who've experienced success with ElitePath
            </p>
          </div>
        </div>
      </section>

      {/* Employer Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-montserrat font-bold text-primary text-center mb-16">
              Employer Feedback
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {employerTestimonials.map((testimonial, index) => (
                <Card key={index} className="relative border-2 hover:border-secondary/30 transition-colors">
                  <CardContent className="p-8 space-y-6">
                    <Quote className="text-secondary/30" size={48} />
                    <p className="text-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-montserrat font-bold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-secondary">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-montserrat font-bold text-primary text-center mb-16">
              Candidate Success Stories
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {candidateTestimonials.map((testimonial, index) => (
                <Card key={index} className="relative border-2 hover:border-accent/30 transition-colors">
                  <CardContent className="p-8 space-y-6">
                    <Quote className="text-accent/30" size={48} />
                    <p className="text-foreground leading-relaxed italic">"{testimonial.quote}"</p>
                    <div className="pt-4 border-t border-border">
                      <p className="font-montserrat font-bold text-primary">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-accent">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
