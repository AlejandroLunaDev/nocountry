'use client';

import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import { LayoutGrid, ListFilter } from 'lucide-react';

export function PageHeader() {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8'>
      <div>
        <h1 className='text-3xl font-bold'>Panel de Seguimiento de Equipos</h1>
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
  );
}
