'use client';

export function LoadingState() {
  return (
    <div className='flex items-center justify-center h-[600px] bg-[#050A1A] rounded-lg border border-[#1A2035]'>
      <div className='text-center'>
        <div className='w-12 h-12 border-4 border-t-[#FF2D8A] border-r-transparent border-b-[#00D1FF] border-l-transparent rounded-full animate-spin mx-auto mb-4'></div>
        <p className='text-gray-400'>Cargando datos de equipos...</p>
      </div>
    </div>
  );
}
