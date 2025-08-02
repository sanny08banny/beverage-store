"use client";

import { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import EditProductModal from "./EditProductModal";
import { Product } from "./types/product";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(firestore, "products"));
    const items: Product[] = [];
    querySnapshot.forEach((docSnap) => {
      items.push({ id: docSnap.id, ...(docSnap.data() as Omit<Product, "id">) });
    });
    setProducts(items);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Delete this product?")) {
      await deleteDoc(doc(firestore, "products", id));
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleUpdate = async (updated: Product) => {
    const { id, ...data } = updated;
    await updateDoc(doc(firestore, "products", id), data);
    setEditingProduct(null);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold mb-6">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-xl p-4 shadow flex flex-col space-y-3">
            <img src={product.imageUrl} alt={product.name} className="h-40 w-full object-cover rounded" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-sm">💲{product.price.toFixed(2)} | {product.volume}ml</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
            <div className="flex justify-between">
              <button onClick={() => setEditingProduct(product)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 text-sm">Edit</button>
              <button onClick={() => handleDelete(product.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editingProduct && (
        <EditProductModal
          product={editingProduct}
          onClose={() => setEditingProduct(null)}
          onSave={handleUpdate}
        />
      )}
    </div>
  );
}
