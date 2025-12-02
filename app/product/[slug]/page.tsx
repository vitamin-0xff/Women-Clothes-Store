import { Metadata } from "next";
import ProductDetails from "@/components/ProductDetails";

// Mock data fetcher
const getProduct = (slug: string) => {
    return {
        id: slug,
        name: "Silk Evening Gown",
        price: 295.00,
        description: "Crafted from the finest mulberry silk, this evening gown features a fluid silhouette that drapes elegantly against the body. The bias cut ensures a flattering fit for all body types, while the delicate spaghetti straps add a touch of modern minimalism.",
        images: [
            "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: ["Champagne", "Black", "Emerald"]
    };
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const product = getProduct(params.slug);
    return {
        title: `${product.name} | Velora`,
        description: product.description,
    };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = getProduct(params.slug);
    return <ProductDetails product={product} />;
}
