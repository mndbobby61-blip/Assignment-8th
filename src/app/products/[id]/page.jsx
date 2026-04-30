'use client';
import products from "@/data/products.json";

export default async function ProductDetails({ params }) {
    const { id } = await params;
    const productId = Number(id);

    const product = products.find((item) => item.id === productId);

    if (!product) {
        return (
            <h1 className="text-center mt-10 text-2xl">
                Product not found
            </h1>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-10">
            <img
                src={product.image}
                alt={product.name}
                className="h-64 mx-auto"
            />

            <h1 className="text-3xl font-bold mt-6">{product.name}</h1>
            <p className="mt-4">{product.description}</p>
            <p className="mt-2">⭐ {product.rating}</p>
            <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
            <p className="mt-2">Stock: {product.stock}</p>
            <p className="mt-2">Brand: {product.brand}</p>
        </div>
    );
}