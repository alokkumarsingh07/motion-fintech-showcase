
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "Secure Transactions",
    description: "Bank-level security protocols with end-to-end encryption protect your financial data at all times.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-fintech-purple" />,
  },
  {
    title: "Smart Payments",
    description: "Frictionless payment solutions that adapt to your spending habits and optimize your finances.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-fintech-blue" />,
  },
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights into your spending patterns with our powerful data visualization tools.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-fintech-orange" />,
  },
  {
    title: "Wealth Management",
    description: "AI-powered investment strategies tailored to your financial goals and risk tolerance.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-fintech-indigo" />,
  },
  {
    title: "Global Accessibility",
    description: "Access your finances from anywhere in the world with our international banking solutions.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-fintech-purple" />,
  },
  {
    title: "Automated Savings",
    description: "Intelligent algorithms that automatically optimize your savings based on spending patterns.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-fintech-blue" />,
  },
  {
    title: "Personal Finance Coach",
    description: "Get personalized financial advice and guidance from our AI-powered coaching system.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-fintech-orange" />,
  },
];
