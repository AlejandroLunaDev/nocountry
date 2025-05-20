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
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        location: 'Buenos Aires, Argentina',
        skills: ['Slack', 'Jira', 'Agile', 'Scrum', 'Kanban'],
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
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        location: 'Medellín, Colombia',
        skills: ['Figma', 'Miro', 'Illustrator', 'Photoshop', 'Wireframing'],
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
      // Continue updating other members with real avatars
      {
        id: 'member3',
        name: 'Martín López',
        role: 'Data Analyst',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        location: 'Santiago, Chile',
        skills: ['MySQL', 'AWS', 'PowerBI', 'Python', 'Excel'],
        age: 30,
        experience: 4,
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
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
        location: 'Ciudad de México, México',
        skills: ['Docker', 'Java', 'MySQL', 'Spring Boot', 'Microservices'],
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
        avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
        location: 'Bogotá, Colombia',
        skills: ['HTML5', 'CSS3', 'React.js', 'TypeScript', 'Tailwind'],
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
      },
      // Added 6th member
      {
        id: 'member5b',
        name: 'Elena Gutiérrez',
        role: 'QA Tester',
        avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
        location: 'Mendoza, Argentina',
        skills: ['Selenium', 'Jest', 'Cypress', 'Test Planning', 'Automation'],
        age: 27,
        experience: 3,
        english: 'Intermedio',
        stats: {
          messages: 86,
          participation: 83,
          attendance: 90,
          teamwork: 88,
          communication: 89,
          proactivity: 85,
          problemSolving: 90,
          adaptability: 87,
          changeResilience: 84
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
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        location: 'Lima, Perú',
        skills: ['Slack', 'Trello', 'Scrum', 'Agile', 'Leadership'],
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
        avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
        location: 'Montevideo, Uruguay',
        skills: ['Figma', 'Adobe XD', 'Sketch', 'UI Design', 'Prototyping'],
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
        avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
        location: 'Quito, Ecuador',
        skills: ['PostgreSQL', 'Tableau', 'Python', 'R', 'Data Visualization'],
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
        avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
        location: 'Caracas, Venezuela',
        skills: ['Node.js', 'Express', 'MongoDB', 'GraphQL', 'REST API'],
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
        avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
        location: 'San José, Costa Rica',
        skills: ['JavaScript', 'Vue.js', 'Tailwind', 'SASS', 'Webpack'],
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
      },
      {
        id: 'member10a',
        name: 'Roberto Paredes',
        role: 'QA Tester',
        avatar: 'https://randomuser.me/api/portraits/men/23.jpg',
        location: 'Guatemala City, Guatemala',
        skills: ['Appium', 'Detox', 'XCTest', 'Mobile Testing', 'Bug Tracking'],
        age: 26,
        experience: 3,
        english: 'Intermedio',
        stats: {
          messages: 78,
          participation: 80,
          attendance: 87,
          teamwork: 84,
          communication: 88,
          proactivity: 86,
          problemSolving: 90,
          adaptability: 85,
          changeResilience: 82
        }
      },
      {
        id: 'member10b',
        name: 'Felipe Herrera',
        role: 'DevOps Engineer',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
        location: 'Santiago, Chile',
        skills: ['CI/CD', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
        age: 30,
        experience: 6,
        english: 'Avanzado',
        stats: {
          messages: 75,
          participation: 79,
          attendance: 85,
          teamwork: 86,
          communication: 82,
          proactivity: 90,
          problemSolving: 91,
          adaptability: 88,
          changeResilience: 87
        }
      },
      {
        id: 'member10c',
        name: 'Daniela Rojas',
        role: 'Frontend Developer',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        location: 'Medellín, Colombia',
        skills: ['React Native', 'TypeScript', 'Redux', 'Mobile UI', 'Jest'],
        age: 27,
        experience: 4,
        english: 'Intermedio',
        stats: {
          messages: 82,
          participation: 85,
          attendance: 89,
          teamwork: 90,
          communication: 87,
          proactivity: 84,
          problemSolving: 85,
          adaptability: 91,
          changeResilience: 88
        }
      },
      {
        id: 'member10d',
        name: 'Miguel Ángel Rivas',
        role: 'UI Designer',
        avatar: 'https://randomuser.me/api/portraits/men/18.jpg',
        location: 'Buenos Aires, Argentina',
        skills: ['Sketch', 'Adobe XD', 'Zeplin', 'UI Systems', 'Prototyping'],
        age: 26,
        experience: 3,
        english: 'Intermedio',
        stats: {
          messages: 76,
          participation: 82,
          attendance: 88,
          teamwork: 85,
          communication: 92,
          proactivity: 83,
          problemSolving: 79,
          adaptability: 87,
          changeResilience: 84
        }
      },
      {
        id: 'member10e',
        name: 'Carolina Duarte',
        role: 'Backend Developer',
        avatar: 'https://randomuser.me/api/portraits/women/77.jpg',
        location: 'Bogotá, Colombia',
        skills: ['Python', 'Flask', 'AWS', 'Microservices', 'API Design'],
        age: 29,
        experience: 5,
        english: 'Avanzado',
        stats: {
          messages: 88,
          participation: 84,
          attendance: 86,
          teamwork: 87,
          communication: 85,
          proactivity: 89,
          problemSolving: 93,
          adaptability: 88,
          changeResilience: 85
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
        avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
        location: 'Asunción, Paraguay',
        skills: ['Slack', 'Monday', 'Kanban', 'Agile', 'Risk Management'],
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
        avatar: 'https://randomuser.me/api/portraits/women/37.jpg',
        location: 'La Paz, Bolivia',
        skills: ['Figma', 'InVision', 'Photoshop', 'UI/UX', 'Design Systems'],
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
        avatar: 'https://randomuser.me/api/portraits/men/29.jpg',
        location: 'Panamá, Panamá',
        skills: ['SQL Server', 'Power BI', 'Excel', 'Data Modeling', 'ETL'],
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
        avatar: 'https://randomuser.me/api/portraits/women/49.jpg',
        location: 'Santo Domingo, Rep. Dominicana',
        skills: ['Python', 'Django', 'PostgreSQL', 'API Design', 'Docker'],
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
        avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
        location: 'San Salvador, El Salvador',
        skills: ['TypeScript', 'Angular', 'SASS', 'RxJS', 'Jest'],
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
