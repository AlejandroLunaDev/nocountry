'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Check, X, ChevronRight } from 'lucide-react';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Checkbox } from '@/shared/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/shared/components/ui/dialog';
import { Progress } from '@/shared/components/ui/progress';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs';
import type { Team, TeamMember } from '@/features/teams/types';
import { motion } from 'framer-motion';

interface TeamInsightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMember: TeamMember | null;
  teams: Team[];
  selectedTeams: string[];
  onTeamSelection: (teamId: string) => void;
}

export function TeamInsightsModal({
  isOpen,
  onClose,
  selectedMember,
  teams,
  selectedTeams,
  onTeamSelection
}: TeamInsightsModalProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'teams'>('profile');
  const totalPrice = selectedTeams.length * 1500; // $1500 por equipo

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='bg-[#0A1428] border border-[#1A2035] text-white max-w-4xl p-0 overflow-hidden'>
        <div className='relative'>
          {/* Background gradient */}
          <div className='absolute top-0 right-0 w-full h-32 bg-gradient-to-r from-[#FF2D8A]/20 to-[#00D1FF]/20 opacity-50'></div>

          <div className='relative p-6'>
            <DialogHeader className='mb-6'>
              <div className='flex justify-between items-center'>
                <DialogTitle className='text-2xl font-bold bg-gradient-to-r from-[#FF2D8A] to-[#00D1FF] text-transparent bg-clip-text'>
                  Insights Avanzados
                </DialogTitle>
                <Button
                  variant='ghost'
                  size='icon'
                  onClick={onClose}
                  className='text-gray-400 hover:text-white'
                >
                  <X className='h-4 w-4' />
                </Button>
              </div>
              <DialogDescription className='text-gray-400'>
                Analiza el rendimiento y selecciona hasta 5 equipos para
                contratar
              </DialogDescription>
            </DialogHeader>

            <Tabs
              value={activeTab}
              onValueChange={value =>
                setActiveTab(value as 'profile' | 'teams')
              }
              className='w-full'
            >
              <TabsList className='w-full mb-6 bg-[#050A1A] border border-[#1A2035]'>
                <TabsTrigger
                  value='profile'
                  className='flex-1 data-[state=active]:bg-[#1A2035] data-[state=active]:text-[#FF2D8A]'
                >
                  Perfil de Talento
                </TabsTrigger>
                <TabsTrigger
                  value='teams'
                  className='flex-1 data-[state=active]:bg-[#1A2035] data-[state=active]:text-[#FF2D8A]'
                >
                  Selección de Equipos
                </TabsTrigger>
              </TabsList>

              <TabsContent value='profile' className='mt-0'>
                {selectedMember && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='bg-[#050A1A] rounded-lg p-6'
                  >
                    <div className='flex flex-col md:flex-row gap-6'>
                      <div className='md:w-1/3'>
                        <div className='relative'>
                          <div className='w-full aspect-square rounded-lg overflow-hidden border-2 border-[#1A2035] relative'>
                            <Image
                              src={
                                selectedMember.avatar ||
                                '/placeholder.svg?height=300&width=300'
                              }
                              alt={selectedMember.name}
                              width={300}
                              height={300}
                              className='object-cover'
                            />
                          </div>
                          <div className='absolute bottom-3 right-3 bg-[#00FF85] rounded-full p-2'>
                            <Check className='h-4 w-4 text-black' />
                          </div>
                        </div>

                        <div className='mt-4 space-y-3'>
                          <div className='bg-[#0A1428] rounded-lg p-3'>
                            <p className='text-sm text-gray-400'>Edad</p>
                            <p className='font-bold text-lg'>
                              {selectedMember.age} años
                            </p>
                          </div>
                          <div className='bg-[#0A1428] rounded-lg p-3'>
                            <p className='text-sm text-gray-400'>Experiencia</p>
                            <p className='font-bold text-lg'>
                              {selectedMember.experience} años
                            </p>
                          </div>
                          <div className='bg-[#0A1428] rounded-lg p-3'>
                            <p className='text-sm text-gray-400'>Inglés</p>
                            <p className='font-bold text-lg'>
                              {selectedMember.english}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className='md:w-2/3'>
                        <div className='flex flex-col h-full'>
                          <div>
                            <h3 className='font-bold text-2xl'>
                              {selectedMember.name}
                            </h3>
                            <p className='text-[#FF2D8A] font-medium text-lg'>
                              {selectedMember.role}
                            </p>

                            <div className='flex items-center mt-2 text-gray-400'>
                              <MapPin className='h-4 w-4 mr-1' />
                              {selectedMember.location}
                            </div>
                          </div>

                          <div className='mt-6'>
                            <h4 className='font-medium mb-3'>Habilidades</h4>
                            <div className='flex flex-wrap gap-2'>
                              {selectedMember.skills.map((skill, index) => (
                                <Badge
                                  key={index}
                                  className='bg-[#1A2035] hover:bg-[#1A2035]/80 text-white border-none'
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className='mt-6 flex-1'>
                            <h4 className='font-medium mb-3'>
                              Estadísticas de rendimiento
                            </h4>
                            <div className='space-y-4'>
                              <div className='space-y-2'>
                                <div className='flex justify-between'>
                                  <span className='text-gray-400'>
                                    Participación
                                  </span>
                                  <span className='font-medium'>
                                    {selectedMember.stats.participation}%
                                  </span>
                                </div>
                                <Progress
                                  value={selectedMember.stats.participation}
                                  className='h-2 bg-[#1A2035]'
                                >
                                  <div className='h-full bg-[#FF2D8A]' />
                                </Progress>
                              </div>

                              <div className='space-y-2'>
                                <div className='flex justify-between'>
                                  <span className='text-gray-400'>
                                    Asistencia
                                  </span>
                                  <span className='font-medium'>
                                    {selectedMember.stats.attendance}%
                                  </span>
                                </div>
                                <Progress
                                  value={selectedMember.stats.attendance}
                                  className='h-2 bg-[#1A2035]'
                                >
                                  <div className='h-full bg-[#00D1FF]' />
                                </Progress>
                              </div>

                              <div className='space-y-2'>
                                <div className='flex justify-between'>
                                  <span className='text-gray-400'>
                                    Comunicación
                                  </span>
                                  <span className='font-medium'>
                                    {Math.min(
                                      100,
                                      Math.floor(
                                        selectedMember.stats.messages / 1.5
                                      )
                                    )}
                                    %
                                  </span>
                                </div>
                                <Progress
                                  value={Math.min(
                                    100,
                                    Math.floor(
                                      selectedMember.stats.messages / 1.5
                                    )
                                  )}
                                  className='h-2 bg-[#1A2035]'
                                >
                                  <div className='h-full bg-[#00FF85]' />
                                </Progress>
                              </div>

                              <div className='space-y-2'>
                                <div className='flex justify-between'>
                                  <span className='text-gray-400'>
                                    Calidad de código
                                  </span>
                                  <span className='font-medium'>
                                    {70 + Math.floor(Math.random() * 25)}%
                                  </span>
                                </div>
                                <Progress
                                  value={70 + Math.floor(Math.random() * 25)}
                                  className='h-2 bg-[#1A2035]'
                                >
                                  <div className='h-full bg-purple-500' />
                                </Progress>
                              </div>
                            </div>
                          </div>

                          <div className='mt-6'>
                            <Button
                              onClick={() => setActiveTab('teams')}
                              className='w-full bg-[#FF2D8A] hover:bg-[#D91A70] text-white'
                            >
                              Seleccionar equipos
                              <ChevronRight className='ml-2 h-4 w-4' />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </TabsContent>

              <TabsContent value='teams' className='mt-0'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='space-y-6'
                >
                  <div className='space-y-4'>
                    <h4 className='font-medium'>Equipos disponibles:</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      {teams.map(team => (
                        <div
                          key={team.id}
                          className={`border rounded-lg p-4 flex items-center gap-3 cursor-pointer transition-all ${
                            selectedTeams.includes(team.id)
                              ? 'border-[#FF2D8A] bg-[#FF2D8A]/10'
                              : 'border-[#1A2035] hover:border-[#FF2D8A]/50'
                          }`}
                          onClick={() => onTeamSelection(team.id)}
                        >
                          <Checkbox
                            checked={selectedTeams.includes(team.id)}
                            onCheckedChange={() => onTeamSelection(team.id)}
                            className='data-[state=checked]:bg-[#FF2D8A] data-[state=checked]:border-[#FF2D8A]'
                          />
                          <div className='flex-1'>
                            <div className='flex justify-between items-center'>
                              <p className='font-medium'>{team.name}</p>
                              <Badge
                                variant='outline'
                                className='bg-[#1A2035] border-none'
                              >
                                {team.members.length} miembros
                              </Badge>
                            </div>
                            <p className='text-sm text-gray-400'>
                              {team.project}
                            </p>
                            <div className='flex items-center gap-4 mt-2 text-sm'>
                              <div className='flex items-center'>
                                <div className='w-2 h-2 rounded-full bg-[#00FF85] mr-1'></div>
                                <span>
                                  {team.insights.attendance}% asistencia
                                </span>
                              </div>
                              <div className='flex items-center'>
                                <div className='w-2 h-2 rounded-full bg-[#00D1FF] mr-1'></div>
                                <span>
                                  {team.insights.participation}% participación
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='bg-[#050A1A] rounded-lg p-6'>
                    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
                      <div>
                        <p className='text-gray-400'>Equipos seleccionados:</p>
                        <div className='flex items-center gap-2'>
                          <p className='font-bold text-2xl'>
                            {selectedTeams.length}
                          </p>
                          <span className='text-gray-400'>/ 5 máximo</span>
                        </div>
                        <div className='flex gap-1 mt-2'>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <div
                              key={i}
                              className={`w-8 h-1 rounded-full ${
                                i < selectedTeams.length
                                  ? 'bg-[#FF2D8A]'
                                  : 'bg-[#1A2035]'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>

                      <div className='text-right'>
                        <p className='text-gray-400'>Precio total:</p>
                        <p className='font-bold text-3xl'>
                          ${totalPrice.toLocaleString()}
                        </p>
                        <p className='text-xs text-gray-400 mt-1'>
                          $1,500 por equipo
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <DialogFooter className='bg-[#050A1A] p-4 border-t border-[#1A2035]'>
          <Button
            variant='outline'
            onClick={onClose}
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
  );
}
