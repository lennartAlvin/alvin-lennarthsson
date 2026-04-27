export const site = {
  name: 'Alvin Lennarthsson',
  title: 'Software developer',
  heroTagline:
    'Practical experience building and maintaining production-grade systems end to end — APIs, authentication, deployment, and the parts people actually click.',
  heroLead:
    'I like owning a problem for real: understanding why it works the way it does, then improving it so it still makes sense six months later.',

  about: [
    'I am a software developer with hands-on experience across the full chain — from API design and security to shipping and user experience. I am happiest when I can take responsibility for an outcome, not just a ticket.',
    'I learn by building, reading, and asking direct questions. When something breaks, I chase the root cause instead of papering over it.',
    'I hold a Bachelor’s degree in Information Systems from University of Borås (2024), with coursework in databases, testing, OOP, systems analysis, and architecture — alongside the Naturvetenskapsprogrammet from Alströmergymnasiet (2020).',
  ],

  strengths: [
    {
      title: 'End-to-end delivery',
      body: 'Comfortable moving between backend services, integration points, deployment, and client-side work when the problem needs it.',
    },
    {
      title: 'Security-minded builds',
      body: 'Experience with Azure AD B2C, JWT and cookie flows, role- and claims-based access, and keeping protected APIs consistent.',
    },
    {
      title: 'Distributed and data-heavy backends',
      body: 'Building reliable features with ASP.NET Core, Entity Framework Core, SQL Server and SQLite, and Microsoft Orleans where stateful scale matters.',
    },
    {
      title: 'Payments in production',
      body: 'Stripe flows including checkout, billing portal, webhooks, and subscription changes — with an eye on edge cases.',
    },
    {
      title: 'Desktop and UX detail',
      body: 'WinUI and MVVM work on a real desktop client: features, troubleshooting, and improvements people feel in daily use.',
    },
    {
      title: 'Tests that earn their place',
      body: 'xUnit, Moq, and AutoFixture for unit and integration coverage where they protect regressions and tricky logic.',
    },
  ],

  tools: [
    'C#',
    'SQL',
    'TypeScript',
    'JavaScript',
    'Python',
    '.NET / ASP.NET Core',
    'Entity Framework Core',
    'WinUI',
    'Microsoft Orleans',
    'Azure AD B2C',
    'Azure & Application Insights',
    'Azure DevOps & Pipelines',
    'Stripe',
    'Redis',
    'React',
    'Git',
    'Docker',
    'Railway',
    'Vercel',
    'xUnit · Moq · AutoFixture',
  ],

  contact: {
    email: 'alvin.lennarthsson@gmail.com',
    emailHref: 'mailto:alvin.lennarthsson@gmail.com',
    phone: '073-826 44 29',
    phoneHref: 'tel:+46738264429',
    githubLabel: 'GitHub',
    githubHref: 'https://github.com/lennartAlvin',
    linkedinLabel: 'LinkedIn',
    linkedinHref: 'https://www.linkedin.com/in/alvin-lennarthsson',
    closing:
      'If you want to talk about a role, a stack problem, or a side project, send a message — no hard sell, just a normal conversation.',
  },
} as const;

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'tools', label: 'Tools' },
  { id: 'contact', label: 'Contact' },
] as const;
