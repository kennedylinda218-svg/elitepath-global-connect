import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Process = () => {
  const employerSteps = [
    {
      number: "01",
      title: "Discovery & Requirements Analysis",
      description: "We begin with an in-depth consultation to understand your organization's culture, hiring needs, and success criteria. This ensures we align our search strategy with your business objectives.",
    },
    {
      number: "02",
      title: "Candidate Sourcing & Screening",
      description: "Leveraging our global network and advanced sourcing tools, we identify qualified candidates. Each prospect undergoes rigorous screening including skills assessment, background verification, and cultural fit evaluation.",
    },
    {
      number: "03",
      title: "Interview Coordination & Evaluation",
      description: "We manage the entire interview process, coordinating schedules and providing detailed candidate profiles. Our team facilitates feedback loops to ensure efficient decision-making.",
    },
    {
      number: "04",
      title: "Offer Management & Onboarding Support",
      description: "From negotiating offers to supporting smooth onboarding, we guide both parties through the final stages to ensure successful placements and long-term retention.",
    },
  ];

  const candidateSteps = [
    {
      number: "01",
      title: "Submit CV & Career Consultation",
      description: "Share your CV and career goals with us. We conduct a comprehensive consultation to understand your skills, experience, aspirations, and ideal work environment.",
    },
    {
      number: "02",
      title: "Screening & Skills Assessment",
      description: "Our team evaluates your qualifications and matches you with suitable opportunities. We may conduct skills assessments or portfolio reviews to better position you with employers.",
    },
    {
      number: "03",
      title: "Interview Preparation",
      description: "Receive personalized coaching for upcoming interviews. We provide insights about employers, industry-specific advice, and practice sessions to boost your confidence.",
    },
    {
      number: "04",
      title: "Placement & Continuous Support",
      description: "Once placed, we remain available to support your transition. We check in regularly to ensure satisfaction and provide ongoing career advisory as needed.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Our Recruitment Process
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Transparent, efficient pathways for employers and candidates
            </p>
          </div>
        </div>
      </section>

      {/* Employer Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-montserrat font-bold text-primary text-center mb-16">
              For Employers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {employerSteps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden border-2 hover:border-secondary transition-colors">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-secondary/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-secondary">{step.number}</span>
                  </div>
                  <CardContent className="pt-20 pb-8 px-8">
                    <h3 className="text-xl font-montserrat font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-montserrat font-bold text-primary text-center mb-16">
              For Candidates
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {candidateSteps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden border-2 hover:border-secondary transition-colors">
                  <div className="absolute top-0 left-0 w-16 h-16 bg-accent/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-accent">{step.number}</span>
                  </div>
                  <CardContent className="pt-20 pb-8 px-8">
                    <h3 className="text-xl font-montserrat font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
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

export default Process;
