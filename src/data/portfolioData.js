// =============================================
// PORTFOLIO DATA — Single source of truth
// =============================================

export const personalInfo = {
  name: "Sachin Kumar",
  role: "Junior MERN Stack Developer",
  tagline: "Aspiring MERN Stack Developer",
  location: "Greater Noida, India",
  email: "sr829799@gmail.com",
  phone: "7088689264",
  github: "https://github.com/Sachin8297",
  linkedin: "https://www.linkedin.com/in/sachin-kumar-335373410",
  bio: "A 2026 B.Tech Computer Science and Engineering graduate from NIET, Greater Noida. I am passionate about building modern, responsive full-stack web applications using the MERN stack. I enjoy turning ideas into practical software and am actively looking for opportunities to contribute to real-world projects.",
  shortBio:
    "Building full-stack web apps with React, Node.js, Express, and MongoDB. Eager to contribute, learn, and grow in a collaborative engineering environment.",
};

export const skills = [
  {
    category: "Frontend",
    icon: "Monitor",
    color: "#6366f1",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "React Hooks",
      "Context API",
      "React Router",
    ],
  },
  {
    category: "Backend",
    icon: "Server",
    color: "#8b5cf6",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    icon: "Database",
    color: "#06b6d4",
    items: ["MongoDB", "Mongoose", "CRUD Operations"],
  },
  {
    category: "Tools",
    icon: "Wrench",
    color: "#10b981",
    items: ["Git", "GitHub", "Vite", "VS Code", "Postman"],
  },
  {
    category: "Core Concepts",
    icon: "Layers",
    color: "#f59e0b",
    items: [
      "Full-Stack Development",
      "REST API Design",
      "Authentication & Authorization",
      "State Management",
      "Responsive Design",
      "Component Architecture",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Team Task Management System",
    description:
      "A full-stack MERN application that helps teams organize projects and manage tasks efficiently. Features user authentication, task creation and assignment, project tracking, and a responsive React interface with global state management.",
    longDescription:
      "Built with a React frontend, Node.js/Express backend, and MongoDB for data storage. Implements JWT-based authentication, RESTful APIs, and React Context API for centralized state management. React Router handles client-side navigation across all views.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Context API",
      "REST API",
    ],
    github: "https://github.com/Sachin8297",
    live: null,
    featured: true,
    icon: "CheckSquare",
    color: "#6366f1",
  },
  {
    id: 2,
    title: "Health Tracker Web App",
    description:
      "An interactive health metrics web application that calculates BMI, BMR, and daily water intake recommendations. Built with a clean, accessible UI using vanilla JavaScript for real-time calculations and engaging data presentation.",
    longDescription:
      "Designed for simplicity and usefulness, this app lets users input their health data and immediately see calculated wellness metrics. Focuses on responsive layout, intuitive form design, and presenting results in an easy-to-understand visual format.",
    tags: ["HTML5", "CSS3", "JavaScript", "BMI Calculator", "BMR", "Responsive"],
    github: "https://github.com/Sachin8297",
    live: "https://teal-boba-df1435.netlify.app",
    featured: true,
    icon: "Heart",
    color: "#06b6d4",
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Noida Institute of Engineering and Technology (NIET)",
    location: "Greater Noida, Uttar Pradesh",
    period: "2022 — May 2026",
    description:
      "Focused on software development fundamentals, data structures, algorithms, web technologies, and database management. Developed practical full-stack development skills through personal projects using the MERN stack.",
  },
];
