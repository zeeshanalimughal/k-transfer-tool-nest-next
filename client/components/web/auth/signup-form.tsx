import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookSquare } from "react-icons/fa"

export function SignUpForm() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className='bg-green-700 hover:bg-green-800'>Sign Up</Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-screen-xl rounded-s-3xl bg-gray-100" closRight={true}>
                <div className="flex justify-center items-center h-full w-full">
                    <form className="w-full md:w-2/4 lg:w-1/2 xl:w-2/4 px-10">
                        <SheetTitle className="text-3xl text-gray-900 text-center mb-6">Create your account</SheetTitle>
                        <Button className='w-full py-6 bg-white text-lg flex items-center gap-2 rounded-md border-[1px]' variant={"secondary"} >
                            <Image src="/icons/google-icon.svg" width={20} height={20} alt="google" />
                            Continue with Google
                        </Button>
                        <Button className='w-full py-6 bg-blue-600 hover:bg-blue-700 text-white my-2 text-lg flex items-center gap-2 rounded-md border-[1px]' variant={"secondary"} >
                            <FaFacebookSquare className='text-xl ' />
                            Continue with Facebook
                        </Button>

                        <Label className='text-gray-900 my-8 text-center text-lg block font-bold'>or</Label>

                        <Input type="email" className='w-full py-6 focus-visible:ring-0 border-[1px] my-4' placeholder="Enter your email" />
                        <Input type="password" className='w-full py-6 focus-visible:ring-0 focus:outline-none border-[1px] my-4' placeholder="Enter your password" />
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full py-6 mt-6 text-lg">SIGN UP</Button>

                        <div className="my-5 text-center">
                            Having trouble? <Link href="#" className="text-blue-600 font-normal text-md">Get Help</Link>
                        </div>
                        <Separator className="my-6 h-0.5" />
                        <div className="my-5 text-center">
                            Already have and account? <Link href="#" className="text-blue-600 font-normal text-md">Log In</Link>
                        </div>
                    </form>
                </div>
            </SheetContent>
        </Sheet >
    )
}
