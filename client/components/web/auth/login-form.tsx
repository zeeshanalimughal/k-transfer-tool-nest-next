import { loginAction } from "@/actions/auth/action"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { LogIn } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { SingInFormValues, signInSchema } from "@/schema/authentication"
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"

export function LoginForm() {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<SingInFormValues>({
        resolver: zodResolver(signInSchema),
        defaultValues: { email: "", password: "" }
    });

    const onSubmit = async (data: SingInFormValues) => {
        try {
            setLoading(true);
            const response = await signIn("credentials", { redirect: false, ...data });
            if (response?.error) {
                toast({
                    variant: 'destructive',
                    title: "Invalid credentials! Please try again.",
                });
                return
            }
            toast({
                variant: 'success',
                title: "Logged in successfully!",
            });
            setTimeout(() => {
                form.reset()
                router.push('/');
            }, 1200)
        } catch (error: any) {
            toast({
                variant: 'destructive',
                title: error?.message,
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer">
                    <LogIn size={18} strokeWidth={2.6} />
                    <span className='font-extrabold text-gray-700'>Login</span>
                </div>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-screen-xl rounded-s-3xl bg-gray-100" closRight={true}>
                <div className="flex justify-center items-center h-full w-full">
                    <Form {...form}>
                        <form className="w-full md:w-2/4 lg:w-1/2 xl:w-2/4 px-10" onSubmit={form.handleSubmit(onSubmit)}>
                            <SheetTitle className="text-3xl text-gray-900 text-center mb-6">Log In</SheetTitle>
                            <Button className='w-full py-6 bg-white text-lg flex items-center gap-2 rounded-md border-[1px]' variant={"secondary"} onClick={(e) => {
                                e.preventDefault()
                                signIn("google", { redirect: true, callbackUrl: "/" })
                            }} >
                                <Image src="/icons/google-icon.svg" width={20} height={20} alt="google" />
                                Continue with Google
                            </Button>
                            <Label className='text-gray-900 my-8 text-center text-lg block font-bold'>or</Label>
                            <div className="grid grid-cols-1 gap-3">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={loading}
                                                    placeholder="Enter email"
                                                    {...field}
                                                    className='w-full py-6 focus-visible:ring-0 border-[1px] my-4'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={loading}
                                                    type="password"
                                                    placeholder="Enter password"
                                                    {...field}
                                                    className='w-full py-6 focus-visible:ring-0 focus:outline-none border-[1px] my-4'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full py-6 mt-6 text-lg">Log In</Button>

                            <div className="my-5 text-center">
                                Having trouble? <Link href="#" className="text-blue-600 font-normal text-md">Get Help</Link>
                                <br />
                                <Link href={"#"} className="text-blue-600 font-normal text-md">Forget your password? </Link>
                            </div>
                            <Separator className="my-6 h-0.5" />

                            <div className="my-5 text-center">
                                Don&apos;t have an account yet? <Link href="#" className="text-blue-600 font-normal text-md">Sign Up</Link>
                            </div>
                        </form>

                    </Form>
                </div>
            </SheetContent>
        </Sheet >
    )
}
