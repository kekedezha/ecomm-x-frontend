import { useEffect, useRef, useState } from "react"

export function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => observer.disconnect();
    }, [])
    return (
        <footer
            ref={footerRef}
            className={`fixed bottom-0 left-0 right-0 z-0 bg-[#274472] h-[770px] md:h-[510px] flex flex-col justify-between py-10 px-4 md:px-8 shadow-2xl transition-all duration-1000 ease-out ${isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
                }`}>
            <div className="w-full max-w-6xl mx-auto flex flex-col justify-between">
                {/* Top Section - Brand, Navigation, Newsletter */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand & Contact Info */}
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-6 text-white">ALVÉOLE BAKERY</h3>
                        <div className="space-y-2 text-sm">
                            <p>123 Rue de la Boulangerie</p>
                            <p>Paris, 75001</p>
                            <p className="mt-4">bonjour@alveole.fr</p>
                            <p>(01) 23 45 67 89</p>
                        </div>
                        <div className="mt-6">
                            <p className="text-sm mb-2">Follow us on Instagram</p>
                            <div className="flex space-x-2">
                                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                                    <span className="text-teal-600 font-bold text-sm">📷</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="text-white">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            <div>
                                <h4 className="font-semibold mb-4">PRODUITS</h4>
                                <div className="space-y-2 text-sm">
                                    <p>Viennoiseries</p>
                                    <p>Pâtisseries</p>
                                    <p>Gâteaux</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">À PROPOS</h4>
                                <div className="space-y-2 text-sm">
                                    <p>Notre Histoire</p>
                                    <p>Contact</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="text-white">
                        <h4 className="text-lg font-bold mb-4">GET 15% OFF YOUR FIRST ORDER</h4>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="EMAIL"
                                className="flex-1 px-4 py-3 rounded-full bg-pink-300 placeholder-white text-white border-none focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="px-6 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-colors">
                                JOIN
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <h1 className="font-cherry text-6xl md:text-8xl lg:text-9xl font-black text-white/20 tracking-wider">
                        ALVÉOLE
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm mt-8">
                    <p>Copyright 2025 | Alvéole Bakery</p>
                    <div className="flex space-x-4 mt-2 md:mt-0">
                        <p>Terms of use</p>
                        <span>|</span>
                        <p>Privacy policy</p>
                    </div>
                    <p className="mt-2 md:mt-0">Made by Christian Dezha</p>
                </div>
            </div>
        </footer>
    )
}