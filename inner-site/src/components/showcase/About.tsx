import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import meAndDad from '../../assets/pictures/me-and-dad.jpeg';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>Hey, I'm Krish!</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a junior at IIT Patna studying Electronics and
                    Communication Engineering, but most of my time goes into
                    building software: LLM systems, compilers, data tools, and
                    whatever else catches my eye.
                </p>
                <br />
                <p>
                    Thanks for stopping by! Poke around, open a few projects,
                    and if you want to chat, drop me a message through{' '}
                    <Link to="/contact">this form</Link> or email me at{' '}
                    <a href="mailto:krishgoyal745@gmail.com">
                        krishgoyal745@gmail.com
                    </a>
                    .
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>How it started</h3>
                <br />
                <p>
                    My dad is a software engineer, and for as long as I can
                    remember I've said I wanted to do what he does. Kid me was
                    pretty sure about it, and kid me turned out to be right.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={meAndDad}
                        style={styles.image}
                        alt="Young Krish with his dad under a cherry blossom tree"
                    />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Little me and my dad, under the
                            cherry blossoms
                        </sub>
                    </p>
                </div>
                <br />
                <h3>Where I'm at now</h3>
                <br />
                <p>
                    I grew up in Mumbai, spent two years of junior college
                    grinding for JEE, cleared JEE Advanced in 2024 and packed
                    my bags for IIT Patna. Most of what I've learned since has
                    come from building things, whether for an internship, a
                    hackathon or just because an idea wouldn't leave me alone.
                </p>
                <br />
                <p>
                    This past summer I interned at GreyLabs AI, building AI
                    voice agents and learning how much the smallest details
                    shape an agent's behavior. I'm taking that lesson with me
                    to Accenture next summer, where I'll be joining as an Elite
                    Technology Engineer Intern.
                </p>
                <br />
                <p>
                    On campus I help run NJACK, our coding club, as a
                    Development & Open-Source Coordinator, and I'm the Web
                    Development & Tech Head at E-Cell IIT Patna.
                </p>
                <br />
                <p>
                    Outside of internships and classes, a lot of my time goes
                    into competitive programming and hackathons. You can find
                    the highlights, along with what I work with, on the{' '}
                    <Link to="/skills">skills & achievements</Link> page.
                </p>
                <br />
                <h3>When I'm not coding</h3>
                <br />
                <p>
                    You'll probably find me watching football or cricket, or
                    playing video games, and there's almost always music
                    playing in the background, whether I'm coding or just
                    winding down. I'm also a bit of an aviation nerd. Even if
                    it's just tracking planes on my phone, I love keeping up
                    with what's in the sky.
                </p>
                <br />
                <p>
                    I also won best speaker at Mumbai Toastmasters, and I've
                    volunteered with Seva Sahayog Foundation teaching
                    underprivileged children.
                </p>
                <br />
                <p>
                    Thanks for reading! If you want to talk about projects, sport,
                    music or planes, you know where to{' '}
                    <Link to="/contact">find me</Link>.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        height: 'auto',
        width: '100%',
    },
};

export default About;
