import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, Target, TrendingUp, FileCheck, Award } from "lucide-react";

const EmployerServices = () => {
  const services = [
    {
      icon: Award,
      title: "Executive Search & Leadership Hiring",
      description: "We specialize in identifying and placing senior leaders who drive organizational success. Our executive search process combines industry expertise with thorough vetting to ensure cultural and strategic alignment.",
    },
    {
      icon: Users,
      title: "Permanent & Contract Staffing",
      description: "Whether you need long-term team members or project-based contractors, we provide flexible staffing solutions tailored to your business cycles and workforce requirements.",
    },
    {
      icon: Target,
      title: "Technical & Specialized Talent Acquisition",
      description: "Access hard-to-find professionals in technology, engineering, healthcare, and other specialized fields. We understand the nuanced skills required in technical roles.",
    },
    {
      icon: TrendingUp,
      title: "Workforce Scaling Support",
      description: "Rapidly scale your teams during growth phases or seasonal demands. We maintain ready talent pools across industries to support your expansion goals efficiently.",
    },
    {
      icon: FileCheck,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Partner with us to manage your entire recruitment function. We integrate seamlessly with your HR team, providing end-to-end hiring solutions that reduce costs and improve quality.",
    },
    {
      icon: Briefcase,
      title: "Employer Branding Advisory",
      description: "Enhance your employer brand to attract top talent. We provide strategic guidance on positioning your organization as an employer of choice in competitive markets.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Strategic Hiring Solutions for Employers
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive recruitment services designed to meet your unique business needs
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
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6">
                Hire Talent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmployerServices;
