'use client';
import React from 'react';

const lines = [
  ['', 'CSS Only'],
  ['CSS Only', 'Perspective'],
  ['Perspective', 'Text Effect'],
  ['Text Effect', 'by'],
  ['by', 'James'],
  ['James', 'Bosworth'],
  ['Bosworth', ''],
];

export default function WordsEffect() {
  return (
    <div className="w-full flex justify-center bg-[#5138BE] py-20">
      <ul className="relative font-extrabold text-white text-[clamp(2rem,6vw,4.25rem)] uppercase tracking-tight font-sans leading-none [transform:translate3d(0,0,0)] [font-smoothing:antialiased]">
        {lines.map(([top, bottom], i) => (
          <li
            key={i}
            className={`relative overflow-hidden h-[50px] pl-[${29 * (i + 1)}px]
              ${i % 2 === 0 ? '[transform:skew(60deg,-30deg)_scaleY(0.6667)]' : '[transform:skew(0deg,-30deg)_scaleY(1.3333)]'}`}
          >
            <p className="h-[50px] leading-[45px] px-2 whitespace-nowrap transition-transform duration-500">
              {top}
            </p>
            <p className="h-[50px] leading-[45px] px-2 whitespace-nowrap transition-transform duration-500 absolute top-0 left-0">
              {bottom}
            </p>
          </li>
        ))}
      </ul>

      <style jsx>{`
        ul:hover p {
          transform: translate3d(0, -50px, 0);
        }
      `}</style>
    </div>
  );
}
