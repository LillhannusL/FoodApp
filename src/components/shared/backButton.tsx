"use client";

import { useRouter } from "next/navigation";

interface BackBtnProps {
  route: string;
}

export default function BackBtn({ route }: BackBtnProps) {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <button
      onClick={() => handleClick(route)}
      className="btn btn-circle bg-dark-primary/50 backdrop-blur-md mt-4 border-none shadow-sm z-50 relative"
    >
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
        className="lucide lucide-arrow-left-icon lucide-arrow-left text-light-primary/90"
      >
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    </button>
  );
}
