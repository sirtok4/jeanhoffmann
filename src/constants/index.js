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
  tailwind,
  nodejs,
  mongodb,
  linemar,
  perboni,
  jh,
  allinsys,
  firebase,
  sellin,
  szene,
  sql,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
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
    title: "Mobile Developer",
    icon: mobile,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend Developer",
    icon: backend,
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
  // {name: "Redux Toolkit",icon: redux,},
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {name: "MongoDB",icon: mongodb,},
  
  {name: "Firebase",icon: firebase,},
  {name: "SQL",icon: sql,},
  // {name: "git",icon: git,},
  // {name: "figma",icon: figma,},
  // {name: "docker",icon: docker,},
];

const experiences = [
  {
    title: "Full Stack Web & Mobile Developer",
    company_name: "Jean Hoffmann",
    icon: jh,
    iconBg: "#6936f5",
    date: "March 2019 - Present",
    points: [
      "Developing, maintaining, and releasing mobile applications on both platforms, iOS & Android",
      "Developing and maintaining web applications using React.js, PHP and other related technologies.",
      "Developing and maintaining databases",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Allinsys",
    icon: allinsys,
    iconBg: "#fff",
    date: "Aug 2013 - Feb 2019",
    points: [
      "Developing and maintaining web applications using React.js, PHP, and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developing and maintaining databases",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Perboni",
    icon: perboni,
    iconBg: "#eee",
    date: "Apr 2011 - Jul 2013",
    points: [
      "Development of Software and Strategies to help the general administration of the company.",
      "Database",
      "UX/UI Design",
      "Computer Maintenance",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Linemar",
    icon: linemar,
    iconBg: "#fff",
    date: "Feb 2010 - Mar 2011",
    points: [
      "Development of flyers",
      "Artwork for t-shirts",
      "Brand Advertising",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "We hired Jean in summer 2021 to built the app “Szene.app”, and later the website for it. From the beginning on, we were highly content with Jeans dedicated work. Jean did not only develop and implement our projects and updates, he also constantly assessed the product and gave us feedback on how to improve it. Apart from realising the project, Jean supported us in questions apart from developing regarding conceptualisation and even costumer journeys. In the end, he developed us fully functioning ticketing and event marketing platform available on app and website. Apart from his deep understanding of development, Jean also convinced us with his attitude. He is exceptionally patient, kind and supportive. Best partner we and one could have!",
    name: "Tom Schulz",
    designation: "Co-Founder",
    company: "Brandtbach Development",
    image: "https://media.licdn.com/dms/image/C4E03AQFKk1kMWbqVcg/profile-displayphoto-shrink_200_200/0/1661591083111?e=1697673600&v=beta&t=DgrzHI1N1LB4JtuWvcRLkl6KrFGux1ScPuQ56Eb-teI",
  },
  {
    testimonial:
      "I hired Jean H. to support me with my Website Design development, from a visual but also a technical point of view. He has supported me in a professional, swift manner, and always stayed super service minded. Can definitely recommend Jean for any future project, and we're already collaborating for a decent 2 years now together if projects come available.",
    name: "Joep Sondeijker",
    designation: "Founder",
    company: "F&B Concept Solutions",
    image: "https://media.licdn.com/dms/image/D4E03AQFbw9JFveE9ew/profile-displayphoto-shrink_200_200/0/1689612987575?e=1697673600&v=beta&t=WWjQNgH6bKz6WOdoAHLhQwzhfT_j2UpUJbUu9bSQ3lg",
  },
  {
    testimonial:
      "We worked with Jean on rebranding our website and the work was well done in a professional and flexible matter. It was flawless and the end-result was very satisfying. I would highly recommend Jean",
    name: "Alex K.",
    designation: "CEO",
    company: "The Tech Company",
  },
];

const projects = [
  {
    name: "Szene",
    subtitle: 'Event Platform',
    description:
`A platform that allows users to search, create and manage events. With the possibility of selling their own tickets, it provides a convenient and efficient solution for event management needs.
      
The project was developed for some entrepreneurs from Switzerland. Website and App (Android & IOS). I took responsibility for the development of all stages: Frontend & Backend.`,
    tags: [
      {
        name: "app",
        color: "pink-text-gradient",
      },
      {
        name: "website", color: "green-text-gradient",
      },
      {name: "react", color: "blue-text-gradient",},
      {name: "firebase", color: "orange-text-gradient",},
    ],
    image: szene,
    source_code_link: "https://www.szene.app/",
    link: "www.szene.app",
  },
  {
    name: "Sellin.store",
    subtitle: 'Marketplace',
    description: 
`Web-based marketplace platform that enables users to buy, sell, and exchanging new or secondhand items, providing a clear solution for sustainability.

The project was developed using PHP as the primary programming language and MySQL as the database.

I was in charge of all development, Frontend & Backend. Also, I managed to handle all the logistics of how the marketplace would work.`,
    // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      // "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "website",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {name: "mysql", color: "orange-text-gradient",},
    ],
    image: sellin,
    source_code_link: "https://www.sellin.store/",
    link: "www.sellin.store",
  },
  // {
  //   name: "Lolita Pimenta",
  //   subtitle: 'Shoe Factory'
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
