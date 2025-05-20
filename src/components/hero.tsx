
"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <HeroHighlight containerClassName="bg-gradient-to-b from-white to-gray-50 dark:from-fintech-dark-purple dark:to-black">
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-center"
          >
            <div className="text-lg md:text-xl font-medium text-fintech-blue dark:text-blue-400 mb-4">
              FINTECH FOR THE FUTURE
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-800 dark:text-white max-w-5xl leading-tight text-center mx-auto"
          >
            <span className="bg-gradient-to-r from-fintech-purple to-fintech-indigo text-transparent bg-clip-text">
              Smart Financial Automation
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-white max-w-5xl leading-tight text-center mx-auto mt-2"
          >
            for Businesses & Individuals
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
            className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl text-center mx-auto"
          >
            Seamless financial solutions powered by cutting-edge technology, 
            designed for tomorrow's economy.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex flex-col md:flex-row gap-4 mt-10"
          >
            <Button size="lg" className="bg-gradient-to-r from-fintech-purple to-fintech-indigo hover:opacity-90 px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              Learn More
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
            className="mt-16 text-sm text-gray-500 dark:text-gray-400"
          >
            Trusted by payment providers worldwide
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.4, 0.0, 0.2, 1] }}
            className="flex flex-wrap justify-center items-center gap-8 mt-6"
          >
            <div className="text-2xl font-bold text-blue-700">VISA</div>
            <div className="text-2xl font-bold text-orange-600">MasterCard</div>
            <div className="text-2xl font-bold text-green-600">RuPay</div>
          </motion.div>
        </div>
      </HeroHighlight>
    </section>
  );
}
