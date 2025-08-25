"use client";
import styles from "./page.module.css";

export default function Error({ error, reset }) {
    return (
        <div className={styles.error}>
            <p>⚠️ {error.message}</p>
            <button onClick={() => reset()}>Retry</button>
        </div>
    );
}
