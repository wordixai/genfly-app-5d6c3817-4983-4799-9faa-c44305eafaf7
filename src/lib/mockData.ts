export const jobs = [
  {
    id: '1',
    title: 'Frontend Developer',
    type: 'Full-time',
    location: 'San Francisco, CA',
    postedAt: '2 days ago',
    salary: '$90,000 - $120,000',
    description: 'We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user interfaces and implementing features for our web applications.',
    requirements: [
      '3+ years of experience with React',
      'Strong JavaScript/TypeScript skills',
      'Experience with modern CSS frameworks',
      'Familiarity with RESTful APIs'
    ],
    company: {
      name: 'TechCorp',
      description: 'TechCorp is a leading technology company specializing in innovative software solutions.',
      website: 'https://techcorp.example.com',
      logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
    }
  },
  {
    id: '2',
    title: 'Backend Engineer',
    type: 'Full-time',
    location: 'Remote',
    postedAt: '1 week ago',
    salary: '$100,000 - $140,000',
    description: 'Join our backend team to design and implement scalable services and APIs for our platform.',
    requirements: [
      '5+ years of backend development experience',
      'Expertise in Node.js or Python',
      'Database design experience',
      'Cloud infrastructure knowledge'
    ],
    company: {
      name: 'DataSystems',
      description: 'DataSystems provides enterprise data solutions to Fortune 500 companies.',
      website: 'https://datasystems.example.com',
      logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  },
  {
    id: '3',
    title: 'UX Designer',
    type: 'Contract',
    location: 'New York, NY',
    postedAt: '3 days ago',
    salary: '$70 - $90 per hour',
    description: 'We need a UX Designer to create intuitive and beautiful interfaces for our products.',
    requirements: [
      'Portfolio demonstrating UX skills',
      '3+ years of design experience',
      'Figma/Sketch proficiency',
      'User research experience'
    ],
    company: {
      name: 'DesignHub',
      description: 'DesignHub is a creative agency focused on digital product design.',
      website: 'https://designhub.example.com',
      logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
    }
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    type: 'Full-time',
    location: 'Austin, TX',
    postedAt: '1 day ago',
    salary: '$110,000 - $150,000',
    description: 'Looking for a DevOps Engineer to build and maintain our cloud infrastructure and CI/CD pipelines.',
    requirements: [
      'AWS/GCP experience',
      'Infrastructure as Code (Terraform)',
      'CI/CD pipeline experience',
      'Containerization knowledge'
    ],
    company: {
      name: 'CloudScale',
      description: 'CloudScale helps businesses scale their infrastructure efficiently.',
      website: 'https://cloudscale.example.com',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  },
  {
    id: '5',
    title: 'Product Manager',
    type: 'Full-time',
    location: 'Chicago, IL',
    postedAt: '2 weeks ago',
    salary: '$120,000 - $160,000',
    description: 'Lead product development from conception to launch, working with cross-functional teams.',
    requirements: [
      '5+ years product management',
      'Technical background',
      'Agile methodology experience',
      'Strong communication skills'
    ],
    company: {
      name: 'ProductLabs',
      description: 'ProductLabs builds innovative software products for various industries.',
      website: 'https://productlabs.example.com',
      logo: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    }
  }
]

export const companies = [
  {
    id: '1',
    name: 'TechCorp',
    description: 'TechCorp is a leading technology company specializing in innovative software solutions.',
    website: 'https://techcorp.example.com',
    logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    jobs: ['1']
  },
  {
    id: '2',
    name: 'DataSystems',
    description: 'DataSystems provides enterprise data solutions to Fortune 500 companies.',
    website: 'https://datasystems.example.com',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    jobs: ['2']
  },
  {
    id: '3',
    name: 'DesignHub',
    description: 'DesignHub is a creative agency focused on digital product design.',
    website: 'https://designhub.example.com',
    logo: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    jobs: ['3']
  },
  {
    id: '4',
    name: 'CloudScale',
    description: 'CloudScale helps businesses scale their infrastructure efficiently.',
    website: 'https://cloudscale.example.com',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    jobs: ['4']
  },
  {
    id: '5',
    name: 'ProductLabs',
    description: 'ProductLabs builds innovative software products for various industries.',
    website: 'https://productlabs.example.com',
    logo: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    jobs: ['5']
  }
]