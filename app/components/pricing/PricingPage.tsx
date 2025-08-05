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
      'Configuration serveur et infrastructure cloud',
      'Implémentation base de données PostgreSQL sécurisée',
      'Développement API REST complète',
      'Interface web/mobile responsive',
      'Système d\'authentification et gestion des accès',
      'Module de gestion prospects/clients',
      'Système de notes et historique',
      'Import/export des données (CSV, Excel)',
      'Tests et mise en production'
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
      'Intégration LinkedIn Sales Navigator / PhantomBuster',
      'Scraping automatique des profils LinkedIn ciblés',
      'Enrichissement automatique des contacts (email, téléphone)',
      'Intégration SendGrid/Brevo pour emailing professionnel',
      'Système de campagnes d\'emailing séquencées',
      'Templates personnalisables avec variables dynamiques',
      'Tracking ouvertures, clics et conversions',
      'Gestion automatique des désabonnements',
      'Tableau de bord analytics des campagnes',
      'Import en masse des contacts depuis CSV/Excel'
    ],
    technologies: ['LinkedIn API', 'SendGrid/Brevo', 'Webhooks', 'Analytics']
  },
  {
    phase: 'Phase 3',
    name: 'Géolocalisation & Tournées',
    duration: '2 semaines',
    price: 1400,
    icon: <MapPin className="w-5 h-5" />,
    details: [
      'Intégration complète Google Maps API',
      'Géolocalisation en temps réel des commerciaux',
      'Algorithme d\'optimisation des trajets (TSP)',
      'Calcul automatique des itinéraires les plus courts',
      'Planification par zones géographiques',
      'Gestion des priorités clients (urgences, VIP)',
      'Estimation temps de trajet et coûts carburant',
      'Visualisation des tournées sur carte interactive',
      'Historique des déplacements et statistiques',
      'Export des tournées optimisées (PDF, Excel)'
    ],
    technologies: [`Google Maps API`, `Algorithmes d'optimisation`, 'Geolocalisation']
  },
  {
    phase: 'Phase 4',
    name: 'Assistant conversationnel',
    duration: '2-4 semaines',
    price: 2700,
    icon: <Bot className="w-5 h-5" />,
    details: [
      'Intégration WhatsApp Business API officielle',
      'Bot IA conversationnel avec compréhension du contexte',
      'Transcription automatique des notes vocales (Whisper)',
      'Extraction intelligente des informations clés',
      'Mise à jour automatique du CRM depuis WhatsApp',
      'Système de relances automatiques programmables',
      'Génération de comptes-rendus par GPT-4',
      'Détection des opportunités commerciales',
      'Templates de messages personnalisés',
      'Synchronisation bidirectionnelle CRM ↔ WhatsApp',
      'Historique complet des conversations'
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
      'Intégration Twilio pour téléphonie cloud',
      'Agent vocal IA avec voix naturelle (ElevenLabs)',
      'Compréhension du langage naturel en temps réel',
      'Gestion des conversations complexes multi-tours',
      'Qualification automatique des prospects (BANT)',
      'Prise de rendez-vous avec synchronisation agenda',
      'Détection des émotions et adaptation du discours',
      'Enregistrement et transcription de tous les appels',
      'Reporting détaillé (durée, sentiment, conversion)',
      'Transfert intelligent vers commercial si nécessaire',
      'Campagnes d\'appels sortants automatisées',
      'Conformité RGPD et consentement automatique'
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
  onNavigateToRoadmap?: () => void;
}

export default function PricingPage({ onNavigateToContact, onNavigateToRoadmap }: PricingPageProps = {}) {
  const [activeTab, setActiveTab] = useState(0);
  const totalBudget = phases.reduce((acc, phase) => acc + (phase.price || 0), 0);
  const estimatedTotal = totalBudget + 8000; // Estimation pour phases non définies

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-start justify-between mt-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-[36px] leading-[40px] font-normal mb-4" style={{ fontFamily: theme.fonts.primary }}>
            <span className="text-foreground-secondary">Détail des</span> <span className="text-foreground">phases de développement</span>
          </h1>
          <p className="text-[18px] leading-[28px] font-normal text-foreground-quaternary tracking-normal">
            Découvrez comment nous structurons le développement de votre solution CRM & IA en phases progressives et maîtrisées.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onNavigateToRoadmap}
            className="btn-supabase h-[26px]">
            Roadmap
          </button>
          <button 
            onClick={onNavigateToContact}
            className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-secondary text-foreground rounded-md text-xs text-center font-medium border border-border hover:border-neutral-700 transition-all duration-200 ease-out outline-none cursor-pointer">
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
                  ? 'bg-secondary text-foreground border-l-2 border-primary'
                  : 'text-foreground-tertiary hover:text-foreground-secondary hover:bg-secondary/50'
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
                  <div className={`text-xs mt-1 ${activeTab === index ? 'text-[#3ECF8E]' : 'text-foreground-tertiary'}`}>
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
              <Card className="border border-border bg-card rounded-xl">
                <CardHeader className="bg-secondary border-b border-border">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        {React.cloneElement(phase.icon as React.ReactElement, { className: "w-6 h-6 text-black" })}
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground" style={{ fontFamily: theme.fonts.primary }}>
                          {phase.phase}: {phase.name}
                        </CardTitle>
                        <div className="flex items-center gap-4 mt-2 text-sm text-foreground-tertiary">
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
                          <div className="text-sm text-foreground-tertiary mt-1">HT</div>
                        </div>
                      ) : (
                        <div className="text-lg text-foreground-tertiary">
                          Budget à définir
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#3ECF8E]" />
                        Livrables inclus
                      </h4>
                      <ul className="space-y-1.5">
                        {phase.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-foreground-tertiary leading-normal">
                            <span className="text-[#3ECF8E] flex-shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
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
      <Card className="border border-border bg-card rounded-xl">
        <CardHeader>
          <CardTitle className="text-foreground" style={{ fontFamily: theme.fonts.primary }}>
            Services complémentaires
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {additionalServices.map((service) => (
              <div key={service.name} className="p-4 bg-secondary rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    {React.cloneElement(service.icon as React.ReactElement, { className: "w-5 h-5 text-[#3ECF8E]" })}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{service.name}</h4>
                    <p className="text-sm text-foreground-quaternary mt-1">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Récapitulatif */}
      <Card className="border border-border bg-card rounded-xl">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2 text-lg" style={{ fontFamily: theme.fonts.primary }}>
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
                    <span className="text-sm text-foreground">{phase.phase}: {phase.name}</span>
                    {!phase.price && <span className="text-xs text-foreground-tertiary">(à définir)</span>}
                  </div>
                  <span className={`text-sm font-medium ${phase.price ? 'text-foreground' : 'text-foreground-tertiary'}`}>
                    {phase.price ? `${phase.price.toLocaleString('fr-FR')}€` : '-'}
                  </span>
                </div>
              ))}
              
              <div className="pt-3 mt-3 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-base font-medium text-foreground">Total phases définies</span>
                  <span className="text-base font-semibold text-[#3ECF8E]">{totalBudget.toLocaleString('fr-FR')}€</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-secondary border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-0.5">
                  <Zap className="w-4 h-4 text-[#3ECF8E]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Approche recommandée</p>
                  <p className="text-xs text-foreground-quaternary leading-relaxed">
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
        <p className="text-foreground-tertiary mb-4">
          Ce devis est valable 30 jours. Les prix peuvent évoluer selon la complexité finale des intégrations.
        </p>
        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={onNavigateToContact}
            className="btn-supabase h-[26px]">
            Valider le devis
          </button>
          <button 
            onClick={onNavigateToContact}
            className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-secondary text-foreground rounded-md text-xs text-center font-medium border border-border hover:border-neutral-700 transition-all duration-200 ease-out outline-none cursor-pointer">
            Discuter du projet
          </button>
        </div>
      </div>
    </div>
  );
}