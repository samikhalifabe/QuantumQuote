import { Clock } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Meeting } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface MeetingCardProps {
  meeting: Meeting
}

export function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <div className="flex items-center gap-4 bg-[#171717] hover:bg-[#262626] rounded-xl p-4 border border-[#262626] hover:border-[#3ECF8E] transition-all duration-200">
      <Avatar className="w-14 h-14 border border-[#262626]">
        <AvatarFallback
          className="text-white font-medium text-lg bg-[#3ECF8E]"
          style={{ 
            fontFamily: theme.fonts.primary
          }}
        >
          {meeting.avatar}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <div 
          className="font-semibold text-[#F7F7F7] text-base" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          {meeting.name}
        </div>
        <div 
          className="text-sm text-[#A1A1AA] mt-0.5" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          {meeting.role}
        </div>
      </div>
      <div
        className="text-sm text-[#71717A] flex items-center gap-2"
        style={{ fontFamily: theme.fonts.primary }}
      >
        <Clock className="w-4 h-4" />
        {meeting.time}
      </div>
    </div>
  )
}