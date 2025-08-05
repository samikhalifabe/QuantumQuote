export interface NavigationItem {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string }>
  active?: boolean
  isSeparator?: boolean
}

export interface RoadmapItem {
  id: string
  phase: string
  title: string
  duration: string
  price: number
  applications: number
  date: string
}

export interface Meeting {
  id: string
  name: string
  role: string
  time: string
  avatar: string
}

export interface ProjectInfo {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  subtitle: string
}

export interface TranscriptSpeaker {
  id: string
  name: string
  initials: string
  role: string
  percentage: number
  color: string
}

export interface TranscriptSegment {
  id: string
  speakerId: string
  timestamp: string
  content: string
}

export interface TranscriptMeeting {
  id: string
  title: string
  date: string
  duration: string
  speakers: TranscriptSpeaker[]
  segments: TranscriptSegment[]
  keywords: string[]
  summary?: string
}

export interface MeetingReport {
  id: string
  title: string
  date: string
  duration: string
  participants: string[]
  executiveSummary: string
  identifiedNeeds: {
    high: ChecklistItem[]
    medium: ChecklistItem[]
    future: ChecklistItem[]
  }
  keyPoints: {
    currentIssues: string[]
    proposedSolutions: string[]
  }
  budgetApproach: {
    strategy: string
    benefits: string[]
    comparison: string
  }
  analysis: {
    strengths: string[]
    challenges: string[]
  }
  recommendations: Phase[]
  nextSteps: {
    immediate: string[]
    deliverables: string[]
  }
  opportunities: string[]
  status: string
  nextMeeting?: string
}

export interface ChecklistItem {
  id: string
  task: string
  completed: boolean
  priority: 'high' | 'medium' | 'low'
  description?: string
}

export interface Phase {
  id: string
  name: string
  duration: string
  description: string
  deliverables: string[]
}