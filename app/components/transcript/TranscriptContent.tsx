import { TranscriptSegment, TranscriptSpeaker } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface TranscriptContentProps {
  segments: TranscriptSegment[]
  speakers: TranscriptSpeaker[]
}

export function TranscriptContent({ segments, speakers }: TranscriptContentProps) {
  const getSpeakerById = (id: string) => {
    return speakers.find(speaker => speaker.id === id)
  }

  return (
    <div className="bg-white rounded-lg border border-[#f0f1fa]">
      <div className="p-6 border-b border-[#f0f1fa]">
        <h2 
          className="text-lg font-semibold text-gray-900"
          style={{ fontFamily: theme.fonts.primary }}
        >
          Transcription complète
        </h2>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          {segments.map((segment) => {
            const speaker = getSpeakerById(segment.speakerId)
            
            return (
              <div key={segment.id} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                    style={{ backgroundColor: speaker?.color || theme.colors.primary }}
                  >
                    {speaker?.name.charAt(0) || "?"}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span 
                      className="font-medium text-gray-900"
                      style={{ fontFamily: theme.fonts.primary }}
                    >
                      {speaker?.name || "Inconnu"}
                    </span>
                    <span 
                      className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      style={{ fontFamily: theme.fonts.primary }}
                    >
                      {segment.timestamp}
                    </span>
                  </div>
                  
                  <p 
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: theme.fonts.primary }}
                  >
                    {segment.content}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}