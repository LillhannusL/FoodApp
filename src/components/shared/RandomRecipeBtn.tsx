"use client";

import { useRouter } from "next/navigation";
import { useResultStore } from "@/store/useResultStore";

export default function RandomRecipeBtn() {
  const router = useRouter();
  const { clearStoredResult } = useResultStore();

  const handleGoToResult = () => {
    clearStoredResult();
    router.push("/results?type=random");
  };

  return (
    <button
      className="btn btn-xl btn-block border-none text-xl bg-teal-700 rounded-xl shadow-md sm:max-w-2xl sm:flex sm:items-center"
      onClick={handleGoToResult}
    >
      <div className="w-full flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-shuffle-icon lucide-shuffle"
        >
          <path d="m18 14 4 4-4 4" />
          <path d="m18 2 4 4-4 4" />
          <path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
          <path d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
          <path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
        </svg>
        <span className="text-center w-full">Random Recipe</span>
      </div>
    </button>
  );
}
