import React from 'react'
import { cn } from '@/lib/utils';
import { Roboto } from 'next/font/google'
import { IToolType } from '@/types/ui';
import { Biohazard, CircleCheck, Plane } from 'lucide-react';
import Link from 'next/link';
const tools: IToolType[] = [
    {
        title: "ALLORATION",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel corporis, eum laboriosam atque impedit perferendis id enim culpa fugit! Quasi.',
        color: "before:bg-green-500",
        href: "/allocation",
        icon: <Biohazard size={90} className='z-0 text-green-100 opacity-70' />
    },
    {
        title: "REAL TIME",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel corporis, eum laboriosam atque impedit perferendis id enim culpa fugit! Quasi.',
        color: "before:bg-pink-500",
        href: "#",
        icon: <Plane size={90} className='z-0 text-pink-100 opacity-70' />
    },
    {
        title: "CONFIRMAION",
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel corporis, eum laboriosam atque impedit perferendis id enim culpa fugit! Quasi.',
        color: "before:bg-orange-500",
        href: "#",
        icon: <CircleCheck size={90} className='z-0 text-orange-100 opacity-70' />
    }
]

const roboto = Roboto({ weight: '500', style: 'normal', subsets: ['latin'] })
function ToolsCards() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-200 px-5 lg:px-20 xl:px-40 gap-5 lg:gap-10 min-h-96 items-center py-10">
            {tools.map((tool, index) => (
                <Link href={tool.href} key={index}>
                    <div className={`flex-1 bg-white px-10 py-8 rounded-md rounded-s-none min-h-24 flex flex-col justify-center relative before:absolute  before:content-[""] before:w-1 before:h-full before:rounded-lg before:left-0 overflow-x-hidden cursor-pointer ${tool.color}`}>
                        <span className='absolute top-12 -right-5' >
                            {tool.icon}
                        </span>
                        <div className="z-10">
                            <h2 className={cn(`text-2xl font-bold tracking-tight`, roboto.className)}>{tool.title}</h2>
                            <p className='text-sm text-gray-500 mt-1 pe-5'>{tool.description}</p>
                        </div>
                    </div>

                </Link>
            ))}
        </div>
    )
}

export default ToolsCards