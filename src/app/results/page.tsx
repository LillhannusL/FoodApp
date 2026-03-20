// app/results/page.tsx
import { Suspense } from "react";
import ResultsContent from "@/app/results/components/ResultsContent"; // Din gamla kod

export default function ResultsPage() {
  return (
    <section className="min-h-screen p-4">
      {/* Suspense "räddar" bygget på Vercel */}
      <Suspense
        fallback={
          <div className="flex justify-center mt-20">
            <span className="loading loading-spinner loading-lg text-orange-400"></span>
            <p className="ml-4">Hittar smaskiga recept...</p>
          </div>
        }
      >
        <ResultsContent />
      </Suspense>
    </section>
  );
}
