import React from 'react';

export interface SkillsProps {}

interface Item {
    label: string;
    text: string;
}

const SKILLS: Item[] = [
    {
        label: 'Languages',
        text: 'C, C++, Java, Python, JavaScript, TypeScript, MySQL',
    },
    {
        label: 'Frameworks',
        text: 'React.js, Node.js, Express, FastAPI, Spring Boot',
    },
    {
        label: 'Data & tools',
        text: 'PostgreSQL, ChromaDB, Git, Postman, Redis',
    },
    {
        label: 'Fundamentals',
        text: 'Data Structures & Algorithms, Object-Oriented Programming',
    },
    {
        label: 'Soft Skills',
        text: 'Leadership, Event Management, Teamwork, Public Speaking, Time Management',
    },
];

const ACHIEVEMENTS: Item[] = [
    {
        label: 'Inter IIT Tech Meet 14.0',
        text: 'Represented IIT Patna and placed 8th of 23 IITs in the Adobe problem statement',
    },
    {
        label: 'AlgoUtsav 2026',
        text: 'Ranked 28th of 2,500+ teams and qualified for the offline round',
    },
    {
        label: 'Droidrun DevSprint 2026',
        text: 'Finalist, top 20 of 1,100+ teams',
    },
    {
        label: 'Flipkart Gridlock 2.0',
        text: 'Semi-finalist, top 1,600 of 35,000+ teams',
    },
    {
        label: 'Flipkart Grid 8.0',
        text: 'Semi-finalist among 1,65,000+ participants',
    },
    {
        label: 'CodeChef Starters 218 (Div. 4)',
        text: 'Global rank 132 among 18,000+ participants',
    },
    {
        label: 'Codeforces',
        text: 'Specialist (max rating 1458), with 1,000+ problems solved across platforms',
    },
    {
        label: 'Google Student Upskilling Launchpad',
        text: 'Completed the program in July 2025',
    },
    {
        label: 'JEE Advanced 2024',
        text: 'Secured AIR 5098 among 180,000+ candidates',
    },
];

const ItemList: React.FC<{ items: Item[] }> = ({ items }) => (
    <ul style={styles.list}>
        {items.map((item) => (
            <li key={item.label}>
                <p>
                    <b>{item.label}:</b> {item.text}
                </p>
            </li>
        ))}
    </ul>
);

const Skills: React.FC<SkillsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Skills & Achievements</h1>
            <h3>What I work with, and where it's taken me</h3>
            <br />
            <div className="text-block">
                <h2>Skills</h2>
                <br />
                <ItemList items={SKILLS} />
                <br />
                <h2>Achievements</h2>
                <br />
                <ItemList items={ACHIEVEMENTS} />
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    list: {
        flexDirection: 'column',
        textAlign: 'left',
    },
};

export default Skills;
