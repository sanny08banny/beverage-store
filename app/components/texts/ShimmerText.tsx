'use client';
import React from 'react';

type ShimmerTextProps = {
  text: string;
};

export default function ShimmerText({ text }: ShimmerTextProps) {
  return (
    <>
      <div className="shimmer-wrapper text-loading bg-gradient-to-r from-blue-700 via-cyan-300 to-blue-700 bg-[length:200%] bg-[position:-100%_0] bg-clip-text text-transparent font-extrabold font-sans [font-size:clamp(2em,10vw,10em)] place-self-center">
        {text}
      </div>

      <style jsx>{`
        .shimmer-wrapper {
          transition: background-position 0.5s;
        }

        .shimmer-wrapper:hover {
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
