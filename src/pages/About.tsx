import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Globe, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              About ElitePath
            </h1>
            <p className="text-xl text-primary-foreground/90">
              A Reputable Global Workforce Solutions Partner
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-foreground leading-relaxed">
              ElitePath Recruitment Solutions is a premier global workforce partner dedicated to connecting exceptional talent with world-class organizations. We specialize in strategic talent acquisition across technology, finance, healthcare, engineering, logistics, and professional services.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              With a commitment to ethical recruiting practices, transparent communication, and human-centered support, we deliver hiring outcomes that drive organizational success and advance professional careers.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Vision */}
            <Card className="border-2 hover:border-secondary/30 transition-colors">
              <CardContent className="p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Eye className="text-secondary" size={40} />
                  </div>
                  <div className="space-y-4 flex-1">
                    <h2 className="text-3xl font-montserrat font-bold text-primary">Our Vision</h2>
                    <p className="text-lg text-foreground leading-relaxed">
                      To be the world's most trusted recruitment partner, known for transforming careers and building exceptional teams that drive global innovation and economic growth. We envision a future where every professional finds meaningful work and every organization has access to the talent needed to achieve their mission.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-2 hover:border-secondary/30 transition-colors">
              <CardContent className="p-12">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Target className="text-accent" size={40} />
                  </div>
                  <div className="space-y-4 flex-1">
                    <h2 className="text-3xl font-montserrat font-bold text-primary">Our Mission</h2>
                    <p className="text-lg text-foreground leading-relaxed">
                      To connect high-performing professionals with verified global opportunities through ethical, transparent, and data-driven recruitment solutions. We are committed to understanding the unique needs of both candidates and employers, delivering personalized service, and building lasting partnerships that create mutual value and long-term success.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-4xl font-montserrat font-bold text-primary mb-4">Our Core Values</h2>
                <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Shield,
                    title: "Integrity & Ethics",
                    description: "We uphold the highest standards of honesty, confidentiality, and professional conduct in every interaction.",
                  },
                  {
                    icon: Users,
                    title: "Human-Centered Approach",
                    description: "We treat every candidate and client as an individual with unique goals, circumstances, and aspirations.",
                  },
                  {
                    icon: Award,
                    title: "Excellence & Quality",
                    description: "We are committed to delivering exceptional service and matching talent with precision and care.",
                  },
                  {
                    icon: Globe,
                    title: "Global Perspective",
                    description: "We embrace diversity, cultural understanding, and international collaboration in everything we do.",
                  },
                  {
                    icon: Target,
                    title: "Results-Driven",
                    description: "We focus on measurable outcomes that create real value for professionals and organizations alike.",
                  },
                  {
                    icon: Eye,
                    title: "Transparency",
                    description: "We communicate openly, honestly, and clearly throughout every stage of the recruitment process.",
                  },
                ].map((value, index) => (
                  <Card key={index} className="border-2 hover:border-secondary/30 transition-colors hover:shadow-lg">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center">
                        <value.icon className="text-secondary" size={28} />
                      </div>
                      <h3 className="text-xl font-montserrat font-bold text-primary">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-montserrat font-bold text-primary text-center mb-12">
              Our Commitment to Ethical Recruiting
            </h2>
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-montserrat font-bold text-primary mb-3">Confidentiality</h3>
                  <p className="text-foreground leading-relaxed">
                    All candidate information is treated with strict confidentiality. We never share your details without explicit consent and maintain the highest data protection standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-montserrat font-bold text-primary mb-3">No Candidate Fees</h3>
                  <p className="text-foreground leading-relaxed">
                    Job seekers never pay for our services. Our commitment is to your career success, and we are compensated exclusively by employers.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="p-8">
                  <h3 className="text-xl font-montserrat font-bold text-primary mb-3">Verified Employers Only</h3>
                  <p className="text-foreground leading-relaxed">
                    We partner exclusively with legitimate, verified organizations. Every employer in our network has been thoroughly vetted for credibility and professional standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold">
              Global Presence, Local Expertise
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Operating across multiple continents, we combine international reach with deep local market knowledge. Our global network enables us to connect talent and opportunity across borders while understanding the unique dynamics of each regional market.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
