import {
  MessageSquare,
  Users,
  Calendar,
  TrendingUp,
  Award,
  Clock,
  Brain,
  Lightbulb,
  RefreshCcw,
  Heart,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState, useEffect } from 'react';
import type { Team, TeamMember } from '@/features/teams/types';

interface TeamInsightsProps {
  team?: Team;
  insights: {
    messages: number;
    participation: number;
    attendance: number;
    progress: number;
    rating: number;
    time: string;
    teamwork?: number;
    communication?: number;
    proactivity?: number;
    problemSolving?: number;
    adaptability?: number;
    changeResilience?: number;
  };
}

export function TeamInsights({ team, insights }: TeamInsightsProps) {
  const [showSoftSkills, setShowSoftSkills] = useState(false);
  const [softSkillsAverages, setSoftSkillsAverages] = useState({
    teamwork: 0.0,
    communication: 0.0,
    proactivity: 0.0,
    problemSolving: 0.0,
    adaptability: 0.0,
    changeResilience: 0.0
  });

  useEffect(() => {
    if (team && team.members && team.members.length > 0) {
      const newAverages = {
        teamwork: calculateSkillAverage(team.members, 'teamwork'),
        communication: calculateSkillAverage(team.members, 'communication'),
        proactivity: calculateSkillAverage(team.members, 'proactivity'),
        problemSolving: calculateSkillAverage(team.members, 'problemSolving'),
        adaptability: calculateSkillAverage(team.members, 'adaptability'),
        changeResilience: calculateSkillAverage(
          team.members,
          'changeResilience'
        )
      };
      setSoftSkillsAverages(newAverages);
    } else {
      // Fallback si no hay equipo/miembros: usar datos de insights si existen, sino 0.0
      setSoftSkillsAverages({
        teamwork: insights?.teamwork ? insights.teamwork / 10 : 5.6,
        communication: insights?.communication
          ? insights.communication / 10
          : 8.0,
        proactivity: insights?.proactivity ? insights.proactivity / 10 : 4.3,
        problemSolving: insights?.problemSolving
          ? insights.problemSolving / 10
          : 7.0,
        adaptability: insights?.adaptability ? insights.adaptability / 10 : 7.0,
        changeResilience: insights?.changeResilience
          ? insights.changeResilience / 10
          : 6.0
      });
    }
  }, [team, insights]);

  // Calcula el promedio de una habilidad (cuyos valores están en 0-100)
  // y devuelve el valor en escala 0-10 con precisión decimal.
  function calculateSkillAverage(
    members: TeamMember[],
    skillName: string
  ): number {
    const skillValues = members
      .map(member => {
        const value = member.stats[skillName as keyof typeof member.stats];
        return typeof value === 'number' ? value : undefined;
      })
      .filter((val): val is number => val !== undefined);

    if (skillValues.length === 0) {
      return 8.0; // Default en escala 0-10 si no hay datos válidos
    }

    const sum = skillValues.reduce((total, val) => total + val, 0);
    const averageOutOf100 = sum / skillValues.length;
    return averageOutOf100 / 10; // Devuelve con precisión, ej. 8.96, 9.04
  }

  return (
    <div className='flex flex-col gap-4'>
      {/* Original metrics - Shown in grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
        <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#FF2D8A]/50 card-hover-effect transition-all'>
          <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#FF2D8A]/10 transition-colors'>
            <MessageSquare className='text-[#FF2D8A] h-5 w-5' />
          </div>
          <div>
            <p className='text-xs text-gray-400'>Mensajes</p>
            <p className='text-lg font-bold'>{insights.messages}</p>
          </div>
        </div>

        <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#00D1FF]/50 card-hover-effect transition-all'>
          <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#00D1FF]/10 transition-colors'>
            <Users className='text-[#FF2D8A] h-5 w-5' />
          </div>
          <div>
            <p className='text-xs text-gray-400'>Participación</p>
            <p className='text-lg font-bold'>{insights.participation}%</p>
          </div>
        </div>

        <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#00FF85]/50 card-hover-effect transition-all'>
          <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#00FF85]/10 transition-colors'>
            <Calendar className='text-[#FF2D8A] h-5 w-5' />
          </div>
          <div>
            <p className='text-xs text-gray-400'>Asistencia</p>
            <p className='text-lg font-bold'>{insights.attendance}%</p>
          </div>
        </div>

        <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#8B5CF6]/50 card-hover-effect transition-all'>
          <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#8B5CF6]/10 transition-colors'>
            <TrendingUp className='text-[#FF2D8A] h-5 w-5' />
          </div>
          <div>
            <p className='text-xs text-gray-400'>Progreso</p>
            <p className='text-lg font-bold'>{insights.progress}%</p>
          </div>
        </div>

        <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#FBBF24]/50 card-hover-effect transition-all'>
          <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#FBBF24]/10 transition-colors'>
            <Award className='text-[#FF2D8A] h-5 w-5' />
          </div>
          <div>
            <p className='text-xs text-gray-400'>Calificación</p>
            <p className='text-lg font-bold'>{insights.rating}</p>
          </div>
        </div>

        <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#EC4899]/50 card-hover-effect transition-all'>
          <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#EC4899]/10 transition-colors'>
            <Clock className='text-[#FF2D8A] h-5 w-5' />
          </div>
          <div>
            <p className='text-xs text-gray-400'>Tiempo</p>
            <p className='text-lg font-bold'>{insights.time}</p>
          </div>
        </div>
      </div>

      {/* Compact Soft Skills Toggle Button */}
      <button
        onClick={() => setShowSoftSkills(!showSoftSkills)}
        className='bg-[#0A1428] rounded-lg p-4 border border-[#1A2035] w-full flex justify-between items-center hover:bg-[#0F1A30] transition-colors'
      >
        <h3 className='font-medium'>Habilidades interpersonales del equipo</h3>
        {showSoftSkills ? (
          <ChevronUp className='h-5 w-5 text-[#FF2D8A]' />
        ) : (
          <ChevronDown className='h-5 w-5 text-[#FF2D8A]' />
        )}
      </button>

      {/* Soft Skills Section - Collapsible */}
      {showSoftSkills && (
        <div className='bg-[#0A1428] rounded-lg p-4 border border-[#1A2035] animate-in fade-in-50 duration-300'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='flex items-center gap-3'>
              <div className='bg-[#1A2035] p-2 rounded-full text-green-500'>
                <Users className='text-[#FF2D8A] h-5 w-5' />
              </div>
              <div>
                <p className='text-xs text-gray-400'>Trabajo en equipo</p>
                <p className='text-lg font-bold'>
                  {softSkillsAverages.teamwork.toFixed(1)}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <div className='bg-[#1A2035] p-2 rounded-full text-blue-500'>
                <MessageSquare className='text-[#FF2D8A] h-5 w-5' />
              </div>
              <div>
                <p className='text-xs text-gray-400'>Comunicación</p>
                <p className='text-lg font-bold'>
                  {softSkillsAverages.communication.toFixed(1)}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <div className='bg-[#1A2035] p-2 rounded-full text-purple-500'>
                <Lightbulb className='text-[#FF2D8A] h-5 w-5' />
              </div>
              <div>
                <p className='text-xs text-gray-400'>Proactividad</p>
                <p className='text-lg font-bold'>
                  {softSkillsAverages.proactivity.toFixed(1)}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <div className='bg-[#1A2035] p-2 rounded-full text-yellow-500'>
                <Brain className='text-[#FF2D8A] h-5 w-5' />
              </div>
              <div>
                <p className='text-xs text-gray-400'>Resolución de problemas</p>
                <p className='text-lg font-bold'>
                  {softSkillsAverages.problemSolving.toFixed(1)}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <div className='bg-[#1A2035] p-2 rounded-full text-orange-500'>
                <RefreshCcw className='text-[#FF2D8A] h-5 w-5' />
              </div>
              <div>
                <p className='text-xs text-gray-400'>Adaptabilidad</p>
                <p className='text-lg font-bold'>
                  {softSkillsAverages.adaptability.toFixed(1)}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <div className='bg-[#1A2035] p-2 rounded-full text-pink-500'>
                <Heart className='text-[#FF2D8A] h-5 w-5' />
              </div>
              <div>
                <p className='text-xs text-gray-400'>Tolerancia al cambio</p>
                <p className='text-lg font-bold'>
                  {softSkillsAverages.changeResilience.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
