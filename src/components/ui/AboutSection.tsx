import { Card } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <Card className="bg-card shadow-[var(--shadow-card)] border-border">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">À propos de moi</h2>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Étudiant passionné par le digital et les technologies web, je suis à la recherche 
          d'une alternance dans le domaine du marketing digital ou du développement web. 
          Motivé, autonome et curieux, je développe actuellement des projets personnels en 
          HTML, CSS et WordPress.
        </p>
      </div>
    </Card>
  );
};