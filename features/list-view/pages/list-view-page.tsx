'use client';

import { useState, useEffect } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs';
import { Button } from '@/shared/components/ui/button';
import { BarChart2, Search, Filter, SortAsc } from 'lucide-react';
import { TeamInsightsModal } from '@/features/teams/components/team-insights-modal';
import { useTeams } from '@/features/teams/hooks/use-teams';
import type { TeamMember } from '@/features/teams/types';
import { DashboardHeader } from '@/features/dashboard/components/dashboard-header';
import { DashboardLayout } from '@/features/dashboard/components/dashboard-layout';
import { TeamInsights } from '@/features/teams/components/team-insights';
import { DashboardNavigation } from '@/features/dashboard/components/dashboard-navigation';
import { Input } from '@/shared/components/ui/input';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/shared/components/ui/avatar';
import { Badge } from '@/shared/components/ui/badge';
import { Progress } from '@/shared/components/ui/progress';

export function ListViewPage() {
  const { teams, loading } = useTeams();
  const [selectedTeam, setSelectedTeam] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentTeam = teams.find(team => team.id === selectedTeam);

  const filteredMembers =
    currentTeam?.members.filter(
      member =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.skills.some(skill =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
    ) || [];

  const handleTeamSelection = (teamId: string) => {
    if (selectedTeams.includes(teamId)) {
      setSelectedTeams(selectedTeams.filter(id => id !== teamId));
    } else {
      if (selectedTeams.length < 5) {
        setSelectedTeams([...selectedTeams, teamId]);
      }
    }
  };

  const openInsightsDialog = (member: TeamMember) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  // Set initial selected team once teams are loaded
  useEffect(() => {
    if (teams.length > 0 && !selectedTeam) {
      setSelectedTeam(teams[0].id);
    }
  }, [teams, selectedTeam]);

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
              Vista detallada en formato lista de los miembros del equipo
            </p>
          </div>

          <DashboardNavigation />
        </div>

        {loading ? (
          <div className='flex items-center justify-center h-[400px] bg-[#050A1A] rounded-lg border border-[#1A2035]'>
            <div className='text-center'>
              <div className='w-12 h-12 border-4 border-t-[#FF2D8A] border-r-transparent border-b-[#00D1FF] border-l-transparent rounded-full animate-spin mx-auto mb-4'></div>
              <p className='text-gray-400'>Cargando datos de equipos...</p>
            </div>
          </div>
        ) : (
          <Tabs
            defaultValue={teams[0]?.id}
            value={selectedTeam}
            onValueChange={setSelectedTeam}
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

            {teams.map(team => (
              <TabsContent
                key={team.id}
                value={team.id}
                className='space-y-8 animate-in fade-in-50 duration-300'
              >
                <div className='flex flex-col gap-6'>
                  <div className='flex justify-between items-center'>
                    <div>
                      <h2 className='text-2xl font-bold flex items-center gap-2'>
                        {team.name}
                        <span className='text-[#FF2D8A]'>•</span>
                        <span className='text-gray-400 font-normal'>
                          {team.project}
                        </span>
                      </h2>
                      <p className='text-sm text-gray-400 mt-1'>
                        Semana 3 de 5 • {team.members.length} participantes •
                        Proyecto activo
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsDialogOpen(true)}
                      className='bg-[#FF2D8A] hover:bg-[#D91A70] text-white'
                    >
                      <BarChart2 className='mr-2 h-4 w-4' />
                      Ver Insights
                    </Button>
                  </div>

                  {/* Team Insights */}
                  <TeamInsights insights={team.insights} />

                  {/* Search and filters */}
                  <div className='flex flex-col md:flex-row gap-4 items-center'>
                    <div className='relative flex-1'>
                      <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                      <Input
                        placeholder='Buscar por nombre, rol, ubicación o habilidad...'
                        className='pl-10 bg-[#0A1428] border-[#1A2035] text-white'
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className='flex gap-2'>
                      <Button
                        variant='outline'
                        className='border-[#1A2035] text-white hover:bg-[#1A2035]'
                      >
                        <Filter className='mr-2 h-4 w-4' />
                        Filtrar
                      </Button>
                      <Button
                        variant='outline'
                        className='border-[#1A2035] text-white hover:bg-[#1A2035]'
                      >
                        <SortAsc className='mr-2 h-4 w-4' />
                        Ordenar
                      </Button>
                    </div>
                  </div>

                  {/* Team Members List */}
                  <div className='bg-[#050A1A] rounded-lg border border-[#1A2035] overflow-hidden'>
                    <div className='grid grid-cols-12 gap-4 p-4 border-b border-[#1A2035] bg-[#0A1428]'>
                      <div className='col-span-4 font-medium'>Miembro</div>
                      <div className='col-span-2 font-medium'>Rol</div>
                      <div className='col-span-2 font-medium'>Ubicación</div>
                      <div className='col-span-1 font-medium text-center'>
                        Mensajes
                      </div>
                      <div className='col-span-1 font-medium text-center'>
                        Participación
                      </div>
                      <div className='col-span-1 font-medium text-center'>
                        Asistencia
                      </div>
                      <div className='col-span-1 font-medium text-center'>
                        Acciones
                      </div>
                    </div>

                    {filteredMembers.length === 0 ? (
                      <div className='p-8 text-center text-gray-400'>
                        No se encontraron miembros que coincidan con la búsqueda
                      </div>
                    ) : (
                      filteredMembers.map(member => (
                        <div
                          key={member.id}
                          className='grid grid-cols-12 gap-4 p-4 border-b border-[#1A2035] hover:bg-[#0A1428]/50 transition-colors'
                        >
                          <div className='col-span-4 flex items-center gap-3'>
                            <Avatar className='h-10 w-10 border border-[#1A2035]'>
                              <AvatarImage
                                src={member.avatar || '/placeholder.svg'}
                                alt={member.name}
                              />
                              <AvatarFallback className='bg-[#1A2035]'>
                                {member.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className='font-medium'>{member.name}</p>
                              <div className='flex flex-wrap gap-1 mt-1'>
                                {member.skills
                                  .slice(0, 2)
                                  .map((skill, index) => (
                                    <Badge
                                      key={index}
                                      variant='outline'
                                      className='bg-[#1A2035] border-none text-xs py-0 px-1'
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                {member.skills.length > 2 && (
                                  <Badge
                                    variant='outline'
                                    className='bg-[#1A2035] border-none text-xs py-0 px-1'
                                  >
                                    +{member.skills.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className='col-span-2 flex items-center'>
                            <span className='text-[#FF2D8A]'>
                              {member.role}
                            </span>
                          </div>
                          <div className='col-span-2 flex items-center text-sm text-gray-400'>
                            {member.location}
                          </div>
                          <div className='col-span-1 flex flex-col items-center justify-center'>
                            <span className='font-medium'>
                              {member.stats.messages}
                            </span>
                          </div>
                          <div className='col-span-1 flex flex-col items-center justify-center'>
                            <span className='font-medium'>
                              {member.stats.participation}%
                            </span>
                            <Progress
                              value={member.stats.participation}
                              className='h-1 w-12 mt-1 bg-[#1A2035]'
                            >
                              <div className='h-full bg-[#00D1FF]' />
                            </Progress>
                          </div>
                          <div className='col-span-1 flex flex-col items-center justify-center'>
                            <span className='font-medium'>
                              {member.stats.attendance}%
                            </span>
                            <Progress
                              value={member.stats.attendance}
                              className='h-1 w-12 mt-1 bg-[#1A2035]'
                            >
                              <div className='h-full bg-[#00FF85]' />
                            </Progress>
                          </div>
                          <div className='col-span-1 flex items-center justify-center'>
                            <Button
                              size='sm'
                              variant='ghost'
                              className='h-8 hover:bg-[#1A2035] hover:text-[#FF2D8A]'
                              onClick={() => openInsightsDialog(member)}
                            >
                              Ver
                            </Button>
                          </div>
                        </div>
                      ))
                    )}
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
  );
}
