import styles from "./page.module.css";

const Loading=() => {
    return <div className={styles.skeleton}>
        <div className={styles.image}></div>
        <div className={styles.info}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.lineShort}></div>
        </div>
    </div>
}

export default Loading;