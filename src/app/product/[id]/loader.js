import styles from "./page.module.scss";

const Loader=() => {
    return <div className={styles.skeleton}>
        <div className={styles.image}></div>
        <div className={styles.info}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.lineShort}></div>
        </div>
    </div>
}

export default Loader;