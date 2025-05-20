'use client';

import { useState } from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs';
import { Button } from '@/shared/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/shared/components/ui/dialog';
import { Checkbox } from '@/shared/components/ui/checkbox';
import {
  MessageSquare,
  Users,
  Calendar,
  MapPin,
  ArrowLeft
} from 'lucide-react';
import { teams } from '@/shared/lib/data';
import type { TeamMember } from '@/shared/lib/types';
import { CircularLayout } from '@/shared/components/layout/circular-layout';
import Link from 'next/link';

export default function CircularView() {
  const [selectedTeam, setSelectedTeam] = useState('team1');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

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

  const totalPrice = selectedTeams.length * 1500; // $1500 por equipo

  return (
    <div className='min-h-screen bg-[#050A1A] text-white'>
      {/* Header */}
      <header className='border-b border-[#1A2035] p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-2xl font-bold'>
            <span className='text-white'>
              N<span className='text-[#FF2D8A]'>o</span>Country
            </span>
          </div>
          <div className='flex gap-6'>
            <span>Simulación Laboral</span>
            <span>Hackathon</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto py-8 px-4'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-3xl font-bold'>Vista Circular de Equipos</h1>
          <Link href='/'>
            <Button
              variant='outline'
              className='border-[#1A2035] text-white hover:bg-[#1A2035]'
            >
              <ArrowLeft className='mr-2 h-4 w-4' />
              Vista Estándar
            </Button>
          </Link>
        </div>

        <Tabs
          defaultValue='team1'
          value={selectedTeam}
          onValueChange={setSelectedTeam}
          className='w-full'
        >
          <TabsList className='w-full justify-start mb-8 bg-[#0A1428] border border-[#1A2035] overflow-x-auto'>
            {teams.map(team => (
              <TabsTrigger
                key={team.id}
                value={team.id}
                className='data-[state=active]:bg-[#1A2035] data-[state=active]:text-[#FF2D8A]'
              >
                {team.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {teams.map(team => (
            <TabsContent key={team.id} value={team.id} className='space-y-8'>
              <div className='flex flex-col gap-6'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-2xl font-bold'>
                    {team.name} - {team.project}
                  </h2>
                  <Button
                    onClick={() => setIsDialogOpen(true)}
                    className='bg-[#FF2D8A] hover:bg-[#D91A70] text-white'
                  >
                    Ver Insights
                  </Button>
                </div>

                {/* Team Insights */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-8'>
                  <div className='bg-[#0A1428] border border-[#1A2035] rounded-lg p-4 flex items-center gap-4'>
                    <div className='bg-[#1A2035] p-3 rounded-full'>
                      <MessageSquare className='text-[#FF2D8A] h-6 w-6' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>Mensajes enviados</p>
                      <p className='text-xl font-bold'>
                        {team.insights.messages}
                      </p>
                    </div>
                  </div>
                  <div className='bg-[#0A1428] border border-[#1A2035] rounded-lg p-4 flex items-center gap-4'>
                    <div className='bg-[#1A2035] p-3 rounded-full'>
                      <Users className='text-[#00D1FF] h-6 w-6' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>Participación</p>
                      <p className='text-xl font-bold'>
                        {team.insights.participation}%
                      </p>
                    </div>
                  </div>
                  <div className='bg-[#0A1428] border border-[#1A2035] rounded-lg p-4 flex items-center gap-4'>
                    <div className='bg-[#1A2035] p-3 rounded-full'>
                      <Calendar className='text-[#00FF85] h-6 w-6' />
                    </div>
                    <div>
                      <p className='text-sm text-gray-400'>Asistencia</p>
                      <p className='text-xl font-bold'>
                        {team.insights.attendance}%
                      </p>
                    </div>
                  </div>
                </div>

                {/* Circular Layout */}
                <CircularLayout
                  members={team.members}
                  onMemberClick={openInsightsDialog}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      {/* Insights Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className='bg-[#0A1428] border border-[#1A2035] text-white max-w-4xl'>
          <DialogHeader>
            <DialogTitle className='text-2xl'>Selección de Equipos</DialogTitle>
            <DialogDescription className='text-gray-400'>
              Selecciona hasta 5 equipos para contratar
            </DialogDescription>
          </DialogHeader>

          {selectedMember && (
            <div className='bg-[#050A1A] rounded-lg p-4 mb-6'>
              <div className='flex items-start gap-4'>
                <div className='w-24 h-24 rounded-full overflow-hidden border-2 border-[#1A2035]'>
                  <img
                    src={selectedMember.avatar || '/placeholder.svg'}
                    alt={selectedMember.name}
                    className='w-full h-full object-cover'
                  />
                </div>

                <div className='flex-1'>
                  <h3 className='font-bold text-xl'>{selectedMember.name}</h3>
                  <p className='text-[#FF2D8A] font-medium'>
                    {selectedMember.role}
                  </p>

                  <div className='flex items-center mt-2 text-sm text-gray-400'>
                    <MapPin className='h-4 w-4 mr-1' />
                    {selectedMember.location}
                  </div>

                  <div className='grid grid-cols-3 gap-4 mt-4'>
                    <div>
                      <p className='text-gray-400'>Edad</p>
                      <p className='font-bold'>{selectedMember.age} años</p>
                    </div>
                    <div>
                      <p className='text-gray-400'>Experiencia</p>
                      <p className='font-bold'>
                        {selectedMember.experience} años
                      </p>
                    </div>
                    <div>
                      <p className='text-gray-400'>Inglés</p>
                      <p className='font-bold'>{selectedMember.english}</p>
                    </div>
                  </div>

                  <div className='mt-4'>
                    <p className='text-gray-400'>Habilidades</p>
                    <div className='flex flex-wrap gap-2 mt-2'>
                      {selectedMember.skills.map((skill, index) => (
                        <span
                          key={index}
                          className='text-xs py-1 px-2 rounded-full bg-[#1A2035] text-white'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className='space-y-4'>
            <h4 className='font-medium'>Equipos disponibles:</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              {teams.map(team => (
                <div
                  key={team.id}
                  className={`border rounded-lg p-4 flex items-center gap-3 cursor-pointer transition-colors ${
                    selectedTeams.includes(team.id)
                      ? 'border-[#FF2D8A] bg-[#FF2D8A]/10'
                      : 'border-[#1A2035] hover:border-[#FF2D8A]/50'
                  }`}
                  onClick={() => handleTeamSelection(team.id)}
                >
                  <Checkbox
                    checked={selectedTeams.includes(team.id)}
                    onCheckedChange={() => handleTeamSelection(team.id)}
                    className='data-[state=checked]:bg-[#FF2D8A] data-[state=checked]:border-[#FF2D8A]'
                  />
                  <div>
                    <p className='font-medium'>{team.name}</p>
                    <p className='text-sm text-gray-400'>{team.project}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-[#050A1A] rounded-lg p-4 mt-4'>
            <div className='flex justify-between items-center'>
              <div>
                <p className='text-gray-400'>Equipos seleccionados:</p>
                <p className='font-bold text-xl'>{selectedTeams.length} / 5</p>
              </div>
              <div>
                <p className='text-gray-400'>Precio total:</p>
                <p className='font-bold text-xl'>
                  ${totalPrice.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant='outline'
              onClick={() => setIsDialogOpen(false)}
              className='border-[#1A2035] text-white hover:bg-[#1A2035]'
            >
              Cancelar
            </Button>
            <Button
              className='bg-[#FF2D8A] hover:bg-[#D91A70] text-white'
              disabled={selectedTeams.length === 0}
            >
              Comprar ({selectedTeams.length})
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
