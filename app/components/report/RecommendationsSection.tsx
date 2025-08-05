import { Calendar, Package, CheckCircle2, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phase } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface RecommendationsSectionProps {
  phases: Phase[]
}

export function RecommendationsSection({ phases }: RecommendationsSectionProps) {
  return (
    <Card className="border border-[#f0f1fa] shadow-sm bg-white">
      <CardHeader className="bg-[#f0f1fa] rounded-t-lg border-b border-[#f0f1fa]">
        <CardTitle 
          className="text-lg font-semibold flex items-center gap-2" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          <div className="w-8 h-8 bg-[#51459e] rounded-lg flex items-center justify-center">
            <Target className="w-4 h-4 text-white" />
          </div>
          RECOMMANDATIONS
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {phases.map((phase, index) => (
            <div 
              key={phase.id}
              className="border border-[#f0f1fa] rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="bg-[#51459e] p-4 text-white">
                <h3 
                  className="font-bold text-lg mb-1"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  {phase.name}
                </h3>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Calendar className="w-4 h-4" />
                  <span style={{ fontFamily: theme.fonts.primary }}>
                    {phase.duration}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <p 
                  className="text-gray-700 text-sm mb-4"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  {phase.description}
                </p>
                
                <div className="space-y-2">
                  <h4 
                    className="font-semibold text-gray-900 text-sm flex items-center gap-2"
                    style={{ fontFamily: theme.fonts.primary }}
                  >
                    <div className="w-4 h-4 bg-[#f0f1fa] rounded flex items-center justify-center">
                      <Package className="w-3 h-3 text-[#51459e]" />
                    </div>
                    Livrables
                  </h4>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li 
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-600"
                        style={{ fontFamily: theme.fonts.primary }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#51459e] flex-shrink-0 mt-0.5" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}