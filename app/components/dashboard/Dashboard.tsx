"use client"

import { DashboardHeader } from "./DashboardHeader"
import { PhasesWidget } from "./PhasesWidget"
import { MeetingCard } from "../cards/MeetingCard"
import { InfoCard } from "../cards/InfoCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  Users, 
  CheckCircle2, 
  ArrowUpRight, 
  MoreHorizontal,
  Layers,
  Target,
  Calendar,
  TrendingUp,
  Euro,
  Clock,
  Zap,
  Phone,
  MapPin,
  Mail,
  Database
} from "lucide-react"
import { roadmapItems, upcomingMeetings, projectInfos } from "@/app/data/mockData"
import { theme } from "@/app/constants/theme"
import { formatPrice, calculateTotalPrice } from "@/app/utils/formatting"

interface DashboardProps {
  onNavigateToRoadmap?: (phaseIndex: number) => void;
  onNavigateToPricing?: () => void;
  onNavigateToReport?: () => void;
}

export function Dashboard({ onNavigateToRoadmap, onNavigateToPricing, onNavigateToReport }: DashboardProps) {
  const totalPrice = calculateTotalPrice(roadmapItems)
  const definedBudget = 6800 // Phase 1 + 3 + 4
  const estimatedTotal = definedBudget + 8000 // Estimation phases 2 et 5

  return (
    <div className="space-y-6 mt-8">
      <DashboardHeader />

      <div className="grid grid-cols-12 gap-6">
        {/* Main Stats */}
        <div className="col-span-8 space-y-6">
          {/* Primary Card - ROI Highlight */}
          <div className="animated-border-card overflow-hidden">
            <div className="p-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#3ECF8E]/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#3ECF8E]" />
                  </div>
                </div>
                <div 
                  className="text-4xl font-bold mb-2 text-foreground" 
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  94% d'économie
                </div>
                <div 
                  className="text-foreground-secondary" 
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  vs 2 employés (100-120k€/an)
                </div>
                <div className="mt-2 text-sm text-foreground-tertiary">
                  ROI en moins de 2 mois
                </div>
                <div className="mt-3 text-xs text-foreground-quaternary leading-relaxed max-w-sm">
                  Investissement unique contre 120 000€/an pour 2 employés. 
                  Solution automatisée 24/7 sans congés ni charges sociales.
                </div>
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={onNavigateToPricing}
                    className="gap-2 bg-secondary hover:bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30 hover:border-[#3ECF8E]"
                    style={{ fontFamily: theme.fonts.primary }}
                  >
                    Tarification
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Problématiques actuelles - Mise en avant */}
          <NeedsAnalysis onNavigateToReport={onNavigateToReport} />

          {/* Phases du projet */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: theme.fonts.primary }}>
                Phases du projet
              </h3>
              <button 
                onClick={() => onNavigateToRoadmap && onNavigateToRoadmap(0)}
                className="btn-supabase h-[26px]"
              >
                Roadmap
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <BenefitCard
                icon={Database}
                title="CRM de base"
                description="Base de données centralisée et interface mobile"
                status="Phase 1"
              />
              <BenefitCard
                icon={Mail}
                title="Emailing & Prospection"
                description="Campagnes automatisées et intégration LinkedIn"
                status="Phase 2"
              />
              <BenefitCard
                icon={MapPin}
                title="Optimisation tournées"
                description="Réduction de 30% des km avec Google Maps"
                status="Phase 3"
              />
              <BenefitCard
                icon={Zap}
                title="Automatisation WhatsApp"
                description="Notes vocales transcrites et relances automatiques"
                status="Phase 4"
              />
              <BenefitCard
                icon={Phone}
                title="Assistant vocal IA"
                description="Appels automatiques pour relances et prise de RDV"
                status="Phase 5"
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-4 space-y-6">
          <PhasesWidget onPhaseClick={onNavigateToRoadmap} />

          {/* Technologies Stack */}
          <div className="bg-card rounded-xl border border-border">
            <div className="p-6">
              <h2 
                className="text-lg font-semibold text-foreground mb-4" 
                style={{ fontFamily: theme.fonts.primary }}
              >
                Technologies clés
              </h2>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'PostgreSQL', 'WhatsApp API', 'GPT-4', 'Google Maps', 'Twilio'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#3ECF8E]/10 text-[#3ECF8E] dark:bg-[#3ECF8E]/20 rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="bg-card rounded-xl border border-border">
            <div className="p-6">
              <h2 
                className="text-lg font-semibold text-foreground mb-4" 
                style={{ fontFamily: theme.fonts.primary }}
              >
                Informations Projet
              </h2>
              <div className="space-y-3">
                {projectInfos.map((info) => (
                  <InfoCard key={info.id} info={info} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatsCard({ icon: Icon, value, label, trend }: { 
  icon: React.ComponentType<{ className?: string }>, 
  value: string, 
  label: string,
  trend?: string
}) {
  return (
    <Card className="border border-border bg-card rounded-xl">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-full flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#3ECF8E]" />
          </div>
          {trend && (
            <span className="text-xs text-[#3ECF8E] font-medium">{trend}</span>
          )}
        </div>
        <div className="mt-4">
          <div 
            className="text-2xl font-bold text-foreground" 
            style={{ fontFamily: theme.fonts.primary }}
          >
            {value}
          </div>
          <div 
            className="text-foreground-tertiary text-sm mt-1" 
            style={{ fontFamily: theme.fonts.primary }}
          >
            {label}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function BenefitCard({ icon: Icon, title, description, status }: {
  icon: React.ComponentType<{ className?: string }>,
  title: string,
  description: string,
  status: string
}) {
  return (
    <Card className="border border-border bg-card dark:bg-card rounded-xl hover:border-[#3ECF8E]/30 transition-colors">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 bg-[#3ECF8E]/10 dark:bg-[#3ECF8E]/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 text-[#3ECF8E]" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground text-sm mb-1" style={{ fontFamily: theme.fonts.primary }}>
              {title}
            </h3>
            <p className="text-xs text-foreground-secondary mb-2 leading-relaxed">{description}</p>
            <span className="text-xs text-foreground-quaternary bg-secondary dark:bg-secondary px-2 py-0.5 rounded">
              {status}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function PhasesProgress() {
  const phases = [
    { name: 'CRM de base', progress: 0, status: 'À venir' },
    { name: 'Emailing & Prospection', progress: 0, status: 'Planifié' },
    { name: 'Optimisation tournées', progress: 0, status: 'Planifié' },
    { name: 'Automatisation', progress: 0, status: 'Planifié' },
    { name: 'Assistant Vocal IA', progress: 0, status: 'Future' }
  ]

  return (
    <Card className="border border-border bg-card rounded-xl">
      <CardHeader className="pb-4">
        <CardTitle 
          className="text-lg font-semibold text-foreground" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          Progression du projet
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          {phases.map((phase, index) => (
            <div key={phase.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-medium text-foreground-tertiary">
                    {index + 1}
                  </div>
                  <span className="text-sm font-medium text-foreground">{phase.name}</span>
                </div>
                <span className="text-xs text-foreground-quaternary">{phase.status}</span>
              </div>
              <div className="ml-11">
                <div className="w-full bg-secondary rounded-full h-2">
                  <div 
                    className="bg-[#3ECF8E] h-2 rounded-full transition-all duration-300"
                    style={{ width: `${phase.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function NeedsAnalysis({ onNavigateToReport }: { onNavigateToReport?: () => void }) {
  const needs = [
    { 
      category: 'Gestion manuelle des prospects', 
      count: '1000+ contacts', 
      impact: 'high',
      description: 'Perte de temps considérable à gérer manuellement chaque prospect sans système centralisé'
    },
    { 
      category: 'Relances oubliées', 
      count: '70% de pertes', 
      impact: 'high',
      description: 'Oubli systématique de relancer après 3-4 visites, entraînant des pertes de ventes'
    },
    { 
      category: 'Kilomètres non optimisés', 
      count: '30% de km en trop', 
      impact: 'high',
      description: 'Tournées non optimisées causant des coûts de carburant et temps supplémentaires'
    },
    { 
      category: 'Absence de traçabilité', 
      count: 'Historique perdu', 
      impact: 'high',
      description: 'Échanges clients non documentés, impossibilité de suivre l\'évolution des relations'
    }
  ]

  return (
    <Card className="border border-border bg-card rounded-xl">
      <CardHeader className="pb-4 bg-secondary rounded-t-lg border-b border-border">
        <div className="flex items-center justify-between">
          <CardTitle 
            className="text-xl font-semibold flex items-center gap-2 text-foreground" 
            style={{ fontFamily: theme.fonts.primary }}
          >
            <Target className="w-6 h-6 text-[#3ECF8E]" />
            Problématiques identifiées
          </CardTitle>
          <button 
            onClick={onNavigateToReport}
            className="btn-supabase h-[26px]"
          >
            Compte-rendu
          </button>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 gap-4">
          {needs.map((need) => (
            <div key={need.category} className="p-5 bg-secondary rounded-lg border border-border hover:border-[#3ECF8E]/30 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-base font-semibold text-foreground">{need.category}</h4>
                <div className={`w-2.5 h-2.5 rounded-full ${
                  need.impact === 'high' ? 'bg-red-500/80' : 'bg-yellow-500/80'
                }`} />
              </div>
              <p className="text-sm text-[#3ECF8E] font-medium mb-2">{need.count}</p>
              <p className="text-xs text-foreground-secondary leading-relaxed">{need.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function QuickStat({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-foreground-tertiary">{label}</span>
      <span className={`text-lg font-semibold ${color}`}>{value}</span>
    </div>
  )
}