import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-secondary-foreground font-medium text-lg mb-4">
                        Hello, I'm <span className="text-primary">Muhammad Aazim Hasher</span>
                    </h2>
                    <h1 className="text-2xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent leading-tight">
                        BSc(Hons) Computer Science <br /> <a href="https://www.manchester.ac.uk/" target="_blank" className="hover:text-purple-400">University of Manchester</a>
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                        Aspiring Software Engineer passionate about building scalable web applications and exploring AI & Machine Learning to solve complex problems.                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#projects"><button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:bg-blue-600 transition-colors flex items-center gap-2">
                            View Projects <ArrowRight size={20} />
                        </button></a>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1fdyh1MDSVew0j29RU2eueFDJu_g8GqoH"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            <button className="px-6 py-3 border border-border text-foreground font-medium rounded-full rounded-full hover:bg-secondary/50 transition-colors flex items-center gap-2">
                                Download CV <Download size={20} />
                            </button>
                        </a>

                    </div>
                </motion.div>

                {/* Avatar / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />
                        <div className="absolute inset-4 bg-gray-900 rounded-full border-2 border-slate-800 flex items-center justify-center overflow-hidden">
                            {/* Placeholder Image */}
                            <img
                                src="src\assets\profile.jpg"
                                alt="Profile"
                                className="w-full h-full object-cover object-[100%_50%]"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
