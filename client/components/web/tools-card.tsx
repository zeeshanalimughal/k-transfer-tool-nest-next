import React from 'react'
import { cn } from '@/lib/utils';
import { Roboto } from 'next/font/google'
import { tools } from '@/constants/data';
const roboto = Roboto({ weight: '500', style: 'normal', subsets: ['latin'] })
function ToolsCards() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-gray-200 px-5 lg:px-20 xl:px-40 gap-5 lg:gap-10 min-h-96 items-center py-10">
            {tools.map((tool, index) => (
                <div key={index} className={cn('flex-1 bg-white px-10 py-8 rounded-md rounded-s-none min-h-24 flex flex-col justify-center relative before:absolute  before:content-[""] before:w-1 before:h-full before:rounded-lg before:left-0 overflow-x-hidden cursor-pointer', tool.color)}>
                    <span className='absolute top-12 -right-5' >
                        {tool.icon}
                    </span>
                    <div className="z-10">
                        <h2 className={cn(`text-2xl font-bold tracking-tight`, roboto.className)}>{tool.title}</h2>
                        <p className='text-sm text-gray-500 mt-1 pe-5'>{tool.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ToolsCards