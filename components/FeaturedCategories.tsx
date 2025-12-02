import Link from "next/link";
import styles from "./FeaturedCategories.module.css";

const categories = [
    {
        id: 1,
        name: "New Arrivals",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
        link: "/new-arrivals",
        size: "large"
    },
    {
        id: 2,
        name: "Dresses",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
        link: "/dresses",
        size: "small"
    },
    {
        id: 3,
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
        link: "/accessories",
        size: "small"
    }
];

export default function FeaturedCategories() {
    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <h2 className={styles.heading}>Curated Collections</h2>
                <div className={styles.grid}>
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.link}
                            className={`${styles.card} ${category.size === 'large' ? styles.large : ''}`}
                        >
                            <div className={styles.imageWrapper}>
                                <div
                                    className={styles.image}
                                    style={{ backgroundImage: `url(${category.image})` }}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3>{category.name}</h3>
                                <span className={styles.linkText}>Shop Now</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
