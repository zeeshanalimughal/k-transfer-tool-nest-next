import React from 'react'
import Image from 'next/image'
function TrustedByClients() {
    return (
        <div className='w-full h-44 bg-white py-28 flex flex-col gap-3 justify-center items-center relative'>
            <Image src={"/images/clients.png"} className='' objectFit='cover' layout='fill' alt='clients'/>
        </div>
    )
}
export default TrustedByClients