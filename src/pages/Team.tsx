import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import teamDirector from "@/assets/team-director.jpg";
import teamPartnerships from "@/assets/team-partnerships.jpg";
import teamCommunications from "@/assets/team-communications.jpg";
import teamSeniorConsultant from "@/assets/team-senior-consultant.jpg";
import teamTechRecruiter from "@/assets/team-tech-recruiter.jpg";
import teamHealthcare from "@/assets/team-healthcare.jpg";
import teamEngineering from "@/assets/team-engineering.jpg";
import teamCareerAdvisor from "@/assets/team-career-advisor.jpg";
import teamResumeSpecialist from "@/assets/team-resume-specialist.jpg";
import teamOperations from "@/assets/team-operations.jpg";

const Team = () => {
  const leadershipTeam = [
    {
      name: "Alexandra Mitchell",
      role: "Director of Talent Strategy",
      bio: "With over 15 years of experience in global talent acquisition, Alexandra leads our strategic vision and ensures exceptional service delivery across all markets. Her expertise spans executive search, workforce planning, and organizational development.",
      image: teamDirector,
    },
    {
      name: "Marcus Thompson",
      role: "Head of Employer Partnerships",
      bio: "Marcus builds and nurtures relationships with multinational employers across industries. His deep understanding of business needs and talent markets enables us to deliver precisely matched hiring solutions.",
      image: teamPartnerships,
    },
    {
      name: "Sophia Rodriguez",
      role: "Head of Communications & Brand Experience",
      bio: "Sophia oversees our client communications, candidate experience, and brand positioning. Her commitment to transparency and quality ensures every interaction reflects our values and professionalism.",
      image: teamCommunications,
    },
  ];

  const recruitmentTeam = [
    {
      name: "David Chen",
      role: "Senior Talent Acquisition Consultant",
      bio: "David specializes in sourcing senior-level professionals across technology, finance, and operations. His consultative approach and industry knowledge have resulted in hundreds of successful executive placements.",
      image: teamSeniorConsultant,
    },
    {
      name: "Priya Sharma",
      role: "Technical Recruiter",
      bio: "Priya focuses on technical roles in software engineering, data science, and IT infrastructure. Her technical background allows her to assess candidates accurately and match them with the right opportunities.",
      image: teamTechRecruiter,
    },
    {
      name: "Jonathan Reed",
      role: "Healthcare Recruiter",
      bio: "Jonathan brings extensive experience in healthcare recruitment, from clinical roles to healthcare administration. His network and sector knowledge help organizations build exceptional medical teams.",
      image: teamHealthcare,
    },
    {
      name: "Elena Volkov",
      role: "Engineering & Operations Recruiter",
      bio: "Elena specializes in engineering, manufacturing, and operations roles. Her understanding of technical competencies and operational needs ensures high-quality placements in complex environments.",
      image: teamEngineering,
    },
  ];

  const careerServicesTeam = [
    {
      name: "Maya Patel",
      role: "Career Development Advisor",
      bio: "Maya provides personalized career coaching, helping professionals navigate transitions, negotiate offers, and achieve their long-term career goals with confidence and clarity.",
      image: teamCareerAdvisor,
    },
    {
      name: "Ryan Foster",
      role: "Resume & LinkedIn Optimization Specialist",
      bio: "Ryan crafts compelling resumes and LinkedIn profiles that showcase candidates' unique value. His expertise in personal branding helps job seekers stand out in competitive markets.",
      image: teamResumeSpecialist,
    },
  ];

  const supportTeam = [
    {
      name: "Lily Chang",
      role: "Operations Coordinator",
      bio: "Lily ensures seamless coordination across all recruitment processes. Her attention to detail and organizational skills keep projects on track and clients informed at every stage.",
      image: teamOperations,
    },
  ];

  const teamSections = [
    { title: "Leadership Team", members: leadershipTeam, color: "secondary" },
    { title: "Recruitment Team", members: recruitmentTeam, color: "accent" },
    { title: "Career Services Team", members: careerServicesTeam, color: "secondary" },
    { title: "Support Team", members: supportTeam, color: "accent" },
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
              Experienced professionals dedicated to connecting talent with opportunity
            </p>
          </div>
        </div>
      </section>

      {teamSections.map((section, sectionIndex) => (
        <section 
          key={sectionIndex} 
          className={`py-24 ${sectionIndex % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className={`text-4xl font-montserrat font-bold text-center mb-16 text-primary`}>
              {section.title}
            </h2>
            <div className={`grid ${section.members.length === 1 ? 'md:grid-cols-1 max-w-xl mx-auto' : section.members.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
              {section.members.map((member, index) => (
                <Card key={index} className={`overflow-hidden hover:shadow-xl transition-shadow border-2 hover:border-${section.color}/30`}>
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-montserrat font-bold text-primary">{member.name}</h3>
                    <p className={`text-${section.color} font-medium`}>{member.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Team Values */}
      <section className="py-24 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
              Working Together for Your Success
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Our diverse team brings together decades of combined experience in recruitment, career development, and employer partnerships. We're united by a shared commitment to integrity, excellence, and human-centered service. Every team member plays a vital role in connecting exceptional talent with outstanding opportunities worldwide.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
