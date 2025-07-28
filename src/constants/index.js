const navLinks = [
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Resume",
    link: "/Vansh_Agrawal.pdf",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/words/ideas.svg" },
  { text: "Concepts", imgPath: "/images/words/concepts.svg" },
  { text: "Designs", imgPath: "/images/words/designs.svg" },
  { text: "Code", imgPath: "/images/words/code.svg" },
  { text: "Ideas", imgPath: "/images/words/ideas.svg" },
  { text: "Concepts", imgPath: "/images/words/concepts.svg" },
  { text: "Designs", imgPath: "/images/words/designs.svg" },
  { text: "Code", imgPath: "/images/words/code.svg" },
];

const counterItems = [
  { value: 2, suffix: " ", label: "Internships Completed" },
  { value: 5, suffix: "+", label: "Impactful Projects Developed" },  // ServiceNow O.M.S, Bhoomi, Namma Sportika, Vyapaar Connect, ResQLink
  { value: 4, suffix: "+", label: "Leadership Roles Held" }, // Copperly, NSS, Namma Sportika, Team Lead roles
  { value: 7, suffix: "+", label: "Key Technologies Utilized" }, // React, Node.js, ServiceNow, C/C++, Python, Firebase, Tailwind, etc. 
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/abilities/web-developer.gif",
    title: "Clean & Scalable Development",
    desc: "Building maintainable, efficient full-stack applications using React, Node.js, and ServiceNow platform."
  },
  {
    imgPath: "/images/abilities/leader.gif",
    title: "Collaborative Leadership & Teamwork",
    desc: "Leading cross-functional teams and fostering effective communication to deliver impactful projects."
  },
  {
    imgPath: "/images/abilities/think.gif",
    title: "Innovative Problem-Solving & Reliable Delivery",
    desc: "Resolving complex challenges strategically with continuous learning and ensuring projects meet deadlines with quality."
  }
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react-js.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "C++ Developer",
    modelPath: "/models/c++.glb",
    scale: 0.07,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-js.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js.glb",
    scale: 0.045,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git.glb",
    scale: 0.045,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    imgPath: "/images/expCards/expImgs/bhoomi.png",
    logoPath: "/images/expCards/expLogos/Bhoomi.png",
    title: "Bhoomi – Gardening Services Platform",
    link: "https://the-bhoomi.vercel.app/",
    linkTest: "the-bhoomi.vercel.app",
    date: "Jan 2024 – Apr 2024",
    responsibilities: [
      "Addressed the lack of online gardening booking by creating a plant ordering and maintenance portal.",
      "Implemented React.js frontend with Tailwind CSS, Styled Components, Framer Motion, and Redux Toolkit.",
      "Empowered users to schedule services and track order history via a mobile‑friendly UI hosted on Vercel.",
    ],
  },
  {
    imgPath: "/images/expCards/expImgs/namma-sportika.png",
    logoPath: "/images/expCards/expLogos/namma-sportika.svg",
    title: "Namma Sportika – Inter‑University Sports Platform",
    link: "https://namma-sportika.gitam.edu/",
    linkTest: "namma-sportika.gitam.edu",
    date: "Jan 2025 – Apr 2025",
    responsibilities: [
      "Solved scattered event registration by unifying sign‑ups and live scoring for 600+ athletes.",
      "Built secure Firebase Auth registration, Firestore‑backed real‑time scoreboards, and XLSX.js exports.",
      "Enabled sports coordinators and athletes across 12 universities to manage and view event data seamlessly.",
    ],
  },
  {
    imgPath: "/images/expCards/expImgs/erp.png",
    logoPath: "/images/expCards/expLogos/ags.ico",
    title: "Vyapaar Connect – Offline ERP Suite",
    link: "https://ags-erp.vercel.app/",
    linkTest: "ags-erp.vercel.app",
    date: "July 2024 – Dec 2024",
    responsibilities: [
      "Eliminated dependence on internet for SMEs by creating a fully offline ERP platform.",
      "Developed React/Tailwind frontend and Node/Express + SQLite backend with zero‑config migrations.",
      "Helped small businesses generate GST‑compliant invoices and manage inventory without network costs.",
    ],
  },
  {
    imgPath: "/images/expCards/expImgs/relink.png",
    logoPath: "/images/expCards/expLogos/SN.png",
    title: "ResQLink – ServiceNow Disaster Response Platform",
    date: "In Development",
    responsibilities: [
      "Addressed slow emergency coordination by integrating incident tracking into ServiceNow.",
      "Built REST API connectors, Flow Designer workflows, and automated escalation scripts in Glide/JavaScript.",
      "Enabled government and NGO teams to dispatch volunteers and monitor crises in real‑time.",
    ],
  },
];

