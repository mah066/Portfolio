import React from "react";
import { SectionWrapper } from "./SectionWrapper";

export const Skills = () => {
    const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "JavaFX",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "Flask",
      "SQL",
      "MongoDB",
      "Oracle Database",
    ],
  },
  {
    title: "AI, ML & Data",
    skills: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "BoTorch",
      "Bayesian Optimization",
      "Data Visualization (Plotly, Altair)",
      "Jupyter Notebook",
      "ML Compilers (TVM – Intro)",
    ],
  },
  {
    title: "Systems & Programming",
    skills: [
      "C",
      "C++",
      "C#",
      "Java",
      "Python",
      "PHP",
      "RISC-V",
      "Verilog",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git & GitHub",
      "Docker",
      "AWS (Basics)",
      "Linux",
      "CI/CD",
      "Vite",
      "Unity",
    ],
  },
];

    return (
        <SectionWrapper id="skills" className="bg-secondary/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>

            <div className="space-y-12">
                {skillCategories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">{category.title}</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {category.skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-background border border-border px-5 py-3 rounded-xl font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};
