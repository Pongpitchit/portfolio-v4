// ─────────────────────────────────────────────
//  lib/portfolio-data.ts
//  Single source of truth for all portfolio data
// ─────────────────────────────────────────────

export const profileData = {
  name: 'Pongpitchit Sittipakdee',
  title: 'Full-Stack Developer',
  avatar: '/professional-developer-avatar.png',
  email: 'Pongpitchitza@gmail.com',
  studying: 'Rangsit University',
  faculty: 'Digital Innovation and Information Technology',
  social: {
    github: 'https://github.com/Pongpitchit',
    instagram: 'https://instagram.com/Besttpopxlarr',
  },
} as const

// ─── About ───────────────────────────────────

export const aboutData = {
  description: [
    "I'm a Full-Stack Developer based in Thailand, currently studying at Rangsit University (RSU), Faculty of Digital Innovation and Information Technology (DIT). I specialize in web development and building modern digital solutions. I enjoy transforming complex problems into simple, intuitive, and visually appealing applications.",
    "My work focuses on creating functional, user-friendly, and aesthetically engaging websites and applications. I add a personal touch to every project to ensure it stands out and clearly communicates your message. I've worked with technologies like React, Next.js, Node.js, and modern cloud platforms.",
  ],
  services: [
    {
      icon: 'Code' as const,
      title: 'Frontend Development',
      description:
        'Building modern, responsive web applications with React, Next.js, and TypeScript.',
    },
    {
      icon: 'Zap' as const,
      title: 'Backend Development',
      description:
        'Creating robust APIs and server-side solutions with Node.js and modern frameworks.',
    },
    {
      icon: 'Smartphone' as const,
      title: 'Mobile Development',
      description:
        'Professional development of mobile applications with React Native and modern tools.',
    },
    {
      icon: 'PenTool' as const,
      title: 'UI/UX Design',
      description:
        'Designing intuitive and beautiful user interfaces that enhance user experience.',
    },
  ],
  projectsInProgress: [
    {
      avatar: '#',
      name: '#',
      text: '#',
    },
  ],
  skills: [
    { name: 'Next.js',      logo: '/next-icon.png' },
    { name: 'React',        logo: '/react-logo.png' },
    { name: 'Python',       logo: '/python-logo.png' },
    { name: 'TypeScript',   logo: '/typescript-logo.png' },
    { name: 'JavaScript',   logo: '/javascript-logo.png' },
    { name: 'PHP',          logo: '/php-logo.png' },
    { name: 'Docker',       logo: '/docker-logo.png' },
  ],
} as const

// ─── Resume ──────────────────────────────────

export const resumeData = {
  education: [
    {
      title: 'Rangsit University',
      period: '2023 — Present',
      description:
        'Currently studying at Rangsit University (RSU), Faculty of Digital Innovation and Information Technology (DIT)',
    },
    {
      title: 'Attawit Commercial Technology College',
      period: '2017 — 2019',
      description:
        'Studied computer systems with a focus on business computing, software applications, and practical IT skills, completed vocational certificate (Vocational Diploma) in the Faculty of Business Computer.',
    },
  ],
  skills: [
    { name: 'Web Design',            level: 70 },
    { name: 'Frontend Development',  level: 55 },
    { name: 'Backend Development',   level: 45 },
    { name: 'Database Design',       level: 40 },
  ],
} as const

// ─── Portfolio / Projects ────────────────────

