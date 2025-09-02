"use client"

import contactImage from '../assets/images/pinar-kucuk-3-PfUgbyWEs-unsplash.jpg';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from "zod";

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

// Form schema
const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    phoneNumber: z.string().length(10, "Phone number must be include area code!"),
    email: z.email("Please enter a proper email."),
    comments: z.string().max(160, "Comments must not be longer than 160 characters.").optional(),
})



export default function Contact() {
    // 1. Define form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            comments: ""
        }
    })

    // 2. Define a submit handler 
    function onSubmit(values: z.infer<typeof formSchema>) {
        toast.info(`${values.firstName}, thanks for submitting the following details! We'll keep in touch.`, {
            description: (
                <div>
                    <p>First Name: {values.firstName}</p>
                    <p>Email: {values.email}</p>
                </div>
            )
        });
    }

    function onEmailDiscount() {
        toast.info('Thanks for subscribing to our newsletter. An email with a 15% discount code will be send to you shortly!')
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className='border-box box-border leading-1'>
                <section className="flex justify-between items-stretch mt-[100px] py-[50px] px-[1vw] overflow-x-hidden">
                    <div className='basis-[53%] box-border leading-1'>
                        <h2 className='font-cherry text-7xl uppercase my-16'>Contact Us</h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-wrap gap-8 box-border leading-1'>
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem
                                            className='basis-[calc(50%_-_2rem)]'
                                        >
                                            <FormControl>
                                                <Input placeholder='First Name' {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem
                                            className='basis-[calc(50%_-_2rem)]'
                                        >
                                            <FormControl>
                                                <Input placeholder='Last Name' {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem
                                            className='basis-[calc(50%_-_2rem)]'
                                        >
                                            <FormControl>
                                                <Input type="tel" placeholder='Phone Number' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem
                                            className='basis-[calc(50%_-_2rem)]'
                                        >
                                            <FormControl>
                                                <Input placeholder='Email' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                <FormField
                                    control={form.control}
                                    name="comments"
                                    render={({ field }) => (
                                        <FormItem
                                            className='basis-[calc(100%_-_2rem)] min-h-[30vh]'
                                        >
                                            <FormControl>
                                                <Textarea placeholder='Tell us what you need...' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                <div className='basis-full py-0 px-8 flex content-start'>
                                    <div className='fit-content relative overflow-hidden cursor-pointer'>
                                        <Button className='outline-none padding cursor-pointer text-2xl uppercase w-full'
                                            type="submit"
                                        >
                                            Send
                                        </Button>
                                    </div>
                                </div>

                            </form>
                        </Form>
                    </div>
                    <div className="basis-[47%] relative overflow-hidden rounded-3xl flex">
                        <img
                            src={contactImage}
                            alt="Beautiful shop front. Photo by Pinar Kucuk on Unsplash."
                            className="w-full h-full object-cover rounded-3xl"
                        />
                    </div>
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
        </div>
    );
}