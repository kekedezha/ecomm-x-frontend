import { general1, general2, passion1, passion2, passion3, birth1, birth2, giving1, giving2, giving3 } from "@/lib/story";

export default function Story() {
    return (
        <div className="p-6 mx-auto w-full bg-white/80 backdrop-blur-md">
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
                <div className="mx-auto flex-col mt-32">
                    <h3>THE BIRTH OF ALVÉOLE</h3>
                    <p className="max-w-2xl text-left">{birth1}</p>
                    <p className="max-w-2xl text-left">{birth2}</p>
                </div>
                <div className="mx-auto flex-col justify-items-end mt-32">
                    <h3>THE GIFT THAT KEEPS ON GIVING</h3>
                    <p className="max-w-2xl text-left">{giving1} <i>The Great British Baking Show</i>.</p>
                    <p className="max-w-2xl text-left">{giving2}</p>
                    <p className="max-w-2xl text-left">{giving3}</p>
                </div>
            </div>
        </div>
    );
}