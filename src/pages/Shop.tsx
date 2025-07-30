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
        <div className="relative max-w-6xl pt-10 z-10">
            <div className="max-w-6xl bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 min-h-screen">
                <h1 className="text-3xl font-bold mb-6">Shop All Baked Goods</h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
                    {allProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
            </div>
        </div>
    );
}