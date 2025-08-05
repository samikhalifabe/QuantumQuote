import { TranscriptMeeting, TranscriptSpeaker, TranscriptSegment } from "@/app/types"

export const transcriptSpeakers: TranscriptSpeaker[] = [
  {
    id: "speaker-1",
    name: "Mathieu",
    percentage: 72,
    color: "#51459e"
  },
  {
    id: "speaker-2", 
    name: "Consultant IA",
    percentage: 12,
    color: "#06b6d4"
  },
  {
    id: "speaker-3",
    name: "Eric",
    percentage: 10,
    color: "#f59e0b"
  }
]

export const transcriptSegments: TranscriptSegment[] = [
  {
    id: "segment-1",
    speakerId: "speaker-1",
    timestamp: "0:00",
    content: "Qu'ils n'ont pas le budget etc mais nous on sait pas travailler avec un catalogue en italien donc du coup Eric l'a mis dans ChatGPT mais il faut tout entier à mon avis j'en ai pour trois semaines"
  },
  {
    id: "segment-2",
    speakerId: "speaker-2",
    timestamp: "0:16",
    content: "Parfois c'est pas très rentable en termes de temps ce que je vais faire si ça vous dérange pas je vais enregistrer la réunion comme ça je pourrais vous envoyer le compte rendu par rapport à ce qu'on s'est dit et du coup ouais c'est ça que Mathieu m'a expliqué un petit peu hier et je lui expliquais qu'effectivement donc il ya ChatGPT qui existe et puis il y a tout plein d'autres moteurs d'intelligence artificielle qui existent..."
  },
  {
    id: "segment-3",
    speakerId: "speaker-1",
    timestamp: "3:01",
    content: "Depuis que j'ai ChatGPT, je l'ai un peu programmé comme un assistant virtuel d'aide un peu comme un secrétaire. Bon ça a ses limites quand même. Tu vois par exemple, je lui ai demandé aussi de chercher sur le web ce qu'on a aussi un type de clientèle un peu brico tu vois un peu comme si matériaux comme le magasin que j'avais..."
  },
  {
    id: "segment-4",
    speakerId: "speaker-3",
    timestamp: "3:54",
    content: "ChatGPT quand il ne trouve pas, il invente avec tes listes. Il m'a inventé des adresses et finalement c'était toutes les mêmes et après il me dit oui mais je n'avais pas le temps de réaliser le travail. Donc je vous ai fait ce que je pourrais faire."
  },
  {
    id: "segment-5",
    speakerId: "speaker-2",
    timestamp: "4:19",
    content: "C'est ce qu'on appelle en intelligence artificielle les hallucinations donc c'est le fait que comme c'est un système de probabilité il doit donner une réponse et s'il n'a pas de réponse il va chercher le plus probable..."
  },
  {
    id: "segment-6",
    speakerId: "speaker-2",
    timestamp: "7:11",
    content: "Par exemple, pour donner un exemple concret, moi je me suis développé une app pour Mr Patrick, donc j'utilise ma voiture privée dans ma société et ça m'embêtait chaque fois devoir calculer tiens de tel endroit à tel endroit..."
  },
  {
    id: "segment-7",
    speakerId: "speaker-1",
    timestamp: "12:51",
    content: "À terme, à terme idéal, ce serait un système qui nous prévoit carrément nos semaines de visite avec des rendez-vous parce qu'aujourd'hui, avoir des gens dans le coin, c'est un peu ce que je fais"
  },
  {
    id: "segment-8",
    speakerId: "speaker-2",
    timestamp: "19:12",
    content: "C'est ça. Mais ça par exemple, ce qu'on fait, c'est qu'on met en place donc la base de données avec tous les prospects. On met dedans le compte rendu de la visite enfin la date surtout et alors on prévoit des relances automatiques au niveau message ou au niveau appel téléphonique..."
  },
  {
    id: "segment-9",
    speakerId: "speaker-1",
    timestamp: "21:26",
    content: "Ça qui est bien parce qu'il pourrait gérer des campagnes d'emailing pour pouvoir toucher un maximum de monde et cibler à grande échelle. Et puis en parallèle aussi quand il y aura cet aspect technologie vocale voir gérer aussi des rendez-vous générer des rendez-vous..."
  },
  {
    id: "segment-10",
    speakerId: "speaker-2",
    timestamp: "25:50",
    content: "Oui c'est ça. Et le but ici c'est vraiment de se dire toutes les tâches qui sont répétitives, qui sont hyper chronophages et où en fait en réalité j'apporte de la valeur mais une IA pourrait le faire à ma place ça c'est délégué..."
  }
]

export const transcriptMeeting: TranscriptMeeting = {
  id: "meeting-mathieu-1",
  title: "Réunion de définition des besoins métiers",
  date: "2024-12-04",
  duration: "29:25",
  speakers: transcriptSpeakers,
  segments: transcriptSegments,
  keywords: [
    "ChatGPT",
    "intelligence artificielle", 
    "traitement de documents",
    "traduction automatique",
    "outils de code",
    "système de code",
    "transformation de fichiers",
    "recherche approfondie",
    "mode vocal",
    "CRM",
    "base de données",
    "gestion de clients",
    "rendez-vous automatiques",
    "efficience",
    "développement d'applications"
  ],
  summary: "Discussion sur les besoins en CRM et intelligence artificielle. Les participants explorent les possibilités d'automatisation des tâches répétitives, la gestion des prospects, les relances automatiques et l'intégration d'outils IA pour optimiser le travail commercial."
}