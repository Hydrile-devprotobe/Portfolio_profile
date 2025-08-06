import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, MessageSquare, Wrench } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio personnel",
      description: "Ce site web - Site vitrine responsive en HTML/CSS/JavaScript",
      status: "Terminé",
      icon: Globe,
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Formulaire de contact",
      description: "Page de contact avec validation JavaScript avancée",
      status: "Terminé", 
      icon: MessageSquare,
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Blog WordPress",
      description: "Développement local d'un blog avec WordPress",
      status: "En cours",
      icon: Wrench,
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <Card className="bg-card shadow-[var(--shadow-card)] border-border">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Projets</h2>
        <div className="space-y-4">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-[var(--transition-smooth)]">
                <div className="p-2 rounded-lg bg-primary/10">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-foreground">{project.title}</h3>
                    <Badge className={project.color}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};