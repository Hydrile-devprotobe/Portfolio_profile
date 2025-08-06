import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

export const CVSection = () => {
  const handleDownloadCV = () => {
    // Simuler le téléchargement du CV
    const link = document.createElement('a');
    link.href = '/CV_Hydrile_Mbiakop_Informaticien.pdf';
    link.download = 'CV_Hydrile_Mbiakop_Informaticien.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="bg-card shadow-[var(--shadow-card)] border-border">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">CV</h2>
        <div className="flex items-center justify-between p-6 rounded-lg bg-secondary/50">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Mon CV</h3>
              <p className="text-muted-foreground">CV_Hydrile_Mbiakop_Informaticien.pdf</p>
            </div>
          </div>
          <Button 
            onClick={handleDownloadCV}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Download className="w-4 h-4 mr-2" />
            Télécharger
          </Button>
        </div>
      </div>
    </Card>
  );
};