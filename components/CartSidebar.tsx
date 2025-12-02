"use client";

import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./CartSidebar.module.css";
import Link from "next/link";

export default function CartSidebar() {
    const { items, isCartOpen, toggleCart, removeFromCart, cartTotal } = useCart();

    return (
        <>
            <div
                className={`${styles.overlay} ${isCartOpen ? styles.open : ''}`}
                onClick={toggleCart}
            />
            <div className={`${styles.sidebar} ${isCartOpen ? styles.open : ''}`}>
                <div className={styles.header}>
                    <h2>Shopping Bag ({items.length})</h2>
                    <button onClick={toggleCart} className={styles.closeBtn}>
                        <X size={24} />
                    </button>
                </div>

                <div className={styles.items}>
                    {items.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Your bag is empty.</p>
                            <button onClick={toggleCart} className="btn btn-outline">Continue Shopping</button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={`${item.id}-${item.size}-${item.color}`} className={styles.item}>
                                <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }} />
                                <div className={styles.details}>
                                    <div className={styles.top}>
                                        <h4>{item.name}</h4>
                                        <button onClick={() => removeFromCart(item.id)} className={styles.removeBtn}>
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                    <p className={styles.variant}>{item.color} / {item.size}</p>
                                    <div className={styles.bottom}>
                                        <div className={styles.quantity}>
                                            <span>Qty: {item.quantity}</span>
                                        </div>
                                        <p className={styles.price}>${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.total}>
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <p className={styles.note}>Shipping and taxes calculated at checkout.</p>
                        <button className="btn btn-primary" style={{ width: '100%' }}>Checkout</button>
                    </div>
                )}
            </div>
        </>
    );
}
