import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Last Updated: November 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-8 text-foreground">
              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing or using the ElitePath Recruitment Solutions website and services ("Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">2. Service Description</h2>
                <p className="leading-relaxed">
                  ElitePath provides recruitment and talent acquisition services connecting employers with qualified candidates. Our services include candidate sourcing, screening, interview coordination, career advisory, CV optimization, and related professional services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">3. User Obligations</h2>
                <p className="leading-relaxed mb-4">
                  As a user of our Services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security and confidentiality of your account credentials</li>
                  <li>Use the Services only for lawful purposes</li>
                  <li>Not misrepresent your identity, qualifications, or employment history</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not interfere with or disrupt the Services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">4. Limitations of Liability</h2>
                <p className="leading-relaxed mb-4">
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>ElitePath does not guarantee employment outcomes or job placements</li>
                  <li>We are not responsible for the accuracy of employer information or job descriptions</li>
                  <li>We are not liable for employment decisions, terms of employment, or workplace conditions</li>
                  <li>We shall not be liable for indirect, incidental, special, or consequential damages</li>
                  <li>Our total liability shall not exceed the fees paid to us, if any</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">5. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on our website, including text, graphics, logos, images, and software, is the property of ElitePath Recruitment Solutions or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">6. Disclaimers</h2>
                <p className="leading-relaxed mb-4">
                  Our Services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Warranties of merchantability or fitness for a particular purpose</li>
                  <li>Warranties that the Services will be uninterrupted, error-free, or secure</li>
                  <li>Warranties regarding the accuracy or reliability of information</li>
                  <li>Warranties that defects will be corrected</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">7. Prohibited Activities</h2>
                <p className="leading-relaxed mb-4">
                  You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use automated systems (bots, scrapers) to access the Services</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Upload viruses or malicious code</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Circumvent security features or access restrictions</li>
                  <li>Use the Services to compete with ElitePath</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">8. Indemnification</h2>
                <p className="leading-relaxed">
                  You agree to indemnify, defend, and hold harmless ElitePath, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Services, violation of these Terms, or infringement of third-party rights.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">9. Governing Law and Dispute Resolution</h2>
                <p className="leading-relaxed">
                  These Terms shall be governed by the laws of the jurisdiction in which ElitePath operates. Any disputes shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association, except where prohibited by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">10. Termination of Service</h2>
                <p className="leading-relaxed">
                  We reserve the right to suspend or terminate your access to the Services at our sole discretion, without prior notice, for conduct that we believe violates these Terms, is harmful to other users, or is otherwise objectionable. Upon termination, your right to use the Services will immediately cease.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">11. Modifications to Terms</h2>
                <p className="leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms on our website with a new "Last Updated" date. Your continued use of the Services after changes constitutes acceptance of the modified Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">12. Severability</h2>
                <p className="leading-relaxed">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">13. Entire Agreement</h2>
                <p className="leading-relaxed">
                  These Terms, together with our Privacy Policy and any other legal notices published on our website, constitute the entire agreement between you and ElitePath regarding the Services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">14. Contact Information</h2>
                <p className="leading-relaxed">
                  For questions about these Terms, please contact us at:
                  <br /><br />
                  ElitePath Recruitment Solutions<br />
                  Email: <a href="mailto:legal@elitepath.com" className="text-secondary hover:underline">legal@elitepath.com</a><br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Business District, Global City, GC 12345
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
