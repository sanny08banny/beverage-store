'use client';
import React from 'react';

export default function LoadingText() {
  return (
    <>
      <div className="text-loading bg-gradient-to-r from-blue-700 via-cyan-300 to-blue-700 bg-[length:200%] bg-[position:-100%_0] bg-clip-text text-transparent font-extrabold font-sans [font-size:clamp(2em,10vw,10em)] place-self-center animate-shimmer">
        Loading...
      </div>

      <style jsx>{`
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }

        @keyframes shimmer {
          to {
            background-position: 100% 0;
          }
        }
      `}</style>
    </>
  );
}
