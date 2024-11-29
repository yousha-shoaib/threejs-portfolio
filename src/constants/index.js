import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  brightsparkz,
  giwusa,
  goodie,
  nstpl,
  sym,
  wits,
  medicaldatavisualiser,
  nodemetadata, 
  oaablog, 
  reactcalc, 
  reactdrums,
  giwusasite,
  symsite,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Academic Tutor",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Physicist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full-stack Developer Contractor",
    company_name: "General Industries Workers Union of South Africa (GIWUSA)",
    icon: giwusa,
    iconBg: "#FFFFFF",
    date: "September 2022 - Present",
    points: [
      "Rebuilt entire front-end using tailwindcss and added additional functionality to the site.",
      "Reduced loading times, data usage, fixed security issues, scaling issues on mobile with site.",
      "Soley responsible for further maintenance, updates and SEO to be done to the site.",
      "Responsible for filing takedown requests with hosting providers and search engines against conterfeit union pages.",
    ],
  },
  {
    title: "Full-stack Developer Contractor",
    company_name: "Socialist Youth Movement (SYM)",
    icon: sym,
    iconBg: "#FFFFFF",
    date: "September 2022 - Present",
    points: [
      "Designed and implemented a Laravel based full-stack blog application with a custom CMS.",
      "Soley responsible for further maintenance, updates and architectural changes to the site.",
    ],
  },
  {
    title: "Undergradutate Researcher",
    company_name: "Nano-Scale Transport Laboratories (WITS)",
    icon: nstpl,
    iconBg: "#426A9D",
    date: "Feb 2021 - Nov 2021",
    points: [
      "Collaborated in developing control software for the dilution fridge and accompanying measurment aparatus using NI LabView",
      "Prototyping copper PCB/sample holders for Oxford Instruments Triton dilution fridge using AutoCAD.",
      "Designed and developed code for experiments to observe the behaviour of superconducting materials (CNTs, NVC in diamond) at a range of temperatures and applied magnetic field configurations.",
      "Assisted in the development and preparation of PCBs for samples.",
    ],
  },
  {
    title: "Lab Demonstrator (Auxiliary Physics I)",
    company_name: "University of the Witwatersrand",
    icon: wits,
    iconBg: "#FFFFFF",
    date: "Feb 2021 - Nov 2021",
    points: [
      "Responsible for creating lecture videos, slides, lab report templates and marking guidlines for the experimental portion of the PHYS1034 module",
      "Administrated and conducted online QnA sessions with students.",
      "Marked and annotated student lab reports as well as captured marks using the Ulwazi LMS system.",
    ],
  },
  {
    title: "Tutor Contractor",
    company_name: "Goodie Tutors",
    icon: goodie,
    iconBg: "#1B3E78",
    date: "Sep 2020 - Present",
    points: [
      "Involved in tutoring various students from primary school to undergraduate university level in primarily STEM subjects",
      "Assigned to work on larger education projects/outreach programs: Growthpoint GEMS and ABSA Golang Outreach.",
    ],
  },
  {
    title: "Tutor Contractor",
    company_name: "BrightSparkz Tutors",
    icon: brightsparkz,
    iconBg: "#FFFFFF",
    date: "Sep 2020 - Present",
    points: [
      "Involved in tutoring various students from primary school to undergraduate university level in primarily STEM subjects.",
      "Assisted in teaching various students with learning disabilities: ADHD, Dyslexia, etc.",
    ],
  },
  {
    title: "Academic Tutor (Computation and Applied Mathematics I)",
    company_name: "University of the Witwatersrand",
    icon: wits,
    iconBg: "#FFFFFF",
    date: "Feb 2020 - Feb 2021",
    points: [
      "Responsible for conducting tutorial and lab demonstration sessions for students.",
      "Assisted in the marking and invidualtion of tests, assignments and examinations.",
    ],
  },
];

const testimonials = [
];

const projects = [
  {
    name: "GIWUSA Website",
    description:
      "Developed an information site for the General Industries Workers Union of South Africa. It's a simple static site with PHP for the contact form",
    tags: [
      {
        name: "HTML5",
        color: "black-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: giwusasite,
    source_code_link: "https://giwusa.org.za",
  },
  {
    name: "SYM Website",
    description:
      "I developed a blogging platform and information site for the Socialist Youth Movement. The site has a custom CMS that runs on NextJS.",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: symsite,
    source_code_link: "https://socialistyouth.org.za",
  },
  {
    name: "Open Access Azania Blog",
    description:
      "I wrote a blog application to showcase some of my short articles and pieces that I've not been able to publish formally related to open access",
    tags: [
      {
        name: "next.js",
        color: "black-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: oaablog,
    source_code_link: "https://openaccessazania.vercel.app",
  },
  {
    name: "File Metadata Service",
    description:
      "I wrote an web application to return the metadata from an uploaded file. Serves as a microservice that I use for some of my other deployments",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: nodemetadata,
    source_code_link: "https://file-metadata-microservice-uc05.onrender.com/",
  },
  {
    name: "React Calculator",
    description:
      "I quick and simple app I built for completion of a freecodecamp certification. Its a simple non-scientific calculator.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: reactcalc,
    source_code_link: "https://yousha-shoaib.github.io/vite-calculator/",
  },
  {
    name: "React Drum Machine",
    description:
      "A simple soundboard built using react and vite. I essentially just built this to learn how to listen to keyboard events and play audio files within react.",
    tags: [
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: reactdrums,
    source_code_link: "https://yousha-shoaib.github.io/vite-drum-machine/",
  },
  {
    name: "Medical Data Visualiser",
    description:
      "A data science project I built which uses python, matplotlib and scipy to visualise outcome data from various patient variables such as: cholesterol, glucose, physical activity, smoking, etc",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },
      {
        name: "scipy",
        color: "yellow-text-gradient",
      },
    ],
    image: medicaldatavisualiser,
    source_code_link: "https://yousha-shoaib.github.io/vite-drum-machine/",
  },
];

export { services, technologies, experiences, testimonials, projects };
