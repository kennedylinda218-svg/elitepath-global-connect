import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import JobOpenings from "@/components/JobOpenings";
import heroImage from "@/assets/hero-recruitment.jpg";
import teamSarah from "@/assets/team-sarah.jpg";
import teamJennifer from "@/assets/team-jennifer.jpg";
import teamMichael from "@/assets/team-michael.jpg";
import { Users, Target, Globe, ArrowRight, Briefcase, Eye, Rocket } from "lucide-react";

const Index = () => {
  const leadershipTeam = [
    {
      name: "Sarah Mitchell",
      role: "Director of Talent Strategy",
      bio: "With over 15 years of experience in global talent acquisition, Sarah leads our strategic vision and ensures exceptional service delivery across all markets.",
      image: teamSarah,
    },
    {
      name: "Jennifer Rodriguez",
      role: "Head of Employer Partnerships",
      bio: "Jennifer builds and nurtures relationships with multinational employers across industries, delivering precisely matched hiring solutions.",
      image: teamJennifer,
    },
    {
      name: "Michael Thompson",
      role: "Head of Recruitment Operations",
      bio: "Michael oversees all recruitment operations, ensuring seamless candidate experiences and exceptional placement quality.",
      image: teamMichael,
    },
  ];

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

      {/* Meet Our Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to connecting talent with opportunity
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leadershipTeam.map((member, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg group"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 space-y-3 bg-card">
                  <h3 className="text-xl font-montserrat font-bold text-primary">{member.name}</h3>
                  <p className="text-secondary font-semibold">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/team">
              <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold">
                View Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-primary to-midnight-sapphire text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center">
                  <Eye className="text-accent" size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
                  Our Vision
                </h2>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  To be the world's most trusted recruitment partner, bridging the gap between exceptional talent and transformative career opportunities across every industry and continent.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Global Excellence</h4>
                    <p className="text-primary-foreground/80 text-sm">Setting the standard for recruitment services worldwide</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Career Transformation</h4>
                    <p className="text-primary-foreground/80 text-sm">Empowering professionals to reach their full potential</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent-foreground font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Lasting Partnerships</h4>
                    <p className="text-primary-foreground/80 text-sm">Building relationships that drive long-term success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-muted/50 rounded-3xl p-8 space-y-6 order-2 md:order-1">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background rounded-2xl p-6 text-center shadow-sm">
                    <h4 className="text-3xl font-montserrat font-bold text-primary">50+</h4>
                    <p className="text-sm text-muted-foreground">Countries Served</p>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center shadow-sm">
                    <h4 className="text-3xl font-montserrat font-bold text-primary">10K+</h4>
                    <p className="text-sm text-muted-foreground">Placements</p>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center shadow-sm">
                    <h4 className="text-3xl font-montserrat font-bold text-primary">95%</h4>
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                  </div>
                  <div className="bg-background rounded-2xl p-6 text-center shadow-sm">
                    <h4 className="text-3xl font-montserrat font-bold text-primary">15+</h4>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center">
                  <Rocket className="text-secondary" size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
                  Our Mission
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To connect exceptional talent with verified global opportunities through integrity, expertise, and personalized service—transforming careers and empowering organizations to thrive.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Deliver personalized recruitment solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Ensure transparent and ethical practices</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-foreground">Build lasting professional relationships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-muted/30">
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
              <Card key={index} className="border-2 border-border hover:border-secondary hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 flex items-center space-x-3">
                  <Briefcase className="text-secondary flex-shrink-0" size={24} />
                  <p className="font-semibold text-foreground">{industry}</p>
                </CardContent>
              </Card>
            ))}
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
            <Card className="border-2 hover:border-secondary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" 
                      alt="Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-primary">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed">
                  "ElitePath found me the perfect role that aligned with my career goals. Their team was professional, responsive, and genuinely cared about my success."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary/30 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
                      alt="Michael Chen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-primary">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">HR Director, Tech Corp</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-accent">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-foreground italic leading-relaxed">
                  "We've partnered with ElitePath for three years. They consistently deliver exceptional candidates who become long-term assets to our organization."
                </p>
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

      {/* Equal Opportunity Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="text-accent" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-primary">
              Equal Opportunity for All
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ElitePath Recruitment Solutions is committed to equal opportunity employment. We believe that diverse perspectives drive innovation and success. We do not discriminate on the basis of race, color, religion, sex, sexual orientation, gender identity, national origin, disability, veteran status, or any other protected characteristic.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground shadow-sm">Diversity</span>
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground shadow-sm">Inclusion</span>
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground shadow-sm">Equity</span>
              <span className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground shadow-sm">Belonging</span>
            </div>
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