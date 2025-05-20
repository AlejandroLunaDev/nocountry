export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  skills: string[];
  age: number;
  experience: number;
  english: string;
  stats: {
    messages: number;
    participation: number;
    attendance: number;
  };
}

export interface Team {
  id: string;
  name: string;
  project: string;
  insights: {
    messages: number;
    participation: number;
    attendance: number;
    progress: number;
    rating: number;
    time: string;
  };
  members: TeamMember[];
}
