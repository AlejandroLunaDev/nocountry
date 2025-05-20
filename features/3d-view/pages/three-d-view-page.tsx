'use client';

import { useTeams } from '@/features/teams/hooks/use-teams';
import { DashboardHeader } from '@/features/dashboard/components/dashboard-header';
import { DashboardLayout } from '@/features/dashboard/components/dashboard-layout';
import { TeamInsightsModal } from '@/features/teams/components/team-insights-modal';
import { useTeamSelection } from '../hooks/useTeamSelection';
import { LoadingState } from '../components/LoadingState';
import { PageHeader } from '../components/PageHeader';
import { TeamTabs } from '../components/TeamTabs';

export function ThreeDViewPage() {
  const { teams, loading } = useTeams();
  const {
    selectedTeam,
    setSelectedTeam,
    isDialogOpen,
    selectedTeams,
    selectedMember,
    currentTeam,
    handleTeamSelection,
    openInsightsDialog,
    closeInsightsDialog,
    setIsDialogOpen
  } = useTeamSelection(teams);

  // Function to open the general insights dialog without a specific member
  const openGeneralInsightsDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <DashboardLayout>
      <DashboardHeader />

      <main className='container mx-auto py-8 px-4'>
        <PageHeader />

        {loading ? (
          <LoadingState />
        ) : (
          <TeamTabs
            teams={teams}
            selectedTeam={selectedTeam}
            onSelectTeam={setSelectedTeam}
            onOpenInsights={openGeneralInsightsDialog}
            onMemberClick={openInsightsDialog}
            currentTeam={currentTeam}
          />
        )}
      </main>

      {/* Insights Modal */}
      <TeamInsightsModal
        isOpen={isDialogOpen}
        onClose={closeInsightsDialog}
        selectedMember={selectedMember}
        teams={teams}
        selectedTeams={selectedTeams}
        onTeamSelection={handleTeamSelection}
      />
    </DashboardLayout>
  );
}
