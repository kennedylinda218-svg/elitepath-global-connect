import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Briefcase, DollarSign, Building2, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Jobs = () => {
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "Global Tech Solutions",
      location: "New York, NY",
      type: "Full-Time",
      salary: "$120k - $160k",
      description: "Lead development of enterprise applications using modern technologies. Work with cross-functional teams to deliver scalable solutions.",
      requirements: ["5+ years experience", "React/Node.js", "Cloud platforms"],
    },
    {
      title: "Marketing Manager",
      company: "Healthcare Innovations",
      location: "London, UK",
      type: "Full-Time",
      salary: "£60k - £80k",
      description: "Drive marketing strategy and campaigns for healthcare technology products. Lead a team of marketing professionals.",
      requirements: ["7+ years experience", "Healthcare industry", "Digital marketing"],
    },
    {
      title: "Financial Analyst",
      company: "Investment Group",
      location: "Singapore",
      type: "Contract",
      salary: "$90k - $110k",
      description: "Analyze financial data and market trends to support investment decisions. Prepare detailed reports for stakeholders.",
      requirements: ["3+ years experience", "CFA preferred", "Advanced Excel"],
    },
    {
      title: "Operations Director",
      company: "Logistics International",
      location: "Dubai, UAE",
      type: "Full-Time",
      salary: "$140k - $180k",
      description: "Oversee all operational aspects of the logistics network. Optimize processes and manage regional teams.",
      requirements: ["10+ years experience", "Supply chain expertise", "Team leadership"],
    },
    {
      title: "Data Scientist",
      company: "AI Research Labs",
      location: "San Francisco, CA",
      type: "Full-Time",
      salary: "$150k - $200k",
      description: "Develop machine learning models and algorithms. Collaborate with product teams to implement AI solutions.",
      requirements: ["PhD preferred", "Python/TensorFlow", "Published research"],
    },
    {
      title: "HR Business Partner",
      company: "Multinational Corp",
      location: "Toronto, Canada",
      type: "Full-Time",
      salary: "CAD $95k - $120k",
      description: "Partner with business leaders to develop HR strategies. Drive talent management and employee engagement initiatives.",
      requirements: ["8+ years experience", "SHRM certified", "Change management"],
    },
    {
      title: "Project Manager",
      company: "Construction Global",
      location: "Sydney, Australia",
      type: "Full-Time",
      salary: "AUD $130k - $160k",
      description: "Manage large-scale construction projects from inception to completion. Coordinate with contractors and stakeholders.",
      requirements: ["PMP certified", "5+ years construction", "Budget management"],
    },
    {
      title: "Sales Executive",
      company: "Enterprise Solutions",
      location: "Munich, Germany",
      type: "Full-Time",
      salary: "€70k - €95k",
      description: "Drive B2B sales for enterprise software solutions. Build and maintain relationships with key accounts.",
      requirements: ["5+ years B2B sales", "Enterprise software", "German fluency"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Current Job Opportunities
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Explore verified positions from our global network of trusted employers. Your next career move starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Jobs List */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/30">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                          <h3 className="text-2xl font-montserrat font-bold text-primary">{job.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Building2 size={16} className="text-secondary" />
                            <span className="text-muted-foreground">{job.company}</span>
                          </div>
                        </div>
                        <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold whitespace-nowrap">
                          {job.salary}
                        </span>
                      </div>

                      <p className="text-foreground leading-relaxed">{job.description}</p>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-secondary" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase size={16} className="text-secondary" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-secondary" />
                          Posted recently
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, reqIndex) => (
                          <span 
                            key={reqIndex} 
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:min-w-[200px]">
                      <Link to="/upload-cv">
                        <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                          Apply Now <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline" className="w-full border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center space-y-6">
            <h2 className="text-3xl font-montserrat font-bold text-primary">
              Don't See the Right Fit?
            </h2>
            <p className="text-muted-foreground text-lg">
              Submit your CV and our recruitment specialists will match you with opportunities that align with your skills and career goals.
            </p>
            <Link to="/upload-cv">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Submit Your CV <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
