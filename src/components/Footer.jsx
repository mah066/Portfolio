import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-background border-t border-border py-8 mt-20">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
                <p className="text-muted-foreground">
                    © {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS.
                </p>
            </div>
        </footer>
    );
};
