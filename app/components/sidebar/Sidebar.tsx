import { useState } from "react"
import { Codesandbox, ChevronLeft, ChevronRight } from "lucide-react"
import { NavigationItem } from "@/app/types"
import { theme } from "@/app/constants/theme"
import { ThemeToggle } from "@/app/components/ui/ThemeToggle"

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
      className={`${isExpanded ? 'w-64' : 'w-16'} bg-sidebar-bg dark:bg-background border-r border-sidebar-border dark:border-neutral-800 min-h-screen transition-all duration-300 relative flex flex-col`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 flex-1">
        <div className={`flex items-center ${!isExpanded ? 'justify-center' : 'gap-2.5'} mb-4`}>
          <Codesandbox className="w-6 h-6 text-primary flex-shrink-0" />
          {isExpanded && (
            <span 
              className="font-semibold text-text-primary dark:text-foreground text-base whitespace-nowrap" 
              style={{ fontFamily: theme.fonts.primary }}
            >
              Indigo Studio
            </span>
          )}
        </div>

        {/* Theme Toggle - Moved to top */}
        <div className={`mb-6 pb-4 border-b border-sidebar-border dark:border-neutral-800 ${!isExpanded ? 'flex justify-center' : ''}`}>
          {isExpanded ? (
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-muted dark:text-foreground-tertiary" style={{ fontFamily: theme.fonts.primary }}>
                Thème
              </span>
              <ThemeToggle />
            </div>
          ) : (
            <ThemeToggle />
          )}
        </div>

        <nav className="space-y-1">
          {navigationItems.map((item) => {
            if (item.isSeparator) {
              return (
                <div key={item.id} className="my-4 border-t border-sidebar-border dark:border-neutral-800" />
              )
            }
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`w-full flex items-center ${!isExpanded ? 'justify-center' : 'gap-2.5'} px-3 py-2 rounded-lg text-sm text-left transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-secondary dark:bg-neutral-800 text-text-primary dark:text-foreground font-medium'
                    : 'text-text-muted dark:text-foreground-tertiary hover:text-text-primary dark:hover:text-foreground hover:bg-hover-bg dark:hover:bg-neutral-800'
                }`}
                style={{ fontFamily: theme.fonts.primary }}
                title={!isExpanded ? item.title : undefined}
              >
                <item.icon className={`w-4 h-4 flex-shrink-0 ${activeSection === item.id ? 'text-primary' : ''}`} />
                {isExpanded && <span className="whitespace-nowrap">{item.title}</span>}
              </button>
            )
          })}
        </nav>
      </div>
      
      {/* Toggle button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-secondary dark:bg-neutral-800 border border-border dark:border-neutral-800 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
      >
        {isCollapsed ? (
          <ChevronRight className="w-3 h-3 text-foreground-secondary group-hover:text-background" />
        ) : (
          <ChevronLeft className="w-3 h-3 text-foreground-secondary group-hover:text-background" />
        )}
      </button>
    </div>
  )
}