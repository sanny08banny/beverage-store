"use client";

import { useState } from "react";
import { firestore } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY!;
const IMGBB_UPLOAD_URL = "https://api.imgbb.com/1/upload";

const categories = ["Juice", "Soda", "Water", "Energy Drink"];

export default function CreateProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [volume, setVolume] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !description || !volume || !image) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      // Convert image to Base64
      const base64Image = await toBase64(image);

      // Upload to ImgBB
      const formData = new FormData();
      formData.append("key", IMGBB_API_KEY);
      formData.append("image", base64Image.split(",")[1]);

      const res = await fetch(IMGBB_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.data.url) {
        throw new Error("Image upload failed");
      }

      // Store product in Firestore
      await addDoc(collection(firestore, "products"), {
        name,
        description,
        price: parseFloat(price),
        category,
        volume: parseFloat(volume),
        imageUrl: data.data.url,
        likes: 0,
        createdAt: new Date().toISOString(),
      });

      alert("Product created!");
      setName("");
      setDescription("");
      setPrice("");
      setCategory(categories[0]);
      setVolume("");
      setImage(null);
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Create Beverage Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <input
        type="number"
        placeholder="Price ($)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border px-3 py-2 rounded"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Volume (ml)"
        value={volume}
        onChange={(e) => setVolume(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file && ["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
            setImage(file);
          } else {
            alert("Only JPEG, PNG, or WEBP images are allowed.");
          }
        }}
        className="w-full"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {loading ? "Uploading..." : "Create Product"}
      </button>
    </form>
  );
}