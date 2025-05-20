import Link from 'next/link';
import { Bell, Settings, User } from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage
} from '@/shared/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu';
import Image from 'next/image';

export function DashboardHeader() {
  return (
    <header className='border-b border-[#1A2035] p-4 sticky top-0 z-10 bg-[#050A1A]/80 backdrop-blur-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='text-2xl font-bold'>
          <Link href='/' className='flex items-center gap-2'>
            <Image src='https://cdn.prod.website-files.com/65773955177041dbf059ed20/67859e57c83aea3eecbc38c1_Logo%20Nav.svg' alt='NoCountry' width={120} height={32} />
          </Link>
        </div>

        <div className='hidden md:flex items-center gap-6'>
          <Link
            href='/'
            className='text-white hover:text-[#FF2D8A] transition-colors'
          >
            Simulación Laboral
          </Link>
          <Link
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            Hackathon
          </Link>
          <Link
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            Empresas
          </Link>
          <Link
            href='#'
            className='text-gray-400 hover:text-white transition-colors'
          >
            Talentos
          </Link>
        </div>

        <div className='flex items-center gap-3'>
          <Button
            variant='ghost'
            size='icon'
            className='text-gray-400 hover:text-white'
          >
            <Bell className='h-5 w-5' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            className='text-gray-400 hover:text-white'
          >
            <Settings className='h-5 w-5' />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src='/placeholder.svg' alt='@user' />
                  <AvatarFallback className='bg-[#1A2035]'>NC</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className='w-56 bg-[#0A1428] border-[#1A2035] text-white'
              align='end'
              forceMount
            >
              <DropdownMenuLabel className='font-normal'>
                <div className='flex flex-col space-y-1'>
                  <p className='text-sm font-medium'>Empresa Demo</p>
                  <p className='text-xs text-gray-400'>empresa@demo.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className='bg-[#1A2035]' />
              <DropdownMenuItem className='hover:bg-[#1A2035] cursor-pointer'>
                <User className='mr-2 h-4 w-4' />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem className='hover:bg-[#1A2035] cursor-pointer'>
                <Settings className='mr-2 h-4 w-4' />
                <span>Configuración</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className='bg-[#1A2035]' />
              <DropdownMenuItem className='hover:bg-[#1A2035] cursor-pointer text-red-500'>
                Cerrar sesión
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
