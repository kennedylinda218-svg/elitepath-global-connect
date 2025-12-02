import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JobOpenings from "@/components/JobOpenings";
import heroImage from "@/assets/hero-recruitment.jpg";
import { CheckCircle2, Users, Target, Globe, Shield, TrendingUp, ArrowRight, Briefcase } from "lucide-react";

const Index = () => {
  const industries = [
    "Technology & IT",
    "Healthcare & Pharmaceuticals",
    "Finance & Banking",
    "Engineering & Manufacturing",
    "Logistics & Operations",
    "Professional Services",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We discuss your needs, goals, and requirements to understand your unique situation.",
    },
    {
      number: "02",
      title: "Strategic Matching",
      description: "Our team leverages global networks to identify the perfect opportunities or talent.",
    },
    {
      number: "03",
      title: "Interview & Assessment",
      description: "Comprehensive screening and preparation to ensure the best fit for both parties.",
    },
    {
      number: "04",
      title: "Successful Placement",
      description: "Seamless onboarding and continued support for long-term success.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-midnight-sapphire overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Professional recruitment services" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-primary-foreground leading-tight">
              Connecting Global Talent With Verified Opportunities
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Premier recruitment and career services connecting exceptional professionals with world-class employers across industries and continents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-7">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized expertise across multiple sectors and markets
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 border-border hover:border-secondary transition-colors">
                <CardContent className="p-6 flex items-center space-x-3">
                  <Briefcase className="text-secondary flex-shrink-0" size={24} />
                  <p className="font-semibold text-foreground">{industry}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="text-secondary" size={32} />
                </div>
                <h3 className="text-4xl font-montserrat font-bold text-primary">50+</h3>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-secondary" size={32} />
                </div>
                <h3 className="text-4xl font-montserrat font-bold text-primary">10,000+</h3>
                <p className="text-muted-foreground">Successful Placements</p>
              </div>
              <div className="space-y-3">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Target className="text-secondary" size={32} />
                </div>
                <h3 className="text-4xl font-montserrat font-bold text-primary">95%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <JobOpenings />

      {/* How It Works */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
              How the Hiring Process Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to connecting talent with opportunity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="space-y-4">
                  <div className="text-6xl font-montserrat font-bold text-secondary/20">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-secondary/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by professionals and employers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-secondary/30 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-2 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed">
                  "ElitePath found me the perfect role that aligned with my career goals. Their team was professional, responsive, and genuinely cared about my success."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-montserrat font-bold text-primary">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">Software Engineer</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/30 transition-colors">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-2 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed">
                  "We've partnered with ElitePath for three years. They consistently deliver exceptional candidates who become long-term assets to our organization."
                </p>
                <div className="pt-4 border-t border-border">
                  <p className="font-montserrat font-bold text-primary">Michael Chen</p>
                  <p className="text-sm text-muted-foreground">HR Director, Tech Corp</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Whether you're seeking exceptional talent or your next career opportunity, let's start the conversation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/services">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold text-lg px-10 py-7">
                Explore Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-7">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
