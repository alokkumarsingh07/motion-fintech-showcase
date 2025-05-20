
"use client";
import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CreditCard, BarChart, TrendingUp } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-12 w-12 text-fintech-purple" />,
      title: "Secure Transactions",
      description: "Bank-level security protocols with end-to-end encryption protect your financial data at all times.",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-fintech-blue" />,
      title: "Smart Payments",
      description: "Frictionless payment solutions that adapt to your spending habits and optimize your finances.",
    },
    {
      icon: <BarChart className="h-12 w-12 text-fintech-orange" />,
      title: "Advanced Analytics",
      description: "Gain valuable insights into your spending patterns with our powerful data visualization tools.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-fintech-indigo" />,
      title: "Wealth Management",
      description: "AI-powered investment strategies tailored to your financial goals and risk tolerance.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-fintech-dark-purple/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Our cutting-edge technology is designed to make your financial life simpler, smarter, and more secure.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200">
                <CardHeader className="flex flex-col items-center text-center">
                  {feature.icon}
                  <CardTitle className="mt-4 text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
