import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CandidateNDA = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Candidate NDA & Confidentiality Agreement
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
                  This Confidentiality and Non-Disclosure Agreement ("Agreement") is entered into between ElitePath Recruitment Solutions ("ElitePath," "we," "us," or "our") and you ("Candidate," "you," or "your") when you submit your curriculum vitae or apply for recruitment services through our platform.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">2. Confidential Information</h2>
                <p className="leading-relaxed mb-4">
                  You acknowledge that during the recruitment process, ElitePath may share confidential information with you, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Employer company names, business strategies, and operational details</li>
                  <li>Job descriptions, salary ranges, and position requirements</li>
                  <li>Interview processes and assessment methodologies</li>
                  <li>Proprietary recruitment strategies and methods</li>
                  <li>Personal data of other candidates or employees</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">3. Obligations</h2>
                <p className="leading-relaxed mb-4">
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keep all confidential information strictly private and secure</li>
                  <li>Not disclose employer details to third parties without written permission</li>
                  <li>Use confidential information solely for the purpose of evaluating employment opportunities</li>
                  <li>Return or destroy all confidential materials upon request</li>
                  <li>Notify ElitePath immediately of any unauthorized disclosure</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">4. Data Protection</h2>
                <p className="leading-relaxed">
                  You consent to ElitePath collecting, processing, and storing your personal information in accordance with our Privacy Policy. Your data will be shared with potential employers only with your explicit consent and will be handled in compliance with applicable data protection laws.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">5. Prohibition of Sharing Internal Materials</h2>
                <p className="leading-relaxed">
                  You shall not reproduce, distribute, or share any documents, presentations, or materials provided by ElitePath or prospective employers without prior written authorization.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">6. Consent for Communication</h2>
                <p className="leading-relaxed">
                  By accepting this Agreement, you consent to receive communications from ElitePath via email, phone, SMS, or other electronic means regarding job opportunities, recruitment updates, and career advisory services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">7. Candidate Responsibilities</h2>
                <p className="leading-relaxed mb-4">
                  You agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and truthful information in your CV and application</li>
                  <li>Update ElitePath promptly of any changes to your employment status or contact details</li>
                  <li>Conduct yourself professionally during all interactions with ElitePath and prospective employers</li>
                  <li>Respond to communications in a timely manner</li>
                  <li>Notify ElitePath if you are no longer interested in pursuing opportunities</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">8. Limits of Service</h2>
                <p className="leading-relaxed">
                  ElitePath does not guarantee job placement. We provide recruitment services aimed at connecting qualified candidates with suitable employers, but final hiring decisions rest with the employer. ElitePath is not responsible for employer decisions, job offer terms, or employment outcomes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">9. Non-Solicitation and Professional Conduct</h2>
                <p className="leading-relaxed">
                  You agree not to bypass ElitePath to directly contact employers introduced through our services for a period of 12 months following introduction. You will conduct yourself with professionalism and integrity in all interactions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">10. Term and Termination</h2>
                <p className="leading-relaxed">
                  This Agreement remains in effect for the duration of your engagement with ElitePath and for two years following your last interaction with our services. Confidentiality obligations survive termination indefinitely.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">11. Governing Law</h2>
                <p className="leading-relaxed">
                  This Agreement shall be governed by and construed in accordance with the laws of the jurisdiction in which ElitePath operates, without regard to conflict of law principles.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">12. Contact Information</h2>
                <p className="leading-relaxed">
                  For questions regarding this Agreement, please contact us at: <a href="mailto:legal@elitepath.com" className="text-secondary hover:underline">legal@elitepath.com</a>
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
