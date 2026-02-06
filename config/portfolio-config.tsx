import { Mail, Phone, MapPin, Clock, Coffee } from "lucide-react";
import { SiGmail } from "react-icons/si";

// =============================================================================
// PERSONAL INFORMATION CONFIGURATION
// =============================================================================
// Энд өөрийн хувийн мэдээллээ оруулна уу / Enter your personal information here
export const personalInfo = {
  // Үндсэн мэдээлэл / Basic Information
  name: "Lkhagvazaya Anu",
  nickname: "Anu", // Товч нэр / Short name
  nameJapanese: "ルハグバザヤ アヌ", // Япон хэл дээрх нэр / Japanese name
  title: " Full-Stack Developer Student", // Албан тушаал / Job title
  
  // Холбоо барих мэдээлэл / Contact Information
  email: "lkhagvazaya.anu5@gmail.com",
  phone: "070-8530-3840",
  location: "Yokohama, Japan",
  address: "Yokohama, Japan",
  
  // Хувийн мэдээлэл / Personal Details
  nationality: "Mongolia",
  dateOfBirth: "2001年03月27日",
  age: 24,
  gender: "Female",
  
  // Танилцуулга / Bio descriptions
  bio: "I am a Full-Stack Developer Student with a passion for web development and a strong foundation in both front-end and back-end technologies.",
  
  longBio: "I am a dedicated Full-Stack Developer Student with a strong foundation in both front-end and back-end technologies. My journey in web development began with a curiosity for how things work behind the scenes, leading me to explore various programming languages and frameworks. I am particularly interested in creating user-friendly applications that solve real-world problems. Currently, I am honing my skills in modern web technologies and seeking opportunities to contribute to exciting projects.",
  
  description: "Welcome to my portfolio! I'm Anu, a passionate Full Stack Developer Student dedicated to crafting innovative web solutions. Explore my projects, skills, and journey in the world of web development.",
  
  // Зураг / Images
  avatar: "/porfolio.png", // public фолдер дотор байрлуулна / Place in public folder (filename corrected)
  
  // Ажлын статус / Work Status
  availability: "Available for freelance projects",
  // Resume URL (public folder)
  resumeUrl: "/resume.pdf",

  // Хэлний мэдлэг / Language Skills
  languages: [
    { name: "Japanese", level: "N3", proficiency: 97 },
    { name: "Mongolian", level: "Native", proficiency: 100 }
  ],
  
  // Сонирхол / Interests
  interests: [
    "Violin - I'm a beginner and love playing classical pieces",
    "Language Learning ",
    "Technical Drawing - Skilled in pencil drawing, especially automotive sketches in black and white",
    "Automotive Technology - Studied automotive technology in Japan and Mongolia, worked in industrial maintenance"
  ],
  
  // Боловсрол / Education
  education: [
    {
      id: 1,
      degree: "Mongolian National University",
      institution: "モンゴル大学",
      institutionEn: "Mongolia University of Medicine and Technology",
      period: "2018年9月 - 2024年5月",
      type: "Bachelor's Degree",
    },
    {
      id: 2,
      degree: "WESTCOAST Language School",
      institution: "日本語学校",
      institutionEn: "WESTCOAST Language School, Japan",
      period: "2014年4月 - 勉強中",
      type: "Language School",
    },
  ],
  
  // Миний тухай / About Me sections
  aboutSections: {
    mainDescription: "I'm a passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.",
    detailedDescription: "I'm a dedicated Full-Stack Developer Student with a strong foundation in both front-end and back-end technologies. My journey in web development began with a curiosity for how things work behind the scenes, leading me to explore various programming languages and frameworks. I am particularly interested in creating user-friendly applications that solve real-world problems. Currently, I am honing my skills in modern web technologies and seeking opportunities to contribute to exciting projects.",
    professionalSummary: "I'm a Full-Stack Developer Student with a passion for creating innovative web solutions. My background in both front-end and back-end development allows me to build seamless and efficient applications. I'm constantly learning and adapting to new technologies to enhance my skill set and deliver high-quality work.",
  }
};

