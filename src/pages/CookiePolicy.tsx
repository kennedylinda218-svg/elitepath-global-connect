import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-foreground">
              Cookie Policy
            </h1>
            <p className="text-lg text-primary-foreground/90">
              How we use cookies and similar technologies
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
                  ElitePath Recruitment Solutions ("Company," "we," "us," or "our") uses cookies and similar tracking technologies on our website. This Cookie Policy explains what cookies are, how we use them, your choices regarding cookies, and further information about cookies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This policy should be read alongside our Privacy Policy, which provides additional information about how we collect and use personal data.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">2. What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and give website owners useful information about how their site is being used.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies can be "persistent" or "session" cookies:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Persistent Cookies:</strong> Remain on your device after you close your browser until they expire or you delete them</li>
                  <li><strong>Session Cookies:</strong> Are deleted when you close your browser</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">3. Types of Cookies We Use</h2>
                
                <h3 className="text-xl font-montserrat font-semibold text-foreground">3.1 Essential Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <table className="w-full text-sm text-muted-foreground">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-semibold">Cookie Name</th>
                        <th className="text-left py-2 font-semibold">Purpose</th>
                        <th className="text-left py-2 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2">session_id</td>
                        <td className="py-2">Maintains user session state</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">csrf_token</td>
                        <td className="py-2">Security - prevents cross-site request forgery</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr>
                        <td className="py-2">cookie_consent</td>
                        <td className="py-2">Stores your cookie preferences</td>
                        <td className="py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-montserrat font-semibold text-foreground mt-6">3.2 Performance & Analytics Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <table className="w-full text-sm text-muted-foreground">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-semibold">Cookie Name</th>
                        <th className="text-left py-2 font-semibold">Purpose</th>
                        <th className="text-left py-2 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2">_ga</td>
                        <td className="py-2">Google Analytics - distinguishes users</td>
                        <td className="py-2">2 years</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">_gid</td>
                        <td className="py-2">Google Analytics - distinguishes users</td>
                        <td className="py-2">24 hours</td>
                      </tr>
                      <tr>
                        <td className="py-2">_gat</td>
                        <td className="py-2">Google Analytics - throttles request rate</td>
                        <td className="py-2">1 minute</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-montserrat font-semibold text-foreground mt-6">3.3 Functional Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, or previously viewed jobs.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <table className="w-full text-sm text-muted-foreground">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-semibold">Cookie Name</th>
                        <th className="text-left py-2 font-semibold">Purpose</th>
                        <th className="text-left py-2 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2">language</td>
                        <td className="py-2">Remembers language preference</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr>
                        <td className="py-2">recent_searches</td>
                        <td className="py-2">Stores recent job search queries</td>
                        <td className="py-2">30 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-montserrat font-semibold text-foreground mt-6">3.4 Marketing & Advertising Cookies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  These cookies are used to track visitors across websites and display ads that are relevant to your interests. They also help us measure the effectiveness of our advertising campaigns.
                </p>
                <div className="bg-muted/30 p-4 rounded-lg mt-4">
                  <table className="w-full text-sm text-muted-foreground">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 font-semibold">Cookie Name</th>
                        <th className="text-left py-2 font-semibold">Purpose</th>
                        <th className="text-left py-2 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-2">_fbp</td>
                        <td className="py-2">Facebook Pixel - ad delivery and measurement</td>
                        <td className="py-2">3 months</td>
                      </tr>
                      <tr>
                        <td className="py-2">li_sugr</td>
                        <td className="py-2">LinkedIn Insight Tag - conversion tracking</td>
                        <td className="py-2">3 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">4. Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide other services. These third parties have their own privacy policies:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" className="text-secondary hover:underline">Privacy Policy</a></li>
                  <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/legal/privacy-policy" className="text-secondary hover:underline">Privacy Policy</a></li>
                  <li><strong>Facebook/Meta:</strong> <a href="https://www.facebook.com/privacy/policy/" className="text-secondary hover:underline">Privacy Policy</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">5. Your Cookie Choices</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have several options for managing cookies:
                </p>
                
                <h3 className="text-xl font-montserrat font-semibold text-foreground">5.1 Cookie Consent Banner</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When you first visit our website, you will see a cookie consent banner that allows you to accept or decline non-essential cookies. You can change your preferences at any time by clearing your browser cookies and revisiting our site.
                </p>

                <h3 className="text-xl font-montserrat font-semibold text-foreground mt-6">5.2 Browser Settings</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most web browsers allow you to control cookies through their settings. You can typically:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>View cookies stored on your device</li>
                  <li>Delete individual cookies or all cookies</li>
                  <li>Block all cookies or third-party cookies</li>
                  <li>Set preferences for specific websites</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Note that blocking all cookies may affect your experience on our website and limit functionality.
                </p>

                <h3 className="text-xl font-montserrat font-semibold text-foreground mt-6">5.3 Opt-Out Links</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can opt out of specific third-party tracking:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Google Analytics:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" className="text-secondary hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><strong>Digital Advertising Alliance:</strong> Visit <a href="https://optout.aboutads.info/" className="text-secondary hover:underline">optout.aboutads.info</a></li>
                  <li><strong>Network Advertising Initiative:</strong> Visit <a href="https://optout.networkadvertising.org/" className="text-secondary hover:underline">optout.networkadvertising.org</a></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">6. Do Not Track Signals</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no uniform technology standard for recognizing DNT signals. We do not currently respond to DNT browser signals.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">7. Updates to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically. The "Last Updated" date at the top indicates when this policy was last revised.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-montserrat font-bold text-primary">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our use of cookies or this Cookie Policy, please contact us:
                </p>
              </div>

              <div className="mt-12 p-6 bg-muted/30 rounded-lg">
                <p className="text-muted-foreground text-sm">
                  <strong>ElitePath Recruitment Solutions</strong><br />
                  Privacy Team<br />
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

export default CookiePolicy;
