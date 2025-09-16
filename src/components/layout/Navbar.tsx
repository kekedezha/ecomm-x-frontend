import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Search, ShoppingBag } from "lucide-react";


export function Navbar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`z-50 fixed top-0 w-full px-10 py-4 mb-4transition-all duration-300 ${isScrolled
            ? 'bg-background shadow-md backdrop-blur-md'
            : 'bg-transparent'
            }`}>
            <div className="flex items-center justify-between max-w-6xl mx-auto font-bold">
                {/* Logo Brand / Home Page */}
                <Link to="/" className="text-4xl tracking-wider font-cherry">
                    ALVÉOLE
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-8 text-lg">
                    <Link to="/shop_bp" className="hover:text-foreground/80 transition-colors">
                        BREAD & PASTRIES
                    </Link>
                    <Link to="/shop_ct" className="hover:text-foreground/80 transition-colors">
                        COOKIES & TARTS
                    </Link>
                    <Link to="/story" className="hover:text-foreground/80 transition-colors">
                        STORY
                    </Link>
                    <Link to="/contact" className="hover:text-foreground/80 transition-colors">
                        CONTACT
                    </Link>
                </nav>

                {/* User Links */}
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="sr-only">Shopping cart</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}