import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, FileText, Globe, MessageSquare, Shield, TrendingUp } from "lucide-react";

const CandidateServices = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Personalized Career Advisory",
      description: "One-on-one consultations with experienced career advisors who understand your goals, strengths, and aspirations. We help you navigate career transitions and identify opportunities aligned with your professional objectives.",
    },
    {
      icon: FileText,
      title: "CV & LinkedIn Optimization",
      description: "Professional review and enhancement of your resume and LinkedIn profile to maximize visibility with employers. We ensure your professional brand showcases your unique value proposition.",
    },
    {
      icon: Globe,
      title: "Exclusive Global Job Opportunities",
      description: "Access to unadvertised positions with verified employers worldwide. Our extensive network connects you with opportunities across industries and regions that match your skills and career goals.",
    },
    {
      icon: UserCheck,
      title: "Interview Preparation & Coaching",
      description: "Comprehensive interview coaching including mock interviews, feedback sessions, and strategic guidance. We prepare you to confidently present your qualifications and secure offers.",
    },
    {
      icon: Shield,
      title: "Confidential Representation to Employers",
      description: "Your career search remains completely confidential. We advocate on your behalf while protecting your privacy and current employment status throughout the recruitment process.",
    },
    {
      icon: TrendingUp,
      title: "Ongoing Career Support",
      description: "Our relationship doesn't end with placement. We provide continuous support during onboarding and beyond, ensuring successful transitions and long-term career satisfaction.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Career Advancement Services for Job Seekers
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Professional support to help you achieve your career aspirations
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-secondary/30">
                <CardHeader>
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="text-secondary" size={28} />
                  </div>
                  <CardTitle className="text-xl font-montserrat">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/upload-cv">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
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

export default CandidateServices;
