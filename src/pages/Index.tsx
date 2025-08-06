import { Button } from "@/components/ui/button";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { AboutSection } from "@/components/ui/AboutSection";
import { ProjectsSection } from "@/components/ui/ProjectsSection";
import { CVSection } from "@/components/ui/CVSection";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section avec gradient */}
      <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-4">
          <ProfileCard />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <AboutSection />
        <ProjectsSection />
        <CVSection />
        
        {/* Contact CTA */}
        <div className="text-center">
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg shadow-[var(--shadow-elegant)]"
            >
              <Mail className="w-5 h-5 mr-2" />
              📬 Me contacter
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Hydrile MBIAKOP TAPTCHOU
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
