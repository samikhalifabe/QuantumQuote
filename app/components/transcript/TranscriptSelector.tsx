import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TranscriptMeeting } from "@/app/types"
import { theme } from "@/app/constants/theme"

interface TranscriptSelectorProps {
  transcripts: TranscriptMeeting[]
  selectedTranscript: TranscriptMeeting | null
  onSelectTranscript: (transcript: TranscriptMeeting) => void
}

export function TranscriptSelector({ 
  transcripts, 
  selectedTranscript, 
  onSelectTranscript 
}: TranscriptSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative mb-6">
      <Button
        variant="outline"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between"
        style={{
          fontFamily: theme.fonts.primary,
          borderColor: theme.colors.secondary
        }}
      >
        <span>
          {selectedTranscript ? selectedTranscript.title : "Sélectionner une transcription"}
        </span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-[#f0f1fa] rounded-lg shadow-lg">
          {transcripts.map((transcript) => (
            <button
              key={transcript.id}
              onClick={() => {
                onSelectTranscript(transcript)
                setIsOpen(false)
              }}
              className="w-full text-left px-4 py-3 hover:bg-[#f0f1fa] first:rounded-t-lg last:rounded-b-lg"
              style={{ fontFamily: theme.fonts.primary }}
            >
              <div className="font-medium text-gray-900">{transcript.title}</div>
              <div className="text-sm text-gray-500">
                {new Date(transcript.date).toLocaleDateString('fr-FR')} • {transcript.duration}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}