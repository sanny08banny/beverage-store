import Image from "next/image";
import Link from "next/link";
import SplineScene from "./components/SplineScene";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* Header */}
      <header className="w-full flex justify-between items-center row-start-1 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/natural_logo.png" // Replace with your actual logo path
            alt="Beverage World Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-base font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/discover" className="hover:text-blue-600 transition-colors">Discover</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl mx-auto">
      
        <SplineScene />
      </main>
    </div>
  );
}

