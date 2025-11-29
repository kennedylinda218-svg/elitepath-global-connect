import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import teamAva from "@/assets/team-ava.jpg";
import teamMichael from "@/assets/team-michael.jpg";
import teamChloe from "@/assets/team-chloe.jpg";
import teamDaniel from "@/assets/team-daniel.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Ava Thompson",
      role: "Director of Talent Strategy",
      bio: "12+ years leading recruitment operations across global markets. Specializes in enterprise talent programs.",
      image: teamAva,
    },
    {
      name: "Michael Reyes",
      role: "Senior Talent Acquisition Consultant",
      bio: "Experienced in sourcing technical and leadership roles across tech, finance, and engineering.",
      image: teamMichael,
    },
    {
      name: "Chloe Anderson",
      role: "Career Development Advisor",
      bio: "Supports candidates with CV optimization, LinkedIn strategy, and interview success.",
      image: teamChloe,
    },
    {
      name: "Daniel Okoro",
      role: "Employer Partnerships Manager",
      bio: "Builds strong relationships with multinational employers and oversees hiring engagements.",
      image: teamDaniel,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Meet Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Experienced professionals dedicated to your success
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-secondary/30">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-montserrat font-bold text-primary">{member.name}</h3>
                  <p className="text-secondary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