const showcaseCards = [
  {
    // ServiceNow Virtual Internship
    review: "I advanced my skills in ITSM automation, REST API integration, agile software development, and learned to collaborate with global teams while working end-to-end on ServiceNow enterprise solutions.",
    imgPath: "/images/expCards/expImgs/servicenow.webp",
    logoPath: "/images/expCards/expLogos/SN.png",
    link: "https://drive.google.com/file/d/1LN9khOtB-kiZ195QNOnQkE83Et7ulUM1/view?usp=sharing",
    linkTest: "View: ServiceNow CSA & CAD Certificates",
    title: "ServiceNow – Virtual Internship (ITSM Automation & App Development)",
    date: "Jan 2025 – July 2025",
    responsibilities: [
      "Designed, developed, and deployed ITSM modules using ServiceNow Flow Designer, Business Rules, and Client Scripts.",
      "Integrated external REST APIs for key modules such as asset and incident management.",
      "Successfully completed ServiceNow CSA and CAD certifications.",
      "Worked in agile sprints with international teams, focusing on scalable solutions for enterprise IT automation."
    ],
  },
  {
    // Connect2Park/ParkNSecure Internship
    review: "I learned how to develop web modules for real-world products, collaborate in a fast-paced startup setting, and apply agile practices and modern frontend techniques to deliver user-focused smart parking solutions.",
    imgPath: "/images/expCards/expImgs/c2p.png",
    logoPath: "/images/expCards/expLogos/c2p.png",
    link: "https://drive.google.com/file/d/1CjsWjxvHcLEjxli-kqchZdF7CcYCEHw7/view?usp=drive_link",
    linkTest: " View: Connect2Park – Internship Certificate",
    title: "Web Development Intern – Connect2Park (ParkNSecure Pvt Ltd)",
    date: "May 2025 – June 2025",
    responsibilities: [
      "Built and enhanced web components for smart parking products using JavaScript and modern frameworks.",
      "Contributed to product prototyping and iterative development with cross-functional teams.",
      "Experienced the startup culture: rapid development, frequent feedback cycles, and tight deadlines."
    ],
  }
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/expCards/expLogos/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/expCards/expLogos/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/expCards/expLogos/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Vansh. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/testimonials/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Vansh was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/testimonials/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Vansh was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vansh's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vansh is the ideal partner.",
    imgPath: "/images/testimonials/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Vansh was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/testimonials/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Vansh’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/testimonials/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Vansh was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/testimonials/client6.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/socialImgs/github.svg",
    link: "https://github.com/agrawalvansh",
  },
  {
    name: "linkedin",
    imgPath: "/images/socialImgs/linkedin.svg",
    link: "https://www.linkedin.com/in/agrawalvansh/",
  },
  {
    name: "x",
    imgPath: "/images/socialImgs/x.svg",
    link: "https://x.com/Mr_VanshAgrawal",
  },
  {
    name: "instagram",
    imgPath: "/images/socialImgs/instagram.svg",
    link: "https://www.instagram.com/mr.agrawalvansh/",
  }
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  navLinks,
  showcaseCards,
};
