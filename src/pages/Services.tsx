import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Search, 
  Users, 
  Briefcase, 
  TrendingUp, 
  FileText, 
  Target,
  Award,
  MessageSquare,
  CheckCircle2,
  Building,
  UserCheck,
  Globe,
  Shield
} from "lucide-react";

const Services = () => {
  const jobSeekerServices = [
    {
      icon: MessageSquare,
      title: "Personalized Career Advisory",
      description: "One-on-one consultations with experienced career advisors who understand your industry and career goals. We help you navigate career transitions, negotiate offers, and plan long-term professional growth.",
    },
    {
      icon: FileText,
      title: "CV & LinkedIn Optimization",
      description: "Professional resume writing and LinkedIn profile optimization services designed to showcase your strengths and increase visibility to top employers. We help you stand out in competitive markets.",
    },
    {
      icon: Globe,
      title: "Exclusive Global Job Opportunities",
      description: "Access to unadvertised positions with verified international employers across technology, finance, healthcare, engineering, and professional services sectors.",
    },
    {
      icon: Award,
      title: "Interview Preparation & Coaching",
      description: "Comprehensive interview coaching including mock interviews, industry-specific guidance, and strategies to communicate your value effectively to potential employers.",
    },
    {
      icon: Shield,
      title: "Confidential Representation to Employers",
      description: "We represent your candidacy professionally while maintaining strict confidentiality. Your current employer will never be contacted without your explicit permission.",
    },
  ];

  const employerServices = [
    {
      icon: Search,
      title: "Executive Search & Leadership Hiring",
      description: "Specialized recruitment for C-suite executives, senior management, and leadership positions. Our executive search team identifies proven leaders who align with your organizational culture and strategic vision.",
    },
    {
      icon: Users,
      title: "Permanent & Contract Staffing",
      description: "Flexible staffing solutions for permanent, contract, and contract-to-hire positions. We source professionals across all experience levels to meet your immediate and long-term workforce needs.",
    },
    {
      icon: Target,
      title: "Technical & Specialized Talent Acquisition",
      description: "Expert recruitment for hard-to-fill technical and specialized roles in engineering, IT, healthcare, finance, and scientific fields. We understand niche skills and industry certifications.",
    },
    {
      icon: TrendingUp,
      title: "Workforce Scaling Support",
      description: "Strategic support for rapid team growth, market expansion, or organizational transformation. We help you build high-performing teams quickly without compromising quality.",
    },
    {
      icon: Briefcase,
      title: "Recruitment Process Outsourcing (RPO)",
      description: "Comprehensive end-to-end recruitment solutions managed by our team. From sourcing to onboarding, we become an extension of your HR department, delivering efficiency and quality at scale.",
    },
    {
      icon: Building,
      title: "Employer Branding Advisory",
      description: "Strategic guidance to enhance your employer brand and attract top talent. We help you articulate your value proposition and position your organization as an employer of choice.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive recruitment and career solutions for professionals and employers
            </p>
          </div>
        </div>
      </section>

      {/* For Job Seekers */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-4">
                <UserCheck className="text-accent" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
                Career Advancement Services for Job Seekers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Professional support to help you secure your next career opportunity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {jobSeekerServices.map((service, index) => (
                <Card key={index} className="border-2 hover:border-accent/30 transition-all hover:shadow-xl">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center">
                      <service.icon className="text-accent" size={28} />
                    </div>
                    <h3 className="text-xl font-montserrat font-bold text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-accent/5 border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div className="space-y-2">
                    <h3 className="text-xl font-montserrat font-bold text-primary">No Fees for Job Seekers</h3>
                    <p className="text-foreground leading-relaxed">
                      All career services for job seekers are provided at no cost. We are compensated by employers, allowing us to focus entirely on your career success without any financial obligation on your part.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-7">
                  Submit Your CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-4">
                <Building className="text-secondary" size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
                Strategic Hiring Solutions for Employers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scalable recruitment services to build exceptional teams
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {employerServices.map((service, index) => (
                <Card key={index} className="border-2 hover:border-secondary/30 transition-all hover:shadow-xl">
                  <CardContent className="p-8 space-y-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <service.icon className="text-secondary" size={28} />
                    </div>
                    <h3 className="text-xl font-montserrat font-bold text-primary">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-secondary/5 border-2 border-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <div className="space-y-2">
                    <h3 className="text-xl font-montserrat font-bold text-primary">Flexible Engagement Models</h3>
                    <p className="text-foreground leading-relaxed">
                      We offer flexible pricing and engagement models tailored to your hiring needs. Whether you need help with a single critical hire or ongoing recruitment support, we'll design a solution that fits your budget and timeline.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-12">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold text-lg px-10 py-7">
                  Hire Talent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-4xl font-montserrat font-bold text-primary mb-6">
                Why Choose ElitePath
              </h2>
              <p className="text-lg text-muted-foreground">
                We combine global reach with personalized service, delivering exceptional results for candidates and employers alike.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-5xl font-montserrat font-bold text-secondary">95%</div>
                <p className="text-muted-foreground">Client Satisfaction Rate</p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-montserrat font-bold text-secondary">50+</div>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div className="space-y-3">
                <div className="text-5xl font-montserrat font-bold text-secondary">15</div>
                <p className="text-muted-foreground">Average Days to Hire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
