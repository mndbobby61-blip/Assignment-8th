"use client";

import Link from "next/link";
import products from "@/data/products.json";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductsPage() {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  if (!session) return null;

  return (
    <div className="grid md:grid-cols-3 gap-8 p-10 bg-gray-50 min-h-screen">

      {products.map((product) => (
        <div
          key={product.id}
          className="group bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden"
        >

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-4">

            <h2 className="text-xl font-bold group-hover:text-orange-500 transition">
              {product.name}
            </h2>

            <p className="text-gray-600 mt-1">
              ${product.price}
            </p>

            {/* Button */}
            <Link href={`/products/${product.id}`}>
              <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-xl shadow-md">
                View Details
              </button>
            </Link>

          </div>

        </div>
      ))}

    </div>
  );
}