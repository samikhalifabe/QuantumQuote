"use client"

import React from "react"
import Image from "next/image"
import { Phone, MessageSquare, Mail, User, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { theme } from "@/app/constants/theme"

export function ContactPage() {
  const contactMethods = [
    {
      id: 'phone',
      title: 'Téléphone',
      value: '+32 488 18 24 52',
      href: 'tel:+32488182452',
      icon: Phone,
      description: 'Disponible du lundi au vendredi, 9h-18h',
      bgColor: 'bg-[#3ECF8E]/20',
      iconColor: 'text-[#3ECF8E]'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      value: '+32 488 18 24 52',
      href: 'https://wa.me/32488182452',
      icon: MessageSquare,
      description: 'Réponse rapide et suivi en temps réel',
      bgColor: 'bg-[#3ECF8E]/20',
      iconColor: 'text-[#3ECF8E]'
    },
    {
      id: 'email',
      title: 'Email',
      value: 'sami@indigo-studio.be',
      href: 'mailto:sami@indigo-studio.be',
      icon: Mail,
      description: 'Pour toute demande détaillée',
      bgColor: 'bg-[#3ECF8E]/20',
      iconColor: 'text-[#3ECF8E]'
    }
  ]

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex items-start justify-between mt-12 mb-16">
        <div className="max-w-3xl">
          <h1 className="text-[36px] leading-[40px] font-normal mb-4" style={{ fontFamily: theme.fonts.primary }}>
            <span className="text-[#B4B4B4]">Contactez</span> <span className="text-[#FAFAFA]">votre responsable de projet</span>
          </h1>
          <p className="text-[18px] leading-[28px] font-normal text-[#898989] tracking-normal">
            Restez en contact direct avec votre équipe projet. Choisissez le canal qui vous convient le mieux pour échanger sur votre solution CRM & IA.
          </p>
        </div>
      </div>

      {/* Project Manager Card */}
      <Card className="border border-[#262626] bg-[#171717] rounded-xl">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#3ECF8E]">
              <Image src="/images/sami-profile.jpg" alt="Sami - Responsable de projet" width={64} height={64} className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#FAFAFA] mb-2" style={{ fontFamily: theme.fonts.primary }}>
                Sami
              </h2>
              <p className="text-[#A1A1AA] mb-1">Responsable de projet</p>
              <p className="text-[#71717A] text-sm">Indigo Studio</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactMethods.map((method) => {
          const Icon = method.icon
          return (
            <Card key={method.id} className="border border-[#262626] bg-[#171717] rounded-xl hover:border-[#3ECF8E]/30 transition-all duration-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${method.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${method.iconColor}`} />
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#FAFAFA]" style={{ fontFamily: theme.fonts.primary }}>
                      {method.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <a 
                  href={method.href}
                  target={method.id === 'whatsapp' ? '_blank' : undefined}
                  rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                  className="group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#FAFAFA] font-medium group-hover:text-[#3ECF8E] transition-colors">
                        {method.value}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-[#3ECF8E] transition-colors" />
                    </div>
                    <p className="text-sm text-[#71717A]">{method.description}</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <Card className="border border-[#262626] bg-[#171717] rounded-xl">
        <CardHeader>
          <CardTitle className="text-[#FAFAFA]" style={{ fontFamily: theme.fonts.primary }}>
            Besoin d'assistance rapide ?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-[#1F1F1F] rounded-lg border border-[#262626]">
              <h4 className="font-semibold text-[#FAFAFA] mb-2">Support technique</h4>
              <p className="text-sm text-[#898989] mb-3">
                Pour toute question technique ou problème avec votre solution CRM.
              </p>
              <a 
                href="https://wa.me/32488182452?text=Bonjour,%20j'ai%20besoin%20d'assistance%20technique"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#004D2D] text-white rounded-md text-xs text-center font-medium border border-[#3ECF8E]/30 hover:bg-[#006139] hover:border-[#3ECF8E] transition-all duration-200 ease-out outline-none cursor-pointer"
              >
                Contacter sur WhatsApp
              </a>
            </div>
            <div className="p-4 bg-[#1F1F1F] rounded-lg border border-[#262626]">
              <h4 className="font-semibold text-[#FAFAFA] mb-2">Questions commerciales</h4>
              <p className="text-sm text-[#898989] mb-3">
                Pour discuter de nouvelles fonctionnalités ou tout autre demande.
              </p>
              <a 
                href="mailto:sami@indigo-studio.be?subject=Question%20commerciale%20-%20Projet%20CRM"
                className="inline-flex items-center justify-center px-2.5 py-1 h-[26px] bg-[#181818] text-[#FAFAFA] rounded-md text-xs text-center font-medium border border-[#262626] hover:border-[#404040] transition-all duration-200 ease-out outline-none cursor-pointer"
              >
                Envoyer un email
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Office Info */}
      <Card className="border border-[#262626] bg-[#171717] rounded-xl">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#FAFAFA] mb-4" style={{ fontFamily: theme.fonts.primary }}>
                Horaires de disponibilité
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#898989]">Lundi - Vendredi</span>
                  <span className="text-[#FAFAFA]">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#898989]">Samedi</span>
                  <span className="text-[#FAFAFA]">Sur rendez-vous</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#898989]">Dimanche</span>
                  <span className="text-[#71717A]">Fermé</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#FAFAFA] mb-4" style={{ fontFamily: theme.fonts.primary }}>
                Temps de réponse moyen
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#898989]">WhatsApp</span>
                  <span className="text-[#3ECF8E]">&lt; 30 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#898989]">Email</span>
                  <span className="text-[#FAFAFA]">&lt; 24 heures</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#898989]">Téléphone</span>
                  <span className="text-[#3ECF8E]">Immédiat</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}