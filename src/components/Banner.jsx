import React from 'react'

export const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://media.assettype.com/hollywoodreporterindia%2F2026-09-23%2F8ckpcugm%2Fimage-1.jpg?w=1200&auto=format%2Ccompress&fit=max)`}}>
        <div className="text-white text-xl w-full text-center bg-gray-900/60 p-4">
            Heart of The Beast
        </div>
    </div>
  )
}
