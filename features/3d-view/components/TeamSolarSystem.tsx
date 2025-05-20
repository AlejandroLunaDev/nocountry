'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import type { Team, TeamMember } from '@/features/teams/types';

interface TeamSolarSystemProps {
  team: Team;
  position: [number, number, number];
  color: string;
  scale?: number;
  onTeamSelect: (teamId: string) => void;
  onMemberSelect: (member: TeamMember) => void;
  isSelected: boolean;
}

export function TeamSolarSystem({
  team,
  position,
  color,
  scale = 2,
  onTeamSelect,
  onMemberSelect,
  isSelected
}: TeamSolarSystemProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  // Rotación lenta del sistema
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
    }
  });

  // Calcular posiciones de miembros en órbita
  const memberPositions = team.members.map((_, i) => {
    const angle = (i / team.members.length) * Math.PI * 2;
    const orbitRadius = 4;
    const x = Math.sin(angle) * orbitRadius;
    const z = Math.cos(angle) * orbitRadius;
    return [x, 0, z];
  });

  return (
    <group
      ref={groupRef}
      position={position}
      scale={[scale, scale, scale]}
      onClick={() => onTeamSelect(team.id)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Sistema solar - estrella central */}
      <mesh castShadow>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isSelected ? 1 : hovered ? 0.5 : 0.3}
        />
      </mesh>

      {/* Anillo orbital */}
      <mesh rotation={[Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[3.8, 4.2, 64]} />
        <meshStandardMaterial
          color='#ffffff'
          emissive='#ffffff'
          emissiveIntensity={0.2}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Nombre del equipo */}
      <Text
        position={[0, 3, 0]}
        fontSize={1}
        color='white'
        anchorX='center'
        anchorY='middle'
        outlineWidth={0.05}
        outlineColor='#000000'
      >
        {team.name}
      </Text>

      {/* Miembros como planetas */}
      {team.members.map((member, i) => (
        <group
          key={member.id}
          position={memberPositions[i] as [number, number, number]}
        >
          <mesh
            castShadow
            onClick={e => {
              e.stopPropagation();
              onMemberSelect(member);
            }}
            onPointerOver={e => {
              e.stopPropagation();
              setHoveredMember(member.id);
            }}
            onPointerOut={() => setHoveredMember(null)}
          >
            <sphereGeometry args={[0.7, 16, 16]} />
            <meshStandardMaterial
              color={hoveredMember === member.id ? '#ffffff' : '#aaaaaa'}
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>

          {/* Nombre del miembro */}
          <Text
            position={[0, 1, 0]}
            fontSize={0.5}
            color='white'
            anchorX='center'
            anchorY='middle'
            outlineWidth={0.02}
            outlineColor='#000000'
          >
            {member.name}
          </Text>

          {/* Info emergente al pasar el cursor */}
          {hoveredMember === member.id && (
            <Html position={[0, -1.5, 0]} center>
              <div className='bg-[#0A1428]/90 border border-[#1A2035] p-3 rounded-lg w-48 backdrop-blur-sm'>
                <p className='font-bold text-sm'>{member.name}</p>
                <p className='text-xs text-gray-400'>{member.role}</p>
                <div className='mt-1 pt-1 border-t border-[#1A2035] text-xs'>
                  <div className='flex justify-between'>
                    <span>Mensajes:</span>
                    <span>{member.stats.messages}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Participación:</span>
                    <span>{member.stats.participation}%</span>
                  </div>
                </div>
              </div>
            </Html>
          )}
        </group>
      ))}

      {/* Información del equipo al pasar el cursor */}
      {hovered && !hoveredMember && (
        <Html position={[0, -3, 0]} center>
          <div className='bg-[#0A1428]/90 border border-[#1A2035] p-3 rounded-lg backdrop-blur-sm'>
            <p className='font-bold'>{team.name}</p>
            <p className='text-sm text-gray-400'>{team.project}</p>
            <p className='text-xs mt-1'>
              {team.members.length} miembros · Progreso:{' '}
              {team.insights.progress}%
            </p>
            <p className='text-xs text-[#FF2D8A] mt-2'>
              Click para explorar este sistema
            </p>
          </div>
        </Html>
      )}
    </group>
  );
}
