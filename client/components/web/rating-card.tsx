import { Star } from 'lucide-react'
import React from 'react'

function RatingCard({ title }: { title: string }) {
  return (
    <div className='py-2 px-4 bg-white rounded-md border-[1px] border-gray-300 flex flex-col gap-2'>
      <div className='w-full bg-gray-100 px-10 py-5 rounded-md rounded-s-none min-h-24 flex items-center relative before:absolute  before:content-[""] before:w-1 before:h-full before:rounded-lg before:left-0 overflow-x-hidden before:bg-gray-900'>
        <h2 className='text-xl font-bold tracking-tight' >{title}</h2>
      </div>
      <div className="flex justify-between items-center gap-1">
        <div className='flex items-center gap-1'>
          <Star size={24} className='stroke-yellow-600 fill-yellow-600' />
          <Star size={24} className='stroke-yellow-600 fill-yellow-600' />
          <Star size={24} className='stroke-yellow-600 fill-yellow-600' />
          <Star size={24} className='stroke-yellow-600 fill-yellow-600' />
          <Star size={24} className='stroke-yellow-600 fill-yellow-600' />
        </div>
        <span>300000+ users</span>
      </div>
    </div>
  )
}

export default RatingCard