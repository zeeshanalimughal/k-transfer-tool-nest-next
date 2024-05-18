import React from 'react'
import { cn } from '@/lib/utils';
import { Rubik } from 'next/font/google';
const rubik = Rubik({ subsets: ["latin"] });
interface ILogoParams {
    className?: string;
    textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | `text-[${string}]`,
    hideLogoTitle?: boolean
}
function Logo({ className, textSize, hideLogoTitle = true }: ILogoParams) {
    return (
        <div className={cn("flex items-center gap-2 text-lg flex-wrap", rubik.className)}>
            <div className={cn("w-[38px] h-[38px] tracking-widest rounded-xl bg-blue-500 text-white font-extrabold flex justify-center items-center", className)}>TT</div>
            <span className={cn('font-[900] tracking-wider', hideLogoTitle ? "hidden lg:flex" : "flex", textSize)}>
                TRANSFERTOOLS
            </span>
        </div>
    )
}

export default Logo