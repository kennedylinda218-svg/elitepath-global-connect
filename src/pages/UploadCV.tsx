import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";
import { Link } from "react-router-dom";

const UploadCV = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    userType: "",
    message: "",
    cvFile: null as File | null,
  });
  const [agreements, setAgreements] = useState({
    nda: false,
    privacy: false,
    terms: false,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!validTypes.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
        return;
      }
      setFormData({ ...formData, cvFile: file });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.userType || !formData.cvFile) {
      toast({
        title: "Error",
        description: "Please fill in all required fields and upload your CV.",
        variant: "destructive",
      });
      return;
    }

    // Validate agreements
    if (!agreements.nda || !agreements.privacy || !agreements.terms) {
      toast({
        title: "Error",
        description: "All agreements must be accepted before submitting your CV.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "CV Submitted Successfully!",
      description: "Your CV has been submitted successfully. Our recruitment team will review it shortly.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      userType: "",
      message: "",
      cvFile: null,
    });
    setAgreements({
      nda: false,
      privacy: false,
      terms: false,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold text-primary-foreground">
              Upload Your CV
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Take the first step towards your next career opportunity
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
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
                <Label htmlFor="userType">Are you an Employer or Job Seeker? *</Label>
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
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your career goals or requirements..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="cvFile">Upload CV (.pdf or .docx only) *</Label>
                <div className="mt-2">
                  <label htmlFor="cvFile" className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg hover:border-secondary transition-colors cursor-pointer">
                    <div className="text-center">
                      <Upload className="mx-auto mb-2 text-muted-foreground" size={32} />
                      <p className="text-sm text-muted-foreground">
                        {formData.cvFile ? formData.cvFile.name : "Click to upload your CV"}
                      </p>
                    </div>
                  </label>
                  <Input
                    id="cvFile"
                    type="file"
                    accept=".pdf,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4 pt-6 border-t border-border">
                <p className="font-montserrat font-bold text-primary">Required Agreements *</p>
                
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="nda"
                    checked={agreements.nda}
                    onCheckedChange={(checked) => setAgreements({ ...agreements, nda: checked as boolean })}
                  />
                  <label htmlFor="nda" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to the <Link to="/candidate-nda" className="text-secondary hover:underline">Candidate NDA & Confidentiality Agreement</Link>
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={agreements.privacy}
                    onCheckedChange={(checked) => setAgreements({ ...agreements, privacy: checked as boolean })}
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to the <Link to="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</Link>
                  </label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="terms"
                    checked={agreements.terms}
                    onCheckedChange={(checked) => setAgreements({ ...agreements, terms: checked as boolean })}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to the <Link to="/terms-of-service" className="text-secondary hover:underline">Terms of Service</Link>
                  </label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Submit CV
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UploadCV;
