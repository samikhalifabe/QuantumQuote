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
    task: "Intégration Google Maps - Optimisation des tournées",
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
    description: "Mise en place de la structure fondamentale",
    deliverables: [
      "Base de données prospects/clients",
      "Interface mobile simple", 
      "Système de notes basique"
    ]
  },
  {
    id: "phase-2",
    name: "Emailing & Prospection",
    duration: "2-4 semaines", 
    description: "Intégration d'outils de prospection et système d'emailing",
    deliverables: [
      "Intégration outils de prospection LinkedIn",
      "Récupération automatique des contacts",
      "Connexion système d'emailing interne/externe",
      "Templates de campagnes personnalisées"
    ]
  },
  {
    id: "phase-3",
    name: "Optimisation",
    duration: "2 semaines",
    description: "Outils d'optimisation des tournées",
    deliverables: [
      "Intégration Google Maps",
      "Planification intelligente des tournées",
      "Système d'urgences"
    ]
  },
  {
    id: "phase-4",
    name: "Automatisation", 
    duration: "2-4 semaines",
    description: "Intégration des assistants automatisés",
    deliverables: [
      "Assistant WhatsApp intégré",
      "Relances automatiques",
      "Comptes-rendus automatisés"
    ]
  },
  {
    id: "phase-5",
    name: "Assistant Vocal IA",
    duration: "À définir",
    description: "Assistant vocal pour appels téléphoniques automatisés",
    deliverables: [
      "Bot vocal pour relances téléphoniques",
      "Prise de rendez-vous automatique",
      "Analytics avancés des appels"
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