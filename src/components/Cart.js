import { useRouter } from 'next/navigation';
import styles from './Cart.module.css'
import { useCart } from '@/context/CartContext';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
    const router = useRouter();
    const { cartItems } = useCart();
    return (
        <div className={styles.cartContainer}>
            <button className={styles.cartButton} onClick={()=>router.push('/cart')}>

              <div className={styles.cartItem}>
                  <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon} />
              </div>
                <span className={styles.itemsLabel}>{cartItems.length}</span>
            </button>
            
        </div>
    )
};

export default Cart;