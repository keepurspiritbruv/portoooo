import type { Project } from '../types'

import mealifyImg from '../assets/mealify.png'
import junprokImg from '../assets/junprok.png'
import banjarasriImg from '../assets/banjarasu.png'
import banjarasriIG from '../assets/ssig.png'
import ptPupuk from '../assets/ptpupuk.png'
import dashboardcp from '../assets/DashboardD04.png'
import kurbanImg from '../assets/kurban-207.jpg'
import hariIbuImg from '../assets/DSC01975.png'
import nglolangImg from '../assets/DSC04629-170.jpg'
import lembahImg from '../assets/DSC04752-72.jpg'
import kknImg from '../assets/kkn-video.png'

export const projects: Project[] = [
  {
    id: 'miniweather',
    title: 'Miniweather AI-Powered IoT Weather Monitoring & Early Warning System',
    shortDesc: 'Four-service weather platform with LSTM rainfall and wind anomaly detection',
    longDesc:
      'Contributed to a four-service platform combining sensor monitoring, interactive dashboards, backend APIs, and LSTM-based rainfall and wind anomaly detection. The work included integrating machine-learning outputs into the weather dashboard.',
    techStack: ['IoT Monitoring', 'Backend APIs', 'LSTM Autoencoder'],
    category: 'fullstack',
    images: [],
    githubUrl: 'https://github.com/Miniweather-Station-Dashboard',
    liveUrl: 'https://weather.context.my.id/dashboard',
    year: 2026,
    featured: true,
  },
  {
    id: 'coastal-early-warning',
    title: 'Coastal Disaster Early Warning System',
    shortDesc: 'Undergraduate thesis prototype spanning five coastal locations',
    longDesc:
      'Developed a rule-based early-warning prototype for five beaches, combining local fishermen knowledge with BMKG weather forecasts. This work was completed as an undergraduate thesis.',
    techStack: ['Rule-based Early Warning', 'BMKG Forecasts', 'Local Knowledge'],
    category: 'fullstack',
    images: [],
    githubUrl: 'https://github.com/keepurspiritbruv/peringatancuacav3',
    liveUrl: 'https://samudraapp.id/',
    driveUrl: 'https://drive.google.com/file/d/1kEbVDZZm2MgPlyxIxktmJQ1Jxf7YBYE2/view?usp=sharing',
    year: 2026,
    featured: true,
  },
  {
    id: 'kkn-video',
    title: 'KKN Project Video',
    shortDesc: 'Community service program video — Kuliah Kerja Nyata',
    longDesc:
      'A video project created for the KKN (Kuliah Kerja Nyata) community service program, documenting the activities, community engagement, and impact of the program. Shot and edited with a cinematic approach to highlight the meaningful contributions and experiences during the program.',
    techStack: ['Premiere Pro', 'Cinematography', 'Video Editing', 'Content Creation'],
    category: 'other',
    thumbnail: kknImg,
    images: [kknImg],
    liveUrl: 'https://www.instagram.com/reel/DT73u7bEoGu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    year: 2025,
    featured: true,
  },
  {
    id: 'mealify',
    title: 'Mealify',
    shortDesc: 'Web application for college course — UI/UX and Front End Engineering',
    longDesc:
      'A web application developed for my college course "Pengembangan Aplikasi Web", focusing on UI/UX design principles and Front End Engineering. The project demonstrates responsive design, clean component architecture, and modern CSS techniques.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    category: 'web',
    thumbnail: mealifyImg,
    images: [mealifyImg],
    year: 2024,
    featured: true,
  },
  {
    id: 'junprok',
    title: 'Junior Project',
    shortDesc: 'Programming lab project demonstrating practical coding skills',
    longDesc:
      'A project from my programming laboratory session, demonstrating practical coding skills and problem-solving abilities. Showcases algorithmic thinking and clean code practices.',
    techStack: ['JavaScript', 'Problem Solving', 'Algorithms'],
    category: 'web',
    thumbnail: junprokImg,
    images: [junprokImg],
    year: 2024,
    featured: false,
  },
  {
    id: 'banjarasri-video',
    title: 'Banjarasri Profile Video',
    shortDesc: 'Video profile for PPK GAMAPI — vision, mission, and activities',
    longDesc:
      'Video-themed project to create a profile video for PPK GAMAPI, showcasing the organization\'s vision, mission, and activities. Shot and edited with cinematic techniques to capture the essence of community engagement.',
    techStack: ['Premiere Pro', 'Cinematography', 'Video Editing'],
    category: 'other',
    thumbnail: banjarasriImg,
    images: [banjarasriImg],
    liveUrl: 'https://youtu.be/_BK65XmE5OA?si=sLIemmTmlbxFNQKA',
    year: 2024,
    featured: true,
  },
  {
    id: 'banjarasri-instagram',
    title: 'Instagram Reels — PPK GAMAPI',
    shortDesc: 'Weekly recap reels for Banjarasri community Instagram',
    longDesc:
      'All the Weekly Recap in Reels created for the PPK GAMAPI Banjarasri Instagram account. Consistent content creation with engaging visual storytelling, motion graphics, and brand-aligned aesthetics.',
    techStack: ['Premiere Pro', 'After Effects', 'Content Creation'],
    category: 'other',
    thumbnail: banjarasriIG,
    images: [banjarasriIG],
    liveUrl: 'https://instagram.com/ppkbanjarasri.ugm',
    year: 2024,
    featured: false,
  },
  {
    id: 'pt-pupuk',
    title: 'Kabar Pusri — News Interface',
    shortDesc: 'Responsive company news interface built during a frontend internship',
    longDesc:
      'Delivered a responsive Kabar Pusri news interface for desktop and mobile using React and Tailwind CSS. Standardized responsive page layouts and interactive component presentation for consistent cross-device use.',
    techStack: ['React', 'Tailwind CSS'],
    category: 'web',
    thumbnail: ptPupuk,
    images: [ptPupuk],
    year: 2025,
    featured: true,
  },
  {
    id: 'capstone-ultrasonic',
    title: 'Capstone — Ultrasonic Pest Control Dashboard',
    shortDesc: 'Web app for ultrasonic pest control monitoring (on progress)',
    longDesc:
      'A web application developed as a capstone project for "Pengembangan Aplikasi Web", utilizing ultrasonic waves for pest control to enhance the safety and productivity of farmers. Features a real-time dashboard for monitoring pest activity, device status, and environmental data. Currently in progress.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'IoT'],
    category: 'fullstack',
    thumbnail: dashboardcp,
    images: [dashboardcp],
    year: 2025,
    featured: true,
  },
  {
    id: 'qurban-2024',
    title: 'Nyangkringan Berqurban 2024',
    shortDesc: 'Photographing the Qurban moment at neighborhood mosque',
    longDesc:
      'I was in charge of photographing the Qurban ceremony at my neighborhood mosque to capture the special Qurban 2024 moment. The collection documents the community spirit and cultural significance of the event.',
    techStack: ['Photography', 'Lightroom', 'Photo Editing'],
    category: 'other',
    thumbnail: kurbanImg,
    images: [kurbanImg],
    liveUrl: 'https://drive.google.com/drive/folders/1uIEW78GoppRLSiaONw7RwqKSc7-a9P_p?usp=drive_link',
    year: 2024,
    featured: false,
  },
  {
    id: 'mothers-day-2023',
    title: "Mother's Day 2023",
    shortDesc: "Capturing the joyful Mother's Day celebration moments",
    longDesc:
      "I was in charge of capturing the very happy Mother's Day moment. A collection of candid and posed shots that celebrate the warmth and love of the occasion.",
    techStack: ['Photography', 'Lightroom', 'Portrait'],
    category: 'other',
    thumbnail: hariIbuImg,
    images: [hariIbuImg],
    liveUrl: 'https://drive.google.com/drive/folders/1jIGizeVsSGa-wUz42CwQbFG8r-S1RWLA?usp=sharing',
    year: 2023,
    featured: false,
  },
  {
    id: 'nglolang-beach',
    title: 'Nglolang Beach 2024',
    shortDesc: 'Beach photography trip — Gunungkidul, Yogyakarta',
    longDesc:
      "A small trip to a beach called 'Nglolang' in Gunungkidul, Yogyakarta. Capturing the moment while friends are enjoying the beach. Natural lighting and seascape photography techniques were used throughout.",
    techStack: ['Photography', 'Lightroom', 'Landscape'],
    category: 'other',
    thumbnail: nglolangImg,
    images: [nglolangImg],
    liveUrl: 'https://drive.google.com/drive/folders/1e8jr4IHsGupnhmPI2v9b0cE5CY8501-2?usp=drive_link',
    year: 2024,
    featured: false,
  },
  {
    id: 'lembah-manah',
    title: 'Lembah Manah 2024',
    shortDesc: 'Road trip photography — Girpasang, Klaten',
    longDesc:
      'A small trip with friends to Lembah Manah and Girpasang Klaten to capture the beautiful scenery and feel the sensation of riding a motorbike. A blend of landscape and adventure photography.',
    techStack: ['Photography', 'Lightroom', 'Adventure'],
    category: 'other',
    thumbnail: lembahImg,
    images: [lembahImg],
    liveUrl: 'https://drive.google.com/drive/folders/1MY8K_GspjQj8Wne9k6LkIWzUUnoldw-q?usp=drive_link',
    year: 2024,
    featured: false,
  },
]
