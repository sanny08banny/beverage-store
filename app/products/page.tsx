'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

type Product = {
  id: number
  name: string
  description: string
  image: string
  price: number
  isFavorite: boolean
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Citrus Burst',
    description: 'A tangy, revitalizing citrus soda with a splash of lime.',
    image: '/jaba_juice_hibiscus-removebg-preview.png',
    price: 3.99,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Berry Fizz',
    description: 'A sweet blend of wild berries and sparkling goodness.',
    image: '/berry-fizz.jpg',
    price: 4.49,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Mango Chill',
    description: 'Smooth mango fusion with a cool finish for summer days.',
    image: '/mango-chill.jpg',
    price: 4.25,
    isFavorite: false,
  },
]

export default function Products() {
  const [products, setProducts] = useState(initialProducts)
  const [cart, setCart] = useState<number[]>([])
  const [favorites, setFavorites] = useState<number[]>([])

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id])
    }
  }

  const toggleFavorite = (id: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, isFavorite: !p.isFavorite } : p
      )
    )
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fid) => fid !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return (
    <div className="w-full px-6 py-12 bg-white dark:bg-black">
      <h2 className="text-4xl font-bold text-center mb-12 text-zinc-900 dark:text-zinc-100">
        Our Beverages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="bg-white dark:bg-zinc-900 rounded-2xl shadow-md overflow-hidden relative group border border-zinc-200 dark:border-zinc-700"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {product.name}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:max-h-40 max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-5">
                <span className="text-lg font-bold text-zinc-800 dark:text-zinc-100">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex gap-3">
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="text-red-500 hover:scale-110 transition-transform"
                    aria-label="Toggle Favorite"
                  >
                    {product.isFavorite ? (
                      <HeartIconSolid className="w-6 h-6" />
                    ) : (
                      <HeartIcon className="w-6 h-6" />
                    )}
                  </button>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="text-blue-500 hover:scale-110 transition-transform"
                    aria-label="Add to Cart"
                  >
                    <ShoppingCartIcon className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

