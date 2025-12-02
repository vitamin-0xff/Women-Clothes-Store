import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.brand}>
                    <h3 className={styles.logo}>VELORA</h3>
                    <p className={styles.tagline}>Minimalist Luxury for the Modern Woman.</p>
                    <div className={styles.socials}>
                        <Link href="#" aria-label="Instagram"><Instagram size={20} /></Link>
                        <Link href="#" aria-label="Twitter"><Twitter size={20} /></Link>
                        <Link href="#" aria-label="Facebook"><Facebook size={20} /></Link>
                    </div>
                </div>

                <div className={styles.links}>
                    <div className={styles.column}>
                        <h4>Shop</h4>
                        <Link href="/new-arrivals">New Arrivals</Link>
                        <Link href="/clothing">Clothing</Link>
                        <Link href="/accessories">Accessories</Link>
                        <Link href="/sale">Sale</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Support</h4>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/shipping">Shipping & Returns</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                    <div className={styles.column}>
                        <h4>Legal</h4>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>

                <div className={styles.newsletter}>
                    <h4>Stay in the loop</h4>
                    <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
                    <form className={styles.form}>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit" className="btn btn-primary">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Velora. All rights reserved.</p>
            </div>
        </footer>
    );
}
