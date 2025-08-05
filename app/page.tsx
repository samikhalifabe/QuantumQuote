"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { Sidebar } from "./components/sidebar/Sidebar"
import { Dashboard } from "./components/dashboard/Dashboard"
import { TranscriptPage } from "./components/transcript/TranscriptPage"
import { ReportPage } from "./components/report/ReportPage"
import { RoadmapPage } from "./components/roadmap/RoadmapPage"
import PricingPage from "./components/pricing/PricingPage"
import { ContactPage } from "./components/contact/ContactPage"
import { navigationItems } from "./data/mockData"

export default function ClientProposal() {
  const [activeSection, setActiveSection] = useState("summary")
  const [selectedPhase, setSelectedPhase] = useState<number | null>(null)

  const handleNavigateToRoadmap = (phaseIndex: number) => {
    setSelectedPhase(phaseIndex)
    setActiveSection('roadmap')
  }

  const handleNavigateToPricing = () => {
    setActiveSection('pricing')
  }

  const handleNavigateToContact = () => {
    setActiveSection('contact')
  }

  const handleNavigateToReport = () => {
    setActiveSection('report')
  }

  const renderContent = () => {
    switch (activeSection) {
      case "summary":
        return <Dashboard onNavigateToRoadmap={handleNavigateToRoadmap} onNavigateToPricing={handleNavigateToPricing} onNavigateToReport={handleNavigateToReport} />
      case "transcript":
        return <TranscriptPage />
      case "report":
        return <ReportPage />
      case "roadmap":
        return <RoadmapPage selectedPhase={selectedPhase} onNavigateToPricing={handleNavigateToPricing} onNavigateToContact={handleNavigateToContact} />
      case "pricing":
        return <PricingPage onNavigateToContact={handleNavigateToContact} />
      case "contact":
        return <ContactPage />
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-600">
              Section en cours de développement...
            </p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#0F0F0F]">
      <div className="flex">
        <Sidebar 
          navigationItems={navigationItems}
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <div className="flex-1">
          <main className="p-8">{renderContent()}</main>
        </div>
      </div>
    </div>
  )
}