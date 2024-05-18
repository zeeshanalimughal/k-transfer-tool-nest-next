import React from 'react'
import { services } from '@/constants/data'
import ServiceCard from './service-card'

function OurService() {
    return (
        <div className='w-full bg-white px-10 md:px-20 lg:px-30 xl:px-72 py-20'>
            <div className="flex flex-col gap-2 justify-center items-center text-center">
                <h2 className="uppercase text-2xl font-extrabold text-gray-900">
                    Optimize Your Fleet Management Now
                </h2>
                <h3 className="uppercase text-lg font-normal text-gray-900">
                    Simplify reservations and ensure reliable transportation with our service.
                </h3>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                {services?.map((service, index) => (
                    <ServiceCard key={index} id={index + 1} service={service} />
                ))}
            </div>
        </div>
    )
}

export default OurService