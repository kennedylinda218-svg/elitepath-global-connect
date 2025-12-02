import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    userType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.userType || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success message
    toast({
      title: "Message Sent!",
      description: "Thank you! Your message has been received. Our team will contact you shortly.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      userType: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/90">
              We're here to help with your recruitment needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-primary mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="userType">I am an *</Label>
                  <Select value={formData.userType} onValueChange={(value) => setFormData({ ...formData, userType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="employer">Employer</SelectItem>
                      <SelectItem value="jobseeker">Job Seeker</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your needs..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-montserrat font-bold text-primary mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-bold text-primary mb-1">Location</h3>
                      <p className="text-muted-foreground">United States</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 p-8 rounded-xl">
                <h3 className="font-montserrat font-bold text-primary mb-4 flex items-center gap-2">
                  <Clock className="text-secondary" size={20} />
                  Office Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="bg-accent/10 border border-accent/30 p-8 rounded-xl">
                <h3 className="font-montserrat font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="text-accent" size={20} />
                  Looking for a Job?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Submit your CV and let our recruitment experts match you with the perfect opportunity.
                </p>
                <Link to="/upload-cv">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                    Submit Your CV
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
