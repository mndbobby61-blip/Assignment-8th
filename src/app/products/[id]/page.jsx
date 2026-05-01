import products from "@/data/products.json";

export default async function ProductDetails({ params }) {
    const { id } = await params;

    const product = products.find(
        (item) => item.id === parseInt(id)
    );

    if (!product) {
        return <h1>Product not found</h1>;
    }

    return (
        <div className="max-w-4xl mx-auto p-10">
            <img
                src={product.image}
                alt={product.name}
                className="w-64 mx-auto"
            />

            <h1 className="text-4xl font-bold mt-5">{product.name}</h1>
            <p className="mt-3">{product.description}</p>
            <p className="mt-2">Brand: {product.brand}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Stock: {product.stock}</p>
            <p>Category: {product.category}</p>
        </div>
    );
}