// =============================================================================
// SOCIAL MEDIA & EXTERNAL LINKS CONFIGURATION
// =============================================================================
// Нийгмийн сүлжээ болон гадаад холбоосууд / Social media and external links
export const socialLinks = {
  github: "https://github.com/Anu682-max/Anu682-max.git",
  instagram: "https://www.instagram.com/Sakura.______/",
  facebook: "https://www.facebook.com/Л'Г Ану",
  email: "anulkhagvazaya5@gmail.com",
  // Дэмжлэгийн холбоосууд / Support links
  buyMeCoffee: "https://www.buymeacoffee.com/anulkhagvai", // "Buy me a coffee" холбоос / "Buy me a coffee" link
  paypal: "" // PayPal холбоос (хэрэгтэй бол)

};

// =============================================================================
// SKILLS CONFIGURATION
// =============================================================================
// Ур чадварын тохиргоо / Skills configuration
export const skills = [
  {
    category: "Frontend Development",
    icon: "Layout",
    items: [
      { name: "React",  color: "#61DAFB" },
      { name: "JavaScript",  color: "#F7DF1E" },
      { name: "HTML/CSS",  color: "#E34F26" },

    ]
  },
  {
    category: "Backend Development",
    icon: "Server",
    items: [
      { name: "PHP",  color: "#777BB4" },
      { name: "MySQL",  color: "#4479A1" },
      { name: "Node.js",  color: "#339933" },
      { name: "Python",  color: "#3776AB" },
      { name: "PostgreSQL",  color: "#336791" },
      { name: "MongoDB",  color: "#47A248" }
    ]
  },
  {
    category: "Languages",
    icon: "Globe",
    items: [
      { name: "Japanese (N3)",  color: "#FF6B6B" },
      { name: "Mongolian (Native)",  color: "#45B7D1" }
    ]
  }
];

// ================================================================================ 
// STATISTICS CONFIGURATION
// =============================================================================
// About хэсэгт харуулах статистик / Statistics for About section
export const stats = [
  {
    label: "Languages",
    value: "2",
    icon: "*"
  }
];

