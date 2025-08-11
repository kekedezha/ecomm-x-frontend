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
            className={`fixed bottom-0 left-0 right-0 z-0 bg-blue-800 h-80 flex items-end py-8 px-8 shadow-2xl transition-all duration-1000 ease-out ${isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-20 opacity-0'
                }`}>
            <div className="w-full max-w-6xl mx-auto" >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="text-white">
                        <h3 className="text-xl font-bold mb-4 text-amber-300">Alvéole Boulangerie</h3>
                        <p className="text-blue-100 leading-relaxed">
                            Créant des souvenirs sucrés depuis 1995.
                            Chaque jour, nous préparons nos pâtisseries avec amour et tradition.
                        </p>
                    </div>
                    <div className="text-white">
                        <h4 className="text-lg font-semibold mb-4 text-amber-300">Horaires</h4>
                        <div className="text-blue-100 space-y-2 text-sm">
                            <p>Lundi - Vendredi: 7h00 - 19h00</p>
                            <p>Samedi: 8h00 - 20h00</p>
                            <p>Dimanche: 8h00 - 18h00</p>
                        </div>
                    </div>
                    <div className="text-white">
                        <h4 className="text-lg font-semibold mb-4 text-amber-300">Contact</h4>
                        <div className="text-blue-100 space-y-2 text-sm">
                            <p>📍 123 Rue de la Boulangerie</p>
                            <p>📞 +33 1 23 45 67 89</p>
                            <p>✉️ bonjour@alveole.fr</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-cherry text-8xl">
                        Alvéole
                    </h2>
                </div>
                <div className="flex justify-between px-8 w-full">
                    <p>Copyright 2025 | Alvéole - Pain & Pâtisserie</p>
                    <p>Terms of Use | Privacy Policy</p>
                    <p>Made by Christian Dezha</p>
                </div>
            </div>
        </footer>
    )
}