import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import heroImage from "@/assets/hero-banner.jpg";
import { CheckCircle2, Users, Target, Globe, Shield, TrendingUp, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CookieBanner />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-midnight-sapphire overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroImage} alt="Professional recruitment" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-primary-foreground leading-tight">
              Elite Talent for a World That Never Stops Growing
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              We connect high-performing professionals with verified global employers through transparent, ethical, and data-driven recruitment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/upload-cv">
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6 backdrop-blur-sm">
                  Upload Your CV
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {[
                { icon: Globe, text: "Verified Global Employer Network" },
                { icon: Shield, text: "Confidential Candidate Screening" },
                { icon: Target, text: "10+ Industries Served" },
                { icon: TrendingUp, text: "Professional Career Advisory" },
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 text-primary-foreground/90">
                  <badge.icon size={32} className="text-accent" />
                  <p className="text-sm font-medium text-center">{badge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
              A Modern Recruitment Partner Built for Global Reach
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              ElitePath Recruitment Solutions is a global workforce partner helping organizations source exceptional talent across technology, finance, healthcare, engineering, logistics, operations, and professional services.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              We combine advanced sourcing tools, human expertise, and transparent communication to deliver high-quality hiring outcomes for both employers and candidates.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {[
                "Global Talent Network",
                "Ethical & Confidential Recruitment",
                "Fast Placement Turnaround",
                "Dedicated Industry Specialists",
              ].map((highlight, index) => (
                <Card key={index} className="border-2 border-secondary/20 hover:border-secondary transition-colors">
                  <CardContent className="p-6 flex items-center justify-center">
                    <div className="flex items-start space-x-3">
                      <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                      <p className="text-sm font-medium text-center">{highlight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
              Why Choose ElitePath
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional recruitment experiences through proven excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Trusted by Global Employers",
                description: "Partnering with leading organizations across continents to build exceptional teams.",
              },
              {
                icon: Shield,
                title: "Transparent Communication",
                description: "Clear, honest updates throughout every stage of the recruitment process.",
              },
              {
                icon: TrendingUp,
                title: "Fast, Efficient Matching",
                description: "Streamlined processes that respect your time while maintaining quality.",
              },
              {
                icon: Globe,
                title: "Multi-Industry Expertise",
                description: "Deep understanding of diverse sectors from tech to healthcare to finance.",
              },
              {
                icon: CheckCircle2,
                title: "Human-Centered Support",
                description: "Dedicated specialists who understand your unique needs and goals.",
              },
              {
                icon: Target,
                title: "Ethical Recruitment Practices",
                description: "Committed to integrity, confidentiality, and professional excellence.",
              },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-secondary/30">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <feature.icon className="text-secondary" size={28} />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Whether you're hiring exceptional talent or seeking your next career opportunity, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/employer-services">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold text-lg px-8 py-6">
                Hire Talent
              </Button>
            </Link>
            <Link to="/upload-cv">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
                Submit Your CV
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
