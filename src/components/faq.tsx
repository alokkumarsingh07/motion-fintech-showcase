
"use client";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How secure is Finova's platform?",
      answer: "Finova employs bank-level security protocols, including 256-bit encryption, two-factor authentication, and continuous monitoring. We're compliant with all major financial security standards and regulations, ensuring your data and assets are always protected."
    },
    {
      question: "What fees does Finova charge?",
      answer: "We offer transparent pricing with no hidden fees. Our basic account is free, while premium features are available through subscription plans starting at $9.99/month. Investment services have a low 0.25% management fee, significantly lower than traditional financial advisors."
    },
    {
      question: "Can I access Finova on multiple devices?",
      answer: "Yes, Finova is available on all major platforms including iOS, Android, and web browsers. Your account synchronizes seamlessly across all your devices, giving you access to your financial information wherever you are."
    },
    {
      question: "How does Finova's AI investment system work?",
      answer: "Our AI analyzes thousands of market data points, economic indicators, and your personal financial goals to create optimized investment strategies. The system continuously learns and adapts to changing market conditions and your evolving financial situation."
    },
    {
      question: "Is Finova available internationally?",
      answer: "Currently, Finova is available in the United States, Canada, UK, EU, Australia, and Singapore. We're actively expanding to more regions and expect to offer our services in additional countries within the next year."
    }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to know about Finova and our services
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
