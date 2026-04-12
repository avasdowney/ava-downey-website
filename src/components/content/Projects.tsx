import React, { useState, type ReactElement } from 'react';

import salad_spinner from '../../images/salad_spinner.png';

// Type definitions
interface ProjectLink {
  text: string;
  url: string;
}

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images?: ProjectImage[];
  links: ProjectLink[];
}

// Style constants with proper typing
const projectsContainerStyle: React.CSSProperties = {
  minHeight: '100vh',
  padding: '4rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const projectsGridStyle: React.CSSProperties = {
  columnWidth: '320px',
  columnGap: '2rem',
  maxWidth: '1200px',
  width: '100%',
  marginTop: '2rem',
};

const projectCardBaseStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
  borderRadius: '12px',
  padding: '2rem',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  opacity: 0,
  animation: 'fadeInUp 0.6s ease forwards',
  display: 'inline-block',
  width: '96%',
  boxSizing: 'border-box',
  breakInside: 'avoid',
  marginBottom: '2rem',
  marginLeft: '0.5rem',
  marginRight: '0.5rem',
};

const tagContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1rem',
};

// Tag color configuration with const assertion for type safety
const tagColors: Record<string, { bg: string; color: string }> = {
  // Proficient Skills
  Python: { bg: '#306998', color: '#fff' },
  Terraform: { bg: '#7B3FF2', color: '#fff' },
  Lambda: { bg: '#FF9900', color: '#000' },
  Bedrock: { bg: '#FF9900', color: '#000' },
  OpenAI: { bg: '#10A37F', color: '#fff' },
  Textract: { bg: '#FF9900', color: '#000' },
  'Prompt Engineering': { bg: '#8B5CF6', color: '#fff' },
  RAG: { bg: '#6366F1', color: '#fff' },
  'Gen AI': { bg: '#5B7CFA', color: '#fff' },
  'Data Pipelines': { bg: '#14B8A6', color: '#fff' },
  'GitHub Copilot': { bg: '#010409', color: '#fff' },
  MongoDB: { bg: '#13AA52', color: '#fff' },
  Pandas: { bg: '#150458', color: '#fff' },
  Numpy: { bg: '#013243', color: '#fff' },
  Langchain: { bg: '#1C3144', color: '#fff' },
  Langgraph: { bg: '#1C3144', color: '#fff' },
  Regex: { bg: '#EC4899', color: '#fff' },
  // Working Knowledge Skills
  JavaScript: { bg: '#F7DF1E', color: '#000' },
  TypeScript: { bg: '#3178C6', color: '#fff' },
  'C#': { bg: '#239120', color: '#fff' },
  SQL: { bg: '#CC2927', color: '#fff' },
  Java: { bg: '#007396', color: '#fff' },
  FastAPI: { bg: '#009688', color: '#fff' },
  Docker: { bg: '#2496ED', color: '#fff' },
  Kubernetes: { bg: '#326CE5', color: '#fff' },
  Dynatrace: { bg: '#0066B3', color: '#fff' },
  ELK: { bg: '#005571', color: '#fff' },
  React: { bg: '#61DAFB', color: '#000' },
  Knowledgebase: { bg: '#FF6B35', color: '#fff' },
  AgentCore: { bg: '#6A4C93', color: '#fff' },
  Clojure: { bg: '#2F8F6B', color: '#fff' },
  'GitHub Actions': { bg: '#2088FF', color: '#fff' },
  // Other tags
  'In Progress': { bg: '#FFB300', color: '#000' },
} as const;

const createTagStyle = (tag: string): React.CSSProperties => ({
  backgroundColor: tagColors[tag]?.bg || '#666',
  color: tagColors[tag]?.color || '#fff',
  padding: '0.3rem 0.8rem',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: '600',
});

