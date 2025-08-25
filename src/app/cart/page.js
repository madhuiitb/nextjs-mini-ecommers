'use client';

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import styles from './page.module.css';

export default function CartPage() {
    const { cartItems, removeFromCart } = useCart();
    
    if (!cartItems.length) {
        return <div className={styles.noCartItems}>NO CART ITEMS</div>
    }
    return (
        <div className={styles.grid}>
            {cartItems.map((product) => (
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
                    <button onClick={() => removeFromCart(product.id)}>Delete</button>
                </div>
            ))}
        </div> 
    );
}