'use client';
import React from 'react';
import LoadingText from './texts/ShimmerText';
import ShimmerText from './texts/ShimmerText';
import MetaLine from './MetaLine';
import FlavoursLogo from './FlavoursLogo';

export default function FlavoursSection() {
  const flavours = [
    {
      id: 1,
      component: <ShimmerText text="Cocktail" />
    },
    {
      id: 2,
      component: <MetaLine text="Pineapple" /> // no props
    },
    {
      id: 3,
      component: <FlavoursLogo text='Hibiscus'/> // no props
    },
    // Add more as needed
  ];

  return (
    <section className="py-6 px-4 w-full">
      <h2 className="text-center text-3xl font-bold mb-8">Discover the taste of Rawine — available in both Premium and Regular options.</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {flavours.map(({ id, component }) => (
          <div key={id} className="flex items-center justify-center min-w-[150px]">
            {component}
          </div>
        ))}
      </div>
    </section>
  );
}

