import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Accenture</h1>
                        <h4>Incoming</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Elite Technology Engineer Intern</h3>
                        <b>
                            <p>Summer 2027</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Joining Accenture as an Elite Technology Engineer Intern in
                    summer 2027{' '}:)
                </p>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>GreyLabs AI</h1>
                        <h4>Bengaluru, India</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Summer Intern - Engineering</h3>
                        <b>
                            <p>May 2026 - Jul 2026</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Worked on LLM-powered voice agents and conversation
                    analytics for clients in banking, financial services and
                    insurance (BFSI).
                </p>
                <br />
                <p>
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://drive.google.com/file/d/1GmmcUgugMrdqktB-g3l8duBwcRH9xlI-/view?usp=sharing"
                    >
                        Internship completion certificate
                    </a>
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Designed and optimized prompt pipelines for voice
                            agents across BFSI workflows, including KYC
                            completion, collections and customer onboarding.
                        </p>
                    </li>
                    <li>
                        <p>
                            Improved AI audit accuracy by 30%+ by refining
                            evaluation prompts, defining robust assessment
                            criteria and validating outputs against manual
                            auditor reviews.
                        </p>
                    </li>
                    <li>
                        <p>
                            Analyzed 1,000+ customer interactions to identify
                            prompt failures, conversation bottlenecks and
                            optimization opportunities for AI agents.
                        </p>
                    </li>
                    <li>
                        <p>
                            Tailored voice-agent and conversation-analytics
                            workflows to client-specific business objectives,
                            compliance requirements and operational processes.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
};

export default Experience;
