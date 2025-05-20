
import { PointerHighlight } from "@/components/ui/pointer-highlight";

export default function PointerHighlightDemo() {
  return (
    <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 py-20 sm:grid-cols-3">
      <div className="rounded-md p-6">
        <div className="h-40 w-full rounded-lg bg-gradient-to-r from-fintech-blue/30 to-fintech-purple/30" />
        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          <PointerHighlight
            rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600 leading-loose"
            pointerClassName="text-yellow-500 h-3 w-3"
            containerClassName="inline-block mr-1"
          >
            <span className="relative z-10">Smart budgeting</span>
          </PointerHighlight>
          tools to maximize your savings with minimal effort.
        </div>
        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
          Our intelligent algorithms analyze your spending habits to help you save more effectively.
        </p>
      </div>
      <div className="rounded-md p-6">
        <div className="h-40 w-full rounded-lg bg-gradient-to-r from-fintech-blue/30 to-fintech-indigo/30" />
        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          Discover our
          <PointerHighlight
            rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
            pointerClassName="text-blue-500 h-3 w-3"
            containerClassName="inline-block mx-1"
          >
            <span className="relative z-10">personalized plans</span>
          </PointerHighlight>
          for your financial freedom.
        </div>
        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
          Tailored financial strategies designed to meet your unique goals and timeline.
        </p>
      </div>

      <div className="rounded-md p-6">
        <div className="h-40 w-full rounded-lg bg-gradient-to-r from-fintech-purple/30 to-fintech-indigo/30" />
        <div className="mx-auto mt-4 max-w-lg text-base font-bold tracking-tight md:text-base">
          Secure your future with our
          <PointerHighlight
            rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700 leading-loose"
            pointerClassName="text-green-500 h-3 w-3"
            containerClassName="inline-block ml-1"
          >
            <span className="relative z-10">investment insights</span>
          </PointerHighlight>
          .
        </div>
        <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
          Data-driven recommendations to help grow your wealth safely and steadily over time.
        </p>
      </div>
    </div>
  );
}
