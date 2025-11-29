import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Cookie Policy
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
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">1. What Are Cookies?</h2>
                <p className="leading-relaxed">
                  Cookies are small text files that are placed on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">2. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">Essential Cookies</h3>
                    <p className="leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">Performance Cookies</h3>
                    <p className="leading-relaxed">
                      These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us optimize our website performance and improve user experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">Functionality Cookies</h3>
                    <p className="leading-relaxed">
                      These cookies allow our website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-primary mb-3">Targeting/Advertising Cookies</h3>
                    <p className="leading-relaxed">
                      These cookies are used to deliver advertisements more relevant to you and your interests. They also help measure the effectiveness of advertising campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">3. Why We Store Cookies</h2>
                <p className="leading-relaxed mb-4">
                  We use cookies to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keep you signed in to your account</li>
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you interact with our website</li>
                  <li>Improve website functionality and performance</li>
                  <li>Provide personalized content and job recommendations</li>
                  <li>Analyze traffic and user behavior for optimization</li>
                  <li>Deliver relevant advertisements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">4. Data Collected Through Cookies</h2>
                <p className="leading-relaxed mb-4">
                  Cookies may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and device identifiers</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>User interactions with website elements</li>
                  <li>Login information and session data</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">5. Third-Party Cookies</h2>
                <p className="leading-relaxed">
                  We work with third-party service providers who may set cookies on your device when you visit our website. These include analytics providers (e.g., Google Analytics), advertising networks, and social media platforms. These third parties have their own privacy policies governing their use of cookies.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">6. How to Control Cookies</h2>
                <p className="leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Browser Settings:</strong> Most browsers allow you to refuse or accept cookies through their settings. You can also delete cookies that have already been set.</li>
                  <li><strong>Cookie Consent Banner:</strong> When you first visit our website, you can choose to accept or decline non-essential cookies through our consent banner.</li>
                  <li><strong>Third-Party Tools:</strong> You can opt out of third-party cookies through industry opt-out programs or directly through service provider settings.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Please note that blocking or deleting cookies may impact your user experience and limit certain website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">7. Cookie Retention Duration</h2>
                <p className="leading-relaxed mb-4">
                  Cookie retention periods vary:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (typically 30 days to 2 years) or until you delete them</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">8. Updates to This Policy</h2>
                <p className="leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the updated policy on our website with a new "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">9. Browser-Specific Instructions</h2>
                <p className="leading-relaxed mb-4">
                  For detailed information on managing cookies in specific browsers:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-montserrat font-bold text-primary mb-4">10. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about our use of cookies, please contact us at:
                  <br /><br />
                  ElitePath Recruitment Solutions<br />
                  Email: <a href="mailto:privacy@elitepath.com" className="text-secondary hover:underline">privacy@elitepath.com</a><br />
                  Phone: +1 (555) 123-4567
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

export default CookiePolicy;
