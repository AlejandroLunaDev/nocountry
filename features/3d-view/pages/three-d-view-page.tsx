'use client';

import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BarChart2, Info, LayoutGrid, ListFilter } from 'lucide-react';
import { TeamInsightsModal } from '@/features/teams/components/team-insights-modal';
import { useTeams } from '@/features/teams/hooks/use-teams';
import type { TeamMember } from '@/features/teams/types';
import { DashboardHeader } from '@/features/dashboard/components/dashboard-header';
import { DashboardLayout } from '@/features/dashboard/components/dashboard-layout';
import { TeamInsights } from '@/features/teams/components/team-insights';
import * as THREE from 'three';
import Link from 'next/link';

function MemberNode({
  member,
  position,
  color,
  onClick,
  isHovered,
  onHover,
  onHoverEnd
}: {
  member: TeamMember;
  position: [number, number, number];
  color: string;
  onClick: () => void;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
}) {
  return (
    <group
      position={position}
      onClick={onClick}
      onPointerOver={onHover}
      onPointerOut={onHoverEnd}
    >
      <mesh position={[0, 0, 0]} castShadow scale={isHovered ? 1.2 : 1}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isHovered ? 0.5 : 0.2}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      <Text
        position={[0, -0.8, 0]}
        fontSize={0.2}
        color='white'
        anchorX='center'
        anchorY='middle'
        outlineWidth={0.01}
        outlineColor='#050A1A'
      >
        {member.name}
      </Text>

      <Text
        position={[0, -1.1, 0]}
        fontSize={0.15}
        color={color}
        anchorX='center'
        anchorY='middle'
        outlineWidth={0.01}
        outlineColor='#050A1A'
      >
        {member.role}
      </Text>

      {isHovered && (
        <Html position={[1.2, 0, 0]} center>
          <div className='bg-[#0A1428]/90 border border-[#1A2035] p-3 rounded-lg w-48 backdrop-blur-sm'>
            <div className='flex items-center gap-2 mb-2'>
              <div
                className='w-2 h-2 rounded-full'
                style={{ backgroundColor: color }}
              ></div>
              <p className='font-bold text-sm'>{member.name}</p>
            </div>
            <p className='text-xs text-gray-400 mb-2'>{member.location}</p>
            <div className='space-y-1'>
              <div className='flex justify-between text-xs'>
                <span>Participación:</span>
                <span className='font-medium'>
                  {member.stats.participation}%
                </span>
              </div>
              <div className='flex justify-between text-xs'>
                <span>Asistencia:</span>
                <span className='font-medium'>{member.stats.attendance}%</span>
              </div>
              <div className='flex justify-between text-xs'>
                <span>Mensajes:</span>
                <span className='font-medium'>{member.stats.messages}</span>
              </div>
            </div>
            <div className='mt-2 pt-2 border-t border-[#1A2035] text-xs text-center'>
              <span className='text-[#FF2D8A]'>Click para más detalles</span>
            </div>
          </div>
        </Html>
      )}
    </group>
  );
}