// =============================================================================
// PROJECTS CONFIGURATION
// =============================================================================
// Анхдагч төслүүдийн жагсаалт / Default projects list
export const projects = [
  {
    id: 1,
    title: "CatApp",
    description: "Comprehensive programming learning platform with interactive coding tutorials",
    longDescription: "A modern web-based programming education platform designed to help beginners and intermediate developers learn coding through interactive tutorials, hands-on exercises, and real-world projects. Features include multiple programming languages, progress tracking, and community support.",
    image: "/catapp.png",
    technologies: ["React", "HTML", "TypeScript"],
    githubUrl: "https://catphoto1.netlify.app/catapp",
    demoUrl: "https://catphoto1.netlify.app/",
    category: "fullstack",
    features: [
      "Interactive coding tutorials",
      "Multiple programming languages support",
      "Progress tracking and analytics",
      "Community-driven learning",
      "Real-world project examples",
      "Mobile-responsive design"
    ],
    
  },
  {
    id: 2,
    title: "BuyMeCoffee",
    description: "Advanced brain training and cognitive enhancement platform",
    longDescription: "A sophisticated web application focused on cognitive enhancement and brain training exercises. Provides scientifically-backed brain training games, memory improvement techniques, and personalized learning paths to enhance mental performance.",
    image: "/BuyMeCoffee.png",
    technologies: ["React.js", "HTML", "CSS"],
    githubUrl: "https://github.com/Anu682-max/Anu682-max.github",
    demoUrl: "https://quiz-app-c66t.vercel.app/",
    category: "fullstack",
    features: [
      "Cognitive assessment tools",
      "Personalized training programs",
      "Progress analytics and insights",
      "Scientific brain training games",
      "Memory enhancement exercises",
      "Multi-language support"
    ],
  },
  {
    id: 3,
    title: "BOOKSTORE",
    description: "Professional typing speed and accuracy training platform",
    longDescription: "A comprehensive typing training application designed to improve typing speed, accuracy, and overall keyboard proficiency. Features various typing tests, lessons, and games to make learning touch typing engaging and effective.",
    image: "/bookstore.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "Chart.js", "Local Storage", ],
    githubUrl: "https://github.com/Anu682-max/",
    demoUrl: "https://6-3-4-direct-push-xxz8.vercel.app/",
    category: "frontend",
    features: [
      "Real-time typing speed measurement",
      "Accuracy tracking and analysis",
      "Multiple typing test modes",
      "Interactive typing lessons",
      "Progress history and statistics",
      "Customizable difficulty levels"
    ],
  },
  {
    id: 4,
    title: "Registration Project",
    description: "Creative thinking and idea management platform",
    longDescription: "An innovative web platform designed for creative professionals, entrepreneurs, and thinkers to organize, develop, and share their ideas. Provides tools for brainstorming, idea visualization, collaboration, and project planning.",
    image: "/Registration project.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", ],
    githubUrl: "https://github.com/Anu682-max/",
    demoUrl: "https://splendorous-brioche-ba78e6.netlify.app/",
    category: "fullstack",
    features: [
      "Idea organization and categorization",
      "Visual brainstorming tools",
      "Real-time collaboration",
      "Project timeline management",
      "Team workspace creation",
      "Export and sharing capabilities"
    ],
  },
  {
    id: 5,
    title: "Burger Build",
    description: "Advanced burger building simulation game",
    longDescription: "A fun and interactive web-based game that allows users to create and customize their own burgers. Players can choose from a variety of ingredients, sauces, and toppings to build the ultimate burger. The game features engaging graphics, sound effects, and a user-friendly interface.",
    image: "/Burger build.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Anu682-max/",
    demoUrl: "https://burger-build-uadt.vercel.app/",
    category: "fullstack",
    features: [
      "PDF merge and split functionality",
      "Document format conversion",
      "PDF compression and optimization",
      "Secure file processing",
      "Batch processing capabilities",
      "No registration required"
    ],
  },
  {
    id: 6,
    title: "FireMovie",
    description: "Make your own burger. Choose ingredients and place an order",
    longDescription: " A dynamic web application that serves as a comprehensive movie database and recommendation platform. Users can search for movies, view detailed information, read reviews, and get personalized recommendations based on their viewing history and preferences.",
    image: "/FireMovie.png",
    technologies: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Anu682-max/",
    demoUrl: "https://firemovie-git-main-anu682-maxs-projects.vercel.app/",
    category: "fullstack",
    features: [
      "Extensive movie database",
      "Personalized movie recommendations",
      "User reviews and ratings",
      "Advanced search and filtering options",
      "Watchlist and favorites management",
      "Responsive design for mobile and desktop"
    ],
  },
  {    
    id: 7,
    title: "Burger-Ai",
    description: "You can create your own burger with any ingredients you want and place an order right away",
    longDescription: "Burger-Ai is an innovative web application that allows users to create their own custom burgers by selecting from a wide range of ingredients. Users can choose buns, patties, toppings, and sauces to build their perfect burger. Once satisfied with their creation, users can place an order for delivery or pickup.",
    image: "/Burger-Ai.png",
    technologies: ["React","Firebase"],
    githubUrl: "https://github.com/Anu682-max/burger-ai",
    demoUrl: "https://burger-ai-eta.vercel.app/",
    category: "fullstack",
    features: [
      "Custom burger creation",
      "Wide range of ingredients",
      "Order placement for delivery or pickup",
      "User-friendly interface",
      "Real-time order tracking",
      "Responsive design"
    ],
  },
  {
    id: 8,
    title: "Burger land",
    description: "Interactive burger restaurant management simulation",
    longDescription: "An interactive burger restaurant management simulation game where players can manage orders, customize burgers, and optimize restaurant operations for maximum efficiency and customer satisfaction.",
    image: "/Burger land.png",
    technologies: [ "Next.js", "Firebase"],
    githubUrl: "https://github.com/Anu682-max/burger-butee",
    demoUrl: "https://burger-butee-gou8.vercel.app/",
    category: "fullstack",
    features: [
      "Multiple-choice questions",
      "Instant feedback",
      "Score tracking",
      "Category and difficulty selection",
      "User-friendly interface",
      "Responsive design"
    ],
  },
  {
    id: 9,
    title: "Company Website",
    description: "A modern construction company website built with Next.js 15, Firebase, and Tailwind CSS. Features a complete admin dashboard for content management.",
    longDescription: "This project is a comprehensive website for a construction company, developed using Next.js 15 for the frontend, Firebase for backend services, and Tailwind CSS for styling. The website includes a fully functional admin dashboard that allows administrators to manage content, update project information, and handle inquiries efficiently.",
    image: "/Company Website.png",
    technologies: ["Next.js 15", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com/Anu682-max/studio",
    demoUrl: "https://company-website-demo.vercel.app/",
    category: "fullstack",
    features: [ 
      "Modern Design: Responsive design with Tailwind CSS",
      "Admin Dashboard: Complete CMS for managing content",
      "Firebase Integration: Authentication, Firestore database, Storage",
      "Image Management: Smart image handling with fallback systems",
      "Multilingual: Mongolian language interface",
      "SEO Optimized: Server-side generation and meta tags",
      "Performance: Optimized for Core Web Vitals"
    ],
  },
  { 
    id: 10,  
    title: "shoe-sphere-connect",
    description: "E-commerce platform for buying and selling shoes with user accounts and payment integration",
    longDescription: "Shoe-Sphere-Connect is a full-featured e-commerce platform that allows users to buy and sell shoes online. The platform includes user account management, product listings, shopping cart functionality, and secure payment processing. Built with modern web technologies to ensure a seamless shopping experience.",
    image: "/shoe-sphere-connect.png",
    technologies: 
    ["Vite",
     "TypeScript",
    "React",
    "shadcn-ui",
    "Tailwind CSS"],
    githubUrl: "https://github.com/Anu682-max/shoe-sphere-connect",  
    demoUrl: "https://shoe-sphere-connect.vercel.app/",
    category: "fullstack",
    features: []                                                     
  },
  {
    id: 11,  
    title: "MedShoes",
    description: "Medical shoe e-commerce platform with user accounts and admin dashboard",
    longDescription: "MedShoes is an e-commerce platform specializing in medical shoes. The platform features user account management, product listings, shopping cart functionality, and an admin dashboard for managing products and orders. Built with modern web technologies to provide a seamless shopping experience for customers.",
    image: "/MedShoes.png",
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase"],
    githubUrl: "https://github.com/Anu682-max/MedShoes",  
    demoUrl: "https://med-shoes-dih9.vercel.app/",
    category: "fullstack",
    features: [
      "Product catalog with multilingual support (English/Mongolian)",
      "Shopping cart functionality",
      "Payment processing with credit/debit card support",
      "Order management system",
      "Responsive design for mobile and desktop"
    ],
  },
  {    
    id: 12,  
    title: "Pv0-flappy-bird",
    description: "This repository will stay in sync with your deployed chats on v0.app. Any changes you make to your deployed app will be automatically pushed to this repository from v0.app.Deployment",
    longDescription: "Pv0-flappy-bird is a fun and addictive web-based game where players control a bird and navigate it through a series of obstacles. The game features simple controls, colorful graphics, and engaging gameplay that keeps players coming back for more.",
    image: "/Pv0-flappy-bird.png",
    technologies: ["CSS3", "Next.js"],
    githubUrl: "https://github.com/Anu682-max/v0-flappy-bird",
    demoUrl: "https://v0-flappy-bird-k2f8.vercel.app/",
    category: "frontend",   
    features: [
      "Simple one-button controls",
      "Increasing difficulty levels",
      "Colorful graphics and animations",
      "Score tracking and leaderboards",
      "Responsive design for mobile and desktop", 
    ],
  },
  {
    id: 13,
    title: "v0-newsletter-template",
    description: "Responsive newsletter email template built with HTML and inline CSS for compatibility across email clients.",
    longDescription: "Newsletter-template is a professionally designed and responsive email template for newsletters. Built with HTML and inline CSS, this template ensures compatibility across various email clients and devices. It features a clean layout, customizable sections, and a focus on readability to effectively communicate your message to subscribers.",
    technologies: ["Next.js", "CSS3"],
    image: "/v0-newsletter-template.png",
    githubUrl: "https://github.com/Anu682-max/v0-newsletter-template",
    demoUrl: "https://v0-newsletter-template-mr2e.vercel.app/en",
    category: "frontend",   
    features: [
      "Responsive design for various email clients",
      "Clean and customizable layout",
      "Inline CSS for compatibility",
      "Optimized for readability",
      "Easy to customize sections", 
    ],
  },
  {
    id: 14,
    title: "Hotel.book",
    description: "The management project is a modern, fast hotel booking platform built using Next.js 14, Tailwind CSS, and the Rakuten Travel API.",
    longDescription: "Hotel.book is a cutting-edge hotel booking platform designed to provide users with a seamless and efficient way to find and book accommodations. Built with Next.js 14 for optimal performance, Tailwind CSS for a sleek user interface, and integrated with the Rakuten Travel API, Hotel.book offers a wide range of hotel options, real-time availability, and competitive pricing.",
    image: "/Hotel.book.png",
    technologies: ["Next.js 14", "Tailwind CSS", "Rakuten Travel API"],
    githubUrl: "https://github.com/Anu682-max/Hotel.book",  
    demoUrl: "https://hotel-book1.vercel.app/",
    category: "fullstack",
    features: [
        "Seamless hotel search and booking",
        "Real-time availability and pricing",
        "User-friendly interface with Tailwind CSS",
        "Integration with Rakuten Travel API",
        "Responsive design for all devices"
    ],
  },
  {
    id: 15,
    title: "thread-supabase",
    description: "A complete Social Media platform powered by Supabase. Log in with Google, post, like, and follow users.",
    longDescription: "thread-supabase is a full-featured social media platform that allows users to connect, share content, and engage with others. Built using Supabase for backend services, the platform supports Google authentication, posting, liking, and following functionalities. Users can create profiles, share updates, and interact with a vibrant community.",                                                          
    image: "/thread-supabase.png",  
    technologies: ["Supabase", "Node.js", "Google Authentication"],
    githubUrl: "https://github.com/Anu682-max/thread-supabase",
    demoUrl: "https://hotel-book1.vercel.app/",
    category: "fullstack",  
    features: [ "Google OAuth Login",
"Write a post (280 characters)",
"Like/Unlike (Realtime)",
"Follow/Unfollow",
"Edit profile",
"Create a community",
"Post a story",
"Send a message",
"Dark UI theme" ],
  }
];

