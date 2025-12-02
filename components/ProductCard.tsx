"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
}

export default function ProductCard({ id, name, price, category, image }: ProductCardProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id,
            name,
            price,
            image,
            quantity: 1,
            size: "M", // Default size for quick add
            color: "Default"
        });
    };

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Link href={`/product/${id}`}>
                    <div
                        className={styles.image}
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </Link>
                <button
                    className={styles.quickAdd}
                    aria-label="Quick Add"
                    onClick={handleAddToCart}
                >
                    <Plus size={20} />
                </button>
            </div>
            <div className={styles.details}>
                <span className={styles.category}>{category}</span>
                <Link href={`/product/${id}`} className={styles.name}>
                    {name}
                </Link>
                <span className={styles.price}>${price.toFixed(2)}</span>
            </div>
        </div>
    );
}
