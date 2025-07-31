import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/components/ProductCard";
import baguette from '../assets/ilham-putra-dY8F7ZlZvYU-unsplash.jpg';
import croissant from '../assets/montatip-lilitsanong-mxEyXazwOjo-unsplash.jpg';
import focaccia from '../assets/Sourdough-Focaccia-17.jpg';

// Place holder for bakery products. Will have a GET request to load all products from database
const featuredProducts: Product[] = [
    {
        id: "1",
        name: "Baguette",
        image: baguette,
        price: "6.99"
    },
    {
        id: "2",
        name: "Almond Croissant",
        image: croissant,
        price: "3.99"
    },
    {
        id: "3",
        name: "Focaccia",
        image: focaccia,
        price: "3.99"
    },
];

export default function Home() {
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Bienvenue à Alvéole!</h1>
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    )
}