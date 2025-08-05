'use client';

import { useRouter } from 'next/navigation';
import { Target, MessageSquare, MapPin, Zap, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { theme } from "@/app/constants/theme";

const phases = [
  {
    id: "phase-1",
    name: "CRM de base",
    icon: Target,
    status: "À venir",
    duration: "4-6 semaines",
    progress: 0,
    color: "text-[#3ECF8E]",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    id: "phase-2",
    name: "Emailing & Prospection",
    icon: MessageSquare,
    status: "Planifié",
    duration: "2-4 semaines",
    progress: 0,
    color: "text-[#3ECF8E]",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    id: "phase-3",
    name: "Optimisation tournées",
    icon: MapPin,
    status: "Planifié",
    duration: "2 semaines",
    progress: 0,
    color: "text-[#3ECF8E]",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    id: "phase-4",
    name: "Automatisation",
    icon: Zap,
    status: "Planifié",
    duration: "2-4 semaines",
    progress: 0,
    color: "text-[#3ECF8E]",
    bgColor: "bg-[#3ECF8E]/20",
  },
  {
    id: "phase-5",
    name: "Assistant Vocal IA",
    icon: Phone,
    status: "Future",
    duration: "À définir",
    progress: 0,
    color: "text-[#3ECF8E]",
    bgColor: "bg-[#3ECF8E]/20",
  },
];

interface PhasesWidgetProps {
  onPhaseClick?: (phaseIndex: number) => void;
}

export function PhasesWidget({ onPhaseClick }: PhasesWidgetProps) {
  const router = useRouter();

  const handlePhaseClick = (phaseIndex: number) => {
    if (onPhaseClick) {
      onPhaseClick(phaseIndex);
    } else {
      router.push(`/roadmap?phase=${phaseIndex}`);
    }
  };

  return (
    <Card className="border border-border bg-card rounded-xl">
      <CardHeader className="pb-4">
        <CardTitle 
          className="text-lg font-semibold text-foreground" 
          style={{ fontFamily: theme.fonts.primary }}
        >
          Phases du projet
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <div
              key={phase.id}
              onClick={() => handlePhaseClick(index)}
              className="flex items-center gap-3 p-3 rounded-lg bg-muted border border-border hover:border-[#3ECF8E]/30 transition-all duration-200 cursor-pointer"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${phase.bgColor}`}>
                <Icon className={`w-4 h-4 ${phase.color}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-foreground" style={{ fontFamily: theme.fonts.primary }}>
                    {phase.name}
                  </h4>
                  <span className="text-xs text-foreground-quaternary">{phase.duration}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-xs ${phase.color}`}>{phase.status}</span>
                  <div className="w-24 h-1 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${phase.bgColor} transition-all duration-300`}
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}