export const portfolioData = {
  categories: ['all', 'web design', 'applications', 'iot'] as const,
  projects: [
    {
      title: 'Trello Clone',
      category: 'web design',
      image: '/Trello-Clone.png',
      description:
        'A Trello-style task manager with boards, lists, and cards — featuring signup/login, a real-time dashboard, drag-and-drop, and collaboration tools.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Tailwind', 'Jenkins CI/CD'],
      liveUrl: 'https://trello-neon-ten.vercel.app/',
      githubUrl: 'https://github.com/Pongpitchit/Trello-Clone',
    },
    {
      title: 'Fullstack Docker QR',
      category: 'applications',
      image: '/restaurant-qr-code-ordering.png',
      description:
        'A Full-Stack application containerized with Docker for easy deployment and scalability. Includes user authentication, a dynamic dashboard, API integration, database connectivity, and a modern responsive UI.',
      tech: [
        'Next.js', 'Node.js', 'Tailwind', 'TypeScript',
        'Docker', 'MinIO', 'PostgreSQL 16', 'lucide-react', 'shadcn/ui',
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/Pongpitchit/Qrcode-Order-Docker.git',
    },
    {
      title: 'Portfolio Website v3',
      category: 'web design',
      image: '/portfolio-v3.png',
      description:
        'A modern portfolio website showcasing projects, skills, and contact information. Built with Next.js, Tailwind CSS, and Framer Motion for a smooth, responsive user experience.',
      tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      liveUrl: 'https://portfolio-pongpitchit.vercel.app/',
      githubUrl: 'https://github.com/Pongpitchit/Portfolio-v3',
    },
    {
      title: 'FullStack Next',
      category: 'web design',
      image: '/fullstack-docker.png',
      description:
        'A Full-Stack Next.js application featuring user authentication, a dynamic dashboard, API integration, database connectivity, and modern UI components. Designed for high performance, scalability, and a seamless user experience.',
      tech: ['Next.js', 'Node.js', 'Supabase', 'Tailwind', 'TypeScript'],
      liveUrl: 'https://next-dit205.vercel.app/',
      githubUrl: 'https://github.com/Pongpitchit/FullStack-Next.js.git',
    },
    {
      title: 'Thailand Journey v3',
      category: 'web design',
      image: '/Thailand-Journey-v3.png',
      description:
        'Embark on a scenic route across Southeast Asia and the Himalayas, traveling through ancient cities and breathtaking alpine landscapes before reaching the spiritual heart of Tibet.',
      tech: ['React Native', 'Node.js', 'Tailwind', 'TypeScript'],
      liveUrl: 'https://thailand-journey.vercel.app/',
      githubUrl: 'https://github.com/Pongpitchit/Thailand-Journey-v3.git',
    },
    {
      title: 'Fall Detection',
      category: 'applications',
      image: '/computer-vision-fall-detection.png',
      description:
        'This project aims to develop a fall detection system using Python. The system utilizes various sensors and algorithms to detect falls in real-time, providing alerts and data for further analysis.',
      tech: ['Python', 'AI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Pongpitchit/Fall-Detection.git',
    },
    {
      title: 'Guinea Pig Care',
      category: 'web design',
      image: '/guinea-pig.png',
      description: 'WordPress website dedicated to guinea pig care and pet management tips.',
      tech: ['WordPress'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'IOT-HUB',
      category: 'iot',
      image: '/iothub.png',
      description: 'IoT Sensor Hub - A comprehensive IoT monitoring platform for collecting, processing, and visualizing sensor data from ESP32/ESP8266 devices. Built with PHP, MySQL, and modern web technologies.',
      tech: ['ESP32', 'Arduino', 'C++', 'PHP'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Pongpitchit/IOT-HUB-DIT208',
    },
    {
      title: 'MoneyFlow',
      category: 'web design',
      image: '/moneyflow.png',
      description: 'Subscription & Debt Management System\nA Web POS system for managing monthly service fees (subscription division), tracking payments, and managing debt — with Notion as the backend database.',
      tech: ['Notion API', 'Next.js', 'TypeScript', 'Docker', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Card-Generator',
      category: 'web design',
      image: '/card-generator.png',
      description: 'Card Generator Web project is a web-based application designed to simplify the process of creating digital cards for various occasions, including events, invitations, and greetings. The application provides a user-friendly interface that allows users to customize their cards with images, text, and pre-defined templates, enabling quick and easy card generation.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AttendanceApp — Learning Tracker',
      category: 'web design',
      image: '/attendanceapp.png',
      description: 'AttendanceApp Learning Tracker is a web-based application designed to track student attendance and learning progress. The application provides a user-friendly interface that allows users to manage attendance records, track learning progress, and generate reports.',
      tech: ['Notion API', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ],
} as const

// ─── Contact ─────────────────────────────────

export const contactData = {
  email: 'Pongpitchitza@gmail.com',
  phone: '',
  location: '',
  mapUrl: '',
} as const

// ─── Aggregated export (optional convenience) ─

export const portfolioConfig = {
  profile:   profileData,
  about:     aboutData,
  resume:    resumeData,
  portfolio: portfolioData,
  contact:   contactData,
} as const

export type PortfolioConfig = typeof portfolioConfig
export type Project         = typeof portfolioData.projects[number]
export type Service         = typeof aboutData.services[number]
export type SkillBar        = typeof resumeData.skills[number]
export type SkillBadge      = typeof aboutData.skills[number]
export type EducationItem   = typeof resumeData.education[number]
export type Category        = typeof portfolioData.categories[number]