// =============================================================================
// WORK EXPERIENCE CONFIGURATION
// =============================================================================
// Ажлын туршлагын мэдээлэл / Work experience data
export const experiences = [
  {
    id: 1,
    title: "Waiter",
    company: "Green Hill Restaurant",
    period: "2022年5月 ",
    date: "2023年9月 ",
    location: "Mongolia",
    type: "Part-time-job",
    description: "Worked as a waiter in a busy restaurant, providing excellent customer service and ensuring a positive dining experience for guests.",
    responsibilities: [
      "Taking customer orders and serving food and beverages",
      "Maintaining cleanliness and organization of the dining area",
      "Assisting with menu recommendations and answering customer inquiries",
      "Collaborating with kitchen staff to ensure timely order delivery",
      "Developing internal automation tools"
    ],
    technologies: ["Customer Service", "Food & Beverage Service", "Team Collaboration"]
  },
    {
    id: 2,
    title: "Part-time A",
    company: "Data Mongolia LLC",
    period: "2024年6月 - 2022年12月",
    date: "2024年6月 - 2022年12月",
    location: "Mongolia",
    type: "Part-time-job",
    description: "Worked as a part-time automation engineer in a coal mining company, focusing on developing and implementing automation solutions for mining operations.",
    responsibilities: [
      "Designed and implemented mining automation systems",
      "Developed custom software for coal mining operations",
      "AutoCAD technical drawings and system design",
      "Equipment programming and maintenance",
      "Project management and technical documentation"
    ],
    technologies: ["Automation Systems", "AutoCAD", "Equipment Programming", "Project Management"]
  },
  {
    id: 3,
    title: "Distribute Newspapers",
    company: "Yomiuri Shimbun, Japan",
    period: "2024年6月 - 2025年3月",
    date: "2024年9月 - 2025年5月",
    location: "Japan",
    type: "Full-time",
    description: "Worked as a newspaper distributor in Japan, ensuring timely and accurate delivery of newspapers to subscribers in the assigned area.",
    responsibilities: [
      "Newspaper delivery and distribution",
      "Route planning and optimization",
      "Customer service and support",
      "Inventory management and reporting",
      "Collaboration with editorial team"
    ],
    achievements: [
      "Increased delivery efficiency by 30% through optimized routing",
      "Implemented digital tracking system for newspaper distribution",
      "Trained 5+ new distributors on delivery procedures and customer service"
    ],
  }
];

