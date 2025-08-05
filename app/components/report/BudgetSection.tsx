import { Euro, TrendingUp, Users, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/app/constants/theme"

interface BudgetSectionProps {
  strategy: string
  benefits: string[]
  comparison: string
}

export function BudgetSection({ strategy, benefits, comparison }: BudgetSectionProps) {
  return (
    <Card className="border border-[#f0f1fa] shadow-sm bg-white">
      <CardHeader className="bg-[#f0f1fa] rounded-t-lg border-b border-[#f0f1fa]">
        <CardTitle 
          className="text-lg font-semibold flex items-center gap-2" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          <div className="w-8 h-8 bg-[#51459e] rounded-lg flex items-center justify-center">
            <Euro className="w-4 h-4 text-white" />
          </div>
          APPROCHE BUDGÉTAIRE
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-4 rounded-lg border border-[#f0f1fa]">
            <h3 
              className="flex items-center gap-2 font-semibold text-gray-900 mb-3"
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className="w-6 h-6 bg-[#f0f1fa] rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-[#51459e]" />
              </div>
              Stratégie recommandée
            </h3>
            <p 
              className="text-gray-700 font-medium"
              style={{ fontFamily: theme.fonts.primary }}
            >
              {strategy}
            </p>
          </div>

          <div className="p-4 rounded-lg border border-[#f0f1fa]">
            <h3 
              className="flex items-center gap-2 font-semibold text-gray-900 mb-3"
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className="w-6 h-6 bg-[#f0f1fa] rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#51459e]" />
              </div>
              Avantages
            </h3>
            <ul className="space-y-1">
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-700"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  <span className="text-[#51459e] font-bold">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-lg border border-[#f0f1fa]">
            <h3 
              className="flex items-center gap-2 font-semibold text-gray-900 mb-3"
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className="w-6 h-6 bg-[#f0f1fa] rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-[#51459e]" />
              </div>
              Comparaison
            </h3>
            <p 
              className="text-sm text-gray-700"
              style={{ fontFamily: theme.fonts.primary }}
            >
              {comparison}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}