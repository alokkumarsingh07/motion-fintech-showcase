
"use client";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Finova has completely transformed how I manage my finances. The intelligent insights have helped me save 30% more every month.",
      author: "Sarah Johnson",
      title: "Small Business Owner",
      avatar: "SJ"
    },
    {
      quote: "As a freelancer, keeping track of my finances was always a challenge until I found Finova. Now everything is automated and crystal clear.",
      author: "Michael Chen",
      title: "Graphic Designer",
      avatar: "MC"
    },
    {
      quote: "The investment platform is intuitive yet powerful. I've seen a 22% increase in my portfolio since switching to Finova last year.",
      author: "Aisha Patel",
      title: "Investment Analyst",
      avatar: "AP"
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-fintech-dark-purple/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Don't take our word for it — hear from some of our satisfied clients
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <svg width="45" height="36" className="text-fintech-purple opacity-30" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.5 18H9C9 12.477 13.477 8 19 8V12C15.686 12 13 14.686 13 18V18ZM31.5 18H27C27 12.477 31.477 8 37 8V12C33.686 12 31 14.686 31 18V18Z" fill="currentColor" />
                      <path d="M0 18C0 12.477 4.477 8 10 8V12C6.686 12 4 14.686 4 18V24C4 26.209 5.791 28 8 28H13.5C15.433 28 17 26.433 17 24.5V18C17 12.477 21.477 8 27 8V12C23.686 12 21 14.686 21 18V24.5C21 28.642 17.642 32 13.5 32H8C3.582 32 0 28.418 0 24V18ZM36 24.5V18C36 12.477 40.477 8 46 8V12C42.686 12 40 14.686 40 18V24.5C40 28.642 36.642 32 32.5 32H27C22.582 32 19 28.418 19 24V18C19 12.477 23.477 8 29 8V12C25.686 12 23 14.686 23 18V24C23 26.209 24.791 28 27 28H32.5C34.433 28 36 26.433 36 24.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-8 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center mt-auto">
                    <Avatar className="h-12 w-12 border-2 border-white shadow">
                      <AvatarFallback className="bg-fintech-purple text-white">{testimonial.avatar}</AvatarFallback>
                      <AvatarImage src="" />
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
