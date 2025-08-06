import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export const ProfileCard = () => {
  return (
    <Card className="bg-card shadow-[var(--shadow-card)] border-border">
      <div className="p-8 text-center">
        <div className="mb-6">
          <img
            src="/lovable-uploads/71d4bbbf-58dd-4c68-bf8a-cc653a7acd03.png"
            alt="Hydrile MBIAKOP TAPTCHOU"
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary"
          />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Hydrile MBIAKOP TAPTCHOU
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6">
          Étudiant en Communication & Marketing Digital
        </p>
        
        <div className="space-y-2 text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>78410 Aubergenville</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" />
            <span>hydrilembiakop2002@gmail.com</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            <span>07 51 26 38 78</span>
          </div>
        </div>
      </div>
    </Card>
  );
};