// Project data with proper typing
const projects: Project[] = [
  {
    id: 1,
    title: 'SolidifAI',
    description:
      'A project inspired by my need to print a fully functional mini salad spinner (which surprisingly did not already exist) and my lack of 3D modeling expertise. This project uses generative AI to create ready-to-print 3D models from natural language prompts.',
    tags: ['Python', 'Gen AI', 'Bedrock', 'Prompt Engineering', 'FastAPI', 'In Progress'],
    images: [{ src: salad_spinner, alt: 'Salad Spinner 3D Model' }],
    links: [
      { text: 'View Salad Spinner Model', url: 'https://www.thingiverse.com/thing:7201859' },
      { text: 'View Code', url: 'https://github.com/avasdowney/solidifai' },
    ],
  },
  {
    id: 2,
    title: 'Predictive Policing Thesis',
    description:
      'As an increasing number of Artificial Intelligence (AI) systems are ingrained in our day-to-day lives, it is crucial that they are fair and trustworthy. Unfortunately, this is often not the case for predictive policing systems, where there is evidence of bias towards age as well as race and sex leading to many people being mistakenly labeled as likely to be involved in a crime. In a system that already is under criticism for its unjust treatment of minority groups, it is crucial to find ways to mitigate this negative trend. In this work, we explored and evaluated the infusion of domain knowledge in the predictive policing system to minimize the prevailing fairness issues. The experimental results demonstrate an increase in fairness across all of the metrics for all of the protected classes bringing more trust into the predictive policing system by reducing the unfair policing of people.',
    tags: ['Python', 'Pandas', 'Numpy'],
    links: [
      { text: 'View Publication', url: 'https://journals.flvc.org/FLAIRS/article/view/133088' },
      { text: 'View Code', url: 'https://github.com/avasdowney/predictive_policing_thesis' },
    ],
  },
  {
    id: 3,
    title: 'Personal Website and Portfolio',
    description:
      'A personal website and portfolio built with React and styled-components. This project showcases my skills, projects, and experiences in a visually appealing way.',
    tags: ['TypeScript', 'React', 'GitHub Actions'],
    links: [
      { text: 'View Website', url: 'https://avadowney.com' },
      { text: 'View Code', url: 'https://github.com/avasdowney/avadowney.com' },
    ],
  },
  {
    id: 4,
    title: 'Dad Joke Web Scraper',
    description:
      'A project designed to help me learn the basics of Clojure. This web scraper retrieves the dad jokes off of the hot page of r/dadjokes.',
    tags: ['Clojure', 'GitHub Actions'],
    links: [{ text: 'View Code', url: 'https://github.com/avasdowney/dad-joke-scraper' }],
  },
];

function Projects(): ReactElement {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const getCardStyle = (projectId: number, index: number): React.CSSProperties => ({
    ...projectCardBaseStyle,
    animationDelay: `${index * 0.2}s`,
    transform: hoveredCard === projectId ? 'translateY(-8px)' : 'translateY(0)',
    boxShadow: hoveredCard === projectId ? '0 12px 24px rgba(0,0,0,0.3)' : '0 4px 6px rgba(0,0,0,0.1)',
  });

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>, isEntering: boolean): void => {
    const target = e.target as HTMLAnchorElement;
    target.style.color = isEntering ? '#fff' : '#00caff';
  };

  return (
    <div style={projectsContainerStyle}>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .projects-grid {
            column-width: 320px;
            column-gap: 2rem;
          }
          @media (max-width: 768px) {
            .projects-grid {
              column-count: 1;
              column-width: auto;
            }
          }
          @media (min-width: 769px) and (max-width: 1024px) {
            .projects-grid {
              column-count: 2;
            }
          }
        `}
      </style>
      <h2 className="rotateColor" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Projects
      </h2>
      <div style={projectsGridStyle} className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.id}
            style={getCardStyle(project.id, index)}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={tagContainerStyle}>
              {project.tags.map((tag, i) => (
                <span key={i} style={createTagStyle(tag)}>
                  {tag}
                </span>
              ))}
            </div>
            <h3
              style={{
                color: '#fff',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                fontWeight: '600',
              }}
            >
              {project.title}
            </h3>
            {project.images && project.images.length > 0 && (
              <div style={{ marginBottom: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
                {project.images.map((image, i) => (
                  <img
                    key={i}
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      borderRadius: '8px',
                    }}
                  />
                ))}
              </div>
            )}
            <p
              style={{
                color: '#e0e0e0',
                lineHeight: '1.6',
                marginBottom: '1.5rem',
              }}
            >
              {project.description}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-start' }}>
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    color: '#00caff',
                    textDecoration: 'none',
                    fontWeight: '600',
                    transition: 'color 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => handleLinkHover(e, true)}
                  onMouseLeave={(e) => handleLinkHover(e, false)}
                >
                  {link.text} →
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
