import { TranscriptMeeting } from '@/app/types'

export async function loadAllTranscripts(): Promise<TranscriptMeeting[]> {
  try {
    const response = await fetch('/api/transcripts')
    if (!response.ok) {
      throw new Error('Failed to fetch transcripts')
    }
    const transcripts = await response.json()
    return transcripts
  } catch (error) {
    console.error('Error loading transcripts:', error)
    return []
  }
}