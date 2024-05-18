import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import ETOA_footer from '@/assets/images/ETOA_footer.png.png'
import Image from 'next/image'
function Footer() {
    return (
        <div className='w-full pt-20 pb-8 bg-gray-100'>
            <div className="container">
                <Logo className='w-14 h-14 min-w-14 min-h-14 rounded-2xl text-2xl ' textSize='text-[22px]' hideLogoTitle={false}/>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8">
                    <div className="flex flex-col gap-3">
                        <span className='font-extrabold text-gray-700 mb-2'>Company</span>
                        <Link href="#">About</Link>
                        <Link href="#">Testimonials</Link>
                        <Link href="#">Privacy Policy</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className='font-extrabold text-gray-700 mb-2'>Popular destinations</span>
                        <div className="flex gap-8">
                            <div className="flex flex-col gap-3">
                                <Link href="#">Italy</Link>
                                <Link href="#">Spain</Link>
                                <Link href="#">Japan</Link>
                                <Link href="#">New Zealand</Link>
                                <Link href="#">Germany</Link>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Link href="#">United Kingdom</Link>
                                <Link href="#">France</Link>
                                <Link href="#">Czech Republic</Link>
                                <Link href="#">Ireland</Link>
                                <Link href="#">Norway</Link>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col gap-3">
                        <span className='font-extrabold text-gray-700 mb-2'>More</span>
                        <Link href="#">Trip Planner</Link>
                        <Link href="#">Countries</Link>
                        <Link href="#">Blog</Link>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <div className="w-28 h-20 relative">
                            <Image src={ETOA_footer} objectFit='contain' alt="ETOA Member" className="mb-4" layout='fill' />
                        </div>
                        <span className='text-sm text-gray-700'>MEMBER OF EUROPEAN TOURISM ASSOCIATION</span>
                        <div className="flex space-x-4 mt-4">
                            <Link href="#" className="text-gray-700 text-xl"><FaFacebookF /></Link>
                            <Link href="#" className="text-gray-700 text-xl"><FaTwitter /></Link>
                            <Link href="#" className="text-gray-700 text-xl"><FaInstagram /></Link>
                            <Link href="#" className="text-gray-700 text-xl"><FaPinterest /></Link>
                        </div>
                    </div>
                </div>
                <div className="text-center text-gray-700 text-sm mt-8">
                    &copy; cmstraveltools 2014-2024
                </div>
            </div>
        </div>
    )
}

export default Footer