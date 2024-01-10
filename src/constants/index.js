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
  carrent,
  jobit,
  tripguide,
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
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
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
    image: carrent,
    source_code_link: "https://yousha-shoaib.github.io/vite-calculator/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
