import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Tender Details',
    description:
      'A mobile-first tender management app that helps users discover and track government tenders. Features include push notifications, document viewing, and tender status tracking.',
    tags: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    image:
      'https://cdn.dribbble.com/userupload/25350598/file/original-245c5064a7874a3a7d8045c00145fe96.png?format=webp&resize=400x300&vertical=center',
    demoLink:
      'https://play.google.com/store/apps/details?id=com.cnettechnologies.tenderdetail&hl=en_IN&pli=1',
    githubLink:
      'https://play.google.com/store/apps/details?id=com.cnettechnologies.tenderdetail&hl=en_IN&pli=1',
    featured: true,
  },
  {
    id: 2,
    title: "Blog CMS",
    description:
      "A content management system for blogs with markdown support, image uploads, user roles, and SEO optimization.",
    image:
      "https://cdn.dribbble.com/userupload/4171124/file/original-345de0be93c3ac84e27f202fd13b7ee6.jpg?format=webp&resize=400x300&vertical=center",
    tags: ['React','Node.js','Express','MongoDB','Cloudinary','JWT','Material UI'],
    demoLink: "https://www.trendingnewsfeed.in/",
    githubLink: "https://github.com/ashvinupadhyay1132",
    featured: true,
  },
  {
    id: 3,
    title: 'Airbnb Clone',
    description:
      'A full-featured accommodation booking platform with property listings, user authentication, real-time booking, and secure payments. Includes image uploads and Google authentication.',
    image:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/a1814a112355529.603d82c702de5.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'Shadcn', 'JWT', 'Cloudinary', 'Google Auth'],
    demoLink: 'https://ease-nest.netlify.app/login',
    githubLink: 'https://ease-nest.netlify.app/login',
    // featured: true,
  },
  {
    id: 4,
    title: 'EasyCV - Resume Maker',
    description:
      'A modern resume builder with customizable templates, real-time preview, and PDF export. Create professional, ATS-friendly CVs with multiple themes.',
    image:
      'https://images01.nicepagecdn.com/page/15/45/website-design-preview-154534.jpg',
    tags: ['React','Redux','HTML','CSS','JavaScript'],
    demoLink: 'https://testanalytics-5e6e3.web.app/',
    githubLink: 'https://github.com/ashvinupadhyay1132/Resume-Builder',
    // featured: true,
  },
  {
    id: 5,
    title: 'Job Hunt',
    description:
      'A job portal application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application allows recruiters to create and manage the jobs, and for employers to post job listings.',
    image:
      'https://cdn.dribbble.com/users/3400958/screenshots/19338701/media/fdf7a4ba598c8b43cce9c7a2ccf67639.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Multer'],
    demoLink: 'https://mern-app-job-portal.vercel.app/',
    githubLink: 'https://mern-app-job-portal.vercel.app/',
  },
  {
    id: 6,
    title: 'Image Converter Tool',
    description:
      'A web-based tool for converting images between different formats with support for bulk conversion, resizing, and optimization. Features include drag-and-drop interface and instant preview.',
    image:
      'https://lp.simplified.com/siteimages/design/Locate-Projects-Quickly-with-Shared-Folders.png',
    tags: ['React', 'HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://image-converter-eta-eight.vercel.app/',
    githubLink: 'https://github.com/ashvinupadhyay1132/image-converter',
  },
];
