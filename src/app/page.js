"use client";

import products from "@/data/products.json";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

export default function HomePage() {
  const popularProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-100">

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">

        {/* Hero Banner */}
        <div className={"md:col-span-4 relative bg-gradient-to-r from-yellow-200 via-orange-100 to-yellow-300 rounded-xl py-16 overflow-hidden text-center"}>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,165,0,0.3),transparent)] animate-pulse"></div>

          <div className="relative z-10 px-4">
            <h1 className={"text-4xl md:text-5xl font-extrabold text-orange-600 hover:scale-110 transition duration-500"}>
              Summer Sale 50% OFF
            </h1>

            <p className="text-xl mt-3 font-semibold animate-bounce">
              Hot Deals 🔥
            </p>

            <button className={"mt-6 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-red-500 hover:scale-110 transition"}>
              Shop Now
            </button>

            <div className="flex justify-center mt-6">
              <Image
                src="/assets/shopping-bag.png"
                alt="shopping"
                width={100}
                height={100}
                className="animate-bounce"
              />
            </div>
          </div>
        </div>

      </section>

      {/*  PRODUCTS */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {popularProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow p-4 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className={"h-40 object-contain hover:scale-110 transition"}
                />
              </div>

              <h3 className="text-lg font-semibold mt-3 text-center">
                {product.name}
              </h3>

              <p className="text-center">
                Rating :⭐ {product.rating}
              </p>

              <p className="text-orange-500 font-bold text-center">
                ${product.price}
              </p>

              <Link href={`/products/${product.id}`}>
                <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 🌞 Tips */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Summer Care Tips
        </h2>

        <ul className="max-w-4xl mx-auto space-y-3 text-lg">
          <li>💧 Stay hydrated and drink plenty of water</li>
          <li>🧴 Apply sunscreen before going outside</li>
          <li>🥗 Eat fresh fruits and vegetables</li>
          <li>🧢 Wear hats and sunglasses outdoors</li>
        </ul>
      </section>

      {/* 🏷️ Brands */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Top Brands
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {["SunShade", "CoolWave", "HydroMax", "SkinGuard"].map((brand) => (
            <div
              key={brand}
              className="border p-6 rounded-xl shadow text-center hover:bg-orange-500 hover:text-white transition duration-300 cursor-pointer"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}