function TeamVisualization({
  members,
  onMemberClick
}: {
  members: TeamMember[];
  onMemberClick: (member: TeamMember) => void;
}) {
  const colors = ['#FF2D8A', '#00D1FF', '#00FF85', '#9C5FFF', '#FFB800'];
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      <Suspense fallback={null}>
        <group>
          {/* Center node */}
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.3, 32, 32]} />
            <meshStandardMaterial
              color='#1A2035'
              emissive='#1A2035'
              emissiveIntensity={0.2}
            />
          </mesh>

          {/* Connections between members */}
          {members.map((member, i) => {
            const angle = (i / members.length) * Math.PI * 2;
            const radius = 3;
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;

            return (
              <line key={`line-center-${i}`}>
                <bufferGeometry
                  attach='geometry'
                  onUpdate={self => {
                    const positions = new Float32Array([0, 0, 0, x, 0, z]);
                    self.setAttribute(
                      'position',
                      new THREE.BufferAttribute(positions, 3)
                    );
                  }}
                />
                <lineBasicMaterial
                  attach='material'
                  color={
                    hoveredMember === member.id
                      ? colors[i % colors.length]
                      : '#1A2035'
                  }
                  linewidth={1}
                />
              </line>
            );
          })}

          {/* Connections between members in a circle */}
          {members.map((_, i) => {
            const nextIndex = (i + 1) % members.length;
            const angle1 = (i / members.length) * Math.PI * 2;
            const angle2 = (nextIndex / members.length) * Math.PI * 2;
            const radius = 3;
            const x1 = Math.sin(angle1) * radius;
            const z1 = Math.cos(angle1) * radius;
            const x2 = Math.sin(angle2) * radius;
            const z2 = Math.cos(angle2) * radius;

            return (
              <line key={`line-${i}`}>
                <bufferGeometry
                  attach='geometry'
                  onUpdate={self => {
                    const positions = new Float32Array([x1, 0, z1, x2, 0, z2]);
                    self.setAttribute(
                      'position',
                      new THREE.BufferAttribute(positions, 3)
                    );
                  }}
                />
                <lineBasicMaterial
                  attach='material'
                  color='#1A2035'
                  linewidth={1}
                />
              </line>
            );
          })}

          {/* Member nodes */}
          {members.map((member, i) => {
            const angle = (i / members.length) * Math.PI * 2;
            const radius = 3;
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;

            return (
              <MemberNode
                key={member.id}
                member={member}
                position={[x, 0, z]}
                color={colors[i % colors.length]}
                onClick={() => onMemberClick(member)}
                isHovered={hoveredMember === member.id}
                onHover={() => setHoveredMember(member.id)}
                onHoverEnd={() => setHoveredMember(null)}
              />
            );
          })}
        </group>
        {/* Remove Environment preset that's causing 429 errors */}
        {/* Add additional lights to make up for missing environment lighting */}
        <ambientLight intensity={0.7} />
        <pointLight position={[-10, 10, -10]} intensity={0.5} color='#00D1FF' />
        <pointLight position={[10, 5, 10]} intensity={0.5} color='#FF2D8A' />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={hoveredMember === null}
          autoRotateSpeed={0.5}
          minDistance={2}
          maxDistance={20}
        />
      </Suspense>
    </Canvas>
  );
}

export function ThreeDViewPage() {
  const { teams, loading } = useTeams();
  const [selectedTeam, setSelectedTeam] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const currentTeam = teams.find(team => team.id === selectedTeam);

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
            <h1 className='text-3xl font-bold'>
              Panel de Seguimiento de Equipos
            </h1>
            <p className='text-gray-400 mt-2'>
              Visualización interactiva en 3D de los equipos y sus conexiones
            </p>
          </div>

          <div className='flex gap-3'>
            <Link href='/dashboard'>
              <Button
                variant='outline'
                className='border-[#1A2035] text-white hover:bg-[#1A2035]'
              >
                <LayoutGrid className='mr-2 h-4 w-4' />
                Vista Grid
              </Button>
            </Link>
            <Link href='/list-view'>
              <Button
                variant='outline'
                className='border-[#1A2035] text-white hover:bg-[#1A2035]'
              >
                <ListFilter className='mr-2 h-4 w-4' />
                Vista Lista
              </Button>
            </Link>
          </div>
        </div>

        {loading ? (
          <div className='flex items-center justify-center h-[600px] bg-[#050A1A] rounded-lg border border-[#1A2035]'>
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
                {teams.map((team, index) => (
                  <TabsTrigger
                    key={team.id}
                    value={team.id}
                    className='data-[state=active]:bg-[#1A2035] data-[state=active]:text-[#FF2D8A] data-[state=active]:border-t-2 data-[state=active]:border-t-[#FF2D8A]'
                  >
                    {index === 0
                      ? 'Equipo Alpha'
                      : index === 1
                      ? 'Equipo Beta'
                      : 'Equipo Gamma'}
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
                        {team.id === 'team1'
                          ? 'Equipo Alpha'
                          : team.id === 'team2'
                          ? 'Equipo Beta'
                          : 'Equipo Gamma'}
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

                  {/* 3D Visualization */}
                  <div className='relative bg-[#050A1A] rounded-lg overflow-hidden border border-[#1A2035] h-[600px]'>
                    {currentTeam && (
                      <TeamVisualization
                        members={currentTeam.members}
                        onMemberClick={openInsightsDialog}
                      />
                    )}

                    {/* Help tooltip */}
                    <div className='absolute bottom-4 right-4 bg-[#0A1428]/80 backdrop-blur-sm p-3 rounded-lg border border-[#1A2035] max-w-xs'>
                      <div className='flex items-start gap-2'>
                        <Info className='h-5 w-5 text-[#FF2D8A] flex-shrink-0 mt-0.5' />
                        <div>
                          <p className='text-sm font-medium mb-1'>
                            Interacción 3D
                          </p>
                          <p className='text-xs text-gray-400'>
                            Haz clic y arrastra para rotar la vista. Usa la
                            rueda del ratón para hacer zoom. Pasa el cursor
                            sobre un miembro para ver sus detalles.
                          </p>
                        </div>
                      </div>
                    </div>
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
