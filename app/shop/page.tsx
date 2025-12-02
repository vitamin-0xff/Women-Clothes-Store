import ProductCard from "@/components/ProductCard";
import styles from "./page.module.css";

const products = [
    {
        id: "1",
        name: "Silk Evening Gown",
        price: 295.00,
        category: "Dresses",
        image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "2",
        name: "Cashmere Wrap Coat",
        price: 450.00,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "3",
        name: "Pleated Midi Skirt",
        price: 125.00,
        category: "Skirts",
        image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "4",
        name: "Structured Leather Tote",
        price: 320.00,
        category: "Bags",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "5",
        name: "Linen Blazer",
        price: 180.00,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: "6",
        name: "Satin Slip Dress",
        price: 150.00,
        category: "Dresses",
        image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=1000&auto=format&fit=crop"
    }
];

export default function ShopPage() {
    return (
        <div className={`container ${styles.page}`}>
            <div className={styles.header}>
                <h1 className={styles.title}>Shop All</h1>
                <p className={styles.count}>{products.length} Products</p>
            </div>

            <div className={styles.layout}>
                <aside className={styles.sidebar}>
                    <div className={styles.filterGroup}>
                        <h3>Categories</h3>
                        <ul>
                            <li><button className={styles.active}>All</button></li>
                            <li><button>Dresses</button></li>
                            <li><button>Outerwear</button></li>
                            <li><button>Tops</button></li>
                            <li><button>Accessories</button></li>
                        </ul>
                    </div>
                    <div className={styles.filterGroup}>
                        <h3>Size</h3>
                        <div className={styles.sizes}>
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                        </div>
                    </div>
                </aside>

                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
