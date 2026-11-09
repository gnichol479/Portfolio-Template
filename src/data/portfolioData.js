// Students: this is the main file you should edit for your portfolio.
// Replace the placeholder values below with your own information.

const portfolioData = {
  name: "Gibson Nichol",
  headline: "Computer Science Student & Software Developer",
  intro:
    "I'm a Computer Science student at the University of Central Missouri. I enjoy building software that solves real problems, competing in hackathons, and exploring what I can create with XR.",
  aboutText:
    "I'm studying Computer Science with a focus on Software Development at UCM, where I'm also part of the Honors College. I've worked on pharmacy software at Oracle and data pipelines at Crosslists. Outside of class, I serve as ACM Vice President and XR Organization Vice President, organize student events, and lead our MuleSuits team for NASA SUITS. I like taking an idea and figuring out how to make it work, whether that's a web application, a Unity game, or something running on a HoloLens.",

  // Mock contact details for the workshop example. Replace before publishing.
  email: "gibson.nichol@example.com",
  githubUrl: "https://github.com/example/gibson-nichol-demo",
  linkedinUrl: "https://www.linkedin.com/in/example-gibson-nichol",
  resumePath: "/resume-demo.pdf",
  // Add a real portrait only when you have an actual photo to include.
  profileImage: "",
  profileImageAlt: "",

  skills: [
    "Python",
    "Java",
    "C#",
    "JavaScript",
    "React",
    "Unity",
    "Flutter",
    "FastAPI",
    "SQL",
    "Docker",
    "Git"
  ],

  // These example URLs are mock links. Replace them before publishing.
  // Add another project by copying one object, changing its values, and adding a comma.
  projects: [
    {
      title: "MuleSuits",
      description:
        "I'm leading UCM's MuleSuits team in developing a mixed reality interface for NASA SUITS. Our proposed system includes navigation, suit information, procedures, and voice interaction to support simulated lunar exploration.",
      technologies: ["Unity", "C#", "HoloLens 2", "OpenXR"],
      image: "",
      imageAlt: "",
      githubUrl: "https://github.com/example/mulesuits-demo",
      liveDemoUrl: "https://example.com/mulesuits-demo"
    },
    {
      title: "Gate & Gatekeeper",
      description:
        "Built with a team of three at Hack Midwest 2026, this project explored a payment authorization firewall for AI agents. We earned the $2,500 DevRev track prize.",
      technologies: ["Python", "FastAPI", "MCP"],
      image: "",
      imageAlt: "",
      githubUrl: "https://github.com/example/gate-gatekeeper-demo",
      liveDemoUrl: "https://example.com/gate-gatekeeper-demo"
    },
    {
      title: "HoloLens Object Identification",
      description:
        "A mixed reality research project that connects HoloLens image capture to a FastAPI backend running YOLO object detection. The project explores combining object detection with natural language voice queries to help users find objects.",
      technologies: ["Unity", "C#", "Python", "FastAPI", "YOLO"],
      image: "",
      imageAlt: "",
      githubUrl: "https://github.com/example/hololens-object-identification-demo",
      liveDemoUrl: "https://example.com/hololens-object-identification-demo"
    },
    {
      title: "Ledger Shredder",
      description:
        "A Flutter application with an XRPL wallet integration, built at HackKU 2026. Our team placed third overall and second in the blockchain category.",
      technologies: ["Flutter", "Dart", "XRPL"],
      image: "",
      imageAlt: "",
      githubUrl: "https://github.com/example/ledger-shredder-demo",
      liveDemoUrl: "https://example.com/ledger-shredder-demo"
    },
    {
      title: "AgriVision",
      description:
        "Built at LionHog Tech, AgriVision combined a Flutter application with image analysis through AWS Rekognition and MongoDB storage. Our team earned second place.",
      technologies: ["Flutter", "AWS Rekognition", "MongoDB"],
      image: "",
      imageAlt: "",
      githubUrl: "https://github.com/example/agrivision-demo",
      liveDemoUrl: "https://example.com/agrivision-demo"
    },
    {
      title: "Shadows of the Moon",
      description:
        "A 3D escape game I developed independently in Unity. I earned seventh place nationally in the FBLA Computer Game & Simulation Programming event in 2025.",
      technologies: ["Unity", "C#", "3D Game Development"],
      image: "",
      imageAlt: "",
      githubUrl: "https://github.com/example/shadows-of-the-moon-demo",
      liveDemoUrl: "https://example.com/shadows-of-the-moon-demo"
    }
  ]
};

export default portfolioData;
