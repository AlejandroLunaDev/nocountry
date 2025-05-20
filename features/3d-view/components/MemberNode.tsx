'use client';

import { Html, Text } from '@react-three/drei';
import type { TeamMember } from '@/features/teams/types';

interface MemberNodeProps {
  member: TeamMember;
  position: [number, number, number];
  color: string;
  onClick: () => void;
  isHovered: boolean;
  onHover: () => void;
  onHoverEnd: () => void;
  scale?: number;
}

export function MemberNode({
  member,
  position,
  color,
  onClick,
  isHovered,
  onHover,
  onHoverEnd,
  scale = 1
}: MemberNodeProps) {
  return (
    <group
      position={position}
      onClick={onClick}
      onPointerOver={onHover}
      onPointerOut={onHoverEnd}
      scale={scale}
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
