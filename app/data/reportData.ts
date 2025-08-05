import { MeetingReport, ChecklistItem, Phase } from "@/app/types"

const highPriorityNeeds: ChecklistItem[] = [
  {
    id: "need-1",
    task: "CRM mobile - Accès facile depuis téléphone",
    completed: false,
    priority: "high",
    description: "Interface mobile optimisée pour consultation en déplacement"
  },
  {
    id: "need-2", 
    task: "Assistant WhatsApp - Notes vocales automatiques",
    completed: false,
    priority: "high",
    description: "Bot connecté au CRM pour enregistrement automatique des échanges"
  },
  {
    id: "need-3",
    task: "Relances automatiques - Système de rappels programmés",
    completed: false,
    priority: "high",
    description: "Planification automatique des relances clients"
  },
  {
    id: "need-4",
    task: "Base de données centralisée - Tous les prospects/clients",
    completed: false,
    priority: "high",
    description: "Centralisation des informations clients et prospects"
  }
]

const mediumPriorityNeeds: ChecklistItem[] = [
  {
    id: "need-5",
    task: "Intégration Google Maps - Géolocalisation des tournées",
    completed: false,
    priority: "medium",
    description: "Calcul automatique des itinéraires optimaux"
  },
  {
    id: "need-6",
    task: "Système de rapports - Comptes-rendus automatiques",
    completed: false,
    priority: "medium",
    description: "Génération automatique de rapports de visite"
  },
  {
    id: "need-7",
    task: "Gestion des urgences - Intégration des demandes imprévues",
    completed: false,
    priority: "medium",
    description: "Système de priorisation et réorganisation des tournées"
  }
]

const futureNeeds: ChecklistItem[] = [
  {
    id: "need-8",
    task: "Assistant vocal IA - Appels téléphoniques automatisés",
    completed: false,
    priority: "low",
    description: "Bot vocal pour relances téléphoniques automatiques"
  },
  {
    id: "need-9",
    task: "Campagnes emailing - Ciblage automatique",
    completed: false,
    priority: "low",
    description: "Système de campagnes email personnalisées"
  },
  {
    id: "need-10",
    task: "Planning intelligent - Optimisation par zones géographiques",
    completed: false,
    priority: "low",
    description: "IA pour optimisation avancée des tournées commerciales"
  }
]

const recommendedPhases: Phase[] = [
  {
    id: "phase-1",
    name: "CRM de base",
    duration: "4-6 semaines",
    description: "Mise en place de la structure fondamentale avec initialisation complète du projet",
    deliverables: [
      "Configuration serveur et infrastructure cloud",
      "Implémentation base de données PostgreSQL sécurisée",
      "Développement API REST complète",
      "Interface web/mobile responsive",
      "Système d'authentification et gestion des accès",
      "Module de gestion prospects/clients",
      "Système de notes et historique",
      "Import/export des données (CSV, Excel)",
      "Tests et mise en production"
    ]
  },
  {
    id: "phase-2",
    name: "Emailing & Prospection",
    duration: "2-4 semaines", 
    description: "Intégration complète des outils de prospection et système d'emailing professionnel",
    deliverables: [
      "Intégration LinkedIn Sales Navigator / PhantomBuster",
      "Scraping automatique des profils LinkedIn ciblés",
      "Enrichissement automatique des contacts (email, téléphone)",
      "Intégration SendGrid/Brevo pour emailing professionnel",
      "Système de campagnes d'emailing séquencées",
      "Templates personnalisables avec variables dynamiques",
      "Tracking ouvertures, clics et conversions",
      "Gestion automatique des désabonnements",
      "Tableau de bord analytics des campagnes",
      "Import en masse des contacts depuis CSV/Excel"
    ]
  },
  {
    id: "phase-3",
    name: "Géolocalisation & Tournées",
    duration: "2 semaines",
    description: "Système intelligent de géolocalisation et planification des tournées commerciales",
    deliverables: [
      "Intégration complète Google Maps API",
      "Géolocalisation en temps réel des commerciaux",
      "Algorithme d'optimisation des trajets (TSP)",
      "Calcul automatique des itinéraires les plus courts",
      "Planification par zones géographiques",
      "Gestion des priorités clients (urgences, VIP)",
      "Estimation temps de trajet et coûts carburant",
      "Visualisation des tournées sur carte interactive",
      "Historique des déplacements et statistiques",
      "Export des tournées optimisées (PDF, Excel)"
    ]
  },
  {
    id: "phase-4",
    name: "Assistant conversationnel", 
    duration: "2-4 semaines",
    description: "Assistant IA WhatsApp pour communication client automatisée et intelligente",
    deliverables: [
      "Intégration WhatsApp Business API officielle",
      "Bot IA conversationnel avec compréhension du contexte",
      "Transcription automatique des notes vocales (Whisper)",
      "Extraction intelligente des informations clés",
      "Mise à jour automatique du CRM depuis WhatsApp",
      "Système de relances automatiques programmables",
      "Génération de comptes-rendus par GPT-4",
      "Détection des opportunités commerciales",
      "Templates de messages personnalisés",
      "Synchronisation bidirectionnelle CRM ↔ WhatsApp",
      "Historique complet des conversations"
    ]
  },
  {
    id: "phase-5",
    name: "Assistant Vocal IA",
    duration: "À définir",
    description: "Agent IA vocal autonome pour appels téléphoniques et qualification avancée",
    deliverables: [
      "Intégration Twilio pour téléphonie cloud",
      "Agent vocal IA avec voix naturelle (ElevenLabs)",
      "Compréhension du langage naturel en temps réel",
      "Gestion des conversations complexes multi-tours",
      "Qualification automatique des prospects (BANT)",
      "Prise de rendez-vous avec synchronisation agenda",
      "Détection des émotions et adaptation du discours",
      "Enregistrement et transcription de tous les appels",
      "Reporting détaillé (durée, sentiment, conversion)",
      "Transfert intelligent vers commercial si nécessaire",
      "Campagnes d'appels sortants automatisées",
      "Conformité RGPD et consentement automatique"
    ]
  }
]

