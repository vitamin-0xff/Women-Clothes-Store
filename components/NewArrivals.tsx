import ProductCard from "./ProductCard";
import styles from "./NewArrivals.module.css";

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
    }
];

export default function NewArrivals() {
    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>New Arrivals</h2>
                    <a href="/new-arrivals" className="btn btn-outline">View All</a>
                </div>

                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
