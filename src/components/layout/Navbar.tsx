import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function Navbar() {
    return (
        <header className="z-50 sticky top-0 w-full px-6 py-4 shadow-md bg-background/80 backdrop-blur-md">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                {/* Logo Brand / Home Page */}
                <Link to="/" className="text-2xl font-bold tracking-tight">
                    Alvéole
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/story">Story</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                {/* User Links */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm">
                        Cart
                    </Button>
                    <Button size="sm">Login</Button>
                </div>
            </div>
        </header>
    );
}