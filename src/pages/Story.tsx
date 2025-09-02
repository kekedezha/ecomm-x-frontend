import { general1, general2, passion1, passion2, passion3, birth1, birth2, giving1, giving2, giving3 } from "@/lib/story";
import { toast } from "sonner";

export default function Story() {
    function onEmailDiscount() {
        toast.info('Thanks for subscribing to our newsletter. An email with a 15% discount code will be send to you shortly!')
    }

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
    );
}