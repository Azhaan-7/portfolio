export const site = {
  name: "Azhaanul Haque Farooqui",
  location: "Melbourne, Australia",
  github: "https://github.com/Azhaan-7",
  degree: "Bachelor of Software Engineering (Professional)",
  university: "RMIT University",
};

export const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Engineering", href: "/#engineering" },
  { label: "About", href: "/#about" },
];

export interface CaseSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: { title: string; text: string }[];
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  status: "Completed" | "In progress";
  teamSize?: number;
  summary: string;
  technologies: string[];
  detail: boolean;
  liveUrl?: string;
  repositoryUrl?: string;
  sections: CaseSection[];
}

export const projects: Project[] = [
  {
    slug: "venue-vendors",
    title: "Venue Vendors",
    category: "Full-stack / Multi-surface system",
    status: "Completed",
    teamSize: 2,
    detail: true,
    summary:
      "A venue-hiring system with separate hirer/vendor and administrative surfaces. REST and GraphQL connect the workflows to a shared relational database hosted on Azure SQL.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Chakra UI",
      "Node.js",
      "Express",
      "TypeORM",
      "SQL Server",
      "Azure SQL",
      "GraphQL",
      "Apollo Client",
      "Apollo Server",
      "Axios",
      "Jest",
      "React Testing Library",
      "Argon2id",
    ],
    sections: [
      {
        id: "workflows",
        title: "From finding a venue to managing a booking.",
        paragraphs: [
          "The main application serves hirers and vendors, while a separate administration application handles venue management and reporting. The system was developed as a two-person university team project.",
        ],
        items: [
          {
            title: "Hirer workflows",
            text: "Browse and compare venues, rank preferences, maintain a profile, and submit or save event applications with date, time, duration and guest requirements.",
          },
          {
            title: "Vendor workflows",
            text: "Review applications, approve or reject requests, and manage blocked periods and venue availability.",
          },
          {
            title: "Administration",
            text: "Query venues and vendors; create, update and delete venues; assign vendors; manage featured-venue state; and access administrative reports.",
          },
        ],
      },
      {
        id: "implementation",
        title: "Two surfaces. Two API paths.",
        items: [
          {
            title: "The main application",
            text: "Next.js 16, React 19, TypeScript and Chakra UI form the frontend. An Axios instance uses NEXT_PUBLIC_API_URL to call Express REST endpoints beneath /api.",
          },
          {
            title: "The administrative application",
            text: "A separate Next.js and React frontend uses Apollo Client. Its queries and mutations reach Apollo Server on Express at /graphql.",
          },
          {
            title: "REST workflow coverage",
            text: "Endpoints cover signup/signin, profiles, venues, applications, drafts, blocked periods, hire history and hirer documents. Validation is implemented on both the frontend and backend.",
          },
        ],
      },
      {
        id: "data",
        title: "A relational domain behind the workflows.",
        paragraphs: [
          "Both backends use TypeORM with a shared Azure SQL database. Their entity models cover users, profiles, venues, applications, venue preferences, drafts, blocked periods and hire history, alongside comments, reviews and document entities.",

          "The REST and GraphQL backends persist the same application domain in Azure SQL while maintaining separate TypeORM entity and data-source definitions. Database connection settings and credentials are supplied through environment variables.",
        ],
      },
      {
        id: "validation",
        title: "Validation, credentials and tests.",
        items: [
          {
            title: "Registration and sign-in",
            text: "Registration hashes passwords using Argon2id, while sign-in validates submitted credentials server-side. User and role data is persisted in Azure SQL. The main application stores signed-in identity in localStorage; this is simplified session handling, not production-grade authentication or authorization.",
          },
          {
            title: "Automated frontend tests",
            text: "Jest and React Testing Library cover application history, the ranking list and profile validation. This is component and frontend validation testing, not comprehensive frontend/backend coverage.",
          },
        ],
      },
      {
        id: "delivery",
        title: "Deployment experience.",
        paragraphs: [
          "Previously deployed using Render; the current live deployment is unavailable.",
          "The project README records deployments for the main frontend, main backend, admin frontend and admin backend. The cause of the current deployment unavailability has not been verified.",
        ],
      },
      {
        id: "limitations",
        title: "Where the system could go next.",
        paragraphs: [
          "The coursework implementation establishes the workflows and application boundaries. A production iteration would need further work in these areas.",
        ],
        items: [
          {
            title: "A single source for the domain model",
            text: "The REST and GraphQL backends duplicate TypeORM entity definitions. Sharing that model would reduce maintenance overhead and schema-drift risk.",
          },
          {
            title: "Controlled schema changes",
            text: "The current configuration uses synchronize: true. A production system would need controlled database migrations.",
          },
          {
            title: "Session and authorization design",
            text: "Server-managed authentication and authorization would need to replace the simplified identity handling. Admin sign-in is client-side coursework functionality.",
          },
          {
            title: "Broader verification",
            text: "Backend and integration tests would extend the existing frontend tests. Deployment logs would need inspection before diagnosing or repairing the unavailable live services.",
          },
        ],
      },
    ],
  },
  {
    slug: "australian-climate-data-explorer",
    title: "Australian Climate Data Explorer",
    category: "Backend / Relational data",
    status: "Completed",
    teamSize: 3,
    detail: true,
    liveUrl: "https://australian-climate-data-explorer.onrender.com",
    repositoryUrl: "https://github.com/Azhaan-7/Australian-Climate-Data-Explorer",
    summary:
      "A web application for exploring Australian Bureau of Meteorology climate data through station filters, relational queries, similarity analysis and CSV exports.",
    technologies: ["Java", "Javalin", "SQLite", "JDBC", "SQL", "HTML", "CSS"],
    sections: [
      {
        id: "exploration",
        title: "A more focused way to explore climate data.",
        paragraphs: [
          "Built as a three-person university team project, the application lets users narrow weather-station records, sort the results and compare changes across date ranges.",
        ],
        items: [
          {
            title: "Choose the records",
            text: "Filter weather stations by state, latitude range and climate metric.",
          },
          {
            title: "Read the results",
            text: "User-controlled sorting and dynamic result tables make the filtered records easier to examine.",
          },
          {
            title: "Take the results further",
            text: "Export filtered results and similarity-analysis results as CSV files.",
          },
        ],
      },
      {
        id: "processing",
        title: "The engineering is in the data.",
        paragraphs: [
          "Java and Javalin support the web application, with SQLite persistence and JDBC/SQL queries for relational data processing. HTML and CSS provide the interface.",
        ],
        items: [
          {
            title: "Relational aggregation",
            text: "JDBC/SQL aggregation brings climate and location data together for the requested result set.",
          },
          {
            title: "Station similarity",
            text: "Similarity analysis compares stations across different date ranges using percentage change.",
          },
          {
            title: "Exportable results",
            text: "CSV export supports both filtered records and the results of similarity analysis.",
          },
        ],
      },
    ],
  },
  {
    slug: "community-eats",
    title: "CommunityEats",
    category: "Backend / Full-stack system",
    status: "In progress",
    teamSize: 6,
    detail: false,
    summary:
      "An ongoing role-based meal marketplace built with Spring Boot, Spring Security, JDBC and Thymeleaf, with database migrations, automated testing and continuous integration.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JDBC",
      "Thymeleaf",
      "H2",
      "Flyway",
      "Maven",
      "GitHub Actions",
    ],
    sections: [],
  },
];

