export type Accent = 'coral' | 'cyan' | 'violet' | 'amber' | 'mint' | 'sky' | 'pink'

export interface Project {
  name: string
  period: string
  role: string
  team?: string
  note?: string
  description: string
  highlights?: string[]
  stack: string[]
}

export interface Company {
  name: string
  period: string
  role: string
  summary: string
  accent: Accent
  current?: boolean
  projects: Project[]
  additionalProjects?: Project[]
}

export const companies: Company[] = [
  {
    name: 'Sacombank',
    period: '07/2024 — Present',
    role: 'System Integration Specialist',
    summary:
      'Own core banking integration and card-issuing systems, partnering with card organizations, external vendors and the State Bank on regulatory-driven changes.',
    accent: 'sky',
    current: true,
    projects: [
      {
        name: 'Omnicard / Card Issuing Platform',
        period: '07/2024 — Present',
        role: 'System Integration Specialist',
        note: 'Omnicard / Omnicard v7 / OmniWS / Issuing Card (Java Spring Boot), CPV/CNS, Portal Card / E-Portal Card (.NET), Epay Services',
        description: '',
        highlights: [
          'Analyze and deliver changes to the Omnicard core system driven by business, card-organization, or State Bank requirements, coordinating directly with partner units to keep releases compliant and on schedule.',
          'Contributed to the Omnicard v7 core upgrade, developing OmniWebservices input APIs under the API 360 initiative to strengthen integration consistency across downstream services.',
          'Own end-to-end implementation of the CPV/CNS (card personalization verification) process, coordinating with external partners MKGroup and FIME to streamline card-issuance turnaround.',
          'Design and build report-export and job-scheduler systems on the Portal Card platform, serving business, corporate and individual banking users.',
          'Lead migration of services from C# to Java as part of a monolith-to-microservices transition; implement real-time data synchronization between T24 and Omnicard.',
        ],
        stack: ['Java', 'Spring Boot', 'C#', '.NET', 'T24 Core Banking', 'Omnicard', 'CPV/CNS', 'REST API'],
      },
    ],
  },
  {
    name: 'Salto Vietnam',
    period: '05/2020 — 07/2024',
    role: 'Team Lead / DevOps',
    summary:
      'Led full-stack teams of 3–15 across international client projects, owning CI/CD, requirement analysis and delivery end-to-end.',
    accent: 'violet',
    projects: [
      {
        name: 'Leap-it',
        period: '11/2023 — 07/2024',
        role: 'Team Lead / DevOps',
        team: 'Team of 5',
        description:
          'Restaurant & HR management web application; owned CI/CD and full environment setup.',
        stack: ['React', 'Next.js', 'AWS', 'Laravel', 'Django', 'PostgreSQL'],
      },
      {
        name: 'Justfine',
        period: '11/2022 — 11/2023',
        role: 'Frontend Team Lead / DevOps',
        team: 'Team of 6',
        description:
          'Job-matching platform syncing data from partner systems; owned design docs, QA and the CI/CD pipeline.',
        stack: ['AWS', 'React', 'Redux', 'Laravel', 'Docker'],
      },
      {
        name: 'Flagman',
        period: '03/2022 — 11/2022',
        role: 'Team Lead',
        team: 'Cross-border team of 15 (VN/PH/JP)',
        description: 'Built a draw.io-style diagramming tool with a distributed, cross-border team.',
        stack: ['React', 'Redux', 'Jest', 'Laravel', 'Socket.IO'],
      },
      {
        name: 'GS-System',
        period: '03/2022 — 10/2022',
        role: 'Full Stack Developer',
        team: 'Team of 10',
        description:
          'Map-based data platform spanning Web, iOS and React Native; set up the Docker base, built key modules and led cross-code reviews.',
        stack: ['React Native', 'Flux', 'TypeScript', 'Laravel', 'React', 'Docker'],
      },
    ],
    additionalProjects: [
      {
        name: 'SelfPro',
        period: '08/2022 — 05/2023',
        role: 'Team Leader / Full Stack Developer',
        description: 'Member ranking / evaluation system.',
        stack: ['Python', 'Django', 'Laravel', 'Next.js', 'React'],
      },
      {
        name: 'Yuushi Seiko',
        period: '11/2021 — 02/2022',
        role: 'Team Leader / Business Analyst',
        description: 'Money-lending application.',
        stack: ['Laravel', 'PHPUnit', 'JavaScript', 'jQuery', 'Docker'],
      },
      {
        name: 'Everbank Integration',
        period: '09/2021 — 11/2021',
        role: 'Full Stack Developer / Business Analyst',
        description: 'Synced purchase/sale data between Salesforce, Kintone and cloud storage.',
        stack: ['Salesforce', 'Kintone', 'React', 'Redux', 'Python', 'Docker', 'Atomic Design'],
      },
      {
        name: 'CallForce AutoBot',
        period: '09/2021',
        role: 'Team Leader / Full Stack Developer',
        description: 'Automation tool bypassing CAPTCHA for predefined workflows.',
        stack: ['Python', 'Tkinter', 'OpenCV', 'Pytesseract', 'Selenium', 'React', 'Redux'],
      },
      {
        name: 'iOS Taiyou',
        period: '06/2021 — 09/2021',
        role: 'iOS Developer',
        description: 'App for uploading construction-site photos/videos to the cloud.',
        stack: ['Objective-C', 'Xcode'],
      },
      {
        name: 'Smart Shukatsu',
        period: '05/2020 — 08/2020',
        role: 'Full Stack Developer / Business Analyst',
        description: 'Recruitment platform matching employers and graduating students.',
        stack: ['Laravel', 'PHPUnit', 'AMP', 'JavaScript', 'jQuery', 'React', 'Docker'],
      },
      {
        name: 'Bebit',
        period: '05/2020 — 08/2020',
        role: 'Full Stack Developer / Business Analyst',
        description: 'Vue.js module development with unit testing for a warehouse management app.',
        stack: ['Vue.js', 'Node.js', 'Docker'],
      },
    ],
  },
  {
    name: 'Pascalia Asia Vietnam',
    period: '08/2020 — 06/2021',
    role: 'Full Stack Developer / Business Analyst (Onsite)',
    summary:
      'Onsite engagement building Phantom-3D, a virtual seller chat platform with live video-streaming integration for real-time customer shopping interactions.',
    accent: 'coral',
    projects: [
      {
        name: 'Phantom-3D',
        period: '08/2020 — 06/2021',
        role: 'Full Stack Developer / Business Analyst',
        team: 'Team of 5',
        note: 'Virtual seller chat platform with live video-streaming integration',
        description: '',
        highlights: [
          'Analyzed client requirements and designed the project roadmap (BDD/DDD); broke work into phases and assigned tasks across the team.',
          'Implemented core modules, led end-to-end product testing, and built the CI/CD pipeline with GitHub Actions.',
        ],
        stack: ['React', 'Redux', 'Node.js', 'Express', 'AWS S3', 'AWS Kinesis Video Stream'],
      },
    ],
  },
  {
    name: 'Sharing Innovation',
    period: '07/2018 — 05/2020',
    role: 'Web / PHP Developer',
    summary:
      'Started as a PHP developer on a travel-services platform, then took ownership of an e-commerce application covering goods, warehousing and product trading.',
    accent: 'amber',
    projects: [
      {
        name: 'HameeMF',
        period: '10/2019 — 05/2020',
        role: 'Web / PHP Developer',
        description:
          'E-commerce platform for warehousing & trading; implementation, cross-code review and PHPUnit testing.',
        stack: ['PHP (Zend/FuelPHP)', 'React', 'Elasticsearch', 'PHPUnit'],
      },
      {
        name: 'Ana Veltra',
        period: '07/2018 — 10/2019',
        role: 'Web / PHP Developer',
        description:
          'Travel services application; implementation and testing, plus supporting Spring Boot modules for a third-party integration.',
        stack: ['PHP', 'Laravel 5.7', 'jQuery', 'Spring Boot'],
      },
    ],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript/TypeScript', 'PHP', 'Python', 'Java', 'Objective-C', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vue.js', 'Next.js', 'Redux', 'React Native'],
  },
  {
    title: 'Backend',
    skills: ['Laravel', 'CodeIgniter', 'Yii2', 'Express.js', 'Django', 'Spring Boot'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'GCP', 'Docker', 'GitHub Actions', 'CircleCI', 'Vercel'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'DB2', 'MSSQL', 'Oracle'],
  },
  {
    title: 'Testing',
    skills: ['Jest', 'PHPUnit', 'Selenium', 'Cypress', 'API Testing'],
  },
  {
    title: 'Tools & Design',
    skills: ['Git (GitHub/GitLab/Bitbucket/SVN)', 'Jira', 'Notion', 'Figma', 'Photoshop'],
  },
  {
    title: 'Banking Domain',
    skills: [
      'Card Issuing & Personalization (CPV/CNS)',
      'Omnicard Core Operations & Upgrades (v7, OmniWS, API 360)',
      'Portal Card / E-Portal Card',
      'T24 Core-Banking Sync',
      'Monolith-to-Microservices Migration',
      'Coordination with Card Networks, Partner Vendors (MKGroup, FIME) & State Bank',
    ],
  },
]
