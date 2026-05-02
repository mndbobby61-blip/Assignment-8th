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
    return <h1 className="text-center mt-10 text-3xl">Product not found</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-10">
      <img src={product.image} alt={product.name} className="w-64 mx-auto" />

      <h1 className="text-4xl font-bold mt-5">{product.name}</h1>
      <p className="mt-3">{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}