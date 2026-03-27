"use client";

import { useRouter } from "next/navigation";
import { useResultStore } from "@/store/useResultStore";

export default function QuizBtn() {
  const router = useRouter();
  const { clearStoredResult } = useResultStore();

  const handleClick = () => {
    clearStoredResult();
    router.push("/quiz");
  };

  return (
    <button
      className="btn btn-xl btn-block bg-orange-800/90 border-none rounded-xl shadow-lg md:max-w-xl"
      onClick={handleClick}
    >
      Take Quiz
    </button>
  );
}
