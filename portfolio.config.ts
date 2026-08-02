import { link } from "fs";

export const CONFIG = {
  seo: {
    title: "Sulistyo Wahyu Sasongko | Android Developer",
    description: "Android Developer with 5+ years of experience building and maintaining mobile applications across fintech, enterprise, and live-streaming industries.",
    keywords: ["Android Developer", "Kotlin", "Java", "Sulistyo Wahyu Sasongko", "Portfolio", "Mobile App Developer"],
    authors: [{ name: "Sulistyo Wahyu Sasongko" }],
  },
  personal: {
    logoText: "Sulistyo Wahyu S",
    name: "Sulistyo Wahyu Sasongko",
    role: "Android Developer",
    yearsOfExperience: "5+ years",
    location: "Jakarta, Indonesia",
    focus: "Android + Kotlin",
    shortDescription: "Building reliable mobile experiences with product-minded engineering.",
    about: "I build Android and cross-platform mobile products that are maintainable, performant, and practical for real product teams with 5+ years of experience across fintech, enterprise, and live-streaming industries.",
    tags: ["5+ years", "Android / Kotlin", "MVVM / Clean Code", "Jakarta"],
    contactEmail: "sulistyo.wahyu27@gmail.com",
    cvLink: "https://drive.google.com/drive/folders/18XddO9IF_zOdjiBbiI00zYxpUiSH581j?usp=sharing",
  },
  social: {
    github: "https://github.com/sulistyow",
    linkedin: "https://linkedin.com/in/sulistyows",
  },
  // ==========================================================
  // SKILLS SECTION
  // ==========================================================
  // Note on Icons: We are using lucide-react icons. 
  // To find new icons, go to https://lucide.dev/icons/
  // Once you find an icon, simply copy its name and type it as a string below.
  // Example: if you want a user icon, use icon: "User"
  skills: [
    {
      title: "Mobile",
      icon: "Smartphone", // Lucide icon name
      toolCount: "5 tools",
      description: "Native Android, cross-platform delivery, and production app architecture.",
      tags: ["Kotlin", "Java", "Dart / Flutter", "MVVM", "Clean Architecture", "Firebase SDK", "Google SDK", "Tencent"],
    },
    {
      title: "Backend & Web",
      icon: "CodeXml", // Lucide icon name
      toolCount: "6 tools",
      description: "Supporting API systems, databases, and internal web admin tools.",
      tags: ["Vercel", "NextJs", "Supabase", "Cloudflare", "Firebase Console", "PHP / Laravel", "CodeIgniter", "RoomDB / SQLite", "PostgreSQL", "Firebase Realtime", "GraphQL"],
    },
    {
      title: "Practices & Tools",
      icon: "Terminal", // Lucide icon name
      toolCount: "5 tools",
      description: "Delivery habits for stable releases, debugging, automation, and quality.",
      tags: ["Clean Code", "Agile", "Git", "Jira", "Google Play Console"],
    }
  ],
  // ==========================================================
  // PROJECTS SECTION
  // ==========================================================
  projects: [
    {
      title: "LIVE STREAMING APP",
      isFeatured: true,
      description: "Live Streaming & Video Communication Application. Implemented Google Play Billing, integrated real-time video via Tencent TRTC SDK, and utilized Face Recognition SDK for security.",
      link: "",
    },
    {
      title: "LINE Bank",
      isFeatured: true,
      description: "Maintained and enhanced the LINE Bank Android app. Delivered new product features, contributed to Liveness Detection POC, and addressed Android 16KB page-size compliance.",
      link: "https://linebank.co.id/",
    },
    {
      title: "Independent Publishing",
      isFeatured: true,
      description: "Independently designed, developed, and published multiple Android apps achieving 10,000+ downloads. Implemented AdMob strategies and RESTful APIs.",
      link: "https://www.wallpaperku.com/",
    },
    {
      title: "WMS App",
      isFeatured: true,
      description: "Worked with HSO Astra International to develop their internal App for Dealer Warehourse",
      link: "",
    },
    {
      title: "CBM Gardu",
      isFeatured: true,
      description: "CBM Mobile Application for charging substation maintenance and Healthy Index calculations.",
      link:"https://play.google.com/store/apps/details?id=id.lumut.cbmgardu&hl=id&gl=US"

    },
    {
      title: 'CBM Transmisi',
      description:'PT PLN (Persero) UIP3B Sumatra Mobile Transmission CBM Application for filling maintenance and calculating Healthy Index.',
      isFeatured: true,
      link:"https://play.google.com/store/apps/details?id=id.lumut.cbmtrans&hl=en_US"
    }
  ],
  // ==========================================================
  // EXPERIENCE SECTION
  // ==========================================================
  experiences: [
    {
      role: "Android Developer (LINE Bank)",
      company: "PT Nusantara Duta Solusindo",
      duration: "Jul 2023 - Present",
      responsibilities: [
        "Maintained and enhanced the LINE Bank Android application, ensuring high performance, stability, and reliability in a production environment.",
        "Contributed to the Proof of Concept (POC) and technical validation of a Liveness Detection feature to strengthen digital user verification processes."
      ]
    },
    {
      role: "Android Developer",
      company: "PT Rapid Teknologi Indonesia",
      duration: "Apr 2022 - Feb 2023",
      responsibilities: [
        "Developed and delivered business-critical features across three Android applications within the Astra International HSO ecosystem.",
        "Improved code maintainability and scalability by implementing the MVVM pattern and Clean Code principles."
      ]
    },
    {
      role: "Android Developer",
      company: "PT Lumut Karya Sejahtera",
      duration: "Sep 2020 - Oct 2021",
      responsibilities: [
        "Developed and maintained multiple Android applications using Java, supporting business operations across various client projects.",
        "Designed and implemented a core tracking feature utilizing Google Maps SDK, improving real-time location monitoring capabilities."
      ]
    }
  ],
  // ==========================================================
  // EDUCATION SECTION
  // ==========================================================
  educations: [
    {
      institution: "Universitas Duta Bangsa Surakarta",
      degree: "Bachelor's Degree in Informatics (GPA 3.7)",
      graduationDate: "Grad: Sept 2020",
    }
  ],
  // ==========================================================
  // CERTIFICATIONS SECTION
  // ==========================================================
  certifications: [
    {
      name: "Flutter Intermediate",
      issuer: "Dicoding Academy",
      date: "Dec 2024",
    },
    {
      name: "Complete Multi-Modular Architecture for Android",
      issuer: "Udemy",
      date: "July 2024",
    },
    {
      name: "Menjadi Android Developer Expert",
      issuer: "Dicoding Academy",
      date: "Nov 2022",
    }
  ]
};
