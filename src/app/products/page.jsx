import products from "@/data/products.json";
import Link from "next/link";

export default function ProductsPage() {
    return (
        <div className="max-w-6xl mx-auto p-10">
            <h1 className="text-4xl font-bold text-center mb-10">
                All Products
            </h1>

            <div className="grid md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-40 mx-auto"
                        />

                        <h2 className="text-xl font-bold mt-4">
                            {product.name}
                        </h2>

                        <p>⭐ {product.rating}</p>
                        <p className="font-bold">${product.price}</p>

                        <Link href={`/products/${product.id}`}>
                            <button className="bg-orange-500 text-white px-4 py-2 rounded mt-3">
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}