import { general1, general2, passion1, passion2, passion3 } from "@/lib/story";

export default function Story() {
    return (
        <div className="relative">
            <main className="bg-white shadow-lg rounded-lg p-8 max-6xl mx-auto">
                <section className="mt-32">
                    <h1 className="text-3xl font-bold mb-6">Our Story</h1>
                    <p className="max-w-2xl text-left">{general1}</p>
                    <p className="max-w-2xl text-left">{general2}</p>
                </section>
                <div>
                    <div className="mx-auto flex-col justify-items-end mt-32">
                        <h3>A PASSION FOR BAKING</h3>
                        <p className="max-w-2xl text-left">{passion1} <i>The Great British Baking Show</i>.</p>
                        <p className="max-w-2xl text-left">{passion2}</p>
                        <p className="max-w-2xl text-left">{passion3}</p>
                    </div>
                    <div className="mx-auto flex-col justify-items-end mt-32">
                        <h3>THE BIRTH OF ALVÉOLE</h3>
                        <p className="max-w-2xl text-left">{passion1} <i>The Great British Baking Show</i>.</p>
                        <p className="max-w-2xl text-left">{passion2}</p>
                        <p className="max-w-2xl text-left">{passion3}</p>
                    </div>
                    <div className="mx-auto flex-col justify-items-end mt-32">
                        <h3>THE GIFT THAT KEEPS ON GIVING</h3>
                        <p className="max-w-2xl text-left">{passion1} <i>The Great British Baking Show</i>.</p>
                        <p className="max-w-2xl text-left">{passion2}</p>
                        <p className="max-w-2xl text-left">{passion3}</p>
                    </div>
                </div>
            </main>
        </div>
    );
}