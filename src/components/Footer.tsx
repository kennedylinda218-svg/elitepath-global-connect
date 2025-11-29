import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

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
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm opacity-80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/employer-services" className="text-sm opacity-80 hover:text-accent transition-colors">Employer Services</Link></li>
              <li><Link to="/candidate-services" className="text-sm opacity-80 hover:text-accent transition-colors">Candidate Services</Link></li>
              <li><Link to="/process" className="text-sm opacity-80 hover:text-accent transition-colors">Our Process</Link></li>
              <li><Link to="/team" className="text-sm opacity-80 hover:text-accent transition-colors">Our Team</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-sm opacity-80 hover:text-accent transition-colors">FAQ</Link></li>
              <li><Link to="/testimonials" className="text-sm opacity-80 hover:text-accent transition-colors">Testimonials</Link></li>
              <li><Link to="/privacy-policy" className="text-sm opacity-80 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm opacity-80 hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="text-sm opacity-80 hover:text-accent transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">contact@elitepath.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-80">123 Business District, Global City, GC 12345</span>
              </li>
            </ul>
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
