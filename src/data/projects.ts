export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  highlights: string[];
  tech: string;
  /** Public repo or profile; omit when the work is private. */
  githubUrl?: string;
  /** Live app URL; omit if not public. */
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'gamelimiter',
    title: 'GameLimiter',
    category: 'Desktop application · production',
    description:
      'A full product stack at WIS, Mölndal: ASP.NET Core / .NET backend and a WinUI desktop client used in real environments.',
    problem:
      'Shows how I work on a live system — security, payments, distributed logic, data, telemetry, and desktop UX together.',
    highlights: [
      'Authentication and authorization with Azure AD B2C, JWT, cookies, roles, and claims-aware APIs.',
      'Stateful backend features with Microsoft Orleans alongside EF Core and SQL Server / SQLite.',
      'Stripe checkout, billing portal, webhooks, and subscription changes with careful edge-case handling.',
      'Azure hosting, Application Insights, middleware, rate limiting, and CI/CD through Azure Pipelines.',
      'Unit and integration tests (xUnit) plus ongoing work in WinUI / MVVM on the client.',
    ],
    tech: 'C#, .NET, ASP.NET Core, WinUI, Orleans, EF Core, Azure AD B2C, Stripe, Azure, xUnit',
    // Employer product — link out only when you have a public page or repo you are allowed to share.
  },
  {
    id: 'klunkgolf',
    title: 'KlunkGolf quiz',
    category: 'Web application · personal project',
    description:
      'A self-built realtime multiplayer quiz: players join a shared lobby with a PIN and play together in the browser.',
    problem:
      'Demonstrates a full-stack loop I own end to end — React and TypeScript on the client, SignalR and ASP.NET Core on the server, and real deploys.',
    highlights: [
      'React and TypeScript frontend focused on responsive layout, clear flows, and live updates.',
      'ASP.NET Core backend with SignalR for lobby state, game control, scoring, and a live scoreboard.',
      'Hosted with Vercel and Railway, with Docker and GitHub Actions in the delivery path.',
    ],
    tech: 'React, TypeScript, ASP.NET Core, SignalR, Docker, GitHub Actions, Vercel, Railway',
    githubUrl: 'https://github.com/lennartAlvin',
    // Replace with your KlunkGolf repo URL when it is public; add demoUrl when the live app has a stable link.
  },
  {
    id: 'booking-system',
    title: 'Booking system (team project)',
    category: 'Web application · academic',
    description:
      'A Scrum-style team project from requirements through implementation and testing — booking flows and core system quality.',
    problem:
      'Highlights collaboration: requirements analysis, documentation, implementation, and QA on central parts of the system.',
    highlights: [
      'Worked in sprints with shared ownership from ideation to testable increments.',
      'Contributed to analysis, written specs, and hardened core modules others relied on.',
    ],
    tech: 'Team delivery, Scrum, .NET ecosystem (project stack per course)',
  },
];
