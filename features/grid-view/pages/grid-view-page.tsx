"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BarChart2 } from "lucide-react"
import { TeamCard } from "@/features/teams/components/team-card"
import { TeamInsightsModal } from "@/features/teams/components/team-insights-modal"
import { useTeams } from "@/features/teams/hooks/use-teams"
import type { TeamMember } from "@/features/teams/types"
import { DashboardHeader } from "@/features/dashboard/components/dashboard-header"
import { DashboardLayout } from "@/features/dashboard/components/dashboard-layout"
import { TeamInsights } from "@/features/teams/components/team-insights"
import { DashboardNavigation } from "@/features/dashboard/components/dashboard-navigation"

export function GridViewPage() {
  const { teams, loading } = useTeams()
  const [selectedTeam, setSelectedTeam] = useState(teams[0]?.id || "")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTeams, setSelectedTeams] = useState<string[]>([])
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const currentTeam = teams.find((team) => team.id === selectedTeam)

  const handleTeamSelection = (teamId: string) => {
    if (selectedTeams.includes(teamId)) {
      setSelectedTeams(selectedTeams.filter((id) => id !== teamId))
    } else {
      if (selectedTeams.length < 5) {
        setSelectedTeams([...selectedTeams, teamId])
      }
    }
  }

  const openInsightsDialog = (member: TeamMember) => {
    setSelectedMember(member)
    setIsDialogOpen(true)
  }

  return (
    <DashboardLayout>
      <DashboardHeader />

      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FF2D8A] to-[#00D1FF] text-transparent bg-clip-text">
              Panel de Seguimiento de Equipos
            </h1>
            <p className="text-gray-400 mt-2">
              Visualiza y analiza el rendimiento de los equipos en tu simulación laboral
            </p>
          </div>

          <DashboardNavigation />
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-[400px] bg-[#050A1A] rounded-lg border border-[#1A2035]">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-t-[#FF2D8A] border-r-transparent border-b-[#00D1FF] border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Cargando datos de equipos...</p>
            </div>
          </div>
        ) : (
          <Tabs defaultValue={teams[0]?.id} value={selectedTeam} onValueChange={setSelectedTeam} className="w-full">
            <div className="relative">
              <div className="absolute -top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF2D8A]/0 via-[#FF2D8A] to-[#FF2D8A]/0"></div>
              <TabsList className="w-full justify-start mb-8 bg-[#0A1428] border border-[#1A2035] overflow-x-auto">
                {teams.map((team) => (
                  <TabsTrigger
                    key={team.id}
                    value={team.id}
                    className="data-[state=active]:bg-[#1A2035] data-[state=active]:text-[#FF2D8A] data-[state=active]:border-t-2 data-[state=active]:border-t-[#FF2D8A]"
                  >
                    {team.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {teams.map((team) => (
              <TabsContent key={team.id} value={team.id} className="space-y-8 animate-in fade-in-50 duration-300">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold flex items-center gap-2">
                        {team.name}
                        <span className="text-[#FF2D8A]">•</span>
                        <span className="text-gray-400 font-normal">{team.project}</span>
                      </h2>
                      <p className="text-sm text-gray-400 mt-1">
                        Semana 3 de 5 • {team.members.length} participantes • Proyecto activo
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsDialogOpen(true)}
                      className="bg-[#FF2D8A] hover:bg-[#D91A70] text-white"
                    >
                      <BarChart2 className="mr-2 h-4 w-4" />
                      Ver Insights
                    </Button>
                  </div>

                  {/* Team Insights */}
                  <TeamInsights insights={team.insights} />

                  {/* Team Members Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.members.map((member) => (
                      <TeamCard key={member.id} member={member} onClick={() => openInsightsDialog(member)} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        )}
      </main>

      {/* Insights Modal */}
      <TeamInsightsModal
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedMember={selectedMember}
        teams={teams}
        selectedTeams={selectedTeams}
        onTeamSelection={handleTeamSelection}
      />
    </DashboardLayout>
  )
}
