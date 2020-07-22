export const website = {
  metadata: {
    title: "My Website",
    description: '',
    name: 'My Website',
    themeColour: 'gold',
    theme: 'personalPerfect',
    icon: '',
    tagline: 'Keep moving forward...',
    email: 'example@example.com',
    phone: '+23480000000000',
    address: '12 works road, Awka, Anambra, Nigeria',
    arrangement: [
      {
        id: 'hero',
        name: 'Hero',
      },
      {
        id: 'introduction',
        name: 'Introduction',
      },
      {
        id: 'skills',
        name: 'Skills',
      },
      {
        id: 'worksSettings',
        name: 'Works',
      },
      {
        id: 'clients',
        name: 'Clients',
      },
      {
        id: 'testimonials',
        name: 'testimonials',
      },
      {
        id: 'callToAction',
        name: 'Call to action',
      },
    ],
  },
  navbar: {
    logo: {
      url: '',
    },
    cto: {
      url: '/',
      title: 'Checkout my works',
    },
  },
  hero: {
    enabled: true,
    colour: 'none',
    title: 'Lorem ipsum dolor sit amet consectetur',
    subtitle: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
    ea vitae eius saepe minima cupiditate!`,
    mainDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eum
    porro dicta velit eaque asperiores`,
    description: ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
    ea vitae eius saepe minima cupiditate!Sit nesciunt commodi
    recusandae magni.`,
    avatar:
      'https://res.cloudinary.com/worksfair/image/upload/v1586789938/rifwxtkmpj3egnzi6fsj.jpg',
    clipArt:
      'https://res.cloudinary.com/worksfair/image/upload/v1589784709/dev/ssjp84rmgtpkrct6fxwl.png',
    heroImage:
      'https://res.cloudinary.com/worksfair/image/upload/v1595273696/static/qmxvbhllmxlhjvpp3nby.jpg',
    data: [
      {
        title: 'Building for the future',
        subtitle:
          'We have been responsible for some of the best buildings commissioned in Nigeria',
        backgroundImage:
          'https://buzznigeria.com/wp-content/uploads/2015/03/NNPC.jpg',
      },
      {
        title: 'With over 20 years of experience',
        subtitle:
          'We leverage our technical expertise and vest experience to give the best possible outcome',
        backgroundImage:
          'https://www.theabujatimes.com/wp-content/uploads/2019/09/Central-Bank-of-Nigeria-Lagos.jpg',
      },
      {
        title: 'We put a roof on your head with a penny',
        subtitle:
          'We leverage our technical expertise and vest experience to give the best possible outcome',
        backgroundImage:
          'https://nigerianinfopedia.com.ng/wp-content/uploads/2020/05/cost-of-building-a-duplex-in-nigeria.jpeg',
      },
    ],
  },
  introduction: {
    enabled: true,
    size: 'small', // small, medium, large
    colour: '',
    title: 'Hi, my name is Theo Okafor.',
    subtitle: `
      I started my journey 2 years ago as a software developer. 
      I have done remote work for agencies, consulted for
      startups, and collaborated with talented people to create
      digital products for both business and consumer use. 
      I am a very hardworking person and I love what I do.`,
  },
  about: {
    title: 'About Us',
    subtitle: 'Get to know some things about us',
    left: {
      image:
        'https://res.cloudinary.com/worksfair/image/upload/v1586789938/rifwxtkmpj3egnzi6fsj.jpg',
      title: 'Company History',
      content: `A bunch of stuff about how the company started. A bunch of stuff about how the company started. 
      A bunch of stuff about how the company started. A bunch of stuff about how the company started. 
      A bunch of stuff about how the company started. A bunch of stuff about how the company started.`,
    },
    right: {
      image: 'https://buzznigeria.com/wp-content/uploads/2015/03/NNPC.jpg',
      title: 'Company History',
      content: ` 
      A bunch of stuff about how the company started. A bunch of stuff about how the company started. 
      A bunch of stuff about how the company started. A bunch of stuff about how the company started. 
      A bunch of stuff about how the company started. A bunch of stuff about how the company started. 
      A bunch of stuff about how the company started. A bunch of stuff about how the company started. 
      A bunch of stuff about how the company started. A bunch of stuff about how the company started. 
      A bunch of stuff about how the company started. A bunch of stuff about how the company started. 
      A bunch of stuff about how the company started. A bunch of stuff about how the company started. 
      `,
    },
  },
  servicesSettings: {
    title: 'What we do',
    enabled: true,
    subtitle: 'Some of the things we offer',
  },
  services: [
    {
      title: 'Construction',
      description:
        'We build the best things. From skyscrapers to bungalows to huts. We build the 4th mainland bridge and the 3rd Niger bridge. Iconic stuff.',
      icon: 'building',
      image: 'https://buzznigeria.com/wp-content/uploads/2015/03/NNPC.jpg',
    },
    {
      title: 'Consultancy',
      description:
        'We build the best things. From skyscrapers to bungalows to huts. We build the 4th mainland bridge and the 3rd Niger bridge. Iconic stuff.',
      icon: 'building-o',
      image:
        'https://www.theabujatimes.com/wp-content/uploads/2019/09/Central-Bank-of-Nigeria-Lagos.jpg',
    },
    {
      title: 'Chips Manufacturing',
      description:
        'We build the best things. From skyscrapers to bungalows to huts. We build the 4th mainland bridge and the 3rd Niger bridge. Iconic stuff.',
      icon: 'microchip',
      image:
        'https://nigerianinfopedia.com.ng/wp-content/uploads/2020/05/cost-of-building-a-duplex-in-nigeria.jpeg',
    },
  ],

  teams: {
    title: 'Our Team',
    subtitle: 'Exceptional Talent',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit
    ea vitae eius saepe minima cupidie!Sit nesciunt commodi
    recusandae magni. Lorem ipsum dolor, sit amet consectetur
    adipisicing elit.`,
    image:
      'https://res.cloudinary.com/worksfair/image/upload/v1595321338/static/re9jfjnwa8dhn8dsnrti.png',
    linkdesc: 'Join Our Team',
  },

  features: {
    enabled: true,
    colour: 'none',
    title: 'Featured Ventures',
    subtitle: `I am a fullstack software engineer`,
    avatar:
      'https://res.cloudinary.com/worksfair/image/upload/v1586789938/rifwxtkmpj3egnzi6fsj.jpg',
    // clipArt: 'https://res.cloudinary.com/worksfair/image/upload/v1586765220/fkmraronkxjvmukoia8e.svg',
    clipArt:
      'https://res.cloudinary.com/worksfair/image/upload/v1589784709/dev/ssjp84rmgtpkrct6fxwl.png',
    data: [
      {
        title: 'Sparkle',
        subtitle:
          'Sparkle is building a lifestyle and financial platform for digital natives to enable them go about their everyday lives. We believe this can only be done through transparency, trust and freedom.',
        backgroundImage: 'https://trium.ng/public/images/sparkle.png',
        linkdesc: 'More About Sparkle',
      },
      {
        title: 'Light',
        subtitle:
          'Light is building a lifestyle and financial platform for digital natives to enable them go about their everyday lives. We believe this can only be done through transparency, trust and freedom.',
        backgroundImage: 'https://trium.ng/public/images/Light.png',
        linkdesc: 'More About Light',
      },
      {
        title: 'Clane',
        subtitle:
          'Clane is building a lifestyle and financial platform for digital natives to enable them go about their everyday lives. We believe this can only be done through transparency, trust and freedom.',
        backgroundImage: 'https://trium.ng/public/images/clane.png',
        linkdesc: 'More About Clane',
      },
    ],
  },

  skills: {
    enabled: true,
    size: '',
    colour: '',
    data: [
      {
        colour: '',
        title: 'Designer',
        subtitle: `I value simple designs and structure. I design for the future.`,
        techTitle: 'Things I enjoy designing',
        techSubtitle: `UX, UI, Web, Mobile, Apps, Logos`,
        techToolsTitle: 'Design Tools:',
        techTools: `Figma, Invision, Marvel, Pen & paper, Sketch, Zeplin`,
      },
      {
        colour: '',
        title: 'Frontend Developer',
        subtitle: `I build web applications using easy-to-figure design patterns.`,
        techTitle: 'Languages I speak',
        techSubtitle: `HTML, CSS, Sass, JavaScript`,
        techToolsTitle: 'Dev Tools:',
        techTools: `ReactJS, Redux, Vanilla, Bootstrap, Bulma, Debug Tools, Webpack`,
      },
      {
        colour: '',
        title: 'Fullstack Developer',
        subtitle: `I have an extensive fullstack experience and skills.`,
        techTitle: 'Languages I speak (plus frontend skills)',
        techSubtitle: `NodeJS, Python, Java`,
        techToolsTitle: 'Dev Tools: ',
        techTools: `Django, Express, Celery, PostgreSQL, MariaDB, Redis, Heroku`,
      },
    ],
  },
  works: [
    {
      image:
        'https://res.cloudinary.com/worksfair/image/upload/v1565020005/dev/409A4051_1_s5oknl.jpg',
      title: 'Ideosynergy',
      description: `A platform that enables collaboration amongst businesses and works`,
      url: 'http://www.worksfair.com',
      callToAction: 'Visit Website',
    },
    {
      image:
        'https://res.cloudinary.com/worksfair/image/upload/v1572711078/ru0cvposhpq4nxmaitai.png',
      title: 'Worksfair.com',
      description: `A platform for growing businesses and skilled professionals.`,
      url: 'http://www.worksfair.com',
      callToAction: 'Visit Website',
    },
    {
      image:
        'https://res.cloudinary.com/worksfair/image/upload/v1570663069/zzdlgbdu5quf9lfmvsjc.jpg',
      title: 'Imagination.ng',
      description: `A platform for searching for works that interests you`,
      url: 'http://www.worksfair.com',
      callToAction: 'Visit Website',
    },
  ],
  worksSettings: {
    enabled: true,
    colour: '',
    title: 'Recent Works',
    subtitle: "Here are a few design projects I've worked on recently.",
    cto: {
      url: 'https://github.com/TheoOkafor',
      title: 'See more works',
    },
  },
  clients: {
    enabled: true,
    title: 'Former Clients & Employers',
    subtitle: "Some awesome companies that I've worked with",
    data: [
      {
        image:
          'https://res.cloudinary.com/worksfair/image/upload/v1572711078/ru0cvposhpq4nxmaitai.png',
        name: 'worksfair',
      },
      {
        image:
          'https://res.cloudinary.com/worksfair/image/upload/v1586791687/oprku6kcibycsa6ywb4r.png',
        name: 'andela',
      },
      {
        image:
          'https://www.theimpactguild.com/wp-content/uploads/2018/06/IDEOorg_logo_web.jpg',
        name: 'ideo.org',
      },
    ],
  },
  testimonials: {
    enabled: true,
    title: 'Testimonials',
    subtitle: "People I've worked with have said these...",
    data: [
      {
        avatar:
          'https://res.cloudinary.com/worksfair/image/upload/v1586788331/cvo7ef20judnjba56cq3.jpg',
        name: 'Stan Ndunwere',
        role: 'Software Engineer',
        content: `Working with Theodore is the smoothest experience anybody can have.
          He is a no excuses guy with commendable focus and determination.
          He is very analytical and objective engineer.
          With his astute leadership skills it is difficult to have an uninspired team member around him.
          As a master delegator and natural creative, he is capable of turning the dourest projects to the most exciting.
          You absolutely need him on your team.`,
      },
      {
        avatar:
          'https://res.cloudinary.com/worksfair/image/upload/v1586788432/ppgh7wy58ja1wljhlgt4.jpg',
        name: 'Lotanna Amaechi',
        role: 'Software Engineer at Andela',
        content: `Theodore Okafor is one exceptional purpose driven individual whose love for excellence and targeted result is next to non. 
            Highly resourceful, tech-prenuer and an excellent orator.
          His also, highly dependable, trustworthy and with an impeccable integrity base.
          Time spent with him in school was and would still be highly cherished.
          Highly recommended, and your company would be glad`,
      },
    ],
  },
  callToAction: {
    enabled: true,
    title: 'Start a project',
    subtitle: 'Interested in working with me?',
    buttonText: "Let's do this",
  },
  footer: {
    socialMedia: {
      title: '',
      data: [
        {
          name: 'twitter',
          url: 'https://twitter.com/theo_dot_io',
        },
        {
          name: 'github',
          url: 'https://github.com/TheoOkafor',
        },
        {
          name: 'linkedin',
          url: 'https://www.linkedin.com/in/theodore-okafor-511087aa/',
        },
        {
          name: 'facebook',
          url: 'https://web.facebook.com/okafor.theodore/',
        },
      ],
    },
  },
};
