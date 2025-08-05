import { AlertTriangle, Lightbulb, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/app/constants/theme"

interface KeyPointsSectionProps {
  currentIssues: string[]
  proposedSolutions: string[]
}

export function KeyPointsSection({ currentIssues, proposedSolutions }: KeyPointsSectionProps) {
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
          POINTS CLÉS DE LA DISCUSSION
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-[#f0f1fa]">
            <h3 
              className="flex items-center gap-2 font-semibold text-gray-900 mb-4"
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              Problématiques actuelles
            </h3>
            <ul className="space-y-2">
              {currentIssues.map((issue, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  <span className="text-[#51459e] font-bold">•</span>
                  {issue}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-[#f0f1fa]">
            <h3 
              className="flex items-center gap-2 font-semibold text-gray-900 mb-4"
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-green-600" />
              </div>
              Solutions proposées
            </h3>
            <ul className="space-y-2">
              {proposedSolutions.map((solution, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  <span className="text-[#51459e] font-bold">•</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}