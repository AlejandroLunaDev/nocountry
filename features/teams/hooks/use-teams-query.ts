import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { teamsApi } from '../api/teams-api';
import type { Team } from '../types';

export const teamsKeys = {
  all: ['teams'] as const,
  lists: () => [...teamsKeys.all, 'list'] as const,
  list: (filters: string) => [...teamsKeys.lists(), { filters }] as const,
  details: () => [...teamsKeys.all, 'detail'] as const,
  detail: (id: string) => [...teamsKeys.details(), id] as const
};

export function useTeamsQuery() {
  return useQuery({
    queryKey: teamsKeys.lists(),
    queryFn: () => teamsApi.getTeams()
  });
}

export function useTeamQuery(teamId: string) {
  return useQuery({
    queryKey: teamsKeys.detail(teamId),
    queryFn: () => teamsApi.getTeamById(teamId),
    enabled: !!teamId
  });
}

export function useMemberInsightsQuery(memberId: string) {
  return useQuery({
    queryKey: ['member', memberId, 'insights'],
    queryFn: () => teamsApi.getMemberInsights(memberId),
    enabled: !!memberId
  });
}

export function useUpdateTeamMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ teamId, data }: { teamId: string; data: Partial<Team> }) =>
      teamsApi.updateTeam(teamId, data),
    onSuccess: updatedTeam => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: teamsKeys.lists() });
      queryClient.invalidateQueries({
        queryKey: teamsKeys.detail(updatedTeam.id)
      });
    }
  });
}
