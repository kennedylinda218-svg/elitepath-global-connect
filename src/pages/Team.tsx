import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import teamSarah from "@/assets/team-sarah.jpg";
import teamJennifer from "@/assets/team-jennifer.jpg";
import teamMichael from "@/assets/team-michael.jpg";

const Team = () => {
  const leadershipTeam = [
    {
      name: "Sarah Mitchell",
      role: "Director of Talent Strategy",
      bio: "With over 15 years of experience in global talent acquisition, Sarah leads our strategic vision and ensures exceptional service delivery across all markets. Her expertise spans executive search, workforce planning, and organizational development. She has successfully placed over 500 executives in Fortune 500 companies.",
      image: teamSarah,
    },
    {
      name: "Jennifer Rodriguez",
      role: "Head of Employer Partnerships",
      bio: "Jennifer builds and nurtures relationships with multinational employers across industries. Her deep understanding of business needs and talent markets enables us to deliver precisely matched hiring solutions. She brings 12 years of corporate HR experience from leading technology firms.",
      image: teamJennifer,
    },
    {
      name: "Michael Thompson",
      role: "Head of Recruitment Operations",
      bio: "Michael oversees all recruitment operations and ensures seamless candidate experiences. His commitment to efficiency and quality has streamlined our processes, reducing time-to-hire by 40% while maintaining exceptional placement quality. He holds certifications in HR management and talent analytics.",
      image: teamMichael,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Experienced professionals dedicated to connecting talent with opportunity
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team - Featured Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-montserrat font-bold text-center mb-6 text-primary">
            Leadership Team
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            Our leadership brings decades of combined experience in recruitment, HR, and talent management to guide ElitePath's mission of connecting exceptional talent with global opportunities.
          </p>
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
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
              Working Together for Your Success
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Our team brings together decades of combined experience in recruitment, career development, and employer partnerships. We're united by a shared commitment to integrity, excellence, and human-centered service. Every team member plays a vital role in connecting exceptional talent with outstanding opportunities worldwide.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
