'use client';

import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, Euro, Package, Users, Zap, MessageSquare, MapPin, Phone, Target, FileText, Shield, HeadphonesIcon, Database, User, Cloud, Bot, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { theme } from '@/app/constants/theme';

interface PhaseDetail {
  phase: string;
  name: string;
  duration: string;
  price: number | null;
  details: string[];
  technologies: string[];
  icon: React.ReactNode;
}

const phases: PhaseDetail[] = [
  {
    phase: 'Phase 1',
    name: 'CRM de base',
    duration: '4-6 semaines',
    price: 2700,
    icon: <Database className="w-5 h-5" />,
    details: [
      'Base de données prospects/clients sécurisée',
      'Interface mobile responsive (iOS/Android)',
      'Système de notes et historique des visites',
      'Import/export des données (Excel, CSV)',
      'Authentification sécurisée et gestion des accès'
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'TypeScript', 'Supabase Auth']
  },
  {
    phase: 'Phase 2',
    name: 'Emailing & Prospection',
    duration: '2-4 semaines',
    price: null,
    icon: <Mail className="w-5 h-5" />,
    details: [
      'Intégration outils de prospection LinkedIn',
      'Récupération automatique des contacts',
      `Système d'emailing intégré (SendGrid/Brevo)`,
      'Templates de campagnes personnalisées',
      'Tracking et analytics des campagnes'
    ],
    technologies: ['LinkedIn API', 'SendGrid/Brevo', 'Webhooks', 'Analytics']
  },
  {
    phase: 'Phase 3',
    name: 'Optimisation',
    duration: '2 semaines',
    price: 1400,
    icon: <MapPin className="w-5 h-5" />,
    details: [
      'Intégration Google Maps API',
      'Calcul automatique des itinéraires optimaux',
      'Planification intelligente par zones',
      'Gestion des urgences et réorganisation',
      'Estimation temps de trajet et coûts'
    ],
    technologies: [`Google Maps API`, `Algorithmes d'optimisation`, 'Geolocalisation']
  },
  {
    phase: 'Phase 4',
    name: 'Automatisation',
    duration: '2-4 semaines',
    price: 2700,
    icon: <Bot className="w-5 h-5" />,
    details: [
      'Assistant WhatsApp Business API',
      'Notes vocales transcrites automatiquement',
      'Relances automatiques programmables',
      'Comptes-rendus générés par IA',
      'Synchronisation temps réel CRM'
    ],
    technologies: ['WhatsApp Business API', 'OpenAI Whisper', 'GPT-4', 'Webhooks']
  },
  {
    phase: 'Phase 5',
    name: 'Assistant Vocal IA',
    duration: 'À définir',
    price: null,
    icon: <Phone className="w-5 h-5" />,
    details: [
      'Bot vocal pour appels téléphoniques',
      'Prise de rendez-vous automatique',
      'Qualification des prospects par IA',
      'Enregistrement et transcription des appels',
      'Analytics avancés et reporting'
    ],
    technologies: ['ElevenLabs/OpenAI Voice', 'Twilio', 'NLP avancé', 'Real-time processing']
  }
];

const additionalServices = [
  {
    name: 'Formation & Accompagnement',
    price: '300€/session',
    description: 'Formation des équipes et support personnalisé',
    icon: <Users className="w-5 h-5" />
  },
  {
    name: 'Maintenance & Support',
    price: '200€/mois',
    description: 'Support technique et mises à jour régulières',
    icon: <HeadphonesIcon className="w-5 h-5" />
  },
  {
    name: 'Hébergement sécurisé',
    price: '50€/mois',
    description: 'Infrastructure cloud haute disponibilité',
    icon: <Shield className="w-5 h-5" />
  }
];

interface PricingPageProps {
  onNavigateToContact?: () => void;
}

