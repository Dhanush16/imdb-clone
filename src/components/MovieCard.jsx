import React from 'react'

export const MovieCard = ({poster_path, name}) => {
  return (
    <div className='h-[40vh] w-[210px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex items-end' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
        <div className='text-white text-xl text-center w-full p-2 bg-gray-900/60 rounded-b-[10px]'>
            {name}
        </div>
    </div>
  )
}
