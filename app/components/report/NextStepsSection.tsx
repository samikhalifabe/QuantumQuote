import { Clock, FileText, Zap, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/app/constants/theme"

interface NextStepsSectionProps {
  immediate: string[]
  deliverables: string[]
  opportunities: string[]
}

export function NextStepsSection({ immediate, deliverables, opportunities }: NextStepsSectionProps) {
  return (
    <Card className="border border-[#f0f1fa] shadow-sm bg-white">
      <CardHeader className="bg-[#f0f1fa] rounded-t-lg border-b border-[#f0f1fa]">
        <CardTitle 
          className="text-lg font-semibold flex items-center gap-2" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          <div className="w-8 h-8 bg-[#51459e] rounded-lg flex items-center justify-center">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
          PROCHAINES ÉTAPES
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border border-[#f0f1fa]">
            <h3 
              className="flex items-center gap-2 font-semibold text-gray-900 mb-4"
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className="w-6 h-6 bg-[#f0f1fa] rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-[#51459e]" />
              </div>
              Actions immédiates
            </h3>
            <ol className="space-y-2">
              {immediate.map((action, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-700"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  <span className="bg-[#51459e] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  {action}
                </li>
              ))}
            </ol>
          </div>

          <div className="p-4 rounded-lg border border-[#f0f1fa]">
            <h3 
              className="flex items-center gap-2 font-semibold text-gray-900 mb-4"
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className="w-6 h-6 bg-[#f0f1fa] rounded-lg flex items-center justify-center">
                <FileText className="w-4 h-4 text-[#51459e]" />
              </div>
              Livrables attendus
            </h3>
            <ul className="space-y-2">
              {deliverables.map((deliverable, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  <span className="text-[#51459e] font-bold">•</span>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-[#f0f1fa]">
            <h3 
              className="flex items-center gap-2 font-semibold text-gray-900 mb-4"
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className="w-6 h-6 bg-[#f0f1fa] rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#51459e]" />
              </div>
              Opportunités identifiées
            </h3>
            <ul className="space-y-2">
              {opportunities.map((opportunity, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  <span className="text-[#51459e] font-bold">•</span>
                  {opportunity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}