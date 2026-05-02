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
    <div className="grid md:grid-cols-3 gap-6 p-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl shadow-lg p-4"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-52 object-cover rounded"
          />

          <h2 className="text-xl font-bold mt-3">
            {product.name}
          </h2>

          <p>${product.price}</p>

          <Link href={`/products/${product.id}`}>
            <button className="bg-orange-500 text-white px-4 py-2 mt-3 rounded">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}