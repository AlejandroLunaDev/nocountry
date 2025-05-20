'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { TeamMember } from '@/shared/lib/types';

interface HexagonalLayoutProps {
  members: TeamMember[];
  onMemberClick: (member: TeamMember) => void;
}

export function HexagonalLayout({
  members,
  onMemberClick
}: HexagonalLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Calculate positions in a hexagonal pattern
  const getPositions = () => {
    const positions: { x: number; y: number }[] = [];
    const centerX = containerSize.width / 2;
    const centerY = containerSize.height / 2;
    const radius = Math.min(containerSize.width, containerSize.height) * 0.35;

    // Center position for the first member
    positions.push({ x: centerX, y: centerY });

    // Positions for the remaining members in a hexagonal pattern
    if (members.length > 1) {
      const angleStep = (2 * Math.PI) / (members.length - 1);
      for (let i = 0; i < members.length - 1; i++) {
        const angle = i * angleStep;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        positions.push({ x, y });
      }
    }

    return positions;
  };

  const positions = getPositions();

  return (
    <div
      ref={containerRef}
      className='relative w-full h-[500px] bg-[#050A1A] rounded-lg overflow-hidden'
    >
      {/* Grid background */}
      <div className='absolute inset-0 bg-grid-pattern bg-[size:40px_40px]'></div>

      {/* Connection lines */}
      <svg className='absolute inset-0 w-full h-full'>
        {positions.length > 1 &&
          positions.map((pos, i) => {
            if (i === 0) return null; // Skip center node for connections

            return (
              <line
                key={`line-${i}`}
                x1={positions[0].x}
                y1={positions[0].y}
                x2={pos.x}
                y2={pos.y}
                stroke='#1A2035'
                strokeWidth='2'
                strokeDasharray='5,5'
              />
            );
          })}
      </svg>

      {/* Member nodes */}
      {members.map((member, i) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: positions[i]?.x - 50, // Center the 100px wide element
            y: positions[i]?.y - 50 // Center the 100px tall element
          }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`absolute w-[100px] h-[100px] cursor-pointer ${
            i === 0 ? 'glow' : i % 2 === 0 ? 'glow-cyan' : 'glow-green'
          }`}
          onClick={() => onMemberClick(member)}
        >
          <div className='w-full h-full rounded-full bg-[#0A1428] border-2 border-[#1A2035] overflow-hidden flex items-center justify-center relative'>
            <img
              src={member.avatar || '/placeholder.svg'}
              alt={member.name}
              className='w-full h-full object-cover'
            />
            <div className='absolute bottom-0 w-full bg-black/70 py-1 px-2 text-center'>
              <p className='text-xs font-medium truncate'>{member.name}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
