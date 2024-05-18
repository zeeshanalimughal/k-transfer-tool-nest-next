import { cn } from '@/lib/utils'
import React from 'react'
function SectionWrapper({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={cn("px-5 sm:px-24 md:px-24 lg:px-36 xl:px-72 py-10", className)}>{children}</div>
    )
}
export default SectionWrapper