// =============================================================================
// CONTACT INFORMATION CONFIGURATION
// =============================================================================
// Холбоо барих мэдээллийн жагсаалт / Contact information list
export const contactInfo = [
  {
    label: "Email",
    title: "Email",
    value: personalInfo.email,
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    link: `mailto:${personalInfo.email}`
  },
  {
    label: "Phone",
    title: "Phone",
    value: personalInfo.phone,
    icon: Phone,
    href: `tel:${personalInfo.phone}`,
    link: `tel:${personalInfo.phone}`
  },
  {
    label: "Location",
    title: "Location",
    value: personalInfo.location,
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "Address",
    title: "Address",
    value: personalInfo.address,
    icon: MapPin,
    href: "#",
    link: "#"
  },
  {
    label: "Availability",
    title: "Availability",
    value: personalInfo.availability,
    icon: Clock,
    href: "#",
    link: "#"
  },
  {
    label: "Response Time",
    title: "Response Time",
    value: "Within 24 hours",
    icon: Clock,
    href: "#",
    link: "#"
  }
];

// =============================================================================
// SUPPORT LINKS CONFIGURATION
// =============================================================================
// Дэмжлэгийн холбоосууд / Support links configuration
export const supportLinks = {
  buyMeCoffee: {
    url: socialLinks.buyMeCoffee,
    text: "Buy me a coffee",
    icon: Coffee,
    enabled: true // false болговол харагдахгүй / Set to false to hide
  },
  paypal: {
    url: socialLinks.paypal,
    text: "Support via PayPal",
    icon: Mail,
    enabled: false // PayPal ашиглахгүй бол false / Set to false if not using PayPal
  }
};

