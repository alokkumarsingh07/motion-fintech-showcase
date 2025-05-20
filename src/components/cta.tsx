
"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/hero-highlight";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-fintech-purple/10 to-fintech-indigo/10 dark:from-fintech-purple/20 dark:to-fintech-indigo/20"></div>
      
      <div className="container relative mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Ready to transform your <Highlight>financial future</Highlight>?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Join thousands of satisfied customers who have taken control of their finances with Finova's powerful tools.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button size="lg" className="bg-gradient-to-r from-fintech-purple to-fintech-indigo hover:opacity-90 px-8 py-6 text-lg">
            Get Started Now
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
            Schedule a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
