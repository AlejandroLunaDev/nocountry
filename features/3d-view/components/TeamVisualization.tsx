'use client';

import { useState, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import type { TeamMember } from '@/features/teams/types';
import { MemberNode } from './MemberNode';
import { Info } from 'lucide-react';

interface TeamVisualizationProps {
  members: TeamMember[];
  onMemberClick: (member: TeamMember) => void;
}

export function TeamVisualization({
  members,
  onMemberClick
}: TeamVisualizationProps) {
  const colors = [
    '#FF2D8A',
    '#00D1FF',
    '#00FF85',
    '#9C5FFF',
    '#FFB800',
    '#FF8A00',
    '#00B3A6',
    '#F74E5E',
    '#AC5CD9',
    '#5CE0D9'
  ];
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  // Calculate optimal radius based on number of members
  const radius = useMemo(() => {
    // Adjust radius based on team size
    if (members.length <= 4) return 2.5;
    if (members.length <= 6) return 3;
    if (members.length <= 8) return 3.5;
    return 4; // For larger teams (9-10 members)
  }, [members.length]);

  // Calculate optimal camera position
  const cameraPosition = useMemo(() => {
    const zPos = members.length <= 6 ? 10 : 12;
    return [0, 0, zPos] as [number, number, number];
  }, [members.length]);

  return (
    <div className='relative bg-[#050A1A] rounded-lg overflow-hidden border border-[#1A2035] h-[600px]'>
      <Canvas camera={{ position: cameraPosition, fov: 50 }}>
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
              const x1 = Math.sin(angle1) * radius;
              const z1 = Math.cos(angle1) * radius;
              const x2 = Math.sin(angle2) * radius;
              const z2 = Math.cos(angle2) * radius;

              return (
                <line key={`line-${i}`}>
                  <bufferGeometry
                    attach='geometry'
                    onUpdate={self => {
                      const positions = new Float32Array([
                        x1,
                        0,
                        z1,
                        x2,
                        0,
                        z2
                      ]);
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
              const x = Math.sin(angle) * radius;
              const z = Math.cos(angle) * radius;

              // Adjust node size based on team size
              const nodeScale =
                members.length <= 6 ? 1 : members.length <= 8 ? 0.9 : 0.8;

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
                  scale={nodeScale}
                />
              );
            })}
          </group>
          {/* Add additional lights to make up for missing environment lighting */}
          <ambientLight intensity={0.7} />
          <pointLight
            position={[-10, 10, -10]}
            intensity={0.5}
            color='#00D1FF'
          />
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

      {/* Help tooltip */}
      <div className='absolute bottom-4 right-4 bg-[#0A1428]/80 backdrop-blur-sm p-3 rounded-lg border border-[#1A2035] max-w-xs'>
        <div className='flex items-start gap-2'>
          <Info className='h-5 w-5 text-[#FF2D8A] flex-shrink-0 mt-0.5' />
          <div>
            <p className='text-sm font-medium mb-1'>Interacción 3D</p>
            <p className='text-xs text-gray-400'>
              Haz clic y arrastra para rotar la vista. Usa la rueda del ratón
              para hacer zoom. Pasa el cursor sobre un miembro para ver sus
              detalles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
