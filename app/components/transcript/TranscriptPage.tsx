"use client"

import React, { useState, useEffect } from "react"
import { FileText, Users, MessageSquare, Hash, Clock, Calendar, Download, Share2, Search } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TranscriptMeeting } from "@/app/types"
import { loadAllTranscripts } from "@/app/utils/transcriptParser"
import { theme } from "@/app/constants/theme"

export function TranscriptPage() {
  const [transcripts, setTranscripts] = useState<TranscriptMeeting[]>([])
  const [selectedTranscript, setSelectedTranscript] = useState<TranscriptMeeting | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentTab, setCurrentTab] = useState('selection')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSpeakers, setSelectedSpeakers] = useState<string[]>([])

  // Function to highlight search terms
  const highlightText = (text: string, query: string) => {
    if (!query) return text
    
    const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'))
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} className="bg-[#3ECF8E]/30 text-[#3ECF8E] font-medium">{part}</span> : 
        part
    )
  }

  useEffect(() => {
    async function loadTranscripts() {
      try {
        const loadedTranscripts = await loadAllTranscripts()
        setTranscripts(loadedTranscripts)
        if (loadedTranscripts.length > 0) {
          setSelectedTranscript(loadedTranscripts[0])
          setCurrentTab('content')
        }
      } catch (error) {
        console.error('Failed to load transcripts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadTranscripts()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-foreground-quaternary">Chargement des transcriptions...</p>
      </div>
    )
  }

  if (transcripts.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-foreground-quaternary">Aucune transcription disponible</p>
      </div>
    )
  }

  const tabs = [
    { id: 'selection', label: 'Sélection', icon: <FileText className="w-4 h-4" /> },
    { id: 'content', label: 'Transcription', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'stats', label: 'Statistiques', icon: <Users className="w-4 h-4" /> }
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-start justify-between mt-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-[36px] leading-[40px] font-normal mb-4" style={{ fontFamily: theme.fonts.primary }}>
            <span className="text-foreground-secondary">Transcriptions</span> <span className="text-foreground">des réunions</span>
          </h1>
          <p className="text-[18px] leading-[28px] font-normal text-foreground-quaternary tracking-normal">
            Consultez et analysez les transcriptions détaillées de vos réunions commerciales.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-supabase h-[26px]">
            <Download className="w-3 h-3 mr-1" />
            Exporter
          </button>
          <button className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-secondary text-secondary-foreground rounded-md text-xs text-center font-medium border border-border hover:border-border-secondary transition-all duration-200 ease-out outline-none cursor-pointer">
            <Share2 className="w-3 h-3 mr-1" />
            Partager
          </button>
        </div>
      </div>

      {/* Transcript Info Card */}
      {selectedTranscript && (
        <Card className="border border-border bg-card rounded-xl">
          <CardContent className="p-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: theme.fonts.primary }}>
                  Réunion de définition des besoins métiers
                </h2>
                <div className="flex items-center gap-6 text-sm text-foreground-tertiary">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {selectedTranscript.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {selectedTranscript.duration}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    3 participants
                  </span>
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    {selectedTranscript.segments.length} échanges
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setCurrentTab(tab.id)}
            disabled={!selectedTranscript && tab.id !== 'selection'}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 relative ${
              currentTab === tab.id
                ? 'text-foreground'
                : 'text-foreground-quaternary hover:text-foreground-tertiary disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
            style={{ fontFamily: theme.fonts.primary }}
          >
            {tab.icon}
            <span>{tab.label}</span>
            {/* Active indicator line */}
            <div 
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[#3ECF8E] transition-all duration-200 ${
                currentTab === tab.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {/* Selection Tab */}
        {currentTab === 'selection' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {transcripts.map((transcript) => (
              <Card 
                key={transcript.id}
                className="border border-border bg-card rounded-xl cursor-pointer hover:border-[#3ECF8E] transition-colors"
                onClick={() => {
                  setSelectedTranscript(transcript)
                  setCurrentTab('content')
                }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">Réunion de définition des besoins métiers</h3>
                  <div className="space-y-2 text-sm text-foreground-quaternary">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {transcript.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {transcript.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <Users className="w-3 h-3" />
                      3 participants
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Content Tab */}
        {currentTab === 'content' && selectedTranscript && (
          <div className="space-y-4">
            {/* Search and Filters */}
            <div className="space-y-3">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground-quaternary" />
                <input
                  type="text"
                  placeholder="Rechercher dans la transcription..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground-quaternary focus:outline-none focus:border-[#3ECF8E] transition-colors"
                  style={{ fontFamily: theme.fonts.primary }}
                />
              </div>
              
              {/* Keywords */}
              {selectedTranscript && selectedTranscript.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedTranscript.keywords.slice(0, 8).map((keyword, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(keyword)}
                      className="btn-supabase h-[26px]"
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              )}
              
              {/* Speaker Filters */}
              {selectedTranscript && (
                <div className="flex flex-wrap gap-2">
                  {selectedTranscript.speakers.slice(0, 3).map((speaker) => {
                    const isSelected = selectedSpeakers.includes(speaker.id)
                    return (
                      <label
                        key={speaker.id}
                        className="inline-flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedSpeakers([...selectedSpeakers, speaker.id])
                            } else {
                              setSelectedSpeakers(selectedSpeakers.filter(id => id !== speaker.id))
                            }
                          }}
                          className="sr-only"
                        />
                        <div
                          className={`inline-flex items-center justify-center px-2.5 py-1 h-[26px] rounded-md text-xs text-center font-medium transition-all duration-200 ease-out outline-none cursor-pointer ${
                            isSelected
                              ? 'bg-[#3ECF8E]/20 text-[#3ECF8E] border border-[#3ECF8E]/30'
                              : 'bg-secondary text-foreground border border-border hover:border-border-secondary'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full mr-1.5 ${
                            isSelected ? 'bg-[#3ECF8E]-foreground' : 'bg-foreground-tertiary'
                          }`} />
                          {speaker.name}
                        </div>
                      </label>
                    )
                  })}
                </div>
              )}
            </div>
            
            <Card className="border border-border bg-card rounded-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {selectedTranscript.segments
                    .filter(segment => {
                      // Filter by speakers
                      if (selectedSpeakers.length > 0 && !selectedSpeakers.includes(segment.speakerId)) return false
                      
                      // Filter by search query
                      if (searchQuery) {
                        return segment.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                               selectedTranscript.speakers.find(s => s.id === segment.speakerId)?.name.toLowerCase().includes(searchQuery.toLowerCase())
                      }
                      
                      return true
                    })
                    .map((segment, index) => {
                  const speaker = selectedTranscript.speakers.find(s => s.id === segment.speakerId)
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-[#3ECF8E]/20 rounded-full flex items-center justify-center font-bold text-[#3ECF8E] border border-[#3ECF8E]/30">
                          {speaker?.initials || '?'}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 mb-1">
                          <span className="font-semibold text-foreground">{speaker?.name || 'Inconnu'}</span>
                          <span className="text-xs text-foreground-quaternary">{segment.timestamp}</span>
                        </div>
                        <p className="text-foreground-tertiary leading-relaxed">{highlightText(segment.content, searchQuery)}</p>
                      </div>
                    </div>
                  )
                  })}
                  {(searchQuery || selectedSpeakers.length > 0) && selectedTranscript.segments.filter(segment => {
                    if (selectedSpeakers.length > 0 && !selectedSpeakers.includes(segment.speakerId)) return false
                    if (searchQuery) {
                      return segment.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             selectedTranscript.speakers.find(s => s.id === segment.speakerId)?.name.toLowerCase().includes(searchQuery.toLowerCase())
                    }
                    return true
                  }).length === 0 && (
                    <div className="text-center py-8 text-foreground-quaternary">
                      Aucun résultat trouvé
                      {searchQuery && ` pour "${searchQuery}"`}
                      {selectedSpeakers.length > 0 && ` avec les filtres sélectionnés`}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stats Tab */}
        {currentTab === 'stats' && selectedTranscript && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(() => {
              const totalWords = selectedTranscript.segments.reduce((acc, seg) => acc + (seg.content || '').split(' ').length, 0)
              // Only show first 3 speakers
              return selectedTranscript.speakers.slice(0, 3).map((speaker) => {
                const speakerSegments = selectedTranscript.segments.filter(s => s.speakerId === speaker.id)
                const wordCount = speakerSegments.reduce((acc, seg) => acc + (seg.content || '').split(' ').length, 0)
                const percentage = totalWords > 0 ? Math.round((wordCount / totalWords) * 100) : 0
              
              return (
                <Card key={speaker.id} className="border border-border bg-card rounded-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#3ECF8E]/20 rounded-full flex items-center justify-center font-bold text-[#3ECF8E] text-lg border border-[#3ECF8E]/30">
                        {speaker.initials}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{speaker.name}</h3>
                        <p className="text-sm text-foreground-quaternary">{speaker.role}</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground-quaternary">Interventions</span>
                        <span className="text-sm font-medium text-foreground">{speakerSegments.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground-quaternary">Mots prononcés</span>
                        <span className="text-sm font-medium text-foreground">{wordCount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-foreground-quaternary">Temps de parole</span>
                        <span className="text-sm font-medium text-foreground">{percentage}%</span>
                      </div>
                      <div className="mt-3">
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div 
                            className="bg-[#3ECF8E] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })
            })()}
          </div>
        )}

      </div>
    </div>
  )
}