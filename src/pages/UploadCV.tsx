import { useState, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

const UploadCV = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userType: "",
    message: "",
  });

  const [agreements, setAgreements] = useState({
    nda: false,
    privacy: false,
    terms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.userType) {
      newErrors.userType = "Please select whether you are an employer or job seeker";
    }

    if (!selectedFile) {
      newErrors.file = "Please upload your CV";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(selectedFile.type)) {
        newErrors.file = "Only PDF and Word documents are accepted";
      }
      if (selectedFile.size > 10 * 1024 * 1024) {
        newErrors.file = "File size must be less than 10MB";
      }
    }

    if (!agreements.nda) {
      newErrors.nda = "You must agree to the Confidentiality Agreement";
    }

    if (!agreements.privacy) {
      newErrors.privacy = "You must agree to the Privacy Policy";
    }

    if (!agreements.terms) {
      newErrors.terms = "You must agree to the Terms of Service";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      if (errors.file) {
        setErrors((prev) => ({ ...prev, file: "" }));
      }
    }
  };

  const handleAgreementChange = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({ ...prev, [key]: !prev[key] }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Please complete all required fields",
        description: "Review the form and ensure all required fields are filled correctly.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert file to base64 for submission
      let fileBase64 = "";
      let fileName = "";
      
      if (selectedFile) {
        fileName = selectedFile.name;
        fileBase64 = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64 = reader.result as string;
            resolve(base64);
          };
          reader.readAsDataURL(selectedFile);
        });
      }

      const response = await fetch("https://formspree.io/f/xanrjznr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          userType: formData.userType,
          message: formData.message,
          ndaAgreed: "Yes",
          privacyAgreed: "Yes",
          termsAgreed: "Yes",
          cvFileName: fileName,
          cvFile: fileBase64,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Application Submitted Successfully!",
          description: "Thank you for your submission. Our team will review your CV and get back to you within 2-3 business days.",
        });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        <section className="pt-32 pb-24 bg-gradient-to-br from-primary to-midnight-sapphire min-h-[80vh] flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in-up">
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-12 h-12 text-accent" />
              </div>
              <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-foreground">
                Application Submitted!
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Thank you for submitting your CV to ElitePath Recruitment Solutions. Our talent acquisition team will carefully review your application and contact you within 2-3 business days.
              </p>
              <div className="pt-8">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/">Return to Homepage</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-midnight-sapphire">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-primary-foreground">
              Submit Your CV
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Take the first step towards your next career opportunity
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-montserrat font-bold text-foreground">Personal Information</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Full Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-sm text-destructive flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address <span className="text-destructive">*</span></Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone Number <span className="text-destructive">*</span></Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-sm text-destructive flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="userType" className="text-foreground">I am a... <span className="text-destructive">*</span></Label>
                    <select
                      id="userType"
                      name="userType"
                      value={formData.userType}
                      onChange={handleInputChange}
                      className={`flex h-10 w-full rounded-md border ${errors.userType ? "border-destructive" : "border-input"} bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                    >
                      <option value="">Select an option</option>
                      <option value="job-seeker">Job Seeker</option>
                      <option value="employer">Employer</option>
                    </select>
                    {errors.userType && <p className="text-sm text-destructive flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.userType}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Additional Message (Optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your career goals, preferred industries, or any specific requirements..."
                    rows={4}
                  />
                </div>
              </div>

              {/* CV Upload */}
              <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-montserrat font-bold text-foreground">Upload Your CV</h2>
                
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
                    errors.file ? "border-destructive bg-destructive/5" : "border-border hover:border-secondary hover:bg-secondary/5"
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  
                  {selectedFile ? (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                        <FileText className="w-8 h-8 text-secondary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{selectedFile.name}</p>
                        <p className="text-sm text-muted-foreground">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <Button type="button" variant="outline" size="sm">
                        Change File
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                        <Upload className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Click to upload your CV</p>
                        <p className="text-sm text-muted-foreground">PDF or Word documents only (max 10MB)</p>
                      </div>
                    </div>
                  )}
                </div>
                {errors.file && <p className="text-sm text-destructive flex items-center gap-1"><AlertCircle className="w-4 h-4" />{errors.file}</p>}
              </div>

              {/* Legal Agreements */}
              <div className="bg-card border border-border rounded-xl p-8 space-y-6">
                <h2 className="text-2xl font-montserrat font-bold text-foreground">Legal Agreements</h2>
                <p className="text-muted-foreground">Please review and accept the following agreements to proceed:</p>
                
                <div className="space-y-4">
                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${errors.nda ? "bg-destructive/10 border border-destructive" : "bg-muted/30"}`}>
                    <Checkbox
                      id="nda"
                      checked={agreements.nda}
                      onCheckedChange={() => handleAgreementChange("nda")}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="nda" className="text-foreground cursor-pointer">
                        I have read and agree to the <Link to="/candidate-nda" className="text-secondary hover:underline font-medium" target="_blank">Confidentiality Agreement (NDA)</Link> <span className="text-destructive">*</span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        This agreement protects confidential information shared during the recruitment process.
                      </p>
                    </div>
                  </div>
                  {errors.nda && <p className="text-sm text-destructive flex items-center gap-1 ml-7"><AlertCircle className="w-4 h-4" />{errors.nda}</p>}

                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${errors.privacy ? "bg-destructive/10 border border-destructive" : "bg-muted/30"}`}>
                    <Checkbox
                      id="privacy"
                      checked={agreements.privacy}
                      onCheckedChange={() => handleAgreementChange("privacy")}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="privacy" className="text-foreground cursor-pointer">
                        I have read and agree to the <Link to="/privacy-policy" className="text-secondary hover:underline font-medium" target="_blank">Privacy Policy</Link> <span className="text-destructive">*</span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        This policy explains how we collect, use, and protect your personal information.
                      </p>
                    </div>
                  </div>
                  {errors.privacy && <p className="text-sm text-destructive flex items-center gap-1 ml-7"><AlertCircle className="w-4 h-4" />{errors.privacy}</p>}

                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${errors.terms ? "bg-destructive/10 border border-destructive" : "bg-muted/30"}`}>
                    <Checkbox
                      id="terms"
                      checked={agreements.terms}
                      onCheckedChange={() => handleAgreementChange("terms")}
                    />
                    <div className="space-y-1">
                      <Label htmlFor="terms" className="text-foreground cursor-pointer">
                        I have read and agree to the <Link to="/terms-of-service" className="text-secondary hover:underline font-medium" target="_blank">Terms of Service</Link> <span className="text-destructive">*</span>
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        These terms govern your use of our services and platform.
                      </p>
                    </div>
                  </div>
                  {errors.terms && <p className="text-sm text-destructive flex items-center gap-1 ml-7"><AlertCircle className="w-4 h-4" />{errors.terms}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-12 py-6 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Your information is encrypted and securely transmitted
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UploadCV;
