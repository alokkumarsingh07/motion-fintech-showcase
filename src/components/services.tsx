
"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    {
      title: "Digital Banking",
      description: "Experience seamless digital banking with instant transactions, real-time notifications, and smart budgeting tools.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400&q=80",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Investment Platform",
      description: "Access global markets with our intuitive investment platform featuring AI-driven recommendations and portfolio management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400&q=80",
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Wealth Management",
      description: "Let our financial experts and advanced algorithms create the perfect wealth management strategy for your unique needs.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400&q=80",
      color: "from-orange-500 to-pink-500"
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive financial solutions tailored to your personal and business needs
          </motion.p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl -rotate-2 scale-105 opacity-20`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative rounded-2xl w-full h-80 object-cover shadow-xl"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">{service.description}</p>
                <Button variant="outline" className="border-fintech-purple text-fintech-purple hover:bg-fintech-purple/10 dark:border-fintech-light-purple dark:text-fintech-light-purple dark:hover:bg-fintech-purple/20">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
