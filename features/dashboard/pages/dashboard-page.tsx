'use client';

import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs';
import { Button } from '@/shared/components/ui/button';
import { BarChart2 } from 'lucide-react';
import { TeamCard } from '@/features/teams/components/team-card';
import { TeamInsightsModal } from '@/features/teams/components/team-insights-modal';
import type { TeamMember } from '@/features/teams/types';
import { DashboardHeader } from '@/features/dashboard/components/dashboard-header';
import { DashboardLayout } from '@/features/dashboard/components/dashboard-layout';
import { TeamInsights } from '@/features/teams/components/team-insights';
import { DashboardNavigation } from '@/features/dashboard/components/dashboard-navigation';
import {
  useTeamsQuery,
  useTeamQuery
} from '@/features/teams/hooks/use-teams-query';

export function DashboardPage() {
  const { data: teams = [], isLoading: isLoadingTeams } = useTeamsQuery();
  const [selectedTeamId, setSelectedTeamId] = useState<string | undefined>(
    teams[0]?.id
  );

  const { data: currentTeam, isLoading: isLoadingTeam } = useTeamQuery(
    selectedTeamId ?? ''
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTeamsForPurchase, setSelectedTeamsForPurchase] = useState<
    string[]
  >([]);
  const [selectedMemberForModal, setSelectedMemberForModal] =
    useState<TeamMember | null>(null);

  const handleTeamSelectionForPurchase = (teamId: string) => {
    if (selectedTeamsForPurchase.includes(teamId)) {
      setSelectedTeamsForPurchase(prev => prev.filter(id => id !== teamId));
    } else {
      if (selectedTeamsForPurchase.length < 5) {
        setSelectedTeamsForPurchase(prev => [...prev, teamId]);
      }
    }
  };

  const openMemberInsightsDialog = (member: TeamMember) => {
    setSelectedMemberForModal(member);
    setIsDialogOpen(true);
  };

  const openGeneralInsightsDialog = () => {
    setSelectedMemberForModal(null);
    setIsDialogOpen(true);
  };

  const handleTabChange = (teamId: string) => {
    setSelectedTeamId(teamId);
  };

  if (isLoadingTeams) {
    return (
      <DashboardLayout>
        <div className='flex items-center justify-center h-screen'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#FF2D8A]'></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <DashboardHeader />

      <main className='container mx-auto py-8 px-4'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
          <div>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-[#FF2D8A] to-[#00D1FF] text-transparent bg-clip-text'>
              Panel de Seguimiento de Equipos
            </h1>
            <p className='text-gray-400 mt-2'>
              Visualiza y analiza el rendimiento de los equipos en tu simulación
              laboral
            </p>
          </div>
          <DashboardNavigation />
        </div>

        {teams.length > 0 ? (
          <Tabs
            value={selectedTeamId}
            onValueChange={handleTabChange}
            className='w-full'
          >
            <div className='relative'>
              <div className='absolute -top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF2D8A]/0 via-[#FF2D8A] to-[#FF2D8A]/0'></div>
              <TabsList className='w-full justify-start mb-8 bg-[#0A1428] border border-[#1A2035] overflow-x-auto'>
                {teams.map(team => (
                  <TabsTrigger
                    key={team.id}
                    value={team.id}
                    className='data-[state=active]:bg-[#1A2035] data-[state=active]:text-[#FF2D8A] data-[state=active]:border-t-2 data-[state=active]:border-t-[#FF2D8A]'
                  >
                    {team.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {currentTeam && (
              <TabsContent
                key={currentTeam.id}
                value={currentTeam.id}
                className='space-y-8 animate-in fade-in-50 duration-300'
              >
                <div className='flex flex-col gap-6'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <h2 className='text-2xl font-bold flex items-center gap-2'>
                        {currentTeam.name}
                        <span className='text-[#FF2D8A]'>•</span>
                        <span className='text-gray-400 font-normal'>
                          {currentTeam.project}
                        </span>
                      </h2>
                      <p className='text-sm text-gray-400 mt-1'>
                        Semana 3 de 5 • {currentTeam.members.length}{' '}
                        participantes • Proyecto activo
                      </p>
                    </div>
                    <Button
                      onClick={openGeneralInsightsDialog}
                      className='bg-[#FF2D8A] hover:bg-[#D91A70] text-white'
                    >
                      <BarChart2 className='mr-2 h-4 w-4' />
                      Ver Insights
                    </Button>
                  </div>

                  {isLoadingTeam ? (
                    <div className='flex justify-center py-8'>
                      <div className='animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#FF2D8A]'></div>
                    </div>
                  ) : (
                    <>
                      <TeamInsights
                        team={currentTeam}
                        insights={currentTeam.insights}
                      />

                      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {currentTeam.members.map(member => (
                          <TeamCard
                            key={member.id}
                            member={member}
                            onClick={() => openMemberInsightsDialog(member)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>
            )}
          </Tabs>
        ) : (
          <p className='text-center text-gray-400'>
            No hay equipos para mostrar.
          </p>
        )}
      </main>

      <TeamInsightsModal
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        selectedMember={selectedMemberForModal}
        teams={teams}
        selectedTeams={selectedTeamsForPurchase}
        onTeamSelection={handleTeamSelectionForPurchase}
      />
    </DashboardLayout>
  );
}
