import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
    const projects = [

        {
            title: "Thrifty Bee",
            description:
            "A university marketplace platform allowing students to buy and sell items. Built as a team project with features such as moderation, university authentication, and real-time chat.",
            tech: ["React", "Flask", "Python", "SQL", "HTML", "CSS", "JavaScript"],
            links: {
            github: "https://github.com/mah066/Thrifty-Bee",
            live: "#",
            },
            image:
            "src/assets/Thrifty.png",
        },
        {
            title: "RISC-V Processor Design",
            description:
            "Designed and implemented a functional RISC-V processor using Verilog and RISC-V assembly. Simulated instruction execution, control logic, and register file behaviour.",
            tech: ["Verilog", "RISC-V", "Computer Architecture"],
            links: {
            github: "https://github.com/mah066/MU0_Processor",
            live: null,
            },
            image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Agni Mart",
            description:
            "An e-commerce platform developed for Agni Robotics to enable farmers and rural users to buy and sell agricultural tools digitally. Led development and collaborated across design, marketing, and logistics teams.",
            tech: ["React", "Tailwind CSS", "DaisyUI"],
            links: {
            github: "https://github.com/mah066/Agni-Mart", // add repo if public
            live: "#",   // add live link if deployed
            },
            image:
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Data Science Projects",
            description:
            "A collection of data science involving data analysis, visualization using Python-based libraries.",
            tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Plotly", "Altair"],
            links: {
            github: "https://github.com/mah066/DataScience-Projects",
            live: null,
            },
            image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Database Systems Project",
            description:
            "Designed and queried relational databases with a focus on data integrity, performance, and real-world use cases, gaining hands-on experience with SQL.",
            tech: ["SQL", "PHP"],
            links: {
            github: "https://github.com/mah066/Database_Project",
            live: null,
            },
            image:
            "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=800&auto=format&fit=crop",
        },
        {
            title: "Tkinter Game",
            description:
            "Made a asteroid dodging game using the Tkinter library of Python",
            tech: ["Python", "Tkinter"],
            links: {
            github: "https://github.com/mah066/Tkinter_Game",
            live: null,
            },
            image:
            "src/assets/asteroid.png",
        },
        ];


    return (
        <SectionWrapper id="projects">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group bg-secondary/20 border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                        {/* Image */}
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs font-medium px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex space-x-4">
                                <a href={project.links.github} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                                    <Github size={20} />
                                </a>
                                <a href={project.links.live} className="text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};
