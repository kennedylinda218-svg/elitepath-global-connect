import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase } from "lucide-react";

const JobOpenings = () => {
  const jobs = [
    {
      title: "Senior Software Engineer",
      company: "Global Tech Solutions",
      location: "New York, NY",
      type: "Full-Time",
      salary: "$120k - $160k",
    },
    {
      title: "Marketing Manager",
      company: "Healthcare Innovations",
      location: "London, UK",
      type: "Full-Time",
      salary: "£60k - £80k",
    },
    {
      title: "Financial Analyst",
      company: "Investment Group",
      location: "Singapore",
      type: "Contract",
      salary: "$90k - $110k",
    },
    {
      title: "Operations Director",
      company: "Logistics International",
      location: "Dubai, UAE",
      type: "Full-Time",
      salary: "$140k - $180k",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary">
            Featured Job Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore exclusive positions from our verified global employer network
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {jobs.map((job, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-secondary/30">
              <CardContent className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-montserrat font-bold text-primary">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                    {job.salary}
                  </span>
                </div>

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
                    Posted 2 days ago
                  </div>
                </div>

                <Link to="/jobs">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/jobs">
            <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold">
              View All Opportunities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
