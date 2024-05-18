import AllocationFileUpload from '@/components/web/allocation-file-upload'
import OurService from '@/components/web/our-services'
import SectionWrapper from '@/components/web/section-wrapper'
import { transferToolsText } from '@/constants/data'
import Image from 'next/image'
import React from 'react'

function AllocationPage() {
    return (
        <div>
            <AllocationFileUpload />
            <SectionWrapper className="relative border-y-2">
                    <Image src="/images/glob-bg.png" layout='fill' className='absolute top-0 left-0 w-full h-full -z-10 hidden md:block object-cover' alt="allocation" />
                <div className="pb-16">
                    <h1 className="text-2xl font-bold text-gray-900 mb-5">Why should you choose this online service?</h1>
                    <ul className="list-decimal pl-5 flex flex-col gap-1">
                        {transferToolsText.map((text, index) => (
                            <li key={index}>{text}</li>
                        ))}
                    </ul>
                </div>
            </SectionWrapper>
            <OurService />
        </div>
    )
}

export default AllocationPage