import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { theme } from "@/app/constants/theme"
import { CALENDAR_DAYS, HIGHLIGHTED_DAYS, SELECTED_DAY } from "@/app/data/mockData"

export function CalendarWidget() {
  return (
    <Card className="border border-[#f0f1fa] shadow-sm bg-white">
      <CardHeader className="pb-4 bg-[#f0f1fa] rounded-t-lg border-b border-[#f0f1fa]">
        <div className="flex items-center justify-between">
          <CardTitle 
            className="text-lg font-semibold" 
            style={{ fontFamily: theme.fonts.primary }}
          >
            Décembre, 2024
          </CardTitle>
          <div className="flex gap-1">
            <Button variant="ghost" size="sm" className="border border-[#f0f1fa]">
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="border border-[#f0f1fa]">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="grid grid-cols-7 gap-1 text-center text-xs"
          style={{ fontFamily: theme.fonts.primary }}
        >
          {CALENDAR_DAYS.map((day, index) => (
            <div 
              key={`day-${index}`} 
              className="p-2 text-gray-500 font-medium border-b border-[#f0f1fa]"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
            <div
              key={day}
              className={`p-2 hover:bg-[#f0f1fa] rounded cursor-pointer border border-transparent ${
                day === SELECTED_DAY
                  ? `bg-[${theme.colors.primary}] text-white border-[#f0f1fa]`
                  : HIGHLIGHTED_DAYS.includes(day)
                    ? `bg-[#f0f1fa] text-[${theme.colors.primary}] border-[#f0f1fa]`
                    : "text-gray-700 hover:border-[#f0f1fa]"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}