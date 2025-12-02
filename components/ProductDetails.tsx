"use client";

import { useState } from "react";
import { Star, Truck, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./ProductDetails.module.css";

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    sizes: string[];
    colors: string[];
}

export default function ProductDetails({ product }: { product: Product }) {
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [activeImage, setActiveImage] = useState(product.images[0]);
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: 1,
            size: selectedSize,
            color: selectedColor
        });
    };

    return (
        <div className={`container ${styles.page}`}>
            <div className={styles.gallery}>
                <div className={styles.mainImage} style={{ backgroundImage: `url(${activeImage})` }} />
                <div className={styles.thumbnails}>
                    {product.images.map((img, i) => (
                        <div
                            key={i}
                            className={`${styles.thumbnail} ${activeImage === img ? styles.activeThumbnail : ''}`}
                            style={{ backgroundImage: `url(${img})` }}
                            onClick={() => setActiveImage(img)}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.details}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{product.name}</h1>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    <div className={styles.rating}>
                        <div className={styles.stars}>
                            {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                        </div>
                        <span>(12 reviews)</span>
                    </div>
                </div>

                <p className={styles.description}>{product.description}</p>

                <div className={styles.options}>
                    <div className={styles.optionGroup}>
                        <label>Color: <span>{selectedColor}</span></label>
                        <div className={styles.colors}>
                            {product.colors.map((color) => (
                                <button
                                    key={color}
                                    className={`${styles.colorBtn} ${color === selectedColor ? styles.selectedColor : ''}`}
                                    title={color}
                                    style={{ backgroundColor: color.toLowerCase() === 'champagne' ? '#F7E7CE' : color.toLowerCase() }}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.optionGroup}>
                        <label>Size: <span>{selectedSize}</span></label>
                        <div className={styles.sizes}>
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`${styles.sizeBtn} ${size === selectedSize ? styles.selectedSize : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.actions}>
                    <button className="btn btn-primary" style={{ width: '100%' }} onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                    <p className={styles.shipping}>
                        <Truck size={16} /> Free shipping on orders over $200
                    </p>
                    <p className={styles.shipping}>
                        <ShieldCheck size={16} /> Secure checkout
                    </p>
                </div>
            </div>
        </div>
    );
}
