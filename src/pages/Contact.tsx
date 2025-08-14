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
import { Input } from '@/components/ui/input';

// Form schema
const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    phoneNumber: z.string().length(10, "Phone number must be include area code!"),
    email: z.email("Please enter a proper email.")
})


export default function Contact() {
    // 1. Define form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: ""
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        toast(`${values.firstName}, thanks for submitting the following details! We'll keep in touch.`, {
            description: (
                <div>
                    <p>First Name: {values.firstName}</p>
                    <p>Last Name: {values.lastName}</p>
                    <p>Phone Number: {values.phoneNumber}</p>
                    <p>Email: {values.email}</p>
                </div>
            )
        })
    }

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className='border-box box-border leading-1'>
                <section className="flex justify-between items-center mt-[100px] py-[50px] px-[4vw] overflow-x-hidden box-border leading-1">
                    <div className='basis-[60%] box-border leading-1'>
                        <h2 className='font-cherry text-7xl uppercase my-16'>Contact Us</h2>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-wrap gap-8 box-border leading-1'>
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder='First Name' {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder='Last Name' {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )} />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
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
                                        <FormItem>
                                            <FormControl>
                                                <Input placeholder='Email' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                <Button type='submit'>Submit</Button>
                            </form>
                        </Form>
                    </div>
                    <div className='w-full basis-[40%] relative overflow-hidden rounded-3xl aspect-[3/4]'>
                        <div className='w-full h-[120%] bottom-0 left-0 absolute box-border leading-1'>
                            <img
                                src={contactImage}
                                alt="Beautiful shop front. Photo by Pinar Kucuk on Unsplash."
                                className="rounded-md w-full h-full object-cover box-border leading-1"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}