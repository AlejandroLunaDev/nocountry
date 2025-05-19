import {
  MessageSquare,
  Users,
  Calendar,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';

interface TeamInsightsProps {
  insights: {
    messages: number;
    participation: number;
    attendance: number;
    progress: number;
    rating: number;
    time: string;
  };
}

export function TeamInsights({ insights }: TeamInsightsProps) {
  return (
    // Mostramos las 6 tarjetas en una sola fila en pantallas grandes
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
          <Users className='text-[#00D1FF] h-5 w-5' />
        </div>
        <div>
          <p className='text-xs text-gray-400'>Participación</p>
          <p className='text-lg font-bold'>{insights.participation}%</p>
        </div>
      </div>

      <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#00FF85]/50 card-hover-effect transition-all'>
        <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#00FF85]/10 transition-colors'>
          <Calendar className='text-[#00FF85] h-5 w-5' />
        </div>
        <div>
          <p className='text-xs text-gray-400'>Asistencia</p>
          <p className='text-lg font-bold'>{insights.attendance}%</p>
        </div>
      </div>

      <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#8B5CF6]/50 card-hover-effect transition-all'>
        <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#8B5CF6]/10 transition-colors'>
          <TrendingUp className='text-[#8B5CF6] h-5 w-5' />
        </div>
        <div>
          <p className='text-xs text-gray-400'>Progreso</p>
          <p className='text-lg font-bold'>{insights.progress}%</p>
        </div>
      </div>

      <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#FBBF24]/50 card-hover-effect transition-all'>
        <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#FBBF24]/10 transition-colors'>
          <Award className='text-[#FBBF24] h-5 w-5' />
        </div>
        <div>
          <p className='text-xs text-gray-400'>Calificación</p>
          <p className='text-lg font-bold'>{insights.rating}</p>
        </div>
      </div>

      <div className='card-gradient rounded-lg p-3 flex items-center gap-3 group hover:border-[#EC4899]/50 card-hover-effect transition-all'>
        <div className='bg-[#1A2035] p-2 rounded-full group-hover:bg-[#EC4899]/10 transition-colors'>
          <Clock className='text-[#EC4899] h-5 w-5' />
        </div>
        <div>
          <p className='text-xs text-gray-400'>Tiempo</p>
          <p className='text-lg font-bold'>{insights.time}</p>
        </div>
      </div>
    </div>
  );
}
