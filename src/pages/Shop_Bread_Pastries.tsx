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
        price: "6.99"
    },
    {
        id: "2",
        name: "Sourdough Loaf",
        image: baguette,
        price: "5.99"
    },
    {
        id: "3",
        name: "Chocolate Chip Cookie",
        image: baguette,
        price: "1.99"
    },
    {
        id: "4",
        name: "Peanut Butter Cookie",
        image: croissant,
        price: "1.99"
    },
    {
        id: "5",
        name: "Almond Croissant",
        image: focaccia,
        price: "3.00"
    },
    {
        id: "6",
        name: "Blueberry Danish",
        image: baguette,
        price: "3.99"
    },
    {
        id: "7",
        name: "Chocolate Hazelnut Tart",
        image: croissant,
        price: "3.99"
    },
    {
        id: "8",
        name: "Fresh Fruit Tart",
        image: focaccia,
        price: "3.99"
    },
];

export default function Shop() {
    return (
        <div className="p-6 mx-auto max-w-6xl bg-white/80 backdrop-blur-md">
            <h1 className="text-3xl font-bold mb-6">Bread and Pastries</h1>
            <section className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
                {allProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
}