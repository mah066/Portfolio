import React from "react";
import { motion } from "framer-motion";

export const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <section
      id={id}
      className={`py-20 md:py-32 scroll-mt-20 md:scroll-mt-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        {children}
      </motion.div>
    </section>
  );
};
