'use client';
import React from 'react';
import FlavoursLogo from './texts/FlavoursLogo'; // Make sure path is correct

export default function RegularFlavoursSection() {
  const flavours = [
    {
      id: 1,
      letters: ['P', 'A', 'S', 'S', 'I', 'O', 'N'],
      color: '#fb923c',
    },
    {
      id: 2,
      letters: ['L', 'E', 'M', 'O', 'N', 'A', 'D', 'E'],
      color: '#facc15',
    },
    {
      id: 3,
      letters: ['D', 'A', 'W', 'A'],
      color: '#34d399',
    },
  ];

  return (
    <section className="py-12 px-4 w-full">
      <p className="text-gray-400 mb-12 text-center">
        Crafted for every mood. Try our refreshing regular lineup:
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {flavours.map(({ id, letters, color }) => (
          <div key={id} className="flex items-center justify-center min-w-[150px]">
            <FlavoursLogo letters={letters} color={color} />
          </div>
        ))}
      </div>
    </section>
  );
}
