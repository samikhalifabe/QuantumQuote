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
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-start justify-between mt-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-[36px] leading-[40px] font-normal mb-4" style={{ fontFamily: theme.fonts.primary }}>
            <span className="text-[#FAFAFA]">Compte-rendu</span> <span className="text-[#B4B4B4]">Projet CRM & IA</span>
          </h1>
          <p className="text-[18px] leading-[28px] font-normal text-[#898989] tracking-normal">
            Analyse complète des besoins identifiés et plan d'action pour votre système CRM intelligent.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#004D2D] text-white rounded-md text-xs text-center font-medium border border-[#3ECF8E]/30 hover:bg-[#006139] hover:border-[#3ECF8E] transition-all duration-200 ease-out outline-none cursor-pointer">
            Exporter PDF
          </button>
          <button className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#181818] text-[#FAFAFA] rounded-md text-xs text-center font-medium border border-[#262626] hover:border-[#404040] transition-all duration-200 ease-out outline-none cursor-pointer">
            Partager
          </button>
        </div>
      </div>

      {/* Project Info Card */}
      <Card className="border border-[#262626] bg-[#171717] rounded-xl">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#FAFAFA] mb-2" style={{ fontFamily: theme.fonts.primary }}>
                Réunion avec Mathieu - Définition des besoins
              </h2>
              <div className="flex items-center gap-6 text-sm text-[#A1A1AA]">
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
                <div key={index} className="text-center p-4 bg-[#1F1F1F] rounded-lg border border-[#262626]">
                  <div className="flex justify-center mb-2">
                    {React.cloneElement(kpi.icon as React.ReactElement, { className: "w-5 h-5 text-[#3ECF8E]" })}
                  </div>
                  <div className="text-2xl font-bold text-[#3ECF8E]">{kpi.value}</div>
                  <div className="text-xs text-[#71717A] mt-1">{kpi.label}</div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-[#262626]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all relative ${
              activeTab === tab.id
                ? 'text-[#FAFAFA] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#3ECF8E]'
                : 'text-[#71717A] hover:text-[#A1A1AA]'
            }`}
            style={{ fontFamily: theme.fonts.primary }}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <Card className="border border-[#262626] bg-[#171717] rounded-xl">
              <CardHeader className="bg-[#262626] border-b border-[#262626]">
                <CardTitle className="text-[#FAFAFA] flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <FileText className="w-5 h-5 text-[#3ECF8E]" />
                  Résumé exécutif
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-[#A1A1AA] leading-relaxed" style={{ fontFamily: theme.fonts.primary }}>
                  {meetingReport.executiveSummary}
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {kpis.map((kpi, index) => (
                <Card key={index} className="border border-[#262626] bg-[#171717] rounded-xl">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      {React.cloneElement(kpi.icon as React.ReactElement, { className: "w-6 h-6 text-[#3ECF8E]" })}
                    </div>
                    <div className="text-3xl font-bold text-[#FAFAFA] mb-2">{kpi.value}</div>
                    <div className="text-sm text-[#71717A]">{kpi.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Needs Tab */}
        {activeTab === 'needs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* High Priority */}
            <Card className="border border-[#262626] bg-[#171717] rounded-xl">
              <CardHeader className="bg-[#262626] border-b border-[#262626]">
                <CardTitle className="text-[#FAFAFA] flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Priorité haute
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3 p-4 bg-[#1F1F1F] rounded-lg border border-[#262626]">
                    <CheckCircle2 className="w-5 h-5 text-[#3ECF8E] mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#FAFAFA] mb-1">Base de données centralisée</h4>
                      <p className="text-sm text-[#71717A]">Système de gestion centralisée des prospects et clients</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[#1F1F1F] rounded-lg border border-[#262626]">
                    <CheckCircle2 className="w-5 h-5 text-[#3ECF8E] mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#FAFAFA] mb-1">CRM mobile</h4>
                      <p className="text-sm text-[#71717A]">Application mobile pour gérer les clients sur le terrain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-[#1F1F1F] rounded-lg border border-[#262626]">
                    <CheckCircle2 className="w-5 h-5 text-[#3ECF8E] mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-[#FAFAFA] mb-1">Envoi d'emails</h4>
                      <p className="text-sm text-[#71717A]">Système d'emailing intégré pour les campagnes</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medium Priority */}
            <Card className="border border-[#262626] bg-[#171717] rounded-xl">
              <CardHeader className="bg-[#262626] border-b border-[#262626]">
                <CardTitle className="text-[#FAFAFA] flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  Priorité moyenne
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {meetingReport.identifiedNeeds.high.slice(1).concat(meetingReport.identifiedNeeds.medium).map((need) => (
                    <div key={need.id} className="flex items-start gap-3 p-4 bg-[#1F1F1F] rounded-lg border border-[#262626]">
                      <CheckCircle2 className="w-5 h-5 text-[#3ECF8E] mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-medium text-[#FAFAFA] mb-1">{need.task}</h4>
                        <p className="text-sm text-[#71717A]">{need.description}</p>
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
              <Card className="border border-[#262626] bg-[#171717] rounded-xl">
                <CardHeader className="bg-[#262626] border-b border-[#262626]">
                  <CardTitle className="text-[#FAFAFA] flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                    <AlertTriangle className="w-5 h-5 text-[#3ECF8E]" />
                    Problématiques identifiées
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    {meetingReport.keyPoints.currentIssues.map((issue, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#A1A1AA]">
                        <span className="text-[#3ECF8E] mt-0.5">•</span>
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border border-[#262626] bg-[#171717] rounded-xl">
                <CardHeader className="bg-[#262626] border-b border-[#262626]">
                  <CardTitle className="text-[#FAFAFA] flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                    <Lightbulb className="w-5 h-5 text-[#3ECF8E]" />
                    Solutions proposées
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <ul className="space-y-3">
                    {meetingReport.keyPoints.proposedSolutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#A1A1AA]">
                        <span className="text-[#3ECF8E] mt-0.5">•</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-[#262626] bg-[#171717] rounded-xl">
              <CardHeader className="bg-[#262626] border-b border-[#262626]">
                <CardTitle className="text-[#FAFAFA] flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <Euro className="w-5 h-5 text-[#3ECF8E]" />
                  Approche budgétaire
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#FAFAFA] mb-2">Stratégie</h4>
                    <p className="text-[#A1A1AA]">{meetingReport.budgetApproach.strategy}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-[#FAFAFA] mb-2">Avantages</h4>
                    <ul className="space-y-2">
                      {meetingReport.budgetApproach.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-[#A1A1AA]">
                          <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] mt-0.5" />
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
          <div className="grid gap-6">
            {meetingReport.recommendations.map((phase) => (
              <Card key={phase.id} className="border border-[#262626] bg-[#171717] rounded-xl">
                <CardHeader className="bg-[#262626] border-b border-[#262626]">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-[#FAFAFA] flex items-center gap-3" style={{ fontFamily: theme.fonts.primary }}>
                      {phase.name}
                      <span className="text-sm text-[#71717A] font-normal">• {phase.duration}</span>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <p className="text-[#A1A1AA] mb-4">{phase.description}</p>
                  <div>
                    <h4 className="font-medium text-[#FAFAFA] mb-3 flex items-center gap-2">
                      <Package className="w-4 h-4 text-[#3ECF8E]" />
                      Livrables
                    </h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-[#A1A1AA]">
                          <CheckCircle2 className="w-4 h-4 text-[#3ECF8E]" />
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
          <div className="space-y-6">
            <Card className="border border-[#262626] bg-[#171717] rounded-xl">
              <CardHeader className="bg-[#262626] border-b border-[#262626]">
                <CardTitle className="text-[#FAFAFA] flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <ArrowRight className="w-5 h-5 text-[#3ECF8E]" />
                  Actions immédiates
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-4">
                  {meetingReport.nextSteps.immediate.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-[#1F1F1F] rounded-lg border border-[#262626]">
                      <span className="w-8 h-8 bg-[#3ECF8E] text-black rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      <span className="text-[#FAFAFA]">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-[#262626] bg-[#171717] rounded-xl">
              <CardHeader className="bg-[#262626] border-b border-[#262626]">
                <CardTitle className="text-[#FAFAFA] flex items-center gap-2" style={{ fontFamily: theme.fonts.primary }}>
                  <FileText className="w-5 h-5 text-[#3ECF8E]" />
                  Livrables attendus
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {meetingReport.nextSteps.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-3 text-[#A1A1AA]">
                      <CheckCircle2 className="w-4 h-4 text-[#3ECF8E] mt-0.5" />
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