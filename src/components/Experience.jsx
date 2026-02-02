import React from "react";
import { SectionWrapper } from "./SectionWrapper";

export const Experience = () => {
    const experiences = [
        {
            role: "Sales Associate",
            company: "TK Maxx",
            period: "Oct 2025 - Jan 2025",
            description: "Delivered high-quality customer service in a high-volume, fast-paced retail environment, assisting a large number of customers daily at the tills and on the shop floor",
        },
        {
            role: "IT Intern",
            company: "The Kerala Minerals and Metals Ltd.",
            period: "July 2025 - Aug 2025",
            description: "Worked with Oracle databases to maintain, query, and report operational data. Assisted in maintaining legacy systems using PowerBuilder in a production environment",
        },

    ];

    return (
        <SectionWrapper id="experience" className="bg-secondary/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Experience</h2>

            <div className="relative border-l border-border/50 ml-6 md:ml-12 space-y-12">
                {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-12">
                        {/* Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary rounded-full ring-4 ring-background" />

                        <div className="bg-background/50 border border-border/50 p-6 rounded-2xl backdrop-blur-sm hover:border-primary/50 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                    <p className="text-primary font-medium">{exp.company}</p>
                                </div>
                                <span className="text-sm text-muted-foreground mt-2 md:mt-0 bg-secondary/50 px-3 py-1 rounded-full w-fit">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};
