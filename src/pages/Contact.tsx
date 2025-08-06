import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validation du prénom
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Le prénom est obligatoire';
    }

    // Validation du nom
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Le nom est obligatoire';
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est obligatoire';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Veuillez entrer un email valide';
    }

    // Validation de l'objet
    if (!formData.subject) {
      newErrors.subject = 'Veuillez choisir un objet';
    }

    // Validation du message
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est obligatoire';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Le message doit contenir au moins 20 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Supprimer l'erreur pour ce champ quand l'utilisateur commence à taper
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      toast({
        title: "✅ Message envoyé avec succès !",
        description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
      });
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      toast({
        title: "❌ Erreur dans le formulaire",
        description: "Veuillez corriger les erreurs et réessayer.",
        variant: "destructive"
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-[var(--transition-smooth)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au portfolio
          </Link>

          <Card className="bg-card shadow-[var(--shadow-card)] border-border">
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                ✅ Message envoyé avec succès !
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Merci pour votre message. Je vous répondrai dans les plus brefs délais.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><strong>Prénom :</strong> {formData.firstName}</p>
                <p><strong>Nom :</strong> {formData.lastName}</p>
                <p><strong>Email :</strong> {formData.email}</p>
                <p><strong>Objet :</strong> {formData.subject}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-[var(--transition-smooth)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour au portfolio
        </Link>

        <Card className="bg-card shadow-[var(--shadow-card)] border-border">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">📬 Me contacter</h1>
              <p className="text-muted-foreground mt-2">
                N'hésitez pas à me contacter pour toute question ou proposition
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Prénom *</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={errors.firstName ? 'border-destructive' : ''}
                    placeholder="Votre prénom"
                  />
                  {errors.firstName && (
                    <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                      <AlertCircle className="w-4 h-4" />
                      {errors.firstName}
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="lastName">Nom *</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={errors.lastName ? 'border-destructive' : ''}
                    placeholder="Votre nom"
                  />
                  {errors.lastName && (
                    <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                      <AlertCircle className="w-4 h-4" />
                      {errors.lastName}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={errors.email ? 'border-destructive' : ''}
                  placeholder="votre.email@exemple.com"
                />
                {errors.email && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="subject">Objet *</Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger className={errors.subject ? 'border-destructive' : ''}>
                    <SelectValue placeholder="Choisissez un objet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="alternance">Demande d'alternance</SelectItem>
                    <SelectItem value="projet">Proposition de projet</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
                {errors.subject && (
                  <div className="flex items-center gap-1 mt-1 text-sm text-destructive">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject}
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`min-h-32 ${errors.message ? 'border-destructive' : ''}`}
                  placeholder="Votre message (minimum 20 caractères)..."
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <div className="flex items-center gap-1 text-sm text-destructive">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      {formData.message.length}/20 caractères minimum
                    </div>
                  )}
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;