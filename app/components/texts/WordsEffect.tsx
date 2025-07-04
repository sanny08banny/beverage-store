'use client';
import React from 'react';

const lines = [
  ['', 'Unleash'],
  ['Unleash', 'Your'],
  ['Your', 'Potential'],
  ['Potential', ''],
];

export default function WordsEffect() {
  return (
    <div className="w-full flex justify-center py-20">
      <ul className="relative font-extrabold text-black text-[clamp(2rem,6vw,4.25rem)] uppercase tracking-tight font-sans leading-none [transform:translate3d(0,0,0)] [font-smoothing:antialiased]">
        {lines.map(([top, bottom], i) => (
          <li
            key={i}
            className="relative overflow-hidden h-[50px]"
            style={{ paddingLeft: `${29 * (i + 1)}px` }}
          >
            <div
              className={`relative transition-transform duration-500
                ${i % 2 === 0
                  ? '[transform:skew(60deg,-30deg)_scaleY(0.6667)]'
                  : '[transform:skew(0deg,-30deg)_scaleY(1.3333)]'}
              `}
            >
              <p className="top-text h-[50px] leading-[45px] px-2 whitespace-nowrap relative z-10">
                {top}
              </p>
              <p className="h-[50px] leading-[45px] px-2 whitespace-nowrap absolute top-0 left-0 z-0">
                {bottom}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <style jsx>{`
        ul .top-text {
          transform: translate3d(0, 0, 0);
          transition: transform 0.5s ease;
        }
        ul:hover .top-text {
          transform: translate3d(0, -50px, 0);
        }
      `}</style>
    </div>
  );
}
