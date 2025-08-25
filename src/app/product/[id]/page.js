import ProductDetails from "@/components/ProductDetails";

export default async function ProductPage({ params }) {
    const { id } = await params;
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch");
        }

        const product = await res.json();

        return <ProductDetails product={product} />;
    } catch (error) {
        throw new Error("Failed to load product");
    }
}
