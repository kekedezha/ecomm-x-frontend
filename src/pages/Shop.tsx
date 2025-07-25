import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/components/ProductCard";
import baguette from '../assets/ilham-putra-dY8F7ZlZvYU-unsplash.jpg';
import croissant from '../assets/montatip-lilitsanong-mxEyXazwOjo-unsplash.jpg';
import focaccia from '../assets/Sourdough-Focaccia-17.jpg';

// Temp products array. Will have separate file to retrieve products from backend
const allProducts: Product[] = [
    {
        id: "1",
        name: "Baguette",
        image: baguette,
        price: "4.00"
    },
    {
        id: "2",
        name: "Croissant",
        image: croissant,
        price: "5.00"
    },
    {
        id: "3",
        name: "Focaccia",
        image: focaccia,
        price: "5.00"
    },
];

export default function Shop() {
    return (
        <main className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Shop All Baked Goods</h1>
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {allProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </main>
    );
}