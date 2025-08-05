import { TranscriptSpeaker } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface SpeakerStatsProps {
  speakers: TranscriptSpeaker[]
}

export function SpeakerStats({ speakers }: SpeakerStatsProps) {
  return (
    <div className="bg-white rounded-lg border border-[#f0f1fa] p-6 mb-6">
      <h2 
        className="text-lg font-semibold text-gray-900 mb-4"
        style={{ fontFamily: theme.fonts.primary }}
      >
        Temps de parole
      </h2>
      
      <div className="space-y-4">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="flex items-center gap-4">
            <div 
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: speaker.color }}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span 
                  className="font-medium text-gray-900"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  {speaker.name}
                </span>
                <span 
                  className="text-sm text-gray-500"
                  style={{ fontFamily: theme.fonts.primary }}
                >
                  {speaker.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-300"
                  style={{ 
                    width: `${speaker.percentage}%`,
                    backgroundColor: speaker.color 
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}