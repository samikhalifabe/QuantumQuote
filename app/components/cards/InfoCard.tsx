import { ProjectInfo } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface InfoCardProps {
  info: ProjectInfo
}

export function InfoCard({ info }: InfoCardProps) {
  return (
    <div className="flex items-center gap-4 bg-secondary hover:bg-secondary/80 rounded-xl p-4 border border-border hover:border-[#3ECF8E]/30 transition-all duration-200">
      <div className="w-14 h-14 bg-[#3ECF8E]/10 dark:bg-[#3ECF8E]/20 rounded-full flex items-center justify-center">
        <info.icon 
          className="w-7 h-7 text-[#3ECF8E]" 
        />
      </div>
      <div className="flex-1">
        <div 
          className="font-semibold text-foreground text-base" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          {info.title}
        </div>
        <div 
          className="text-sm text-foreground-secondary mt-0.5" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          {info.subtitle}
        </div>
      </div>
    </div>
  )
}