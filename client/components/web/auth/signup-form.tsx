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
import { useToast } from "@/components/ui/use-toast"
import { SingUpFormValues, signUpSchema } from "@/schema/authentication"
import AuthService from "@/services/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"

export function SignUpForm() {
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter();
    const { toast } = useToast();

    const form = useForm<SingUpFormValues>({
        resolver: zodResolver(signUpSchema),
        defaultValues: { name: "", email: "", password: "" }
    });

    const onSubmit = async (data: SingUpFormValues) => {
        try {
            console.log(data);
            setLoading(true);
            const response = await AuthService.signUp(data);
            if (response.statusCode === 200) {
                toast({
                    variant: 'success',
                    title: response.message,
                });
                setTimeout(() => {
                    form.reset()
                }, 1200)
            } else {
                throw new Error(response.message || response.error);
            }
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
                <Button className='bg-green-700 hover:bg-green-800'>Sign Up</Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-screen-lg rounded-s-0  sm:rounded-s-3xl bg-gray-100 p-0" closRight={true}>
                <div className="flex justify-center items-center h-full w-full">
                    <Form {...form}>

                        <form className="w-full md:w-2/4 lg:w-1/2 xl:w-2/4 px-2 md:px-10" onSubmit={form.handleSubmit(onSubmit)}>
                            <SheetTitle className=" text-2xl md:text-3xl text-gray-900 text-center mb-6">Create your account</SheetTitle>
                            <Button className='w-full py-5 bg-white text-md md:text-lg flex items-center gap-2 rounded-md border-[1px]' variant={"secondary"} onClick={(e) => {
                                e.preventDefault()
                                signIn("google", { signUp: true, redirect: true, callbackUrl: "/" })
                            }}>
                                <Image src="/icons/google-icon.svg" width={20} height={20} alt="google" />
                                Continue with Google
                            </Button>
                            <Label className='text-gray-900 my-3 text-center text-lg block font-bold'>or</Label>
                            <div className="grid grid-cols-1 gap-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    disabled={loading}
                                                    placeholder="Name"
                                                    {...field}
                                                    className='w-full py-5 focus-visible:ring-0 border-[1px] my-4'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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
                                                    className='w-full py-5 focus-visible:ring-0 border-[1px] my-4'
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
                                                    className='w-full py-5 focus-visible:ring-0 focus:outline-none border-[1px] my-4'
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full py-2 mt-4 text-lg">SIGN UP</Button>

                            <div className="my-3 text-center">
                                Having trouble? <Link href="#" className="text-blue-600 font-normal text-md">Get Help</Link>
                            </div>
                            <Separator className="my-3 h-0.5" />
                            <div className="my-3 text-center">
                                Already have and account? <Link href="#" className="text-blue-600 font-normal text-md">Log In</Link>
                            </div>
                        </form>

                    </Form>
                </div>
            </SheetContent>
        </Sheet >
    )
}
