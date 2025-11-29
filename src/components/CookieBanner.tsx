import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-2xl z-50 animate-fade-in-up">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              We use cookies to enhance your browsing experience. By continuing, you agree to our{" "}
              <Link to="/cookie-policy" className="text-secondary hover:underline font-medium">
                Cookie Policy
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={handleAccept} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Accept
            </Button>
            <Button onClick={handleDecline} variant="outline">
              Decline
            </Button>
            <button onClick={handleDecline} className="p-2 hover:bg-muted rounded-lg transition-colors">
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
