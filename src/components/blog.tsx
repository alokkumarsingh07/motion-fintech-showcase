
"use client";
import { motion } from "motion/react";
import PointerHighlightDemo from "@/components/pointer-highlight-demo";

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-white dark:bg-fintech-dark-purple/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            ExpSave Blog
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Insights and strategies to help you maximize savings and build financial security
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <PointerHighlightDemo />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <button className="px-6 py-3 rounded-lg bg-fintech-indigo text-white hover:bg-fintech-indigo/90 transition-colors">
            View All Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
}
