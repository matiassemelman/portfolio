import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import comingSoon from '../images/portfolio/comingSoon.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import monicaPhoto from '../images/testimonials/monica.jpg';
import devifyLogo from '../images/timelineLogos/devifyok_logo.jpg';
import intiLogo from '../images/timelineLogos/intiLogo.jpg';
import jelpinLogo from '../images/timelineLogos/jelpinLogo.jpg';
import noCountryLogo from '../images/timelineLogos/noCountryLogo.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Semelman Matias Portfolio',
  description:
    "Site built by Matias Semelman using React, Tailwind CSS, and Heroicons. It's a modern, mobile-first, and responsive site template for my personal resume.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Matias Semelman.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Buenos Aires based <strong className="text-stone-100">FrontEnd Developer</strong>, currently{' '}
        <strong className="text-stone-100">looking for new opportunities,</strong> and help to build modern, dinamic and
        mobile-first apps.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me practicing <strong className="text-stone-100">singing</strong>, most of
        the time <strong className="text-stone-100">blues</strong>, or exploring the beautiful{' '}
        <strong className="text-stone-100">Buenos Aires city</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a curious and passionate person, who enjoys life and challenges, my fuel to grow as individual. I dedicate myself to cultivate my inner peace an give my energy to projects I care, the people I love and the activities I find interesting. I'm a self-learner, and I'm always looking for new opportunities to grow and learn.`,
  aboutItems: [
    {label: 'Location', text: 'Buenos Aires, Argentina', Icon: MapIcon},
    {label: 'Age', text: '28', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Argentinian', Icon: FlagIcon},
    {label: 'Interests', text: 'Singing, spirituality, business', Icon: SparklesIcon},
    {label: 'Study', text: 'Self-learner', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Looking for new', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Web Development',
    skills: [
      {
        name: 'React',
      },
      {
        name: 'Next.js',
      },
      {
        name: 'Micro Frontends',
      },
      {
        name: 'JavaScript ES6+',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'HTML5',
      },
      {
        name: 'CSS3',
      },
      {
        name: 'SASS',
      },
      {
        name: 'LESS',
      },
      {
        name: 'SCSS',
      },
      {
        name: 'API REST',
      },
      {
        name: 'Responsive Mobile Design',
      },
      {
        name: 'Design Systems',
      },
      {
        name: 'SEO',
      },
      {
        name: 'i18n',
      },
    ],
  },
  {
    name: 'Frontend Frameworks & Libraries',
    skills: [
      {
        name: 'Redux',
      },
      {
        name: 'React Query',
      },
      {
        name: 'Context API',
      },
      {
        name: 'Chakra UI',
      },
      {
        name: 'Storybook',
      },
    ],
  },
  {
    name: 'Frontend Tools',
    skills: [
      {
        name: 'Git',
      },
      {
        name: 'npm',
      },
      {
        name: 'Figma',
      },
      {
        name: 'Lighthouse',
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MySQL',
      },
      {
        name: 'PostgreSQL',
      },
      {
        name: 'SQL',
      },
    ],
  },
  {
    name: 'Backend & DevOps',
    skills: [
      {
        name: 'GraphQL',
      },
      {
        name: 'Docker',
      },
      {
        name: 'Keycloak',
      },
      {
        name: 'Strapi CMS',
      },
      {
        name: 'Microservices',
      },
    ],
  },
  {
    name: 'Methodologies & Practices',
    skills: [
      {
        name: 'Agile Frameworks',
      },
      {
        name: 'Scrum',
      },
      {
        name: 'KanBan',
      },
      {
        name: 'Waterfall',
      },
      {
        name: 'Jira',
      },
      {
        name: 'Clean Code',
      },
      {
        name: 'SOLID Principles',
      },
      {
        name: 'Global State Management',
      },
      {
        name: 'Testing',
      },
      {
        name: 'Unit Testing',
      },
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'English',
      },
      {
        name: 'Spanish',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Defining proyect idea',
    description: 'Here goes the description',
    url: '',
    image: comingSoon,
  },
];

export const education: TimelineItem[] = [
  {
    date: '2020 - 2021',
    location: 'Go.Elevate',
    title: 'Front End Development, Web Apps Development',
    content: (
      <div className="flex flex-col gap-4">
        <a className="underline text-blue-700" href="https://www.linkedin.com/company/goelevateskills/" target="_blank">
          https://www.linkedin.com/company/goelevateskills/
        </a>
        <p>
          Technologies: Javascript, React, GIT, GitHub, HTML, CSS, Flexbox, Grid, SQL Database, Data Structures, OOP
        </p>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jul 2022 - Dec 2023',
    location: 'Devify - Ingenia Holdings',
    logoSrc: devifyLogo,
    title: 'Frontend Developer',
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Summary: Devify is a Software Development Agency with projects all over the Americas including e-commerce
          applications, a file-sharing platform, payment platforms for government, among others.
        </p>
        <ul className="list-disc">
          <li>
            Developed 5 dynamic, scalable, and maintainable web applications using NextJS, React, Typescript and
            frontend components library (15+ components).
          </li>
          <li>
            Integrated Redux, React Query, and Context to improve data flow by 50% for our core file sharing platform.
          </li>
          <li>
            Enhanced the application performance and rendering time in 5x by implementing server-side rendering with
            React and Nextjs.{' '}
          </li>
          <li>
            Implemented REST APIs, both proprietary and third-party, such as those from Youtube and Facebook Graph.{' '}
          </li>
        </ul>
        <p>Tech stack: React 18, Next 13 & 14, Typescript, React Hooks, Redux, React Query, Tailwind</p>
        <p>Additional skills: Docker, GraphQL, Keycloak, Git, BFF, Scrum, Agile, Microfrontend</p>
      </div>
    ),
  },
  {
    date: 'Mar 2023 - Aug 2023',
    location: 'INTI',
    logoSrc: intiLogo,
    title: 'Programming Tutor',
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Summary: The National Industrial Technology Institute (INTI) is a federal agency responsible for developing
          industrial technology. Plays a crucial role in supporting the growth of Argentinian small and medium-sized
          enterprises.
        </p>
        <ul className="list-disc">
          <li>Helped students learn programming basics and Javascript.</li>
          <li>Worked with a government program to provide educational resources to students.</li>
          <li>Fostered a supportive learning environment that encouraged student engagement and participation.</li>
        </ul>
      </div>
    ),
  },
  {
    date: 'Mar 2022 - Jul 2022',
    location: 'No Country (Internship)',
    logoSrc: noCountryLogo,
    title: 'Frontend Developer',
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Project: Large-scale hiring platform and one of the fastest growing in the region. No country allows software
          engineers to get more visibility through its network.
        </p>
        <ul className="list-disc">
          <li>
            Created dynamic and maintainable web applications and their interfaces using React, Javascript and Tailwind.
          </li>
          <li>
            Implemented an efficient management system through Redux that reduced the application response time by 15%.
          </li>
          <li>
            Contributed continuously to code review processes, achieving a 30% faster code review turnaround time.
          </li>
          <li>
            Increased the number of debugging and troubleshooting by implementing a new process in the team, ensuring
            the application to perform more consistenly.
          </li>
        </ul>
        <p>Tech stack: React 17, React Hooks, Redux, Tailwind</p>
        <p>Additional skills: Git, Scrum, Kanban, Agile</p>
      </div>
    ),
  },
  {
    date: 'Jun 2021 - Nov 2021',
    location: 'Jelpin.com',
    logoSrc: jelpinLogo,
    title: 'Frontend Developer',
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Project: Jelpin is a Gig Economy App and SaaS platform that connects independent contractors with potential
          gigs and work opportunities in Argentina.
        </p>
        <ul className="list-disc">
          <li>
            Led the development of 100% of the main Jelpin App platform frontend, using React, JavaScript, and Tailwind.
          </li>
          <li>
            Implemented RESTful API calls and data fetching, allowing the app to fully function and be ready to market.
          </li>
          <li>
            Enhanced system security by implementing JWT protocols, resulting in a 30% reduction in potential
            vulnerabilities and ensuring enhanced protection of user data.
          </li>
          <li>Started version control processes with the use of Git from pre-market to post-launch versions.</li>
        </ul>
        <p>Tech stack: React 17, React Hooks, Redux, Styled Components</p>
        <p>Additional skills: Git, Scrum, Kanban, Agile</p>{' '}
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Mónica Sch',
      text: 'Matías is a committed professional who tackles every challenge head-on. You know you can rely on him, and you are confident he will meet the projects objectives on time and effectively. Perseverant, analytical, and results-oriented, he always gives his all. He is a valuable asset that will greatly contribute to any team, both professionally and personally.',
      image: monicaPhoto,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'matiassemelman@gmail.com',
      href: 'mailto:matiassemelman@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Buenos Aires, Argentina',
      href: 'https://maps.app.goo.gl/rohbs2QgJMYN9Rbc8',
    },
    {
      type: ContactType.Instagram,
      text: '@matias.semelman',
      href: 'https://www.instagram.com/matias.semelman/',
    },
    {
      type: ContactType.Github,
      text: 'matiassemelman',
      href: 'https://github.com/matiassemelman',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/matiassemelman'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/matias-semelman/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/matias.semelman/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/matiassemelman'},
];
