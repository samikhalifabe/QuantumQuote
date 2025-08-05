import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/app/constants/theme"
import { LucideIcon } from "lucide-react"

interface ProgressItem {
  label: string
  value: number
  total: number
  color?: string
}

interface ProgressWidgetProps {
  title: string
  icon: LucideIcon
  items: ProgressItem[]
}

export function ProgressWidget({ title, icon: Icon, items }: ProgressWidgetProps) {
  return (
    <Card className="border border-[#f0f1fa] shadow-sm bg-white">
      <CardHeader className="bg-[#f0f1fa] rounded-t-lg border-b border-[#f0f1fa]">
        <CardTitle 
          className="text-sm font-semibold flex items-center gap-2" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          <div className="w-6 h-6 bg-[#51459e] rounded-lg flex items-center justify-center">
            <Icon className="w-4 h-4 text-white" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {items.map((item, index) => {
            const percentage = (item.value / item.total) * 100
            return (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span 
                    className="text-sm font-medium text-gray-700"
                    style={{ fontFamily: theme.fonts.primary }}
                  >
                    {item.label}
                  </span>
                  <span 
                    className="text-sm text-gray-500"
                    style={{ fontFamily: theme.fonts.primary }}
                  >
                    {item.value}/{item.total}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all duration-300" 
                    style={{ 
                      width: `${percentage}%`,
                      backgroundColor: item.color || theme.colors.primary
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}