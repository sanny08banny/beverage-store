'use client';
import React from 'react';

export default function MetaLine() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#8357eb]">
      <main className="transition-all duration-500 text-[15rem] text-center text-transparent font-[Meta] cursor-pointer px-4 py-2">
        LINE
      </main>

      <style jsx global>{`
        @font-face {
          font-family: 'Meta';
          src: url('https://www.axis-praxis.org/fonts/webfonts/MetaVariableDemo-Set.woff2') format('woff2');
          font-style: normal;
          font-weight: normal;
        }

        main {
          -webkit-text-stroke: 4px #d6f4f4;
          font-variation-settings: 'wght' 900, 'ital' 1;
          text-shadow:
            10px 10px 0px #07bccc,
            15px 15px 0px #e601c0,
            20px 20px 0px #e9019a,
            25px 25px 0px #f40468,
            45px 45px 10px #482896;
          background-color: transparent;
        }

        main:hover {
          font-variation-settings: 'wght' 100, 'ital' 0;
          text-shadow: none;
        }

        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
}

