import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/app/constants/theme"
import { LucideIcon } from "lucide-react"

interface KPIWidgetProps {
  title: string
  value: string | number
  icon: LucideIcon
  trend?: {
    value: string
    isPositive: boolean
  }
  description?: string
}

export function KPIWidget({ title, value, icon: Icon, trend, description }: KPIWidgetProps) {
  return (
    <Card className="border border-[#262626] bg-[#171717] rounded-xl">
      <CardHeader className="pb-2">
        <CardTitle 
          className="text-sm font-medium text-[#A1A1AA] flex items-center gap-2"
          style={{ fontFamily: theme.fonts.primary }}
        >
          <div className="w-6 h-6 bg-[#3ECF8E]/20 rounded-lg flex items-center justify-center">
            <Icon className="w-4 h-4 text-[#3ECF8E]" />
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <div>
            <div 
              className="text-2xl font-bold text-[#F7F7F7]"
              style={{ fontFamily: theme.fonts.primary }}
            >
              {value}
            </div>
            {description && (
              <p 
                className="text-xs text-[#71717A] mt-1"
                style={{ fontFamily: theme.fonts.primary }}
              >
                {description}
              </p>
            )}
          </div>
          {trend && (
            <div 
              className={`text-xs font-medium ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}
              style={{ fontFamily: theme.fonts.primary }}
            >
              {trend.isPositive ? '+' : ''}{trend.value}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}