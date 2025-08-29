import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/components/ProductCard";
import baguette from '../assets/ilham-putra-dY8F7ZlZvYU-unsplash.jpg';
import croissant from '../assets/montatip-lilitsanong-mxEyXazwOjo-unsplash.jpg';
import focaccia from '../assets/Sourdough-Focaccia-17.jpg';
import bakeryFront from '../assets/images/andy-li-RndRFJ1v1kk-unsplash.jpg';

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
        <div className="py-6 object-cover bg-">
            <img
                src={bakeryFront}
                alt="Inside the bakery at Alvéole, hypothetically. Photo by Andy Li on Unsplash."
                className="w-full h-screen object-cover -z-1"
            />
            <h1 className="text-8xl relative bottom-[450px] left-5 z-5 text-white font-bold">A BAKING <br /> LOVE AFFAIR</h1>
            <section className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    )
}