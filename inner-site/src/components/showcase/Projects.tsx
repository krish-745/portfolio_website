import React from 'react';

export interface ProjectsProps {}

interface Project {
    name: string;
    subtitle: string;
    date: string;
    stack: string;
    links: { label: string; href: string }[];
    points: string[];
}

// Add repo / demo links to each project's `links` as you publish them.
const PROJECTS: Project[] = [
    {
        name: 'Uncertain',
        subtitle: 'The uncertainty-aware programming language',
        date: 'Aug 2026 - Present',
        stack: 'Python, NumPy, Pytest, Hypothesis',
        links: [
            { label: 'GitHub', href: 'https://github.com/krish-745/Uncertain' },
            {
                label: 'PyPI package',
                href: 'https://pypi.org/project/uncertain-lang/',
            },
        ],
        points: [
            'Built Uncertain, a statically-typed DSL and compiler that catches distributional-uncertainty correlation bugs at compile time, supporting 11 statistical distributions.',
            'Implemented compile-time diagnostics for unsafe variable reuse and math-domain errors, verified with thousands of fuzz-tested inputs and Monte Carlo cross-validation.',
            'Published as an installable PyPI package (uncertain-lang) with a CLI tool, shipping 12+ releases.',
        ],
    },
    {
        name: 'ParkSight',
        subtitle: 'Parking congestion enforcement intelligence · Flipkart Gridlock 2.0',
        date: 'Jun 2026',
        stack: 'Python, FastAPI, React.js, TypeScript, Machine Learning',
        links: [
            { label: 'GitHub', href: 'https://github.com/krish-745/ParkSight' },
            { label: 'Live site', href: 'https://park-sight.pages.dev/' },
        ],
        points: [
            'Architected an AI-powered traffic analytics platform that analyzes 298,000+ traffic and violation records, with predictive hotspot detection and geospatial analysis.',
            'Developed graph-based route optimization and patrol simulation modules to improve enforcement efficiency and resource allocation across urban road networks.',
            'Created interactive dashboards for traffic heatmaps, offender tracking, station-level monitoring and historical trends.',
        ],
    },
    {
        name: 'Feather',
        subtitle: 'The AI editor of 2030 · Inter IIT Tech Meet 14.0',
        date: 'Nov 2025 - Dec 2025',
        stack: 'Python, SDXL, AutoGen, OpenRouter, OpenCV, FastAPI, Modal',
        links: [
            { label: 'GitHub', href: 'https://github.com/6sLOGAN78/feather' },
            {
                label: 'Documentation',
                href: 'https://drive.google.com/drive/folders/1bl_HStMoYmlm8pv0uyO7EasVRcavw9Sn?usp=sharing',
            },
        ],
        points: [
            'Architected a human-in-the-loop AI editing system combining LLM-based intent understanding with diffusion-based image transformation within a 12 GB VRAM limit.',
            'Programmed Smart Adjust, a vision-language feedback loop that turns high-level intent (mood, lighting, tone) into deterministic edits across 25+ custom OpenCV filters.',
            'Built Match Art Style, AutoGen-orchestrated conversations between an artist-persona LLM and an SDXL agent, grounded with RAG over art-historical documents.',
        ],
    },
    {
        name: 'Ingres',
        subtitle: 'AI virtual assistant for groundwater data · Smart India Hackathon 2025',
        date: 'Oct 2025 - Nov 2025',
        stack: 'Gemini Flash, Node.js, Express, ChromaDB, PostgreSQL, React.js, Chart.js',
        links: [
            { label: 'GitHub', href: 'https://github.com/krish-745/Ingres' },
            { label: 'Live site', href: 'https://ingres-sih.vercel.app/' },
        ],
        points: [
            'Engineered a Text-to-SQL pipeline backed by RAG over 768-dimensional embeddings to turn complex questions into executable SQL.',
            'Added multilingual query support across 12 languages for regional stakeholders.',
            'Turned raw SQL output into readable summaries, tables and charts for planners and policymakers.',
        ],
    },
];

const Projects: React.FC<ProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Projects</h1>
            <h3>Things I've built</h3>
            <br />
            <p>
                A few of the projects I'm proudest of, from compilers to
                multi-agent AI systems. More of my work is on{' '}
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/krish-745"
                >
                    GitHub
                </a>
                .
            </p>
            <br />
            {PROJECTS.map((project) => (
                <div key={project.name} style={styles.project}>
                    <div style={styles.headerRow}>
                        <h2>{project.name}</h2>
                        <b>
                            <p>{project.date}</p>
                        </b>
                    </div>
                    <h3 style={styles.subtitle}>{project.subtitle}</h3>
                    <p style={styles.stack}>
                        <b>Stack:</b> {project.stack}
                    </p>
                    <div className="text-block">
                        <ul>
                            {project.points.map((point, i) => (
                                <li key={i}>
                                    <p>{point}</p>
                                </li>
                            ))}
                        </ul>
                        {project.links.length > 0 && (
                            <p style={styles.links}>
                                {project.links.map((link, i) => (
                                    <React.Fragment key={link.href}>
                                        {i > 0 && ' · '}
                                        <a
                                            rel="noreferrer"
                                            target="_blank"
                                            href={link.href}
                                        >
                                            {link.label}
                                        </a>
                                    </React.Fragment>
                                ))}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

const styles: StyleSheetCSS = {
    project: {
        flexDirection: 'column',
        width: '100%',
        marginBottom: 16,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        width: '100%',
    },
    subtitle: {
        marginTop: 4,
        marginBottom: 8,
    },
    stack: {
        marginBottom: 8,
    },
    links: {
        marginTop: 8,
    },
};

export default Projects;
