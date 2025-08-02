import { Product } from "./types/product";
import { useState } from "react";

type Props = {
  product: Product;
  onClose: () => void;
  onSave: (updated: Product) => void;
};

export default function EditProductModal({ product, onClose, onSave }: Props) {
  const [form, setForm] = useState({ ...product });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "price" || name === "volume" ? parseFloat(value) : value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl space-y-4">
        <h3 className="text-lg font-bold">Edit Product</h3>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="number"
          name="volume"
          value={form.volume}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        >
          {["Juice", "Soda", "Water", "Energy Drink"].map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <div className="flex justify-end space-x-2 pt-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
          <button onClick={() => onSave(form)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save</button>
        </div>
      </div>
    </div>
  );
}
