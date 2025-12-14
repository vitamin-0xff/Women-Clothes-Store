import Link from "next/link";
import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory, getCategories, getCategoryBySlug } from "@/lib/api";
import styles from "../page.module.css";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category: categorySlug } = await params;
    const category = await getCategoryBySlug(categorySlug);

    if (!category) {
        notFound();
    }

    const products = await getProductsByCategory(categorySlug);
    const categories = await getCategories();

    return (
        <div className={`container ${styles.container}`}>
            <aside className={styles.sidebar}>
                <h2 className={styles.sidebarTitle}>Categories</h2>
                <ul className={styles.categoryList}>
                    <li>
                        <Link href="/shop">All Products</Link>
                    </li>
                    {categories.map((c) => (
                        <li key={c.id}>
                            <Link
                                href={`/shop/${c.slug}`}
                                className={c.slug === categorySlug ? styles.activeCategory : ""}
                            >
                                {c.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className={styles.main}>
                <h1 className={styles.pageTitle}>{category.name}</h1>
                <p className={styles.categoryDescription}>{category.description}</p>
                <div className={styles.grid}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.title}
                            slug={product.slug}
                            price={product.price}
                            category={category.name}
                            image={product.images[0]?.url || ""}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}
