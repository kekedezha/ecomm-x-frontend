import { ProductCard } from "@/components/ProductCard";
import type { Product } from "@/components/ProductCard";
import baguette from '../assets/ilham-putra-dY8F7ZlZvYU-unsplash.jpg';
import croissant from '../assets/montatip-lilitsanong-mxEyXazwOjo-unsplash.jpg';
import focaccia from '../assets/Sourdough-Focaccia-17.jpg';
import bakeryFront from '../assets/images/andy-li-RndRFJ1v1kk-unsplash.jpg';
import { toast } from "sonner";

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
    function onEmailDiscount() {
        toast.info('Thanks for subscribing to our newsletter. An email with a 15% discount code will be send to you shortly!')
    }
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
            <div className=''>
                <section className='rounded-[0 0 1.5rem 1.5rem] relative z-2 mt-[-1px] py-[50px] px-[4vw] overflow-x-hidden'>
                    <div className='bg-[#274472] rounded-4xl py-8 px-16 w-[60%] mx-auto flex flex-col items-center relative'>
                        <h2 className='text-white text-6xl text-center font-cherry mb-6'>GET 15% OFF YOUR FIRST ORDER</h2>
                        <p className='text-white leading-5 mb-6'>Subscribe to our newsletter and get 15% off your first purchase!</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="EMAIL"
                                className="flex-1 px-4 py-3 rounded-full bg-pink-300 placeholder-white text-white border-none focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                onClick={onEmailDiscount}
                                className="px-6 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors"
                                type='button'
                            >
                                JOIN
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}