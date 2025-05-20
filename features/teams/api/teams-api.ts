import type { Team, TeamMember } from '../types';

// This is a mock API service - replace with real API calls
export const teamsApi = {
  getTeams: async (): Promise<Team[]> => {
    // Replace with actual API call
    const response = await fetch('/api/teams');
    if (!response.ok) {
      throw new Error('Failed to fetch teams');
    }
    return response.json();
  },

  getTeamById: async (teamId: string): Promise<Team> => {
    const response = await fetch(`/api/teams/${teamId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch team');
    }
    return response.json();
  },

  getMemberInsights: async (memberId: string): Promise<TeamMember> => {
    const response = await fetch(`/api/members/${memberId}/insights`);
    if (!response.ok) {
      throw new Error('Failed to fetch member insights');
    }
    return response.json();
  },

  updateTeam: async (teamId: string, data: Partial<Team>): Promise<Team> => {
    const response = await fetch(`/api/teams/${teamId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error('Failed to update team');
    }
    return response.json();
  }
};
