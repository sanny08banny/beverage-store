'use client';
import React from 'react';

type MetaLineProps = {
  text: string;
};

export default function MetaLine({ text }: MetaLineProps) {
  return (
    <div className="px-4 py-2">
      <div className="meta-line text-[5rem] text-transparent font-[Meta] cursor-pointer transition-all duration-500 text-center">
        {text}
      </div>

      <style jsx>{`
        @font-face {
          font-family: 'Meta';
          src: url('https://www.axis-praxis.org/fonts/webfonts/MetaVariableDemo-Set.woff2') format('woff2');
          font-style: normal;
          font-weight: normal;
        }

        .meta-line {
          -webkit-text-stroke: 2px #d6f4f4;
          font-variation-settings: 'wght' 900, 'ital' 1;
          text-shadow:
            4px 4px 0px #07bccc,
            7px 7px 0px #e601c0,
            10px 10px 0px #e9019a,
            13px 13px 0px #f40468,
            20px 20px 6px #482896;
        }

        .meta-line:hover {
          font-variation-settings: 'wght' 100, 'ital' 0;
          text-shadow: none;
        }
      `}</style>
    </div>
  );
}

