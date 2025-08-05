import { Calendar, Clock, Users, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TranscriptMeeting } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface TranscriptHeaderProps {
  meeting: TranscriptMeeting
}

export function TranscriptHeader({ meeting }: TranscriptHeaderProps) {
  return (
    <div className="bg-white rounded-lg border border-[#f0f1fa] p-6 mb-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 
            className="text-2xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: theme.fonts.primary }}
          >
            {meeting.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span style={{ fontFamily: theme.fonts.primary }}>
                {new Date(meeting.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long', 
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span style={{ fontFamily: theme.fonts.primary }}>
                {meeting.duration}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span style={{ fontFamily: theme.fonts.primary }}>
                {meeting.speakers.length} participants
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="gap-2"
            style={{
              fontFamily: theme.fonts.primary,
              borderColor: theme.colors.secondary,
              color: theme.colors.primary
            }}
          >
            <Download className="w-4 h-4" />
            Exporter
          </Button>
        </div>
      </div>

      {meeting.summary && (
        <div className="mt-4 p-4 bg-[#f0f1fa] rounded-lg">
          <h3 
            className="font-semibold text-gray-900 mb-2"
            style={{ fontFamily: theme.fonts.primary }}
          >
            Résumé
          </h3>
          <p 
            className="text-gray-700 text-sm leading-relaxed"
            style={{ fontFamily: theme.fonts.primary }}
          >
            {meeting.summary}
          </p>
        </div>
      )}
    </div>
  )
}