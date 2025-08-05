import { useState } from "react"
import { Codesandbox, ChevronLeft, ChevronRight } from "lucide-react"
import { NavigationItem } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface SidebarProps {
  navigationItems: NavigationItem[]
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export function Sidebar({ navigationItems, activeSection, onSectionChange }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  
  const isExpanded = !isCollapsed || (isCollapsed && isHovered)
  
  return (
    <div 
      className={`${isExpanded ? 'w-64' : 'w-16'} bg-[#0F0F0F] border-r border-[#262626] min-h-screen transition-all duration-300 relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4">
        <div className={`flex items-center ${!isExpanded ? 'justify-center' : 'gap-2.5'} mb-6`}>
          <Codesandbox className="w-6 h-6 text-white flex-shrink-0" />
          {isExpanded && (
            <span 
              className="font-semibold text-[#F7F7F7] text-base whitespace-nowrap" 
              style={{ fontFamily: theme.fonts.primary }}
            >
              Indigo Studio
            </span>
          )}
        </div>

        <nav className="space-y-1">
          {navigationItems.map((item) => {
            if (item.isSeparator) {
              return (
                <div key={item.id} className="my-4 border-t border-[#262626]" />
              )
            }
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center ${!isExpanded ? 'justify-center' : 'gap-2.5'} px-3 py-2 rounded-lg text-sm text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#262626] text-[#F7F7F7] font-medium'
                    : 'text-[#A1A1AA] hover:text-[#F7F7F7] hover:bg-[#262626]'
                }`}
                style={{ fontFamily: theme.fonts.primary }}
                title={!isExpanded ? item.title : undefined}
              >
                <item.icon className={`w-4 h-4 flex-shrink-0 ${activeSection === item.id ? 'text-[#3ECF8E]' : ''}`} />
                {isExpanded && <span className="whitespace-nowrap">{item.title}</span>}
              </button>
            )
          })}
        </nav>
      </div>
      
      {/* Toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-[#262626] border border-[#262626] rounded-full flex items-center justify-center hover:bg-[#3ECF8E] hover:border-[#3ECF8E] transition-colors group"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3 text-white group-hover:text-black" />
        ) : (
          <ChevronLeft className="w-3 h-3 text-white group-hover:text-black" />
        )}
      </button>
    </div>
  )
}