export const meetingReport: MeetingReport = {
  id: "report-mathieu-1",
  title: "COMPTE RENDU DE RÉUNION - PROJET CRM & IA",
  date: "2024-12-04",
  duration: "~36 minutes",
  participants: ["Mathieu (Client)", "Eric (Commercial)", "Consultant IA"],
  executiveSummary: "Réunion de définition des besoins pour un système CRM intégré avec intelligence artificielle. Les clients Mathieu et Eric cherchent à automatiser leurs tâches répétitives de prospection, suivi client et planification commerciale.",
  identifiedNeeds: {
    high: highPriorityNeeds,
    medium: mediumPriorityNeeds,
    future: futureNeeds
  },
  keyPoints: {
    currentIssues: [
      "Gestion manuelle de 200+ prospects",
      "Oublis de relances (3-4 fois par client)",
      "Kilomètres perdus (déplacements non optimisés)",
      "Pas de traçabilité des échanges clients",
      "Planification des tournées chronophage"
    ],
    proposedSolutions: [
      "Assistant IA via WhatsApp connecté au CRM",
      "Relances automatiques programmables",
      "Intégration Google Maps pour optimisation",
      "Base de données centralisée et synchronisée",
      "Approche par phases pour budget maîtrisé"
    ]
  },
  budgetApproach: {
    strategy: "Développement par étapes",
    benefits: [
      "Évite les coûts astronomiques",
      "ROI rapide sur chaque phase", 
      "Adaptation aux évolutions IA (x2 performance/3 mois)",
      "Comparé à 2 employés (50-60k€/an) → Très rentable"
    ],
    comparison: "Économie significative par rapport au recrutement de 2 employés"
  },
  analysis: {
    strengths: [
      "Clients motivés et ouverts à l'innovation",
      "Problématiques clairement identifiées",
      "Volume d'activité justifiant l'automatisation",
      "ROI évident (économie employés)"
    ],
    challenges: [
      "Intégration multiple systèmes (WhatsApp, Maps, CRM)",
      "Gestion des imprévus (urgences clients)",
      "Formation utilisateurs aux nouveaux outils",
      "Sécurité des données clients"
    ]
  },
  recommendations: recommendedPhases,
  nextSteps: {
    immediate: [
      "Analyse technique approfondie des systèmes existants",
      "Proposition détaillée avec coûts par phase",
      "Définition des priorités avec les clients", 
      "Planning de développement par sprints"
    ],
    deliverables: [
      "Plan d'implémentation détaillé",
      "Budgets par phase",
      "Timeline de développement",
      "Spécifications techniques"
    ]
  },
  opportunities: [
    "Différenciation concurrentielle forte",
    "Scalabilité (autres commerciaux)",
    "Évolutivité avec les progrès IA",
    "Retour d'expérience pour d'autres clients"
  ],
  status: "En cours d'analyse",
  nextMeeting: "À définir après remise des propositions"
}