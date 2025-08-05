"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { Calendar, CheckCircle2, Clock, Package, ArrowRight, Target, Zap, MessageSquare, MapPin, Phone } from "lucide-react"
import { theme } from "@/app/constants/theme"
import { meetingReport } from "@/app/data/reportData"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RoadmapPageProps {
  selectedPhase?: number | null;
  onNavigateToPricing?: () => void;
  onNavigateToContact?: () => void;
}

export function RoadmapPage({ selectedPhase, onNavigateToPricing, onNavigateToContact }: RoadmapPageProps) {
  const searchParams = useSearchParams()
  const phaseParam = searchParams.get('phase')
  const [activePhase, setActivePhase] = useState<string>("phase-1")

  useEffect(() => {
    if (selectedPhase !== null && selectedPhase !== undefined) {
      if (selectedPhase >= 0 && selectedPhase <= 4) {
        setActivePhase(`phase-${selectedPhase + 1}`)
      }
    } else if (phaseParam !== null) {
      const phaseIndex = parseInt(phaseParam)
      if (!isNaN(phaseIndex) && phaseIndex >= 0 && phaseIndex <= 4) {
        setActivePhase(`phase-${phaseIndex + 1}`)
      }
    }
  }, [phaseParam, selectedPhase])
  
  const getPhaseIcon = (phaseId: string) => {
    switch (phaseId) {
      case "phase-1":
        return Target
      case "phase-2":
        return MessageSquare
      case "phase-3":
        return MapPin
      case "phase-4":
        return Zap
      case "phase-5":
        return Phone
      default:
        return Target
    }
  }

  const getPhaseStatus = (phaseId: string) => {
    switch (phaseId) {
      case "phase-1":
        return "À venir"
      case "phase-2":
        return "À venir"
      case "phase-3":
        return "À planifier"
      case "phase-4":
        return "À planifier"
      case "phase-5":
        return "À planifier"
      default:
        return "À définir"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "À venir":
        return "bg-[#3ECF8E] text-black"
      case "À planifier":
        return "bg-[#262626] text-[#A1A1AA]"
      default:
        return "bg-[#262626] text-[#71717A]"
    }
  }

  const currentPhase = meetingReport.recommendations.find(p => p.id === activePhase)

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-start justify-between mt-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-[36px] leading-[40px] font-normal mb-4" style={{ fontFamily: theme.fonts.primary }}>
            <span className="text-[#FAFAFA]">Roadmap</span> <span className="text-[#B4B4B4]">du projet CRM & IA</span>
          </h1>
          <p className="text-[18px] leading-[28px] font-normal text-[#898989] tracking-normal">
            Découvrez les différentes phases de développement de votre solution sur mesure, avec une approche progressive et maîtrisée.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={onNavigateToPricing}
            className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#004D2D] text-white rounded-md text-xs text-center font-medium border border-[#3ECF8E]/30 hover:bg-[#006139] hover:border-[#3ECF8E] transition-all duration-200 ease-out outline-none cursor-pointer"
          >
            Tarification
          </button>
          <button 
            onClick={onNavigateToContact}
            className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#181818] text-[#FAFAFA] rounded-md text-xs text-center font-medium border border-[#262626] hover:border-[#404040] transition-all duration-200 ease-out outline-none cursor-pointer"
          >
            Discuter du projet
          </button>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column - Timeline */}
        <div className="space-y-4">
          <Card className="border border-[#262626] shadow-sm bg-[#171717] rounded-xl">
            <CardHeader className="bg-[#262626] rounded-t-xl border-b border-[#262626]">
              <CardTitle className="text-sm font-semibold flex items-center gap-2 text-[#B4B4B4]" style={{ fontFamily: theme.fonts.primary }}>
                <div className="w-6 h-6 bg-[#3ECF8E] rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-black" />
                </div>
                Phases du projet
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#262626]" />
                
                <div className="space-y-6">
                  {meetingReport.recommendations.map((phase, index) => {
                    const Icon = getPhaseIcon(phase.id)
                    const status = getPhaseStatus(phase.id)
                    const isActive = phase.id === activePhase
                    
                    return (
                      <div
                        key={phase.id}
                        className={`relative cursor-pointer transition-all ${
                          isActive ? 'scale-[1.02]' : 'hover:scale-[1.01]'
                        }`}
                        onClick={() => setActivePhase(phase.id)}
                      >
                        {/* Timeline Node */}
                        <div className={`absolute left-0 w-12 h-12 rounded-full border-4 border-[#171717] shadow-lg flex items-center justify-center ${
                          isActive ? 'bg-[#3ECF8E]' : 'bg-[#171717]'
                        }`}>
                          <Icon className={`w-6 h-6 ${isActive ? 'text-black' : 'text-[#3ECF8E]'}`} />
                        </div>

                        {/* Phase Info */}
                        <div className={`ml-20 p-4 rounded-xl border ${
                          isActive ? 'border-[#3ECF8E] bg-[#262626]' : 'border-[#262626] hover:bg-[#262626]'
                        }`}>
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3">
                                <h3 className="font-semibold text-white" style={{ fontFamily: theme.fonts.primary }}>
                                  {phase.name}
                                </h3>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
                                  {status}
                                </span>
                              </div>
                              <p className="text-sm text-[#B4B4B4] mt-1" style={{ fontFamily: theme.fonts.primary }}>
                                {phase.description}
                              </p>
                              <div className="flex items-center gap-4 mt-2 text-xs text-[#898989]">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  <span style={{ fontFamily: theme.fonts.primary }}>{phase.duration}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Package className="w-3 h-3" />
                                  <span style={{ fontFamily: theme.fonts.primary }}>{phase.deliverables.length} livrables</span>
                                </div>
                              </div>
                            </div>
                            {index < meetingReport.recommendations.length - 1 && (
                              <ArrowRight className="w-4 h-4 text-[#898989] mt-1" />
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6">
          {/* Phase Details */}
          {currentPhase && (
            <Card className="border border-[#262626] shadow-sm bg-[#171717] rounded-xl">
              <CardHeader className="bg-[#262626] rounded-t-xl border-b border-[#262626]">
                <CardTitle className="text-sm font-semibold flex items-center gap-2 text-[#B4B4B4]" style={{ fontFamily: theme.fonts.primary }}>
                  <div className="w-6 h-6 bg-[#3ECF8E] rounded-lg flex items-center justify-center">
                    {(() => {
                      const Icon = getPhaseIcon(currentPhase.id)
                      return <Icon className="w-4 h-4 text-black" />
                    })()}
                  </div>
                  Détails de la phase
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg text-white mb-4" style={{ fontFamily: theme.fonts.primary }}>
                  {currentPhase.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2 mb-2" style={{ fontFamily: theme.fonts.primary }}>
                      <Package className="w-4 h-4 text-[#3ECF8E]" />
                      Livrables
                    </h4>
                    <ul className="space-y-2">
                      {currentPhase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-[#B4B4B4]" style={{ fontFamily: theme.fonts.primary }}>
                          <CheckCircle2 className="w-4 h-4 text-[#3ECF8E]" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Related Needs */}
          <Card className="border border-[#262626] shadow-sm bg-[#171717] rounded-xl">
            <CardHeader className="bg-[#262626] rounded-t-xl border-b border-[#262626]">
              <CardTitle className="text-sm font-semibold flex items-center gap-2 text-[#B4B4B4]" style={{ fontFamily: theme.fonts.primary }}>
                <div className="w-6 h-6 bg-[#3ECF8E] rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-black" />
                </div>
                Besoins associés
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-2">
                {(() => {
                  const allNeeds = [
                    ...meetingReport.identifiedNeeds.high,
                    ...meetingReport.identifiedNeeds.medium,
                    ...meetingReport.identifiedNeeds.future
                  ]
                  
                  const phaseNeeds = allNeeds.filter(need => {
                    if (activePhase === "phase-1") {
                      return ["need-1", "need-4"].includes(need.id)
                    } else if (activePhase === "phase-2") {
                      return ["need-9"].includes(need.id)
                    } else if (activePhase === "phase-3") {
                      return ["need-5", "need-7", "need-10"].includes(need.id)
                    } else if (activePhase === "phase-4") {
                      return ["need-2", "need-3", "need-6"].includes(need.id)
                    } else if (activePhase === "phase-5") {
                      return ["need-8"].includes(need.id)
                    }
                    return false
                  })
                  
                  return phaseNeeds.map(need => (
                    <div key={need.id} className="flex items-start gap-3 p-3 bg-[#262626] rounded-xl">
                      <div className={`w-2 h-2 rounded-full mt-1.5 ${
                        need.priority === 'high' ? 'bg-red-500' : 
                        need.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white" style={{ fontFamily: theme.fonts.primary }}>
                          {need.task}
                        </div>
                        <div className="text-xs text-[#898989] mt-1" style={{ fontFamily: theme.fonts.primary }}>
                          {need.description}
                        </div>
                      </div>
                    </div>
                  ))
                })()}
              </div>
            </CardContent>
          </Card>

          {/* Budget */}
          <Card className="border border-[#262626] shadow-sm bg-[#171717] rounded-xl">
            <CardHeader className="bg-[#262626] rounded-t-xl border-b border-[#262626]">
              <CardTitle className="text-sm font-semibold flex items-center gap-2 text-[#B4B4B4]" style={{ fontFamily: theme.fonts.primary }}>
                <div className="w-6 h-6 bg-[#3ECF8E] rounded-lg flex items-center justify-center">
                  <span className="text-black text-xs font-bold">€</span>
                </div>
                Estimation budgétaire
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {/* Budget de la phase active */}
                {(() => {
                  const phaseIndex = meetingReport.recommendations.findIndex(p => p.id === activePhase)
                  const phaseBudget = phaseIndex === 0 ? 2700 : 
                                     phaseIndex === 1 ? null : // Phase 2 à définir
                                     phaseIndex === 2 ? 1400 : 
                                     phaseIndex === 3 ? 2700 : 
                                     phaseIndex === 4 ? null : 0 // Phase 5 à définir
                  
                  return (
                    <>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between">
                          <span className="text-[#B4B4B4]" style={{ fontFamily: theme.fonts.primary }}>
                            Budget
                          </span>
                          {phaseBudget !== null ? (
                            <span className="font-medium text-[#3ECF8E]" style={{ fontFamily: theme.fonts.primary }}>
                              {phaseBudget.toLocaleString('fr-FR')} €
                            </span>
                          ) : (
                            <span className="font-medium text-[#B4B4B4]" style={{ fontFamily: theme.fonts.primary }}>
                              À définir
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[#B4B4B4]" style={{ fontFamily: theme.fonts.primary }}>
                            Durée estimée
                          </span>
                          <span className="font-medium text-white" style={{ fontFamily: theme.fonts.primary }}>
                            {currentPhase?.duration}
                          </span>
                        </div>
                      </div>
                      
                      {phaseBudget === null && (
                        <p className="text-xs text-[#898989] mt-3 text-center" style={{ fontFamily: theme.fonts.primary }}>
                          {phaseIndex === 1 ? 
                            "Selon les solutions d'emailing et de prospection à implémenter" :
                            "Selon la complexité et les technologies d'IA à implémenter"
                          }
                        </p>
                      )}
                    </>
                  )
                })()}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}