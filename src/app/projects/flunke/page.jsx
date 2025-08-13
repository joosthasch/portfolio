"use client";

import { useState, useEffect } from "react";
import FlunkE from './FlunkE';
import FlunkE2 from './FlunkE2';
import { ClimbingBoxLoader } from "react-spinners";

export default function FlunkePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Always hide loader after 0.5 seconds
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full h-full bg-[#bcb8ad]">
      {/* Loader */}
      {loading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#bcb8ad]">
          <ClimbingBoxLoader color="#000" size={20} />
          <span className="mt-6 text-lg font-medium text-black">Lädt ...</span>
        </div>
      )}
      <div className={`${loading ? "opacity-0 pointer-events-none" : "opacity-100 transition-opacity duration-500"}`}>
        <FlunkE />
        <FlunkE2 />
      </div>
    </main>
  );
}