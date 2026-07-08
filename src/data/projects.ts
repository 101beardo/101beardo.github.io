export interface CaseStudy {
  overview: string;
  challenge: string;
  approach: string;
  result: string;
}

export interface Project {
  slug: string;
  title: string;
  image: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  caseStudy: CaseStudy;
}

export const projectsData: Project[] = [
  {
    slug: 'scottsdale-violin-studio',
    title: 'Scottsdale Violin Studio',
    image: '/assets/scottsdale_violin_studio.png',
    description: 'Modern website built with React and Next.js featuring responsive layouts, frontend optimizations, and scalable component-driven architecture.',
    techStack: ['React', 'Next.js', 'CSS', 'JavaScript'],
    liveLink: 'https://scottsdaleviolinstudio.com/',
    githubLink: 'https://github.com/101beardo',
    caseStudy: {
      overview: 'A marketing and enrollment site for a violin teaching studio, rebuilt to load faster and read cleanly on any device.',
      challenge: 'The client needed a fast, credible online presence that could rank well locally and convert visitors into trial-lesson bookings, without an expensive custom CMS.',
      approach: 'Built the site with Next.js for automatic code-splitting and fast page loads, structured UI into small reusable components for lessons, pricing, and instructor bios, and tuned layouts for mobile-first responsiveness across breakpoints.',
      result: 'Shipped a production-ready, scalable site with a component-driven architecture that the client can extend with new pages or programs without a rebuild.',
    },
  },
  {
    slug: 'celebration-strings',
    title: 'Celebration Strings',
    image: '/assets/celebration_strings.jpg',
    description: 'Professional business website focused on performance, accessibility, responsive design, and user experience; built reusable UI components and delivered stakeholder-driven features.',
    techStack: ['React', 'CSS', 'JavaScript'],
    liveLink: 'https://celebrationstrings.com/',
    githubLink: 'https://github.com/101beardo',
    caseStudy: {
      overview: 'A business website for a live-music ensemble, designed around clear service listings and an accessible booking-inquiry flow.',
      challenge: 'The stakeholder wanted an accessible, professional-looking site that non-technical staff could reason about, with performance that held up on mobile networks at events.',
      approach: 'Prioritized semantic HTML and accessible component patterns, kept the bundle lean with a reusable component library, and iterated directly with the stakeholder on feature requests sprint over sprint.',
      result: 'Delivered a performant, accessible site that met every stakeholder-requested feature while staying maintainable for future content updates.',
    },
  },
  {
    slug: 'danica-terzic',
    title: 'Danica Terzic',
    image: '/assets/danica_terzic.png',
    description: 'Production-ready performer website using Next.js and Material UI with responsive design, SEO optimization, image optimization, contact workflows, deployment, and domain configuration.',
    techStack: ['Next.js', 'Material UI', 'React', 'JavaScript'],
    liveLink: 'https://danicaterzic.com/',
    githubLink: 'https://github.com/101beardo',
    caseStudy: {
      overview: 'A performer portfolio site taken from scratch through production, including SEO, image handling, and full domain deployment.',
      challenge: 'The performer needed to be discoverable in search results and present a polished visual portfolio, while keeping page weight low for image-heavy pages.',
      approach: 'Used Next.js with Material UI for a consistent design system, optimized images and metadata for SEO, built a contact workflow for booking inquiries, and handled the full deployment and custom domain configuration end-to-end.',
      result: 'Launched a fully production-ready site under the client\'s own domain, with organic search visibility and a working contact pipeline from day one.',
    },
  },
  {
    slug: 'industrybuying-clone',
    title: 'IndustryBuying Clone',
    image: 'https://user-images.githubusercontent.com/76995063/213940407-29245dc1-3e9f-4d65-b9be-9cbf56947a89.png',
    description: 'IndustryBuying is an e-commerce website made using MongoDB and Chakra UI with all CRUD operations. It is an e-commerce service in New Delhi for purchasing products by organizations for their own use or re-sell.',
    techStack: ['Chakra UI', 'React', 'Express JS', 'Mongo DB', 'NPM', 'Node JS'],
    liveLink: 'https://aesthetic-kheer-0649e3.netlify.app/',
    githubLink: 'https://github.com/martina024/screeching-egg-574',
    caseStudy: {
      overview: 'A full-stack e-commerce clone built during an immersive bootcamp, covering the complete CRUD product-catalog lifecycle.',
      challenge: 'Recreate a B2B e-commerce experience end-to-end, including a REST API and database, on a tight team deadline as a group project.',
      approach: 'Designed the MongoDB schema for products and orders, built Express REST endpoints for full CRUD, and implemented the storefront UI in React with Chakra UI for consistent, accessible components.',
      result: 'Delivered a working full-stack e-commerce app with complete create/read/update/delete flows, deployed and demoed within the bootcamp sprint deadline.',
    },
  },
  {
    slug: 'mytheresa-clone',
    title: 'MYTHERESA Clone',
    image: '/assets/mytheresa.png',
    description: 'An e-commerce website made using Redux and Chakra UI with all CRUD operations. MYTHERESA is the finest edit in luxury fashion for women, men, and kids.',
    techStack: ['Chakra UI', 'React', 'Redux', 'Git Hub'],
    liveLink: 'https://luminous-swan-cc6644.netlify.app',
    githubLink: 'https://github.com/101beardo/goofy-shock-9631',
    caseStudy: {
      overview: 'A luxury-fashion e-commerce clone focused on global state management across a multi-page shopping flow.',
      challenge: 'Cart, wishlist, and filter state needed to stay in sync across many pages without prop-drilling through deeply nested product components.',
      approach: 'Centralized shopping state in Redux with normalized slices for cart and product data, and built the UI with Chakra UI for rapid, accessible styling.',
      result: 'Produced a smooth, consistent shopping experience across pages, reinforcing practical Redux architecture skills beyond local component state.',
    },
  },
  {
    slug: 'greenhouse-io-clone',
    title: 'Greenhouse.io Clone',
    image: '/assets/greenhouse.io.png',
    description: "Greenhouse's applicant tracking system and recruiting software is designed to help make companies great at hiring and hire for what's next.",
    techStack: ['HTML', 'CSS', 'JavaScript', 'Git Hub'],
    liveLink: 'https://taupe-lokum-022b8a.netlify.app/',
    githubLink: 'https://github.com/Dhanraj4198/cuddly-smoke-9747',
    caseStudy: {
      overview: 'A pixel-level recreation of an applicant-tracking-system marketing site, built with vanilla HTML/CSS/JS.',
      challenge: 'Match a polished, modern marketing site\'s layout and interactions precisely without a component framework.',
      approach: 'Broke the design into reusable CSS patterns (grid/flex layouts, hover states, responsive breakpoints) and used vanilla JavaScript for interactive elements like navigation and accordions.',
      result: 'Reinforced core CSS layout fundamentals and attention to visual detail that carried directly into later component-framework work.',
    },
  },
  {
    slug: 'tripoto-clone',
    title: 'Tripoto Clone',
    image: '/assets/tripoto.png',
    description: 'Tripoto is a travelogue platform. Its web and app-based platforms enable travellers to connect with each other, write and share travelogues, discover destinations, publish trips, book hotels, and plan trips.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'Git Hub'],
    liveLink: 'https://lively-hotteok-119124.netlify.app/',
    githubLink: 'https://github.com/jkumari25/glistening-rock-2573',
    caseStudy: {
      overview: 'A content-heavy travel-platform clone emphasizing responsive image galleries and article-style layouts.',
      challenge: 'Handle a content-dense, image-heavy layout that still needed to be responsive and fast on mobile.',
      approach: 'Used CSS Grid for gallery layouts, lazy-loaded images, and structured semantic HTML for article content to keep the page accessible and performant.',
      result: 'Built a responsive, content-rich clone that held up well across screen sizes, sharpening skills in layout composition for media-heavy pages.',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}
