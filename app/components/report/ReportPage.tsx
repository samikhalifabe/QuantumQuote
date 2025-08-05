"use client"

import React, { useState } from "react"
import { Calendar, Clock, Users, CheckCircle2, Target, TrendingUp, Euro, AlertTriangle, FileText, ArrowRight, CheckSquare, Lightbulb, BarChart3, Package } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { meetingReport } from "@/app/data/reportData"
import { theme } from "@/app/constants/theme"

interface TabOption {
  id: string
  label: string
  icon: React.ReactNode
}

const tabs: TabOption[] = [
  { id: 'overview', label: 'Vue d\'ensemble', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'needs', label: 'Besoins', icon: <CheckSquare className="w-4 h-4" /> },
  { id: 'analysis', label: 'Analyse', icon: <Lightbulb className="w-4 h-4" /> },
  { id: 'budget', label: 'Approche budgétaire', icon: <Euro className="w-4 h-4" /> },
  { id: 'roadmap', label: 'Recommandations', icon: <Target className="w-4 h-4" /> },
  { id: 'next', label: 'Prochaines étapes', icon: <ArrowRight className="w-4 h-4" /> }
]

export function ReportPage() {
  const [activeTab, setActiveTab] = useState('overview')
  
  const kpis = [
    { label: "Besoins prioritaires", value: meetingReport.identifiedNeeds.high.length, icon: <Target className="w-5 h-5" /> },
    { label: "Solutions proposées", value: meetingReport.keyPoints.proposedSolutions.length, icon: <CheckCircle2 className="w-5 h-5" /> },
    { label: "Phases planifiées", value: meetingReport.recommendations.length, icon: <Package className="w-5 h-5" /> },
    { label: "Actions immédiates", value: meetingReport.nextSteps.immediate.length, icon: <ArrowRight className="w-5 h-5" /> }
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto mb-16">
      {/* Header Section */}
      <div className="flex items-start justify-between mt-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-[36px] leading-[40px] font-normal mb-4" style={{ fontFamily: theme.fonts.primary }}>
            <span className="text-foreground">Compte-rendu</span> <span className="text-foreground-secondary">Projet CRM & IA</span>
          </h1>
          <p className="text-[18px] leading-[28px] font-normal text-foreground-quaternary tracking-normal">
            Analyse complète des besoins identifiés et plan d'action pour votre système CRM intelligent.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-green-800 text-white rounded-md text-xs text-center font-medium border border-brand/30 hover:bg-green-900 hover:border-brand transition-all duration-200 ease-out outline-none cursor-pointer">
            Exporter PDF
          </button>
          <button className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-secondary text-foreground rounded-md text-xs text-center font-medium border border-border hover:border-neutral-700 transition-all duration-200 ease-out outline-none cursor-pointer">
            Partager
          </button>
        </div>
      </div>

      {/* Project Info Card */}
      <Card className="border border-border bg-card rounded-xl">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: theme.fonts.primary }}>
                Réunion avec Mathieu - Définition des besoins
              </h2>
              <div className="flex items-center gap-6 text-sm text-foreground-tertiary">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  4 décembre 2024
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {meetingReport.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {meetingReport.participants.length} participants
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {kpis.slice(0, 2).map((kpi, index) => (
                <div key={index} className="text-center p-4 bg-secondary rounded-lg border border-border">
                  <div className="flex justify-center mb-2">
                    {React.cloneElement(kpi.icon as React.ReactElement, { className: "w-5 h-5 text-brand" })}
                  </div>
                  <div className="text-2xl font-bold text-brand">{kpi.value}</div>
                  <div className="text-xs text-foreground-quaternary mt-1">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 relative ${
              activeTab === tab.id
                ? 'text-foreground'
                : 'text-foreground-quaternary hover:text-foreground-tertiary'
            }`}
            style={{ fontFamily: theme.fonts.primary }}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {/* Active indicator line */}
            <div 
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-all duration-200 ${
                activeTab === tab.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <Card className="border border-border bg-card rounded-xl">
              <CardHeader className="bg-secondary border-b border-border">
                <CardTitle className="text-foreground flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <FileText className="w-5 h-5 text-brand" />
                  Résumé exécutif
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-foreground-tertiary leading-relaxed" style={{ fontFamily: theme.fonts.primary }}>
                  {meetingReport.executiveSummary}
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Needs Tab */}
        {activeTab === 'needs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* High Priority */}
            <Card className="border border-border bg-card rounded-xl">
              <CardHeader className="bg-secondary border-b border-border">
                <CardTitle className="text-foreground flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Priorité haute
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border">
                    <CheckCircle2 className="w-5 h-5 text-brand mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">Base de données centralisée</h4>
                      <p className="text-sm text-foreground-quaternary">Système de gestion centralisée des prospects et clients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border">
                    <CheckCircle2 className="w-5 h-5 text-brand mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">CRM mobile</h4>
                      <p className="text-sm text-foreground-quaternary">Application mobile pour gérer les clients sur le terrain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border">
                    <CheckCircle2 className="w-5 h-5 text-brand mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-1">Envoi d'emails</h4>
                      <p className="text-sm text-foreground-quaternary">Système d'emailing intégré pour les campagnes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medium Priority */}
            <Card className="border border-border bg-card rounded-xl">
              <CardHeader className="bg-secondary border-b border-border">
                <CardTitle className="text-foreground flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Priorité moyenne
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {meetingReport.identifiedNeeds.medium.map((need) => (
                    <div key={need.id} className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border">
                      <CheckCircle2 className="w-5 h-5 text-brand mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">{need.task}</h4>
                        <p className="text-sm text-foreground-quaternary">{need.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Analysis Tab */}
        {activeTab === 'analysis' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border border-border bg-card rounded-xl">
                <CardHeader className="bg-secondary border-b border-border">
                  <CardTitle className="text-foreground flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                    <AlertTriangle className="w-5 h-5 text-brand" />
                    Problématiques identifiées
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    {meetingReport.keyPoints.currentIssues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground-tertiary">
                        <span className="text-brand mt-0.5">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-border bg-card rounded-xl">
                <CardHeader className="bg-secondary border-b border-border">
                  <CardTitle className="text-foreground flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                    <Lightbulb className="w-5 h-5 text-brand" />
                    Solutions proposées
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    {meetingReport.keyPoints.proposedSolutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground-tertiary">
                        <span className="text-brand mt-0.5">•</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

          </div>
        )}

        {/* Budget Tab */}
        {activeTab === 'budget' && (
          <div className="space-y-6">
            <Card className="border border-border bg-card rounded-xl">
              <CardHeader className="bg-secondary border-b border-border">
                <CardTitle className="text-foreground flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <Euro className="w-5 h-5 text-primary" />
                  Approche budgétaire
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Stratégie</h4>
                    <p className="text-foreground-tertiary leading-relaxed">{meetingReport.budgetApproach.strategy}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Avantages</h4>
                    <ul className="space-y-3">
                      {meetingReport.budgetApproach.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-foreground-tertiary">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Roadmap Tab */}
        {activeTab === 'roadmap' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {meetingReport.recommendations.map((phase) => (
              <Card key={phase.id} className="border border-border bg-card rounded-xl">
                <CardHeader className="bg-secondary border-b border-border">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-foreground flex items-center gap-3" style={{ fontFamily: theme.fonts.primary }}>
                      {phase.name}
                      <span className="text-sm text-foreground-quaternary font-normal">• {phase.duration}</span>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-foreground-tertiary mb-4">{phase.description}</p>
                  <div>
                    <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                      <Package className="w-4 h-4 text-brand" />
                      Livrables
                    </h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground-tertiary">
                          <CheckCircle2 className="w-4 h-4 text-brand" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Next Steps Tab */}
        {activeTab === 'next' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border border-border bg-card rounded-xl">
              <CardHeader className="bg-secondary border-b border-border">
                <CardTitle className="text-foreground flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <ArrowRight className="w-5 h-5 text-brand" />
                  Actions immédiates
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {meetingReport.nextSteps.immediate.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-secondary rounded-lg border border-border">
                      <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span className="text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-card rounded-xl">
              <CardHeader className="bg-secondary border-b border-border">
                <CardTitle className="text-foreground flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <FileText className="w-5 h-5 text-brand" />
                  Livrables attendus
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {meetingReport.nextSteps.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3 text-foreground-tertiary">
                      <CheckCircle2 className="w-4 h-4 text-brand mt-0.5" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}