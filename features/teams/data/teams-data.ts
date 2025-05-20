import type { Team } from '@/features/teams/types';

export const teamsData: Team[] = [
  {
    id: 'team1',
    name: 's21-01-t-webapp',
    project: 'NoCountry Dashboard',
    insights: {
      messages: 473,
      participation: 85,
      attendance: 93,
      progress: 67,
      rating: 8.7,
      time: '3/5 sem'
    },
    members: [
      {
        id: 'member1',
        name: 'Carlos Rodríguez',
        role: 'Project Manager',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Buenos Aires, Argentina',
        skills: ['Slack', 'Jira', 'Agile', 'Scrum', 'Kanban'],
        age: 28,
        experience: 5,
        english: 'Avanzado',
        stats: {
          messages: 120,
          participation: 90,
          attendance: 95
        }
      },
      {
        id: 'member2',
        name: 'Lucía Fernández',
        role: 'Diseñadora UX/UI',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Medellín, Colombia',
        skills: ['Figma', 'Miro', 'Illustrator', 'Photoshop', 'Wireframing'],
        age: 25,
        experience: 3,
        english: 'Intermedio',
        stats: {
          messages: 98,
          participation: 88,
          attendance: 92
        }
      },
      {
        id: 'member3',
        name: 'Martín López',
        role: 'Data Analyst',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Santiago, Chile',
        skills: ['MySQL', 'AWS', 'PowerBI', 'Python', 'Excel'],
        age: 30,
        experience: 6,
        english: 'Avanzado',
        stats: {
          messages: 85,
          participation: 82,
          attendance: 90
        }
      },
      {
        id: 'member4',
        name: 'Alejandro Gómez',
        role: 'Back-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Ciudad de México, México',
        skills: ['Docker', 'Java', 'MySQL', 'Spring Boot', 'Microservices'],
        age: 32,
        experience: 7,
        english: 'Intermedio',
        stats: {
          messages: 92,
          participation: 85,
          attendance: 95
        }
      },
      {
        id: 'member5',
        name: 'Sofía Martínez',
        role: 'Front-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Bogotá, Colombia',
        skills: ['HTML5', 'CSS3', 'React.js', 'TypeScript', 'Tailwind'],
        age: 26,
        experience: 4,
        english: 'Avanzado',
        stats: {
          messages: 78,
          participation: 80,
          attendance: 93
        }
      }
    ]
  },
  {
    id: 'team2',
    name: 's21-02-t-mobile',
    project: 'NoCountry Mobile App',
    insights: {
      messages: 512,
      participation: 88,
      attendance: 91,
      progress: 72,
      rating: 8.4,
      time: '2/4 sem'
    },
    members: [
      {
        id: 'member6',
        name: 'Valentina Pérez',
        role: 'Project Manager',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Lima, Perú',
        skills: ['Slack', 'Trello', 'Scrum', 'Agile', 'Leadership'],
        age: 29,
        experience: 6,
        english: 'Avanzado',
        stats: {
          messages: 130,
          participation: 92,
          attendance: 94
        }
      },
      {
        id: 'member7',
        name: 'Diego Sánchez',
        role: 'Diseñador UX/UI',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Montevideo, Uruguay',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'UI Design', 'Prototyping'],
        age: 27,
        experience: 4,
        english: 'Intermedio',
        stats: {
          messages: 105,
          participation: 86,
          attendance: 90
        }
      },
      {
        id: 'member8',
        name: 'Camila Torres',
        role: 'Data Analyst',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Quito, Ecuador',
        skills: ['PostgreSQL', 'Tableau', 'Python', 'R', 'Data Visualization'],
        age: 31,
        experience: 5,
        english: 'Avanzado',
        stats: {
          messages: 92,
          participation: 84,
          attendance: 88
        }
      },
      {
        id: 'member9',
        name: 'Javier Morales',
        role: 'Back-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Caracas, Venezuela',
        skills: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'REST API'],
        age: 33,
        experience: 8,
        english: 'Intermedio',
        stats: {
          messages: 98,
          participation: 89,
          attendance: 92
        }
      },
      {
        id: 'member10',
        name: 'Ana Ramírez',
        role: 'Front-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'San José, Costa Rica',
        skills: ['JavaScript', 'Vue.js', 'Tailwind', 'SASS', 'Webpack'],
        age: 28,
        experience: 5,
        english: 'Avanzado',
        stats: {
          messages: 87,
          participation: 83,
          attendance: 90
        }
      }
    ]
  },
  {
    id: 'team3',
    name: 's21-18-t-data',
    project: 'NoCountry Analytics Platform',
    insights: {
      messages: 495,
      participation: 82,
      attendance: 89,
      progress: 58,
      rating: 7.9,
      time: '4/6 sem'
    },
    members: [
      {
        id: 'member11',
        name: 'Gabriel Herrera',
        role: 'Project Manager',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Asunción, Paraguay',
        skills: ['Slack', 'Monday', 'Kanban', 'Agile', 'Risk Management'],
        age: 34,
        experience: 9,
        english: 'Avanzado',
        stats: {
          messages: 125,
          participation: 88,
          attendance: 92
        }
      },
      {
        id: 'member12',
        name: 'Daniela Vargas',
        role: 'Diseñadora UX/UI',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'La Paz, Bolivia',
        skills: ['Figma', 'InVision', 'Photoshop', 'UI/UX', 'Design Systems'],
        age: 26,
        experience: 3,
        english: 'Intermedio',
        stats: {
          messages: 102,
          participation: 85,
          attendance: 88
        }
      },
      {
        id: 'member13',
        name: 'Sebastián Mendoza',
        role: 'Data Analyst',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Panamá, Panamá',
        skills: ['SQL Server', 'Power BI', 'Excel', 'Data Modeling', 'ETL'],
        age: 29,
        experience: 4,
        english: 'Avanzado',
        stats: {
          messages: 88,
          participation: 80,
          attendance: 85
        }
      },
      {
        id: 'member14',
        name: 'Laura Castro',
        role: 'Back-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Santo Domingo, Rep. Dominicana',
        skills: ['Python', 'Django', 'PostgreSQL', 'API Design', 'Docker'],
        age: 31,
        experience: 6,
        english: 'Intermedio',
        stats: {
          messages: 95,
          participation: 82,
          attendance: 90
        }
      },
      {
        id: 'member15',
        name: 'Ricardo Flores',
        role: 'Front-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'San Salvador, El Salvador',
        skills: ['TypeScript', 'Angular', 'SASS', 'RxJS', 'Jest'],
        age: 27,
        experience: 4,
        english: 'Avanzado',
        stats: {
          messages: 85,
          participation: 78,
          attendance: 87
        }
      }
    ]
  }
];
