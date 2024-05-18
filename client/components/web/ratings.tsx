import React from 'react'
import RatingCard from './rating-card'

function Ratings() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-200 px-5 lg:px-20 xl:px-40 gap-5 min-h-72 items-center py-10'>
      <RatingCard title="Target Time" />
      <RatingCard title="Reverse Planning" />
      <RatingCard title="Reviewing" />
    </div>
  )
}

export default Ratings