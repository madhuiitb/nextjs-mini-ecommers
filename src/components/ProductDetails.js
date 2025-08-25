'use client';

import Image from "next/image";
import styles from './ProductDetails.module.css';
import { useCart } from "@/context/CartContext";


const ProductDetails = ({ product })=> {
   
    const { addToCart, removeFromCart, cartItems } = useCart();
    const count = cartItems.filter((item) => item.id === product.id).length;
    return (
        <div className={styles.card}>
            <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className={styles.image}
            />
            <h2>{product.title}</h2>
            <p>
                <span className={styles.label}>Price:</span>
                ${product.price}</p>
            <p>
                <span className={styles.label}>Category:</span>
                {product.category}</p>
            <p>
                <span className={styles.label}>Description:</span>
                {product.description}</p>
            <p className={styles.rating}>
                <p>
                    <span className={styles.label}>Rating:</span>
                    {product.rating.rate}
                </p>
                <p>
                    <span className={styles.label}>Reviews:</span>
                    {product.rating.count}</p>
            </p>

            <div className={styles.buttons}>
                <button
                    className={styles.buttonIcon}
                    onClick={() => removeFromCart(product.id)}
                >-</button>
                <span>{count}</span>
                <button
                    className={styles.buttonIcon}
                    onClick={() => addToCart(product)}
                >+</button> 
            </div>
        </div>
    );
}
export default ProductDetails;