// =============================================================================
// SEO AND META INFORMATION CONFIGURATION
// =============================================================================
// SEO болон мета мэдээллийн тохиргоо / SEO and meta information configuration
export const seoData = {
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.description,
  keywords: [
    " Full-Stack Developer",
    "PHP Developer",
    "React Developer",
    "JavaScript Developer",
    "Japan Developer",
    "N3 Japanese",
    "Web Development",
    personalInfo.name
  ],
  author: personalInfo.name,
  ogImage: personalInfo.avatar
};

// =============================================================================
// THEME AND STYLING CONFIGURATION
// =============================================================================
// Загварын тохиргоо / Theme configuration
export const themeConfig = {
  // Үндсэн өнгө / Primary colors
  primaryColor: "#06B6D4", // Cyan
  secondaryColor: "#8B5CF6", // Purple
  accentColor: "#EC4899", // Pink
  
  // Градиент / Gradients
  primaryGradient: "from-cyan-400 via-purple-400 to-cyan-400",
  secondaryGradient: "from-purple-500 to-pink-500",
  
  // Анимацийн хугацаа / Animation durations
  animationDuration: {
    fast: "0.2s",
    normal: "0.3s",
    slow: "0.5s"
  }
};

// =============================================================================
// NAVIGATION CONFIGURATION
// =============================================================================
// Навигацийн цэсний тохиргоо / Navigation menu configuration
export const navigationConfig = {
  // Цэсний элементүүд / Menu items
  menuItems: [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "contact", label: "Contact", href: "#contact" }
  ],
  
  // Лого тохиргоо / Logo configuration
  logo: {
    text: personalInfo.nickname,
    domain: ".online"
  }
};

// =============================================================================
// ADMIN CONFIGURATION
// =============================================================================
// Админ панелын тохиргоо / Admin panel configuration
export const adminConfig = {
  // Админ нууц үг (production дээр илүү аюулгүй байх ёстой) / Admin password (should be more secure in production)
  password: "admin123",
  
  // Админ панелын тохиргоо / Admin panel settings
  settings: {
    maxImageSize: 5 * 1024 * 1024, // 5MB
    allowedImageTypes: ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"],
    maxProjectsPerPage: 12
  }
};

// =============================================================================
// INSTRUCTIONS FOR OTHER DEVELOPERS
// =============================================================================
/*
БУСАД ХӨГЖҮҮЛЭГЧДЭД ЗОРИУЛСАН ЗААВАР / INSTRUCTIONS FOR OTHER DEVELOPERS:

1. ХУВИЙН МЭДЭЭЛЭЛ ӨӨРЧЛӨХ / CHANGING PERSONAL INFORMATION:
   - personalInfo объект дотор өөрийн мэдээллээ оруулна уу
   - Нэр, имэйл, утас, байршил зэргийг өөрчилнө үү
   - Bio болон longBio-г өөрийн тухай бичнэ үү

2. НИЙГМИЙН СҮЛЖЭЭНИЙ ХОЛБООС / SOCIAL MEDIA LINKS:
   - socialLinks объект дотор өөрийн нийгмийн сүлжээний холбоосуудыг оруулна уу
   - GitHub, Instagram, Facebook зэрэг холбоосуудыг өөрчилнө үү
   - buyMeCoffee холбоосыг өөрийн дэмжлэгийн хуудсаар солино уу

3. UR ЧАДВАР ӨӨРЧЛӨХ / CHANGING SKILLS:
   - skills массив дотор өөрийн ур чадваруудыг оруулна уу
   - Ангилал (category), нэр (name), түвшин (level), өнгө (color) өөрчилнө үү

4. ТӨСӨЛ НЭМЭХ / ADDING PROJECTS:
   - projects массив дотор өөрийн төслүүдийг оруулна уу
   - Эсвэл /admin хуудас ашиглан шинэ төсөл нэмнэ үү

5. ЗУРАГ СОЛИХ / CHANGING IMAGES:
   - public фолдер дотор portfolio.jpg файлыг өөрийн зургаар солино уу
   - personalInfo.avatar зам нь зөв байгаа эсэхийг шалгана уу

6. ӨНГӨ ЗАГВАР / THEME COLORS:
   - themeConfig объект дотор өнгөнүүдийг өөрчилж болно
   - CSS файл дотор custom өнгөнүүд нэмж болно

7. ХОЛБОО БАРИХ МЭДЭЭЛЭЛ / CONTACT INFORMATION:
   - contactInfo массив дотор холбоо барих мэдээллээ оруулна уу
   - Шинэ холбоо барих арга нэмж болно

АНХААРАХ ЗҮЙЛ / IMPORTANT NOTES:
- Энэ файлыг өөрчилсний дараа аппликейшнийг дахин эхлүүлэх хэрэггүй
- Бүх өөрчлөлт шууд харагдана
- Зураг файлуудыг public фолдерт хийнэ үү
- Production дээр deploy хийхээсээ өмнө бүх холбоосууд ажиллаж байгаа эсэхийг шалгана уу
*/