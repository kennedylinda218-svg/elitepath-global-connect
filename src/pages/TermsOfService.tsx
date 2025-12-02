import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-foreground">
              Terms of Service
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Terms and conditions governing the use of our services
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-foreground">
              <div>
                <p className="text-muted-foreground mb-8">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 2024
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to ElitePath Recruitment Solutions. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and ElitePath Recruitment Solutions ("Company," "we," "us," or "our"). By accessing our website, registering as a candidate, engaging our services as an employer, or interacting with us in any capacity, you agree to be bound by these Terms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  If you do not agree to these Terms, please do not use our services. We reserve the right to modify these Terms at any time, and your continued use of our services constitutes acceptance of any changes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">2. Description of Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ElitePath Recruitment Solutions provides comprehensive recruitment and talent management services, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>For Job Seekers:</strong> Career advisory, resume optimization, job matching, interview preparation, and access to exclusive employment opportunities</li>
                  <li><strong>For Employers:</strong> Talent acquisition, executive search, workforce planning, recruitment process outsourcing (RPO), and contract/permanent staffing solutions</li>
                  <li><strong>Additional Services:</strong> Background verification, skills assessment, onboarding support, and market intelligence</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">3. Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To use our services, you must:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Be at least 18 years of age or the age of majority in your jurisdiction</li>
                  <li>Have the legal capacity to enter into binding contracts</li>
                  <li>Not be prohibited from using our services under applicable law</li>
                  <li>Provide accurate, current, and complete information during registration</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">4. User Responsibilities</h2>
                
                <h3 className="text-xl font-montserrat font-semibold text-foreground">4.1 For Candidates</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a candidate using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide truthful, accurate, and complete information in your profile, resume, and all communications</li>
                  <li>Promptly update your information if circumstances change</li>
                  <li>Not misrepresent your qualifications, experience, or work authorization status</li>
                  <li>Maintain confidentiality of employer information shared during the recruitment process</li>
                  <li>Communicate professionally with our team and prospective employers</li>
                  <li>Notify us promptly if you accept employment or are no longer seeking opportunities</li>
                </ul>

                <h3 className="text-xl font-montserrat font-semibold text-foreground mt-6">4.2 For Employers</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As an employer using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate job descriptions and requirements</li>
                  <li>Not discriminate against candidates based on protected characteristics</li>
                  <li>Handle candidate information in compliance with applicable privacy laws</li>
                  <li>Honor agreed-upon fee structures and payment terms</li>
                  <li>Notify us of hiring decisions within the agreed timeframe</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">5. Fees and Payment</h2>
                
                <h3 className="text-xl font-montserrat font-semibold text-foreground">5.1 Candidate Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Basic candidate registration and job matching services are provided free of charge. Premium career services (such as executive coaching or specialized resume services) may incur fees, which will be clearly disclosed before engagement.
                </p>

                <h3 className="text-xl font-montserrat font-semibold text-foreground mt-6">5.2 Employer Services</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Employer fees are determined by the type of service, role complexity, and engagement model. All fees, payment terms, and guarantee periods will be specified in individual service agreements. Standard payment terms are net-30 days from invoice date unless otherwise agreed.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">6. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on our website, including text, graphics, logos, images, and software, is the property of ElitePath Recruitment Solutions or our licensors and is protected by intellectual property laws. You may not:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Use our trademarks or branding without authorization</li>
                  <li>Scrape, data-mine, or automatically collect information from our website</li>
                  <li>Reverse-engineer any aspect of our technology</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">7. Prohibited Conduct</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Use our services for any unlawful purpose</li>
                  <li>Submit false, misleading, or fraudulent information</li>
                  <li>Harass, threaten, or intimidate other users, candidates, employers, or our staff</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our services</li>
                  <li>Use our services to distribute spam, malware, or other harmful content</li>
                  <li>Circumvent our services by directly contacting introduced parties without consent</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">8. Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>That any candidate will receive job offers or employment</li>
                  <li>That any employer will find suitable candidates</li>
                  <li>The accuracy or completeness of information provided by third parties</li>
                  <li>Uninterrupted or error-free access to our services</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Employment decisions are ultimately made by employers and candidates independently. We act as facilitators and are not responsible for employment outcomes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, ELITEPATH RECRUITMENT SOLUTIONS SHALL NOT BE LIABLE FOR:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Loss of profits, revenue, data, or business opportunities</li>
                  <li>Actions or omissions of employers, candidates, or third parties</li>
                  <li>Any damages exceeding the fees paid to us in the twelve (12) months preceding the claim</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">10. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify, defend, and hold harmless ElitePath Recruitment Solutions, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Your use of our services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>False or misleading information you provided</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">11. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may suspend or terminate your access to our services at any time, with or without cause, and with or without notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Your right to use our services immediately ceases</li>
                  <li>Provisions that by their nature should survive (including confidentiality, limitation of liability, and indemnification) shall remain in effect</li>
                  <li>Outstanding payment obligations remain due</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">12. Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes arising from these Terms or our services shall be resolved through:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Informal Negotiation:</strong> Parties shall first attempt to resolve disputes through good-faith negotiation</li>
                  <li><strong>Mediation:</strong> If negotiation fails, disputes shall be submitted to mediation</li>
                  <li><strong>Binding Arbitration:</strong> Unresolved disputes shall be finally resolved by binding arbitration under the rules of the American Arbitration Association</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Class action waivers apply to the extent permitted by law.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">13. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to conflict of law principles.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">14. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms, please contact us:
                </p>
              </div>

              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground text-sm">
                  <strong>ElitePath Recruitment Solutions</strong><br />
                  Legal Department<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