export interface PracticeItem {
  title: string;
  description: string;
  evidence: string;
  slug?: string;
  technologies: string;
}

export const practice: PracticeItem[] = [
  {
    title: "Application architecture",
    description:
      "Separate user-facing and administrative applications connect through REST and GraphQL APIs over a shared relational domain in Venue Vendors.",
    evidence: "Venue Vendors",
    slug: "venue-vendors",
    technologies: "Next.js · Express · GraphQL · TypeORM",
  },
  {
    title: "Backend & security",
    description:
      "Ongoing development of database-backed authentication and role-aware application behaviour using Spring Boot, Spring Security, JDBC and Flyway.",
    evidence: "CommunityEats · Ongoing",
    technologies: "Spring Boot · Spring Security · JDBC · Flyway",
  },
  {
    title: "Data & persistence",
    description:
      "Azure SQL and TypeORM support the shared Venue Vendors domain, while the Climate Data Explorer uses SQLite, JDBC and SQL for relational querying and aggregation.",
    evidence: "Venue Vendors",
    slug: "venue-vendors",
    technologies: "Azure SQL · SQL Server · TypeORM · SQLite · JDBC",
  },
  {
    title: "Testing & CI",
    description:
      "Automated testing spans backend authentication and application layers in CommunityEats and frontend component behaviour in Venue Vendors, with GitHub Actions running the CommunityEats Maven test suite.",
    evidence: "CommunityEats · Ongoing",
    technologies:
      "Spring Boot testing · Jest · React Testing Library · GitHub Actions",
  },
  {
    title: "Frontend engineering",
    description:
      "React and Next.js application surfaces with TypeScript, Chakra UI forms and frontend validation across hirer and vendor workflows.",
    evidence: "Venue Vendors",
    slug: "venue-vendors",
    technologies: "React · Next.js · TypeScript · Chakra UI",
  },
];

export interface ArchitectureLane {
  id: string;
  audience: string;
  application: string;
  client: string;
  protocol: string;
  api: string;
  endpoint: string;
  description: string;
}

export const venueArchitecture: ArchitectureLane[] = [
  {
    id: "main",
    audience: "Hirers & vendors",
    application: "Main application",
    client: "Axios",
    protocol: "REST",
    api: "Express",
    endpoint: "/api",
    description:
      "The main Next.js / React application sends REST requests through Axios to Express. It supports profiles, venue discovery, ranked preferences, applications, drafts and vendor workflows.",
  },
  {
    id: "admin",
    audience: "Administrators",
    application: "Admin application",
    client: "Apollo Client",
    protocol: "GraphQL",
    api: "Apollo Server",
    endpoint: "/graphql",
    description:
      "The separate Next.js / React admin application uses Apollo Client to reach Apollo Server on Express. Queries and mutations support venue management, vendor assignment, featured venues and reports.",
  },
];
