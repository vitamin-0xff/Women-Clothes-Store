"use client";

import Link from "next/link";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import styles from "./Header.module.css";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.container}`}>
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu size={24} />
                </button>

                <Link href="/" className={styles.logo}>
                    VELORA
                </Link>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
                    <Link href="/shop" className={styles.link}>Shop</Link>
                    <Link href="/new-arrivals" className={styles.link}>New Arrivals</Link>
                    <Link href="/collections" className={styles.link}>Collections</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                </nav>

                <div className={styles.actions}>
                    <button className={styles.iconBtn} aria-label="Search">
                        <Search size={20} />
                    </button>
                    <button className={styles.iconBtn} aria-label="Account">
                        <User size={20} />
                    </button>
                    <button className={styles.iconBtn} aria-label="Cart" onClick={toggleCart}>
                        <ShoppingBag size={20} />
                        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                    </button>
                </div>
            </div>
        </header>
    );
}
