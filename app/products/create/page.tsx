"use client";

import { useState, useEffect } from "react";
import { firestore } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      setImagePreviewUrl(null);
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setImagePreviewUrl(objectUrl);
    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [image]);

  const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const validate = () => {
    if (!name.trim()) return "Name is required.";
    if (!description.trim()) return "Description is required.";
    if (!price || isNaN(Number(price)) || Number(price) < 0) return "Valid price is required.";
    if (!volume || isNaN(Number(volume)) || Number(volume) <= 0) return "Valid volume is required.";
    if (!image) return "Image is required.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(null);
    const validationError = validate();
    if (validationError) {
      setErrors(validationError);
      return;
    }

    setLoading(true);

    try {
      const base64Image = await toBase64(image!);
      const formData = new FormData();
      formData.append("key", IMGBB_API_KEY);
      formData.append("image", base64Image.split(",")[1]);

      const res = await fetch(IMGBB_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data?.data?.url) {
        throw new Error("Image upload failed");
      }

      await addDoc(collection(firestore, "products"), {
        name: name.trim(),
        description: description.trim(),
        price: parseFloat(price),
        category,
        volume: parseFloat(volume),
        imageUrl: data.data.url,
        likes: 0,
        createdAt: serverTimestamp(),
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
      setErrors("Something went wrong. Please try again."); 
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      setErrors("Only JPEG, PNG, or WEBP images are allowed.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setErrors("Image must be smaller than 5MB.");
      return;
    }
    setErrors(null);
    setImage(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 grid gap-8 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Create Beverage Product
          </h1>
          <p className="text-sm text-gray-600">
            Fill in the details below. Preview the image before submitting.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="sm:col-span-1 flex flex-col gap-6"
          aria-label="Create product form"
        >
          {errors && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-2 rounded-md text-sm">
              {errors}
            </div>
          )}

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
              Product Name *
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g., Mango Juice"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              id="description"
              placeholder="Brief description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="price" className="text-sm font-medium text-gray-700 mb-1">
                Price ($) *
              </label>
              <input
                id="price"
                type="number"
                step="0.01"
                placeholder="0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="volume" className="text-sm font-medium text-gray-700 mb-1">
                Volume (ml) *
              </label>
              <input
                id="volume"
                type="number"
                placeholder="e.g., 500"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="category" className="text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Product Image *</label>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageChange}
                  className="w-full border border-dashed border-gray-400 px-4 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
                  aria-label="Upload product image"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  JPEG, PNG, or WEBP. Max 5MB.
                </p>
              </div>
              {imagePreviewUrl && (
                <div className="w-full sm:w-32 h-32 border rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                  <img
                    src={imagePreviewUrl}
                    alt="Preview"
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full bg-blue-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Uploading..." : "Create Product"}
          </button>
        </form>

        {/* Sidebar / Preview panel */}
        <div className="sm:col-span-1 flex flex-col gap-6">
          <div className="border rounded-xl p-4 bg-gray-50 flex-1 flex flex-col">
            <h2 className="text-lg font-semibold mb-2">Live Preview</h2>
            <div className="flex-1 flex flex-col gap-4">
              <div>
                <p className="text-sm font-medium text-gray-700">Name</p>
                <div className="mt-1 text-gray-800">{name || "—"}</div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Description</p>
                <div className="mt-1 text-gray-800">{description || "—"}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-700">Price</p>
                  <div className="mt-1 text-gray-800">
                    {price ? `$${parseFloat(price).toFixed(2)}` : "—"}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Volume</p>
                  <div className="mt-1 text-gray-800">
                    {volume ? `${volume} ml` : "—"}
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Category</p>
                <div className="mt-1 text-gray-800">{category}</div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Image</p>
                <div className="mt-2 w-full h-48 border rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  {imagePreviewUrl ? (
                    <img
                      src={imagePreviewUrl}
                      alt="Product preview"
                      className="object-contain max-h-full"
                    />
                  ) : (
                    <div className="text-sm text-gray-400">No image selected</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            The preview updates in real time as you fill in the form. Image is displayed
            from local selection before upload.
          </div>
        </div>
      </div>
    </div>
  );
}