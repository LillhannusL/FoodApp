import { Suspense } from "react";
import ResultsContent from "@/app/results/components/ResultsContent";

export default function ResultsPage() {
  return (
    <section className="min-h-screen p-4">
      <Suspense
        fallback={
          <div className="flex justify-center mt-20">
            <span className="loading loading-spinner loading-lg text-orange-800/80"></span>
            <p className="ml-4">Looking for recipes...</p>
          </div>
        }
      >
        <ResultsContent />
      </Suspense>
    </section>
  );
}
