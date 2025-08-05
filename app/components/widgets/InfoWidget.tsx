import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/app/constants/theme"
import { LucideIcon } from "lucide-react"

interface InfoItem {
  label: string
  value: string
  icon?: LucideIcon
}

interface InfoWidgetProps {
  title: string
  icon: LucideIcon
  items: InfoItem[]
}

export function InfoWidget({ title, icon: Icon, items }: InfoWidgetProps) {
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
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {item.icon && (
                  <div className="w-4 h-4 text-[#51459e]">
                    <item.icon className="w-4 h-4" />
                  </div>
                )}
                <span 
                  className="text-sm text-gray-600"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  {item.label}
                </span>
              </div>
              <span 
                className="text-sm font-medium text-gray-900"
                style={{ fontFamily: theme.fonts.primary }}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}