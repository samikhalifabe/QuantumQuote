import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import { TranscriptMeeting, TranscriptSpeaker, TranscriptSegment } from '@/app/types'

function parseTranscriptMarkdown(content: string, meetingId: string): TranscriptMeeting {
  const lines = content.split('\n')
  
  // Extract keywords
  const keywordsIndex = lines.findIndex(line => line.includes('## Keywords'))
  const speakersIndex = lines.findIndex(line => line.includes('## Speakers'))
  const keywords = keywordsIndex !== -1 && speakersIndex !== -1
    ? lines[keywordsIndex + 2]?.split(', ').map(k => k.trim()) || []
    : []

  // Extract speakers
  const speakers: TranscriptSpeaker[] = []
  const colors = ['#51459e', '#06b6d4', '#f59e0b', '#ef4444', '#10b981', '#8b5cf6']
  
  // Speaker mapping
  const speakerMap = {
    'speaker-1': { name: 'Mathieu', initials: 'M', role: 'Client' },
    'speaker-2': { name: 'Sami', initials: 'S', role: 'Développeur' },
    'speaker-3': { name: 'Eric', initials: 'E', role: 'Responsable Technique' }
  }
  
  if (speakersIndex !== -1) {
    const speakerLine = lines[speakersIndex + 2]
    if (speakerLine) {
      const speakerMatches = speakerLine.match(/Speaker \d+ \((\d+)%\)/g)
      speakerMatches?.forEach((match, index) => {
        const percentage = parseInt(match.match(/\((\d+)%\)/)?.[1] || '0')
        const speakerId = `speaker-${index + 1}` as keyof typeof speakerMap
        const speakerInfo = speakerMap[speakerId] || { name: `Speaker ${index + 1}`, initials: `S${index + 1}`, role: 'Participant' }
        
        speakers.push({
          id: speakerId,
          name: speakerInfo.name,
          initials: speakerInfo.initials,
          role: speakerInfo.role,
          percentage,
          color: colors[index] || '#51459e'
        })
      })
    }
  }

  // Extract segments
  const segments: TranscriptSegment[] = []
  let currentSpeakerId = ''
  let currentTimestamp = ''
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    // Check for speaker identifier
    if (line === 'S' && i + 2 < lines.length) {
      const speakerLine = lines[i + 2]?.trim()
      if (speakerLine?.startsWith('Speaker')) {
        const speakerNum = speakerLine.match(/Speaker (\d+)/)?.[1]
        if (speakerNum) {
          currentSpeakerId = `speaker-${speakerNum}`
        }
      }
    }
    
    // Check for timestamp
    if (/^\d+:\d+$/.test(line)) {
      currentTimestamp = line
    }
    
    // Check for content (non-empty line that's not a header, speaker, or timestamp)
    if (line && 
        !line.startsWith('#') && 
        !line.startsWith('S') &&
        !line.startsWith('Speaker') &&
        !/^\d+:\d+$/.test(line) &&
        currentSpeakerId && 
        currentTimestamp) {
      
      segments.push({
        id: `segment-${segments.length + 1}`,
        speakerId: currentSpeakerId,
        timestamp: currentTimestamp,
        content: line
      })
    }
  }

  // Generate meeting title and metadata
  const title = `Réunion ${meetingId.replace('transcription-meeting-', '').replace('.md', '').replace('-', ' ')}`
  const duration = '36:04'
  
  return {
    id: meetingId,
    title,
    date: new Date().toISOString().split('T')[0], // Today's date as fallback
    duration,
    speakers,
    segments,
    keywords,
    summary: generateSummary(segments)
  }
}

function generateSummary(segments: TranscriptSegment[]): string {
  if (segments.length === 0) return ''
  
  // Simple summary based on first few segments
  const firstSegments = segments.slice(0, 3)
  const topics = firstSegments.map(s => s.content.slice(0, 100)).join(' ')
  
  return `Discussion portant sur les sujets suivants : ${topics.slice(0, 200)}...`
}

export async function GET() {
  try {
    const transcriptsDir = path.join(process.cwd(), 'app', 'transcripts')
    const files = await fs.readdir(transcriptsDir)
    const markdownFiles = files.filter(file => file.endsWith('.md'))
    
    const transcripts = await Promise.all(
      markdownFiles.map(async (file) => {
        const filePath = path.join(transcriptsDir, file)
        const content = await fs.readFile(filePath, 'utf-8')
        return parseTranscriptMarkdown(content, file.replace('.md', ''))
      })
    )
    
    return NextResponse.json(transcripts)
  } catch (error) {
    console.error('Error loading transcripts:', error)
    return NextResponse.json({ error: 'Failed to load transcripts' }, { status: 500 })
  }
}