// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'sulistyow', 
  },
  
  base: '/',
  projects: {
    github: {
      display: false, 
      header: 'Github Projects',
      mode: 'automatic', 
      automatic: {
        sortBy: 'stars', 
        limit: 8, 
        exclude: {
          forks: false, 
          projects: [], 
        },
      },
      manual: {
        projects: ['', ''],
      },
    },
    external: {
      header: 'Portfolio',
      projects: [
        {
          title: 'LINE Bank',
          description:
            'Work with Hana Bank to develop Android app their digital banking app, LINE Bank',
          imageUrl:
            '/linebank.png',
          link: 'https://linebank.co.id/',
        },
        {
          title: 'Delivery Man',
          description:
            'Worked with HSO Astra International to develop their internal App for Delivery Man',
          imageUrl:
            'android.png',
          link: '',
        },
        {
          title: 'WMS App',
          description:
            'Worked with HSO Astra International to develop their internal App for Dealer Warehourse',
          imageUrl:
            '/android.png',
          link: '',
        },
        {
          title: 'PATROL PGN',
          description:
            'App for help PGN reporting Site Assets Inspection.',
          imageUrl:
            'android.png',
          link: '',
        },
        {
          title: 'CBM Gardu',
          description:
            'CBM Mobile Application for charging substation maintenance and Healthy Index calculations.',
          imageUrl:
            '/cbmtransmisi.webp',
          link: 'https://play.google.com/store/apps/details?id=id.lumut.cbmgardu&hl=id&gl=US',
        },
        {
          title: 'CBM Transmisi',
          description:
            'PT PLN (Persero) UIP3B Sumatra Mobile Transmission CBM Application for filling maintenance and calculating Healthy Index.',
          imageUrl:
            '/srintami.png',
          link: 'https://play.google.com/store/apps/details?id=id.lumut.cbmtrans&hl=en_US',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Sulistyo Wahyu',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'sulistyows',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', 
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', 
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'sulistyo.wahyu27@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/drive/folders/18XddO9IF_zOdjiBbiI00zYxpUiSH581j?usp=sharing',
  },
  skills: [
    'Android Development',
    'Mobile Development',
    'Kotlin',
    'Java',
    'Flutter',
    'Jetpack Compose',
    'Rest Api',
    'GraphQL',
    'PHP',
    'Firebase',
    'Goole Play Services',
    'Git'
  ],
  experiences: [
    {
      company: 'PT Nusantara Duta Solusindo',
      position: 'Android Developer',
      from: 'July 2023',
      to: 'Present',
      companyLink: 'https://nds.co.id/',
    },
    {
      company: 'PT Rapid Technology Indonesia',
      position: 'Android Developer',
      from: 'April 2022',
      to: 'February 2023',
      companyLink: 'https://rapidtech.id/',
    },
    {
      company: 'PT Lumut Karya Sejahtera',
      position: 'Android Developer',
      from: 'September 2020',
      to: 'October 2021',
      companyLink: 'https://lumut.id/',
    },
  ],
  certifications: [
    {
      name: 'Complete Multi-Modular Architecture for Android Development',
      body: 'Build a Multi-Module, Industry ready Android app with Kotlin, Authentication and a Mongo DB Device Sync as a Database',
      year: 'July 2023',
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-c9fcaeec-e1b4-4ac3-baba-e71a3e2f1f84.jpg',
    },
    {
      name: 'Menjadi Android Developer Expert',
      body: 'Dicoding Academy Online Course',
      year: 'November 2022',
      link: 'https://dicoding.com/certificates/N9ZO44VNRZG5',
    },
  ],
  educations: [
    // {
    //   institution: '',
    //   degree: 'Bachelor Degree',
    //   from: '2016',
    //   to: '2020',
    // },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    disableSwitch: true,

    respectPrefersColorScheme: false,

    displayAvatarRing: true,

    themes: [
      // 'light',
      // 'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      // 'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      // 'night',
      // 'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      // 'sunset',
      // 'procyon',
    ],

    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
