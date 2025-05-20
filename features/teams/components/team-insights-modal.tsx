'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Check,
  X,
  ChevronRight,
  Users,
  UserCircle
} from 'lucide-react';
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
  const [buyMode, setBuyMode] = useState<'teams' | 'individual'>('teams');
  const totalPrice = selectedTeams.length * 1500; // $1500 por equipo
  const individualPrice = 500; // $500 por participante individual

  // Soft skills data - Additional metrics based on Proof of Soft Skills
  const softSkillsData = selectedMember
    ? {
        teamwork: selectedMember.stats.teamwork || 92,
        communication: selectedMember.stats.communication || 92,
        proactivity: selectedMember.stats.proactivity || 96,
        problemSolving: selectedMember.stats.problemSolving || 88,
        adaptability: selectedMember.stats.adaptability || 90,
        changeResilience: selectedMember.stats.changeResilience || 90
      }
    : null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='bg-[#0A1428] border border-[#1A2035] text-white max-w-3xl max-h-[85vh] p-0'>
        <div className='relative'>
          {/* Background gradient - reduced height */}
          <div className='absolute top-0 right-0 w-full h-16 bg-gradient-to-r from-[#FF2D8A]/20 to-[#00D1FF]/20 opacity-50'></div>

          <div className='relative p-3'>
            <DialogHeader className='mb-2'>
              <div className='flex justify-between items-center'>
                <DialogTitle className='text-lg font-bold bg-gradient-to-r from-[#FF2D8A] to-[#00D1FF] text-transparent bg-clip-text'>
                  Insights Avanzados
                </DialogTitle>
              </div>
              <DialogDescription className='text-gray-400 text-xs'>
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
              <TabsList className='w-full mb-3 bg-[#050A1A] border border-[#1A2035]'>
                <TabsTrigger
                  value='profile'
                  className='flex-1 data-[state=active]:bg-[#1A2035] data-[state=active]:text-[#FF2D8A] text-sm py-1'
                >
                  Perfil de Talento
                </TabsTrigger>
                <TabsTrigger
                  value='teams'
                  className='flex-1 data-[state=active]:bg-[#1A2035] data-[state=active]:text-[#FF2D8A] text-sm py-1'
                >
                  Seleccionar Equipos
                </TabsTrigger>
              </TabsList>

              <TabsContent value='profile' className='mt-0'>
                {selectedMember ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='bg-[#050A1A] rounded-lg p-3'
                  >
                    <div className='flex flex-col md:flex-row gap-4'>
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
                          <div className='absolute bottom-2 right-2 bg-[#00FF85] rounded-full p-1.5'>
                            <Check className='h-3 w-3 text-black' />
                          </div>
                        </div>

                        <div className='mt-3 space-y-2'>
                          <div className='bg-[#0A1428] rounded-lg p-2'>
                            <p className='text-xs text-gray-400'>Edad</p>
                            <p className='font-bold text-base'>
                              {selectedMember.age} años
                            </p>
                          </div>
                          <div className='bg-[#0A1428] rounded-lg p-2'>
                            <p className='text-xs text-gray-400'>Experiencia</p>
                            <p className='font-bold text-base'>
                              {selectedMember.experience} años
                            </p>
                          </div>
                          <div className='bg-[#0A1428] rounded-lg p-2'>
                            <p className='text-xs text-gray-400'>Inglés</p>
                            <p className='font-bold text-base'>
                              {selectedMember.english}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className='md:w-2/3'>
                        <div className='flex flex-col h-full'>
                          <div>
                            <h3 className='font-bold text-xl'>
                              {selectedMember.name}
                            </h3>
                            <p className='text-[#FF2D8A] font-medium'>
                              {selectedMember.role}
                            </p>

                            <div className='flex items-center mt-1 text-gray-400 text-xs'>
                              <MapPin className='h-3 w-3 mr-1' />
                              {selectedMember.location}
                            </div>
                          </div>

                          <div className='mt-3'>
                            <h4 className='font-medium text-sm mb-2'>Habilidades</h4>
                            <div className='flex flex-wrap gap-1.5'>
                              {selectedMember.skills.map((skill, index) => (
                                <Badge
                                  key={index}
                                  className='bg-[#1A2035] hover:bg-[#1A2035]/80 text-white border-none text-xs py-0'
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className='mt-3 flex-1'>
                            <div className='flex justify-between items-center mb-2'>
                              <h4 className='font-medium text-sm'>
                                Estadísticas de rendimiento
                              </h4>
                              <span className='text-xs text-gray-400'>
                                36 reseñas
                              </span>
                            </div>
                            <div className='space-y-2'>
                              <div className='space-y-1'>
                                <div className='flex justify-between text-xs'>
                                  <span className='text-gray-400'>
                                    Participación
                                  </span>
                                  <span className='font-medium'>
                                    {selectedMember.stats.participation}%
                                  </span>
                                </div>
                                <Progress
                                  value={selectedMember.stats.participation}
                                  className='h-1.5 bg-[#1A2035]'
                                >
                                  <div className='h-full bg-[#FF2D8A]' />
                                </Progress>
                              </div>

                              <div className='space-y-1'>
                                <div className='flex justify-between text-xs'>
                                  <span className='text-gray-400'>
                                    Asistencia
                                  </span>
                                  <span className='font-medium'>
                                    {selectedMember.stats.attendance}%
                                  </span>
                                </div>
                                <Progress
                                  value={selectedMember.stats.attendance}
                                  className='h-1.5 bg-[#1A2035]'
                                >
                                  <div className='h-full bg-[#00D1FF]' />
                                </Progress>
                              </div>

                              <div className='space-y-1'>
                                <div className='flex justify-between text-xs'>
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
                                  className='h-1.5 bg-[#1A2035]'
                                >
                                  <div className='h-full bg-[#00FF85]' />
                                </Progress>
                              </div>

                              <div className='space-y-1'>
                                <div className='flex justify-between text-xs'>
                                  <span className='text-gray-400'>
                                    Calidad de código
                                  </span>
                                  <span className='font-medium'>
                                    {70 + Math.floor(Math.random() * 25)}%
                                  </span>
                                </div>
                                <Progress
                                  value={70 + Math.floor(Math.random() * 25)}
                                  className='h-1.5 bg-[#1A2035]'
                                >
                                  <div className='h-full bg-purple-500' />
                                </Progress>
                              </div>
                            </div>
                          </div>

                          {/* Soft Skills Section - More compact */}
                          {softSkillsData && (
                            <div className='mt-3 bg-[#0A1428] rounded-lg p-2 border border-[#1A2035]'>
                              <h4 className='font-medium text-sm mb-2'>
                                Habilidades interpersonales
                              </h4>
                              <div className='grid grid-cols-2 gap-2'>
                                <div className='space-y-0.5'>
                                  <div className='flex justify-between text-xs'>
                                    <span className='text-gray-400'>
                                      Trabajo en equipo
                                    </span>
                                    <span>
                                      {(softSkillsData.teamwork / 10).toFixed(
                                        1
                                      )}
                                    </span>
                                  </div>
                                  <Progress
                                    value={softSkillsData.teamwork}
                                    className='h-1 bg-[#1A2035]'
                                  >
                                    <div className='h-full bg-green-500' />
                                  </Progress>
                                </div>
                                
                                {/* Other soft skills with same compact format */}
                                {/* ... */}
                              </div>
                            </div>
                          )}

                          <div className='mt-3 flex gap-2'>
                            <Button
                              onClick={() => {
                                setBuyMode('individual');
                                setActiveTab('teams');
                              }}
                              className='flex-1 bg-[#00D1FF] hover:bg-[#00A0C4] text-white text-xs py-1.5'
                            >
                              <UserCircle className='mr-1 h-3 w-3' />
                              Comprar individual
                            </Button>
                            <Button
                              onClick={() => {
                                setBuyMode('teams');
                                setActiveTab('teams');
                              }}
                              className='flex-1 bg-[#FF2D8A] hover:bg-[#D91A70] text-white text-xs py-1.5'
                            >
                              <Users className='mr-1 h-3 w-3' />
                              Seleccionar equipos
                              <ChevronRight className='ml-1 h-3 w-3' />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className='bg-[#050A1A] rounded-lg p-6 flex flex-col items-center justify-center text-center'
                    style={{ minHeight: '400px' }}
                  >
                    <div className='bg-[#1A2035] p-4 rounded-full mb-4'>
                      <UserCircle className='text-[#FF2D8A] h-12 w-12' />
                    </div>
                    <h3 className='text-xl font-bold mb-2'>
                      Ningún participante seleccionado
                    </h3>
                    <p className='text-gray-400 max-w-md mb-6'>
                      Para ver el perfil detallado y las estadísticas de un
                      participante, seleccione a un miembro del equipo desde la
                      vista principal.
                    </p>
                    <Button
                      onClick={() => setActiveTab('teams')}
                      className='bg-[#FF2D8A] hover:bg-[#D91A70] text-white'
                    >
                      Ver selección de equipos
                      <ChevronRight className='ml-2 h-4 w-4' />
                    </Button>
                  </motion.div>
                )}
              </TabsContent>

              <TabsContent value='teams' className='mt-0'>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className='bg-[#050A1A] rounded-lg p-3'
                >
                  <h4 className='font-medium text-base mb-2'>
                    Selecciona hasta 5 equipos
                  </h4>
                  
                  <div className='flex gap-2 mb-3'>
                    <Button
                      onClick={() => setBuyMode('teams')}
                      variant='default'
                      className='bg-[#FF2D8A] hover:bg-[#D91A70] text-xs py-1.5'
                    >
                      <Users className='mr-1 h-3 w-3' />
                      Equipos
                    </Button>
                    <Button
                      onClick={() => setBuyMode('individual')}
                      variant='outline'
                      className='border-[#1A2035] text-white hover:bg-[#1A2035] text-xs py-1.5'
                      disabled={!selectedMember}
                    >
                      <UserCircle className='mr-1 h-3 w-3' />
                      Individual
                    </Button>
                  </div>

                  <div className='space-y-2'>
                    <h4 className='font-medium text-sm'>Equipos disponibles:</h4>
                    
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 max-h-[300px] overflow-y-auto pr-1'>
                      {teams.map(team => (
                        <div
                          key={team.id}
                          className='bg-[#0A1428] rounded-lg p-2 border border-[#1A2035]'
                        >
                          <div className='flex items-start justify-between'>
                            <div>
                              <div className='flex items-center'>
                                <Checkbox
                                  id={`team-${team.id}`}
                                  checked={selectedTeams.includes(team.id)}
                                  onCheckedChange={() => onTeamSelection(team.id)}
                                  className='mr-1 h-3 w-3 data-[state=checked]:bg-[#FF2D8A] data-[state=checked]:border-[#FF2D8A]'
                                  disabled={
                                    selectedTeams.length >= 5 &&
                                    !selectedTeams.includes(team.id)
                                  }
                                />
                                <h5 className='font-medium text-sm'>{team.name}</h5>
                              </div>
                              <p className='text-gray-400 text-xs ml-4'>{'Plataforma de Gestión de Proyectos'}</p>
                            </div>
                            <div className='text-right'>
                              <span className='text-xs'>{team.members.length} miembros</span>
                            </div>
                          </div>
                          
                          <div className='mt-2 flex items-center gap-3'>
                            <div className='flex items-center'>
                              <div className='w-2 h-2 bg-[#00FF85] rounded-full mr-1'></div>
                              <span className='text-xs'>{Math.floor(85 + Math.random() * 10)}% asistencia</span>
                            </div>
                            <div className='flex items-center'>
                              <div className='w-2 h-2 bg-[#00D1FF] rounded-full mr-1'></div>
                              <span className='text-xs'>{Math.floor(80 + Math.random() * 10)}% participación</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='mt-3 bg-[#050A1A] rounded-lg p-2 border border-[#1A2035]'>
                    <div className='flex justify-between items-center'>
                      <div>
                        <h4 className='font-medium text-sm'>Equipos seleccionados:</h4>
                        <p className='text-gray-400 text-xs'>{selectedTeams.length} / 5 máximo</p>
                      </div>
                      <div className='text-right'>
                        <p className='font-medium text-sm'>Precio total:</p>
                        <p className='font-bold text-lg'>${totalPrice.toLocaleString()}</p>
                        <p className='text-gray-400 text-xs'>$1,500 por equipo</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              <Progress />
            </Tabs>
          </div>
        </div>

        <DialogFooter className='bg-[#050A1A] p-3 border-t border-[#1A2035]'>
          <Button
            variant='outline'
            onClick={onClose}
            className='border-[#1A2035] text-white hover:bg-[#1A2035] text-xs py-1.5'
          >
            Cancelar
          </Button>
          {buyMode === 'teams' ? (
            <Button
              className='bg-[#FF2D8A] hover:bg-[#D91A70] text-white text-xs py-1.5'
              disabled={selectedTeams.length === 0}
            >
              Comprar ({selectedTeams.length})
            </Button>
          ) : (
            <Button
              className='bg-[#00D1FF] hover:bg-[#00A0C4] text-white text-xs py-1.5'
              disabled={!selectedMember}
            >
              Comprar (1)
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
