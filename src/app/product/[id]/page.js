import ProductDetails from "@/components/ProductDetails"; // client component

export default async function ProductPage({ params }) {
    const { id } = await params;
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
            cache: "no-store",
        });

        if (!res.ok) throw new Error("Failed to fetch");

        const product = await res.json();

        return <ProductDetails product={product} />;
    } catch (error) {
        return <div>Something went wrong.</div>;
    }
}
