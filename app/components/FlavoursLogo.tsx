'use client';
import React from 'react';

const letters = ['F', 'L', 'A', 'V', 'O', 'U', 'R', 'S'];

export default function FlavoursLogo() {
  return (
    <>
      <p className="flex flex-wrap justify-center items-center text-white font-bold font-sans">
        {letters.map((char, index) => (
          <span
            key={index}
            data-text={char}
            className="relative inline-block text-[clamp(2rem,5vw,8rem)] ml-[0.075em] [transform-style:preserve-3d] [perspective:500px] transition-transform duration-300 will-change-transform"
          >
            {char}
          </span>
        ))}
      </p>

      <style jsx>{`
        span::before,
        span::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: -1px;
          transform-origin: left top;
          transition: all 0.3s ease-out;
          display: block;
        }

        span::before {
          z-index: 1;
          color: rgba(0, 0, 0, 0.2);
          transform: scale(1.1, 1) skew(0deg, 20deg);
        }

        span::after {
          z-index: 2;
          color: hsla(259, 36%, 47%, 1); /* Purple */
          text-shadow:
            -1px 0 1px hsla(259, 36%, 47%, 1),
             1px 0 1px rgba(0, 0, 0, 0.8);
          transform: rotateY(-40deg);
        }

        span:hover::before {
          transform: scale(1.1, 1) skew(0deg, 5deg);
        }

        span:hover::after {
          transform: rotateY(-10deg);
        }
      `}</style>
    </>
  );
}
