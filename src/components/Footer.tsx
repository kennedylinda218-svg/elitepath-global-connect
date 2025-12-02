import { Link } from "react-router-dom";
import { MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">EP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-lg">ElitePath</span>
                <span className="text-xs opacity-80">Recruitment Solutions</span>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-6">
              Connecting exceptional talent with global opportunities through ethical, efficient recruitment solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm opacity-80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm opacity-80 hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-sm opacity-80 hover:text-accent transition-colors">Our Team</Link></li>
              <li><Link to="/testimonials" className="text-sm opacity-80 hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-sm opacity-80 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/upload-cv" className="text-sm opacity-80 hover:text-accent transition-colors">Submit Your CV</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-sm opacity-80 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm opacity-80 hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/candidate-nda" className="text-sm opacity-80 hover:text-accent transition-colors">Candidate NDA</Link></li>
              <li><Link to="/cookie-policy" className="text-sm opacity-80 hover:text-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">United States</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} ElitePath Recruitment Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
