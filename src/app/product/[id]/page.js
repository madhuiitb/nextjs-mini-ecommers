import ProductDetails from "@/components/ProductDetails"; // client component

export default async function ProductPage({ params }) {
    const { id } = params;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();

    return <ProductDetails product={product} />;
}
