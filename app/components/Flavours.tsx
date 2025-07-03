// components/Flavours.tsx

const premiumFlavours = ["Cocktail", "Pineapple", "Hibiscus"];
const regularFlavours = ["Passion", "Lemonade", "Dawa"];

function FlavourCard({ name }: { name: string }) {
  return (
    <div className="bg-white/5 border border-white/10 text-white text-sm font-medium py-6 px-4 rounded-2xl shadow hover:shadow-lg hover:bg-white/10 transition">
      {name}
    </div>
  );
}

export default function Flavours() {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Our Flavours</h2>
        <p className="text-gray-400 mb-12">Discover the taste of Rawine — available in both Premium and Regular options.</p>

        <div className="mb-10">
          <h3 className="text-xl font-semibold text-purple-300 mb-6">Premium</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {premiumFlavours.map((flavour, i) => (
              <FlavourCard key={i} name={flavour} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-yellow-300 mb-6">Regular</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {regularFlavours.map((flavour, i) => (
              <FlavourCard key={i} name={flavour} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

  