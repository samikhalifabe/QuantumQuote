import { FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/app/constants/theme"

interface ExecutiveSummaryProps {
  summary: string
}

export function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
  return (
    <Card className="border border-[#f0f1fa] shadow-sm bg-white">
      <CardHeader className="bg-[#f0f1fa] rounded-t-lg border-b border-[#f0f1fa]">
        <CardTitle 
          className="text-lg font-semibold flex items-center gap-2" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          <div className="w-8 h-8 bg-[#51459e] rounded-lg flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          RÉSUMÉ EXÉCUTIF
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p 
          className="text-gray-700 leading-relaxed"
          style={{ fontFamily: theme.fonts.primary }}
        >
          {summary}
        </p>
      </CardContent>
    </Card>
  )
}