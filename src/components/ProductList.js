import Image from "next/image";
import { useEffect, useState } from "react";
import styles from './ProductList.module.css';
import Link from "next/link";
import { useFilters } from "@/context/FiltersContext";

const URL = "https://fakestoreapi.com/Products/";

const ProductList = ({ products, setProducts, selectedCategories,cartItemsCount, setCartItemsCount }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { searchValue, sortOption } =  useFilters();

    const getProductList = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getProductList();
    }, [setProducts]);

    const handleRetry = () => {
        getProductList();
    };


    const filteredProducts = products.filter((product) => (product.title.toLowerCase().includes(searchValue.toLowerCase()))).sort((a, b) => {
        if (sortOption === 'priceLow') {
            return a.price - b.price;
        } else if (sortOption === 'priceHigh') {
            return b.price - a.price;
        } else if (sortOption === 'az') {
            return a.title.localeCompare(b.title);
        } 
        else if (sortOption === 'za') {
            return b.title.localeCompare(a.title);
        } 
        else {
            return 0;
        }
    }).filter((product) => selectedCategories.length > 0 ? selectedCategories.includes(product.category) : true);

    if (loading) {
        return (
            <div className={styles.grid}>
                {[...Array(6)].map((_, index) => (
                    <div key={index} className={styles.skeletonCard}>
                        <div className={styles.skeletonImage}></div>
                        <div className={styles.skeletonTitle}></div>
                        <div className={styles.skeletonPrice}></div>
                        <div className={styles.skeletonCategory}></div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.error}>
                <p>Error: {error}</p>
                <button onClick={handleRetry} className={styles.retryButton}>
                    Retry
                </button>
            </div>
        );
    }
  
    return (
        <div className={styles.grid}>
            {filteredProducts.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                <div key={product.id} className={styles.card}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={200}
                        height={200}
                        className={styles.image}
                    />
                    <h2>{product.title}</h2>
                    <p>Price: ${product.price}</p>
                    <p>{product.category}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductList;