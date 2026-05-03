"use client";

import { authClient } from "@/lib/auth-client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import products from "@/data/products.json";

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) return <h1 className="text-center mt-10">Loading...</h1>;
  if (!session) return null;

  const product = products.find(
    (item) => item.id === parseInt(params.id)
  );

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-3xl font-bold">
        Product not found
      </h1>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-2xl w-full border border-gray-100">

        {/* Image */}
        <div className="bg-gray-50 flex justify-center p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-6">

          <h1 className="text-3xl font-bold text-gray-800">
            {product.name}
          </h1>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {product.description}
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-2 gap-3 mt-5 text-sm">

            <p><span className="font-semibold">Brand:</span> {product.brand}</p>
            <p><span className="font-semibold">Price:</span> ${product.price}</p>
            <p><span className="font-semibold">Rating:</span> ⭐ {product.rating}</p>
            <p><span className="font-semibold">Stock:</span> {product.stock}</p>
            <p className="col-span-2">
              <span className="font-semibold">Category:</span> {product.category}
            </p>

          </div>

          {/* Button */}
          <button
            onClick={() => router.back()}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 transition text-white py-2 rounded-xl shadow-md"
          >
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
}