import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function Navbar() {
    return (
        <header className="w-full px-6 py-4 shadow-sm bg-white">
            <div className="flex items-center justify-between max-w-6xl mx-auto">
                {/* Logo Brand / Home Page */}
                <Link to="/" className="text-2xl font-bold tracking-tight">
                    Ecomm Bakery
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link to="">Home</Link>
                    <Link to="">Shop</Link>
                    <Link to="">About</Link>
                    <Link to="">Contact</Link>
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