import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-foreground">
              Privacy Policy
            </h1>
            <p className="text-lg text-primary-foreground/90">
              How we collect, use, and protect your personal information
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
                <h2 className="text-2xl font-montserrat font-bold text-primary">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ElitePath Recruitment Solutions ("Company," "we," "us," or "our") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any capacity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing our website or using our services, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">2. Information We Collect</h2>
                
                <h3 className="text-xl font-montserrat font-semibold text-foreground">2.1 Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may collect personally identifiable information that you voluntarily provide, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
                  <li><strong>Professional Information:</strong> Resume/CV, work history, education, skills, certifications, professional references</li>
                  <li><strong>Identification Documents:</strong> Government-issued ID, work authorization documents (when required for employment verification)</li>
                  <li><strong>Financial Information:</strong> Salary expectations, current compensation (for placement purposes only)</li>
                  <li><strong>Communication Records:</strong> Correspondence with our team, interview notes, feedback</li>
                </ul>

                <h3 className="text-xl font-montserrat font-semibold text-foreground mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on pages, click patterns, referral sources</li>
                  <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> As described in our Cookie Policy</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Recruitment Services:</strong> Matching candidates with suitable job opportunities, facilitating interviews, and managing the hiring process</li>
                  <li><strong>Communication:</strong> Contacting you about job opportunities, updates on applications, and service-related announcements</li>
                  <li><strong>Service Improvement:</strong> Analyzing usage patterns to improve our website and services</li>
                  <li><strong>Compliance:</strong> Meeting legal obligations, responding to legal requests, and protecting our rights</li>
                  <li><strong>Marketing:</strong> Sending promotional materials (with your consent) about career opportunities and industry insights</li>
                  <li><strong>Verification:</strong> Verifying your identity, qualifications, and employment eligibility</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">4. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Prospective Employers:</strong> When submitting your application for specific positions (only with your consent)</li>
                  <li><strong>Service Providers:</strong> Third-party vendors who assist with our operations (background checks, IT services, communication platforms)</li>
                  <li><strong>Legal Authorities:</strong> When required by law, court order, or to protect our legal rights</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of company assets</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not sell your personal information to third parties for marketing purposes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information, including:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure access controls and authentication</li>
                  <li>Regular security assessments and audits</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide our services to you</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Support legitimate business purposes</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Candidate profiles are typically retained for five (5) years from the last activity, unless you request earlier deletion.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                  <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
                  <li><strong>Objection:</strong> Object to certain processing activities</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for processing (where consent is the legal basis)</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">8. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As a global recruitment firm, we may transfer your information to countries outside your country of residence. We ensure appropriate safeguards are in place for such transfers, including Standard Contractual Clauses approved by relevant authorities.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">9. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">10. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website with a new effective date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
              </div>

              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground text-sm">
                  <strong>ElitePath Recruitment Solutions</strong><br />
                  Data Protection Officer<br />
                  United States<br /><br />
                  We will respond to your inquiry within 30 days.
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
