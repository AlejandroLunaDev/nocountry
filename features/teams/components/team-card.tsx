'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Check, Star, TrendingUp } from 'lucide-react';
import { Badge } from '@/shared/components/ui/badge';
import { Progress } from '@/shared/components/ui/progress';
import type { TeamMember } from '@/features/teams/types';
import { motion } from 'framer-motion';

interface TeamCardProps {
  member: TeamMember;
  onClick: () => void;
}

export function TeamCard({ member, onClick }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Determine skill level color
  const getSkillLevelColor = (level: number) => {
    if (level >= 80) return 'bg-[#00FF85]';
    if (level >= 60) return 'bg-[#00D1FF]';
    return 'bg-[#FF2D8A]';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='card-gradient rounded-lg overflow-hidden relative group card-hover-effect border-gradient-top'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Hover effect */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#FF2D8A]/10 to-[#00D1FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

      {/* Top border glow - updated to use our CSS class */}
      <div className='absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF2D8A]/0 via-[#FF2D8A] to-[#FF2D8A]/0 opacity-0 group-hover:opacity-100 transition-opacity'></div>

      <div className='p-5'>
        <div className='flex items-start gap-4'>
          <div className='relative'>
            <div className='w-20 h-20 rounded-full overflow-hidden border-2 border-[#1A2035] group-hover:border-[#FF2D8A] transition-colors relative'>
              <Image
                src={member.avatar || '/placeholder.svg?height=80&width=80'}
                alt={member.name}
                width={80}
                height={80}
                className='object-cover'
              />
            </div>
            <div className='absolute -bottom-1 -right-1 bg-[#00FF85] rounded-full p-1'>
              <Check className='h-3 w-3 text-black' />
            </div>
          </div>

          <div className='flex-1'>
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='font-bold text-lg'>{member.name}</h3>
                <p className='text-[#FF2D8A] font-medium'>{member.role}</p>
              </div>
              <div className='flex items-center bg-[#1A2035] px-2 py-1 rounded-md'>
                <Star className='h-3 w-3 text-yellow-400 mr-1' />
                <span className='text-sm font-bold'>
                  {(Math.random() * 2 + 8).toFixed(1)}
                </span>
              </div>
            </div>

            <div className='flex items-center mt-2 text-sm text-gray-400'>
              <MapPin className='h-4 w-4 mr-1' />
              {member.location}
            </div>

            <div className='flex flex-wrap gap-2 mt-3'>
              {member.skills.slice(0, 3).map((skill, index) => (
                <Badge
                  key={index}
                  variant='outline'
                  className='bg-[#1A2035] border-none text-white hover:bg-[#1A2035]/80'
                >
                  {skill}
                </Badge>
              ))}
              {member.skills.length > 3 && (
                <Badge
                  variant='outline'
                  className='bg-[#1A2035] border-none text-white hover:bg-[#1A2035]/80'
                >
                  +{member.skills.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>

        <div className='mt-6 space-y-3'>
          <div className='space-y-1'>
            <div className='flex justify-between text-xs'>
              <span className='text-gray-400'>Participación</span>
              <span className='font-medium'>{member.stats.participation}%</span>
            </div>
            <Progress
              value={member.stats.participation}
              className='h-1.5 bg-[#1A2035]'
            >
              <div
                className={`h-full ${getSkillLevelColor(
                  member.stats.participation
                )}`}
              />
            </Progress>
          </div>

          <div className='space-y-1'>
            <div className='flex justify-between text-xs'>
              <span className='text-gray-400'>Asistencia</span>
              <span className='font-medium'>{member.stats.attendance}%</span>
            </div>
            <Progress
              value={member.stats.attendance}
              className='h-1.5 bg-[#1A2035]'
            >
              <div
                className={`h-full ${getSkillLevelColor(
                  member.stats.attendance
                )}`}
              />
            </Progress>
          </div>

          <div className='space-y-1'>
            <div className='flex justify-between text-xs'>
              <span className='text-gray-400'>Comunicación</span>
              <span className='font-medium'>
                {Math.min(100, Math.floor(member.stats.messages / 1.5))}%
              </span>
            </div>
            <Progress
              value={Math.min(100, Math.floor(member.stats.messages / 1.5))}
              className='h-1.5 bg-[#1A2035]'
            >
              <div
                className={`h-full ${getSkillLevelColor(
                  Math.min(100, Math.floor(member.stats.messages / 1.5))
                )}`}
              />
            </Progress>
          </div>
        </div>

        {/* Hover overlay with action button */}
        <div
          className={`absolute inset-0 bg-[#050A1A]/80 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <motion.button
            initial={{ scale: 0.8 }}
            animate={{ scale: isHovered ? 1 : 0.8 }}
            className='bg-[#FF2D8A] hover:bg-[#D91A70] text-white px-4 py-2 rounded-md flex items-center gap-2 glow'
          >
            <TrendingUp className='h-4 w-4' />
            Ver perfil completo
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
