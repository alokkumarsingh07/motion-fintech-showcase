
"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-fintech-purple/90 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Smart Financial Planning
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Our AI-powered platform analyzes your spending patterns and financial goals to create personalized saving plans.
          </p>
        </div>
        <img
          src="/lovable-uploads/4789e709-474a-4b9f-861a-71e027044299.png"
          width={200}
          height={100}
          alt="Financial services"
          className="absolute -right-4 lg:-right-[20%] bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-fintech-indigo/90 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Secure Investment Opportunities
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Access vetted investment options with transparent risk assessments and projected returns.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-fintech-blue/90 min-h-[500px] lg:min-h-[300px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            24/7 Financial Advisory Services
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Connect with our financial experts anytime for personalized guidance on savings, investments, and wealth management.
          </p>
        </div>
        <img
          src="/lovable-uploads/049c940e-71da-4f0c-82cb-93efe2a6a398.png"
          width={200}
          height={100}
          alt="Advisory services"
          className="absolute -right-10 md:-right-[25%] lg:-right-[10%] bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
