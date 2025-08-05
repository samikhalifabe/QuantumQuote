import { Meeting, ProjectInfo, RoadmapItem, NavigationItem } from "@/app/types"
import {
  Calendar,
  Clock,
  Euro,
  FileText,
  MessageSquare,
  Users,
  Zap,
  CheckCircle2,
  Settings,
  Bell,
  Phone,
} from "lucide-react"

export const navigationItems: NavigationItem[] = [
  {
    id: "summary",
    title: "Dashboard",
    icon: MessageSquare,
  },
  {
    id: "transcript",
    title: "Transcription",
    icon: FileText,
  },
  {
    id: "report",
    title: "Compte-rendu",
    icon: CheckCircle2,
  },
  {
    id: "roadmap",
    title: "Roadmap",
    icon: Zap,
  },
  {
    id: "pricing",
    title: "Tarification",
    icon: Euro,
  },
  {
    id: "separator",
    title: "",
    icon: Phone,
    isSeparator: true,
  },
  {
    id: "contact",
    title: "Contact",
    icon: Phone,
  },
]

export const roadmapItems: RoadmapItem[] = [
  {
    id: "phase-1",
    phase: "Phase 1",
    title: "CRM de base et gestion des prospects",
    duration: "4-6 semaines",
    price: 3500,
    applications: 92,
    date: "Avr 21, 2024",
  },
  {
    id: "phase-2",
    phase: "Phase 2",
    title: "Automatisation des relances et planification",
    duration: "3-4 semaines",
    price: 2800,
    applications: 84,
    date: "Déc 21, 2024",
  },
  {
    id: "phase-3",
    phase: "Phase 3",
    title: "Assistant vocal et appels automatisés",
    duration: "6-8 semaines",
    price: 4200,
    applications: 76,
    date: "Mar 15, 2025",
  },
  {
    id: "phase-4",
    phase: "Phase 4",
    title: "Optimisation avancée et analytics",
    duration: "4-5 semaines",
    price: 3100,
    applications: 68,
    date: "Mai 20, 2025",
  },
]

export const upcomingMeetings: Meeting[] = [
  {
    id: "meeting-1",
    name: "Mathieu",
    role: "Directeur Commercial",
    time: "10:00-12:45",
    avatar: "M",
  },
  {
    id: "meeting-2",
    name: "Eric",
    role: "Responsable Technique",
    time: "14:00-15:30",
    avatar: "E",
  },
  {
    id: "meeting-3",
    name: "Consultant IA",
    role: "Expert Solutions",
    time: "16:00-17:00",
    avatar: "C",
  },
]

export const projectInfos: ProjectInfo[] = [
  {
    id: "info-1",
    icon: Users,
    title: "Équipe dédiée",
    subtitle: "3 développeurs experts",
  },
  {
    id: "info-2",
    icon: Clock,
    title: "Support inclus",
    subtitle: "Support continu inclus",
  },
  {
    id: "info-3",
    icon: CheckCircle2,
    title: "Garantie qualité",
    subtitle: "Tests et validation",
  },
]

export const CALENDAR_DAYS = ["D", "L", "M", "M", "J", "V", "S"]
export const HIGHLIGHTED_DAYS = [3, 10, 17, 24]
export const SELECTED_DAY = 15