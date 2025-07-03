import React from 'react';

export default function FlavourCard({ logo }: { logo: React.ReactNode }) {
  return (
    <div className="bg-white/5 border border-white/10 py-6 px-4 rounded-2xl shadow hover:shadow-lg hover:bg-white/10 transition flex items-center justify-center">
      {logo}
    </div>
  );
}
