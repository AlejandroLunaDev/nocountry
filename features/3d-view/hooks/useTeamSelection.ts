'use client';

import { useState, useEffect } from 'react';
import type { Team, TeamMember } from '@/features/teams/types';

export function useTeamSelection(teams: Team[]) {
  const [selectedTeam, setSelectedTeam] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const currentTeam = teams.find(team => team.id === selectedTeam);

  const handleTeamSelection = (teamId: string) => {
    if (selectedTeams.includes(teamId)) {
      setSelectedTeams(selectedTeams.filter(id => id !== teamId));
    } else {
      if (selectedTeams.length < 5) {
        setSelectedTeams([...selectedTeams, teamId]);
      }
    }
  };

  const openInsightsDialog = (member: TeamMember) => {
    setSelectedMember(member);
    setIsDialogOpen(true);
  };

  const closeInsightsDialog = () => {
    setIsDialogOpen(false);
  };

  // Set initial selected team once teams are loaded
  useEffect(() => {
    if (teams.length > 0 && !selectedTeam) {
      setSelectedTeam(teams[0].id);
    }
  }, [teams, selectedTeam]);

  return {
    selectedTeam,
    setSelectedTeam,
    isDialogOpen,
    setIsDialogOpen,
    selectedTeams,
    selectedMember,
    currentTeam,
    handleTeamSelection,
    openInsightsDialog,
    closeInsightsDialog
  };
}
