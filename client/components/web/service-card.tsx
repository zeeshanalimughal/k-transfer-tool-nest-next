import { cn } from '@/lib/utils'
import { IService } from '@/types/ui'
import Image from 'next/image'
import React from 'react'

function ServiceCard({ service, id }: { service: IService, id: number }) {
    return (
        <div className={`p-6 text-center flex flex-col items-center justify-center lg:border-b-2 lg:border-r-2 ${[3, 6, 9, 12].includes(id) ? "lg:border-e-0" : ""} ${[10, 11, 12].includes(id) ? "lg:border-b-0" : ""}`}>
            <div className="flex justify-center items-center h-8 w-8 mb-4  relative">
                <Image layout='fill' src={service.icon} alt={service.heading} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{service.heading}</h3>
            <p className="text-gray-600 px-2 lg:px-5">{service.description}</p>
        </div>
    )
}
export default ServiceCard