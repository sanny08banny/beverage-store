// components/Cart.tsx
import { TrashIcon } from '@heroicons/react/16/solid';
import { Product } from './types/product';

export default function Cart({ cartItems }: { cartItems: Product[] }) {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl max-w-2xl mx-auto shadow">
      <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white">
        Cart ({cartItems.length} items)
      </h3>
      {cartItems.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-400">No items in cart.</p>
      ) : (
        <ul className="divide-y divide-zinc-300 dark:divide-zinc-700">
          {cartItems.map((item) => (
            <li key={item.id} className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">{item.name}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    ${item.price.toFixed(2)} – {item.volume}ml
                  </p>
                </div>
              </div>
              <button className="text-red-500">
                <TrashIcon className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

