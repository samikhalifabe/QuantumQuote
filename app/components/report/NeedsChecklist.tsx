import { useState } from "react"
import { CheckCircle2, Circle, CheckSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChecklistItem } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface NeedsChecklistProps {
  highPriority: ChecklistItem[]
  mediumPriority: ChecklistItem[]
  futurePriority: ChecklistItem[]
}

export function NeedsChecklist({ highPriority, mediumPriority, futurePriority }: NeedsChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newChecked = new Set(checkedItems)
    if (newChecked.has(id)) {
      newChecked.delete(id)
    } else {
      newChecked.add(id)
    }
    setCheckedItems(newChecked)
  }

  const renderChecklistSection = (
    title: string, 
    items: ChecklistItem[], 
    priorityLabel: string
  ) => (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-3 p-2 rounded-lg bg-[#f0f1fa] border border-[#f0f1fa]">
        <div className="w-6 h-6 bg-[#51459e] rounded-lg flex items-center justify-center">
          <span className="text-white text-xs font-bold">{priorityLabel}</span>
        </div>
        <h3 
          className="font-semibold text-gray-900"
          style={{ fontFamily: theme.fonts.primary }}
        >
          {title}
        </h3>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="flex items-start gap-3 p-3 rounded-lg border border-[#f0f1fa] hover:bg-[#f0f1fa] transition-colors cursor-pointer"
            onClick={() => toggleItem(item.id)}
          >
            <div className="flex-shrink-0 mt-0.5">
              {checkedItems.has(item.id) ? (
                <CheckCircle2 className="w-5 h-5 text-[#51459e]" />
              ) : (
                <Circle className="w-5 h-5 text-gray-400" />
              )}
            </div>
            <div className="flex-1">
              <div 
                className={`font-medium ${checkedItems.has(item.id) ? 'line-through text-gray-500' : 'text-gray-900'}`}
                style={{ fontFamily: theme.fonts.primary }}
              >
                {item.task}
              </div>
              {item.description && (
                <p 
                  className="text-sm text-gray-500 mt-1"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <Card className="border border-[#f0f1fa] shadow-sm bg-white">
      <CardHeader className="bg-[#f0f1fa] rounded-t-lg border-b border-[#f0f1fa]">
        <CardTitle 
          className="text-lg font-semibold flex items-center gap-2" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          <div className="w-8 h-8 bg-[#51459e] rounded-lg flex items-center justify-center">
            <CheckSquare className="w-4 h-4 text-white" />
          </div>
          BESOINS IDENTIFIÉS
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {renderChecklistSection("Priorité Haute", highPriority, "🔴")}
        {renderChecklistSection("Priorité Moyenne", mediumPriority, "🟡")}
        {renderChecklistSection("Priorité Future", futurePriority, "🟢")}
      </CardContent>
    </Card>
  )
}