'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/shared/components/ui/tabs';
import { Button } from '@/shared/components/ui/button';
import { BarChart2 } from 'lucide-react';
import { TeamInsights } from '@/features/teams/components/team-insights';
import { TeamVisualization } from './TeamVisualization';
import type { Team, TeamMember } from '@/features/teams/types';

interface TeamTabsProps {
  teams: Team[];
  selectedTeam: string;
  onSelectTeam: (teamId: string) => void;
  onOpenInsights: () => void;
  onMemberClick: (member: TeamMember) => void;
  currentTeam: Team | undefined;
}

export function TeamTabs({
  teams,
  selectedTeam,
  onSelectTeam,
  onOpenInsights,
  onMemberClick,
  currentTeam
}: TeamTabsProps) {
  return (
    <Tabs
      defaultValue={teams[0]?.id}
      value={selectedTeam}
      onValueChange={onSelectTeam}
      className='w-full'
    >
      <div className='relative'>
        <div className='absolute -top-[1px] left-0 right-0 h-[1px] bg-gradient-to-r from-[#FF2D8A]/0 via-[#FF2D8A] to-[#FF2D8A]/0'></div>
        <TabsList className='w-full justify-start mb-8 bg-[#0A1428] border border-[#1A2035] overflow-x-auto'>
          {teams.map(team => (
            <TabsTrigger
              key={team.id}
              value={team.id}
              className='data-[state=active]:bg-[#1A2035] data-[state=active]:text-[#FF2D8A] data-[state=active]:border-t-2 data-[state=active]:border-t-[#FF2D8A]'
            >
              {team.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {teams.map(team => (
        <TabsContent
          key={team.id}
          value={team.id}
          className='space-y-8 animate-in fade-in-50 duration-300'
        >
          <div className='flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='text-2xl font-bold flex items-center gap-2'>
                  {team.name}
                  <span className='text-[#FF2D8A]'>•</span>
                  <span className='text-gray-400 font-normal'>
                    {team.project}
                  </span>
                </h2>
                <p className='text-sm text-gray-400 mt-1'>
                  Semana 3 de 5 • {team.members.length} participantes • Proyecto
                  activo
                </p>
              </div>
              <Button
                onClick={onOpenInsights}
                className='bg-[#FF2D8A] hover:bg-[#D91A70] text-white'
              >
                <BarChart2 className='mr-2 h-4 w-4' />
                Ver Insights
              </Button>
            </div>

            {/* Team Insights */}
            <TeamInsights insights={team.insights} />

            {/* 3D Visualization */}
            {currentTeam && (
              <TeamVisualization
                members={currentTeam.members}
                onMemberClick={onMemberClick}
              />
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
