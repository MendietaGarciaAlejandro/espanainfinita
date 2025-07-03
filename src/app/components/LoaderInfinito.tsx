'use client';

import { useEffect, useState } from "react";

export default function LoaderInfinito() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black transition-colors duration-500">
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin-infinito"
      >
        <path
          d="M20,30 C20,10 50,10 60,30 C70,50 100,50 100,30 C100,10 70,10 60,30 C50,50 20,50 20,30 Z"
          stroke="#facc15"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <style jsx>{`
        @keyframes spin-infinito {
          0% { transform: rotate(0deg) scale(0.8); opacity: 0.7; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 1; }
          100% { transform: rotate(360deg) scale(0.8); opacity: 0.7; }
        }
        .animate-spin-infinito {
          animation: spin-infinito 1.4s cubic-bezier(0.77,0,0.18,1) infinite;
        }
      `}</style>
    </div>
  );
} 