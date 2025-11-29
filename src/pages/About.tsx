import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              About ElitePath
            </h1>
            <p className="text-xl text-primary-foreground/90">
              A Modern Recruitment Partner Built for Global Reach
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              ElitePath Recruitment Solutions is a global workforce partner helping organizations source exceptional talent across technology, finance, healthcare, engineering, logistics, operations, and professional services.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We combine advanced sourcing tools, human expertise, and transparent communication to deliver high-quality hiring outcomes for both employers and candidates.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-12">
              {[
                "Global Talent Network",
                "Ethical & Confidential Recruitment",
                "Fast Placement Turnaround",
                "Dedicated Industry Specialists",
              ].map((highlight, index) => (
                <Card key={index} className="border-2 border-secondary/20 hover:border-secondary transition-colors">
                  <CardContent className="p-6 flex items-center space-x-3">
                    <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                    <p className="font-medium">{highlight}</p>
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

export default About;