export default function PricingPage({ onNavigateToContact }: PricingPageProps = {}) {
  const [activeTab, setActiveTab] = useState(0);
  const totalBudget = phases.reduce((acc, phase) => acc + (phase.price || 0), 0);
  const estimatedTotal = totalBudget + 8000; // Estimation pour phases non définies

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-start justify-between mt-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-[36px] leading-[40px] font-normal mb-4" style={{ fontFamily: theme.fonts.primary }}>
            <span className="text-[#B4B4B4]">Détail des</span> <span className="text-[#FAFAFA]">phases de développement</span>
          </h1>
          <p className="text-[18px] leading-[28px] font-normal text-[#898989] tracking-normal">
            Découvrez comment nous structurons le développement de votre solution CRM & IA en phases progressives et maîtrisées.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#004D2D] text-white rounded-md text-xs text-center font-medium border border-[#3ECF8E]/30 hover:bg-[#006139] hover:border-[#3ECF8E] transition-all duration-200 ease-out outline-none cursor-pointer">
            Voir le devis complet
          </button>
          <button 
            onClick={onNavigateToContact}
            className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#181818] text-[#FAFAFA] rounded-md text-xs text-center font-medium border border-[#262626] hover:border-[#404040] transition-all duration-200 ease-out outline-none cursor-pointer">
            Discuter du projet
          </button>
        </div>
      </div>

      {/* Phases Tabs */}
      <div className="grid grid-cols-12 gap-6">
        
        {/* Tab Navigation - Left Side */}
        <div className="col-span-3 space-y-2">
          {phases.map((phase, index) => (
            <button
              key={phase.phase}
              onClick={() => setActiveTab(index)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all rounded-lg ${
                activeTab === index
                  ? 'bg-[#262626] text-[#FAFAFA] border-l-2 border-[#3ECF8E]'
                  : 'text-[#71717A] hover:text-[#A1A1AA] hover:bg-[#262626]/50'
              }`}
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className={`flex-shrink-0 ${
                activeTab === index ? '' : 'opacity-60'
              }`}>
                {phase.icon}
              </div>
              <div className="flex-1 text-left">
                <div>{phase.name}</div>
                {phase.price && (
                  <div className={`text-xs mt-1 ${activeTab === index ? 'text-[#3ECF8E]' : 'text-[#71717A]'}`}>
                    {phase.price.toLocaleString('fr-FR')}€
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content - Right Side */}
        <div className="col-span-9">
          {phases.map((phase, index) => (
            <div
              key={phase.phase}
              className={`${activeTab === index ? 'block' : 'hidden'}`}
            >
              <Card className="border border-[#262626] bg-[#171717] rounded-xl">
                <CardHeader className="bg-[#262626] border-b border-[#262626]">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        {React.cloneElement(phase.icon as React.ReactElement, { className: "w-6 h-6 text-black" })}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-[#FAFAFA]" style={{ fontFamily: theme.fonts.primary }}>
                          {phase.phase}: {phase.name}
                        </CardTitle>
                        <div className="flex items-center gap-4 mt-2 text-sm text-[#A1A1AA]">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {phase.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Package className="w-4 h-4" />
                            {phase.details.length} livrables
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      {phase.price ? (
                        <div>
                          <div className="text-[24px] font-bold text-[#3ECF8E]">
                            {phase.price.toLocaleString('fr-FR')}€
                          </div>
                          <div className="text-sm text-[#71717A] mt-1">HT</div>
                        </div>
                      ) : (
                        <div className="text-lg text-[#71717A]">
                          Budget à définir
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-[#FAFAFA] mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#3ECF8E]" />
                        Livrables inclus
                      </h4>
                      <ul className="space-y-3">
                        {phase.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#A1A1AA]">
                            <span className="text-[#3ECF8E] mt-0.5 text-lg">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#FAFAFA] mb-4 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-[#3ECF8E]" />
                        Technologies utilisées
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {phase.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-[#3ECF8E]/20 text-[#3ECF8E] rounded-md text-xs font-medium border border-[#3ECF8E]/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {!phase.price && (
                        <div className="mt-6 p-4 bg-[#3ECF8E]/10 border border-[#3ECF8E]/30 rounded-lg">
                          <p className="text-sm text-[#3ECF8E]">
                            <strong>Note:</strong> {phase.phase === 'Phase 5' 
                              ? 'Le budget sera défini après analyse des solutions spécifiques à implémenter et des technologies IA disponibles au moment du développement.'
                              : 'Le budget sera défini après analyse des solutions spécifiques à implémenter.'
                            }
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Services complémentaires */}
      <Card className="border border-[#262626] bg-[#171717] rounded-xl">
        <CardHeader>
          <CardTitle className="text-[#FAFAFA]" style={{ fontFamily: theme.fonts.primary }}>
            Services complémentaires
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {additionalServices.map((service) => (
              <div key={service.name} className="p-4 bg-[#1F1F1F] rounded-lg border border-[#262626]">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5 text-[#3ECF8E]" })}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#FAFAFA]">{service.name}</h4>
                    <p className="text-sm text-[#898989] mt-1">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Récapitulatif */}
      <Card className="border border-[#262626] bg-[#171717] rounded-xl">
        <CardHeader>
          <CardTitle className="text-[#FAFAFA] flex items-center gap-2 text-lg" style={{ fontFamily: theme.fonts.primary }}>
            <FileText className="w-5 h-5 text-[#3ECF8E]" />
            Récapitulatif du devis
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-4">
            <div className="space-y-2">
              {/* Détail par phase */}
              {phases.map((phase, index) => (
                <div key={phase.phase} className="flex justify-between items-center py-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#FAFAFA]">{phase.phase}: {phase.name}</span>
                    {!phase.price && <span className="text-xs text-[#71717A]">(à définir)</span>}
                  </div>
                  <span className={`text-sm font-medium ${phase.price ? 'text-[#FAFAFA]' : 'text-[#71717A]'}`}>
                    {phase.price ? `${phase.price.toLocaleString('fr-FR')}€` : '-'}
                  </span>
                </div>
              ))}
              
              <div className="pt-3 mt-3 border-t border-[#262626]">
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-[#FAFAFA]">Total phases définies</span>
                  <span className="text-base font-semibold text-[#3ECF8E]">{totalBudget.toLocaleString('fr-FR')}€</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-[#1F1F1F] border border-[#262626] rounded-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-[#3ECF8E]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#FAFAFA] mb-1">Approche recommandée</p>
                  <p className="text-xs text-[#898989] leading-relaxed">
                    Développement par phases avec validation à chaque étape. Paiement échelonné selon l'avancement pour s'adapter à vos retours et à l'évolution des technologies IA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center mt-8 mb-16">
        <p className="text-[#A1A1AA] mb-4">
          Ce devis est valable 30 jours. Les prix peuvent évoluer selon la complexité finale des intégrations.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={onNavigateToContact}
            className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#004D2D] text-white rounded-md text-xs text-center font-medium border border-[#3ECF8E]/30 hover:bg-[#006139] hover:border-[#3ECF8E] transition-all duration-200 ease-out outline-none cursor-pointer">
            Valider le devis
          </button>
          <button 
            onClick={onNavigateToContact}
            className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#181818] text-[#FAFAFA] rounded-md text-xs text-center font-medium border border-[#262626] hover:border-[#404040] transition-all duration-200 ease-out outline-none cursor-pointer">
            Discuter du projet
          </button>
        </div>
      </div>
    </div>
  );
}