import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { Code, BookOpen, Terminal } from "lucide-react";

export const About = () => {
    const cards = [
        {
            icon: <Code size={32} className="text-primary" />,
            title: "Software Developer",
            description:
            "Building responsive, scalable, and performant web applications using modern front-end and back-end technologies.",
        },
        {
            icon: <Terminal size={32} className="text-primary" />,
            title: "Problem Solver",
            description:
            "Enjoys breaking down complex problems, writing efficient algorithms, and crafting clean, maintainable solutions.",
        },
        {
            icon: <BookOpen size={32} className="text-primary" />,
            title: "Continuous Learner",
            description:
            "Actively learning new tools, frameworks, and concepts, with a growing interest in AI and Machine Learning.",
        },
        ];

    return (
        <SectionWrapper id="about">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                About Me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                    <p>
                    I’m a <span className="text-foreground font-medium">Computer Science student</span> with a strong passion for
                    <span className="text-foreground font-medium"> software engineering</span> and building impactful digital experiences.
                    What started as curiosity about how the web works quickly grew into a hands-on journey through full-stack development.
                    </p>

                    <p>
                    I enjoy creating <span className="text-foreground font-medium">clean, intuitive user interfaces</span> and backing them
                    with <span className="text-foreground font-medium">scalable, well-structured systems</span>. From crafting responsive
                    front-ends with React to designing efficient APIs, I focus on writing code that is both elegant and maintainable.
                    </p>

                    <p>
                    Alongside web development, I have a growing interest in
                    <span className="text-foreground font-medium"> Artificial Intelligence and Machine Learning</span>, and I’m excited by
                    the idea of building applications that combine intelligent systems with real-world usability.
                    </p>

                    <p>
                    Outside of coding, I enjoy staying up to date with emerging technologies, contributing to open-source when possible,
                    and unwinding with gaming. I’m always eager to learn, experiment, and take on new challenges.
                    </p>
                </div>



                <div className="grid grid-cols-1 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-secondary/30 border border-border/50 p-6 rounded-2xl md:hover:-translate-y-1 transition-transform duration-300">
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-muted-foreground text-sm">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
