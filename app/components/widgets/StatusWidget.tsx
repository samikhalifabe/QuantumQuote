import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/app/constants/theme"
import { LucideIcon } from "lucide-react"

interface StatusItem {
  id: string
  label: string
  status: 'completed' | 'in-progress' | 'pending'
  priority?: 'high' | 'medium' | 'low'
}

interface StatusWidgetProps {
  title: string
  icon: LucideIcon
  items: StatusItem[]
}

export function StatusWidget({ title, icon: Icon, items }: StatusWidgetProps) {
  const getStatusColor = (status: StatusItem['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800'
      case 'pending':
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityDot = (priority: StatusItem['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500'
      case 'medium':
        return 'bg-yellow-500'
      case 'low':
        return 'bg-green-500'
      default:
        return 'bg-gray-400'
    }
  }

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
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {item.priority && (
                  <div className={`w-2 h-2 rounded-full ${getPriorityDot(item.priority)}`} />
                )}
                <span 
                  className="text-sm text-gray-700"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  {item.label}
                </span>
              </div>
              <span 
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
                style={{ fontFamily: theme.fonts.primary }}
              >
                {item.status === 'completed' && 'Terminé'}
                {item.status === 'in-progress' && 'En cours'}
                {item.status === 'pending' && 'En attente'}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}