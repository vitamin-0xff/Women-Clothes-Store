import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay} />
            <div className={`container ${styles.content}`}>
                <h1 className={`${styles.title} animate-fade-in`}>
                    Elegance in <br /> Every Stitch
                </h1>
                <p className={styles.subtitle}>
                    Discover our new collection of premium women's wear, designed for the modern muse.
                </p>
                <Link href="/shop" className="btn btn-primary">
                    Discover Collection
                </Link>
            </div>
        </section>
    );
}
