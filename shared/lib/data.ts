import type { Team } from './types';

export const teams: Team[] = [
  {
    id: 'team1',
    name: 'equipo-s21-01-t-webapp',
    project: 'NoCountry Dashboard',
    insights: {
      messages: 473,
      participation: 85,
      attendance: 93,
      progress: 78,
      rating: 4.2,
      time: '28h 45m'
    },
    members: [
      {
        id: 'member1',
        name: 'Carlos Rodríguez',
        role: 'Project Manager',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Buenos Aires, Argentina',
        skills: ['Slack', 'Jira', 'Agile'],
        age: 28,
        experience: 5,
        english: 'Avanzado',
        stats: {
          messages: 120,
          participation: 90,
          attendance: 95,
          teamwork: 92,
          communication: 92,
          proactivity: 96,
          problemSolving: 88,
          adaptability: 90,
          changeResilience: 90
        }
      },
      {
        id: 'member2',
        name: 'Lucía Fernández',
        role: 'Diseñadora UX/UI',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Medellín, Colombia',
        skills: ['Figma', 'Miro', 'Illustrator'],
        age: 25,
        experience: 3,
        english: 'Intermedio',
        stats: {
          messages: 98,
          participation: 88,
          attendance: 92,
          teamwork: 94,
          communication: 90,
          proactivity: 88,
          problemSolving: 85,
          adaptability: 94,
          changeResilience: 87
        }
      },
      {
        id: 'member3',
        name: 'Martín López',
        role: 'Data Analyst',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Santiago, Chile',
        skills: ['MySQL', 'AWS', 'PowerBI'],
        age: 30,
        experience: 6,
        english: 'Avanzado',
        stats: {
          messages: 85,
          participation: 82,
          attendance: 90,
          teamwork: 86,
          communication: 88,
          proactivity: 94,
          problemSolving: 95,
          adaptability: 82,
          changeResilience: 86
        }
      },
      {
        id: 'member4',
        name: 'Alejandro Gómez',
        role: 'Back-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Ciudad de México, México',
        skills: ['Docker', 'Java', 'MySQL'],
        age: 32,
        experience: 7,
        english: 'Intermedio',
        stats: {
          messages: 92,
          participation: 85,
          attendance: 95,
          teamwork: 91,
          communication: 84,
          proactivity: 89,
          problemSolving: 93,
          adaptability: 88,
          changeResilience: 85
        }
      },
      {
        id: 'member5',
        name: 'Sofía Martínez',
        role: 'Front-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Bogotá, Colombia',
        skills: ['HTML5', 'CSS3', 'React.js'],
        age: 26,
        experience: 4,
        english: 'Avanzado',
        stats: {
          messages: 78,
          participation: 80,
          attendance: 93,
          teamwork: 90,
          communication: 95,
          proactivity: 93,
          problemSolving: 84,
          adaptability: 91,
          changeResilience: 88
        }
      }
    ]
  },
  {
    id: 'team2',
    name: 'equipo-s21-02-t-mobile',
    project: 'NoCountry Mobile App',
    insights: {
      messages: 512,
      participation: 88,
      attendance: 91,
      progress: 82,
      rating: 4.5,
      time: '31h 20m'
    },
    members: [
      {
        id: 'member6',
        name: 'Valentina Pérez',
        role: 'Project Manager',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Lima, Perú',
        skills: ['Slack', 'Trello', 'Scrum'],
        age: 29,
        experience: 6,
        english: 'Avanzado',
        stats: {
          messages: 130,
          participation: 92,
          attendance: 94,
          teamwork: 93,
          communication: 96,
          proactivity: 91,
          problemSolving: 89,
          adaptability: 92,
          changeResilience: 88
        }
      },
      {
        id: 'member7',
        name: 'Diego Sánchez',
        role: 'Diseñador UX/UI',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Montevideo, Uruguay',
        skills: ['Figma', 'Adobe XD', 'Sketch'],
        age: 27,
        experience: 4,
        english: 'Intermedio',
        stats: {
          messages: 105,
          participation: 86,
          attendance: 90,
          teamwork: 88,
          communication: 93,
          proactivity: 85,
          problemSolving: 82,
          adaptability: 89,
          changeResilience: 91
        }
      },
      {
        id: 'member8',
        name: 'Camila Torres',
        role: 'Data Analyst',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Quito, Ecuador',
        skills: ['PostgreSQL', 'Tableau', 'Python'],
        age: 31,
        experience: 5,
        english: 'Avanzado',
        stats: {
          messages: 92,
          participation: 84,
          attendance: 88,
          teamwork: 87,
          communication: 85,
          proactivity: 90,
          problemSolving: 96,
          adaptability: 86,
          changeResilience: 84
        }
      },
      {
        id: 'member9',
        name: 'Javier Morales',
        role: 'Back-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Caracas, Venezuela',
        skills: ['Node.js', 'Express', 'MongoDB'],
        age: 33,
        experience: 8,
        english: 'Intermedio',
        stats: {
          messages: 98,
          participation: 89,
          attendance: 92,
          teamwork: 91,
          communication: 87,
          proactivity: 92,
          problemSolving: 93,
          adaptability: 89,
          changeResilience: 86
        }
      },
      {
        id: 'member10',
        name: 'Ana Ramírez',
        role: 'Front-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'San José, Costa Rica',
        skills: ['JavaScript', 'Vue.js', 'Tailwind'],
        age: 28,
        experience: 5,
        english: 'Avanzado',
        stats: {
          messages: 87,
          participation: 83,
          attendance: 90,
          teamwork: 89,
          communication: 91,
          proactivity: 95,
          problemSolving: 86,
          adaptability: 92,
          changeResilience: 90
        }
      }
    ]
  },
  {
    id: 'team3',
    name: 'equipo-s21-03-t-data',
    project: 'NoCountry Analytics Platform',
    insights: {
      messages: 495,
      participation: 82,
      attendance: 89,
      progress: 75,
      rating: 4.0,
      time: '26h 15m'
    },
    members: [
      {
        id: 'member11',
        name: 'Gabriel Herrera',
        role: 'Project Manager',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Asunción, Paraguay',
        skills: ['Slack', 'Monday', 'Kanban'],
        age: 34,
        experience: 9,
        english: 'Avanzado',
        stats: {
          messages: 125,
          participation: 88,
          attendance: 92,
          teamwork: 90,
          communication: 94,
          proactivity: 88,
          problemSolving: 93,
          adaptability: 87,
          changeResilience: 85
        }
      },
      {
        id: 'member12',
        name: 'Daniela Vargas',
        role: 'Diseñadora UX/UI',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'La Paz, Bolivia',
        skills: ['Figma', 'InVision', 'Photoshop'],
        age: 26,
        experience: 3,
        english: 'Intermedio',
        stats: {
          messages: 102,
          participation: 85,
          attendance: 88,
          teamwork: 86,
          communication: 93,
          proactivity: 89,
          problemSolving: 84,
          adaptability: 92,
          changeResilience: 90
        }
      },
      {
        id: 'member13',
        name: 'Sebastián Mendoza',
        role: 'Data Analyst',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Panamá, Panamá',
        skills: ['SQL Server', 'Power BI', 'Excel'],
        age: 29,
        experience: 4,
        english: 'Avanzado',
        stats: {
          messages: 88,
          participation: 80,
          attendance: 85,
          teamwork: 83,
          communication: 81,
          proactivity: 87,
          problemSolving: 95,
          adaptability: 84,
          changeResilience: 80
        }
      },
      {
        id: 'member14',
        name: 'Laura Castro',
        role: 'Back-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'Santo Domingo, Rep. Dominicana',
        skills: ['Python', 'Django', 'PostgreSQL'],
        age: 31,
        experience: 6,
        english: 'Intermedio',
        stats: {
          messages: 95,
          participation: 82,
          attendance: 90,
          teamwork: 88,
          communication: 86,
          proactivity: 90,
          problemSolving: 91,
          adaptability: 85,
          changeResilience: 83
        }
      },
      {
        id: 'member15',
        name: 'Ricardo Flores',
        role: 'Front-End',
        avatar: '/placeholder.svg?height=80&width=80',
        location: 'San Salvador, El Salvador',
        skills: ['TypeScript', 'Angular', 'SASS'],
        age: 27,
        experience: 4,
        english: 'Avanzado',
        stats: {
          messages: 85,
          participation: 78,
          attendance: 87,
          teamwork: 85,
          communication: 89,
          proactivity: 94,
          problemSolving: 83,
          adaptability: 88,
          changeResilience: 90
        }
      }
    ]
  }
];
