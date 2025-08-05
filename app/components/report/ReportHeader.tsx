import { Calendar, Clock, Users, FileDown, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MeetingReport } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface ReportHeaderProps {
  report: MeetingReport
}

export function ReportHeader({ report }: ReportHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900" style={{ fontFamily: theme.fonts.primary }}>
          Compte-Rendu de Réunion
        </h1>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-[#f0f1fa] bg-[#f0f1fa] text-[#51459e]"
            style={{ fontFamily: theme.fonts.primary }}
          >
            <FileDown className="w-4 h-4" />
            Exporter PDF
          </Button>
        </div>
      </div>

      {/* Main Card */}
      <div className="relative">
        <div className="bg-[#51459e] text-white border border-[#f0f1fa] overflow-hidden rounded-lg">
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold mb-2" style={{ fontFamily: theme.fonts.primary }}>
                  Projet CRM & IA
                </div>
                <div className="text-white/80 mb-4" style={{ fontFamily: theme.fonts.primary }}>
                  Réunion avec Mathieu - Définition des besoins
                </div>
                <div className="flex items-center gap-6 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span style={{ fontFamily: theme.fonts.primary }}>
                      {new Date(report.date).toLocaleDateString('fr-FR', {
                        day: 'numeric',
                        month: 'long', 
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span style={{ fontFamily: theme.fonts.primary }}>
                      {report.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span style={{ fontFamily: theme.fonts.primary }}>
                      {report.participants.length} participants
                    </span>
                  </div>
                </div>
              </div>
              <Button
                variant="secondary"
                size="sm"
                className="gap-2 bg-white/20 hover:bg-white/30 text-white border border-[#f0f1fa]"
                style={{ fontFamily: theme.fonts.primary }}
              >
                Voir détails
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
            {/* Decorative circles */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full border border-[#f0f1fa]"></div>
            <div className="absolute -right-4 top-8 w-20 h-20 bg-white/5 rounded-full border border-[#f0f1fa]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}