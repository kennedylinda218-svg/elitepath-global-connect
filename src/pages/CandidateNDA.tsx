import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CandidateNDA = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-foreground">
              Candidate Confidentiality Agreement
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Non-Disclosure Agreement for Candidates
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
                  <strong>Effective Date:</strong> Upon registration with ElitePath Recruitment Solutions<br />
                  <strong>Last Updated:</strong> January 2024
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Confidentiality Agreement ("Agreement") is entered into between you ("Candidate," "you," or "your") and ElitePath Recruitment Solutions ("Company," "we," "us," or "our"). By registering with our services, submitting your CV, or engaging with our recruitment processes, you acknowledge and agree to the terms outlined in this Agreement.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">2. Definition of Confidential Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  "Confidential Information" includes, but is not limited to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Details of job opportunities, employer identities, and position specifications shared with you during the recruitment process</li>
                  <li>Salary ranges, compensation packages, and benefits information for specific roles</li>
                  <li>Business strategies, hiring plans, and organizational structures of our client companies</li>
                  <li>Proprietary recruitment methodologies, assessment criteria, and evaluation processes</li>
                  <li>Contact information of our team members, clients, and other candidates</li>
                  <li>Any information explicitly marked as "confidential" or reasonably understood to be confidential</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">3. Obligations of Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As a candidate registered with ElitePath Recruitment Solutions, you agree to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Maintain Strict Confidentiality:</strong> Keep all Confidential Information private and secure, and not disclose it to any third party without our prior written consent</li>
                  <li><strong>Use Information Appropriately:</strong> Use Confidential Information solely for the purpose of evaluating and pursuing employment opportunities presented to you by our Company</li>
                  <li><strong>Protect Against Unauthorized Access:</strong> Take reasonable measures to prevent unauthorized access, copying, or distribution of Confidential Information</li>
                  <li><strong>Return or Destroy Information:</strong> Upon request or upon termination of your relationship with us, promptly return or destroy all Confidential Information in your possession</li>
                  <li><strong>Report Breaches:</strong> Immediately notify us if you become aware of any unauthorized disclosure or use of Confidential Information</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">4. Exceptions to Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement does not apply to information that:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Was already in your lawful possession before disclosure by us</li>
                  <li>Is or becomes publicly available through no fault of your own</li>
                  <li>Is independently developed by you without reference to our Confidential Information</li>
                  <li>Is rightfully received from a third party without restriction on disclosure</li>
                  <li>Must be disclosed by law, court order, or regulatory requirement (provided you give us reasonable notice to seek protective measures)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">5. Non-Circumvention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to circumvent ElitePath Recruitment Solutions by:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Directly contacting or applying to employers introduced to you through our services without our knowledge or consent</li>
                  <li>Sharing employer contact information or job details with other individuals seeking employment</li>
                  <li>Using information gained through our services to benefit competitors or third-party recruitment agencies</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  This non-circumvention obligation remains in effect for a period of twelve (12) months following your last engagement with our services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">6. Duration of Agreement</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your confidentiality obligations under this Agreement shall remain in effect for a period of three (3) years from the date of disclosure of any Confidential Information, unless the information qualifies as a trade secret, in which case your obligations continue for as long as the information remains a trade secret under applicable law.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">7. Remedies for Breach</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You acknowledge that unauthorized disclosure of Confidential Information may cause irreparable harm to ElitePath Recruitment Solutions and our clients. In the event of a breach or threatened breach of this Agreement, we reserve the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Seek injunctive relief to prevent further disclosure</li>
                  <li>Pursue damages for any losses incurred as a result of the breach</li>
                  <li>Terminate your registration and access to our services</li>
                  <li>Report serious breaches to relevant professional bodies or legal authorities</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">8. Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement operates in conjunction with our Privacy Policy. Any personal data you receive through our services must be handled in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA) where applicable.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Agreement shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from this Agreement shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">10. Acknowledgment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By checking the NDA consent box during registration or CV submission, you confirm that:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>You have read and understood this Confidentiality Agreement</li>
                  <li>You voluntarily agree to be bound by its terms</li>
                  <li>You have the legal capacity to enter into this Agreement</li>
                  <li>You understand the consequences of breaching this Agreement</li>
                </ul>
              </div>

              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground text-sm">
                  <strong>Contact Us:</strong><br />
                  If you have questions about this Confidentiality Agreement, please contact us at:<br /><br />
                  ElitePath Recruitment Solutions<br />
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

export default CandidateNDA;
