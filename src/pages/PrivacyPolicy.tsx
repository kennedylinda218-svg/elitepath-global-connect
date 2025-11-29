import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Privacy Policy
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
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  ElitePath Recruitment Solutions ("we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our recruitment services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">2. Information We Collect</h2>
                <p className="leading-relaxed mb-4">
                  We collect information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Identification Information:</strong> Name, email address, phone number, postal address</li>
                  <li><strong>Professional Information:</strong> CV/resume, work history, education, skills, certifications, references</li>
                  <li><strong>Account Information:</strong> Username, password, preferences</li>
                  <li><strong>Communication Data:</strong> Records of your interactions with us</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">3. How We Use Your Information</h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Match candidates with suitable job opportunities</li>
                  <li>Communicate with you about recruitment services and job opportunities</li>
                  <li>Present your qualifications to potential employers (with your consent)</li>
                  <li>Improve our services and website functionality</li>
                  <li>Comply with legal obligations and protect our rights</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Conduct analytics and research to enhance user experience</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">4. Data Sharing and Disclosure</h2>
                <p className="leading-relaxed mb-4">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Potential Employers:</strong> With your explicit consent, we share your CV and professional information</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist with our operations (e.g., cloud storage, analytics)</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sale of assets</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  We never sell your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">5. Data Retention</h2>
                <p className="leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Candidate information is typically retained for up to 5 years from your last interaction with us, after which it is securely deleted or anonymized.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">6. Cookies and Tracking Technologies</h2>
                <p className="leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience. Cookies help us:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you interact with our website</li>
                  <li>Improve website performance and functionality</li>
                  <li>Deliver relevant advertisements</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You can control cookie settings through your browser preferences. For more information, see our Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">7. Your Rights</h2>
                <p className="leading-relaxed mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal information</li>
                  <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Restriction:</strong> Limit how we process your information</li>
                  <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise these rights, contact us at <a href="mailto:privacy@elitepath.com" className="text-secondary hover:underline">privacy@elitepath.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">8. Security Measures</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">9. Third-Party Links</h2>
                <p className="leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">10. International Data Transfers</h2>
                <p className="leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">11. Children's Privacy</h2>
                <p className="leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">12. Changes to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on our website with an updated "Last Updated" date. Your continued use of our services after changes indicates acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">13. Contact Us</h2>
                <p className="leading-relaxed">
                  For questions or concerns about this Privacy Policy or our data practices, please contact us at:
                  <br /><br />
                  ElitePath Recruitment Solutions<br />
                  Email: <a href="mailto:privacy@elitepath.com" className="text-secondary hover:underline">privacy@elitepath.com</a><br />
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

export default PrivacyPolicy;
