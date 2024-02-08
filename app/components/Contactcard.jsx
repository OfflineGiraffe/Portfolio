import React from 'react'
import Image from 'next/image'

export const Contactcard = ({imgUrl, title, urllink}) => {
  return (
    <div>
        <div className=' flex justify-center items-center'>
              <a href={urllink} target="_blank">
                        <Image 
                                src={imgUrl}
                                alt='hero image' 
                                className='transform transition duration-500 hover:scale-125 hover:opacity-40 flex justify-center items-center'
                                width={100}
                                height={100}
                        />
                </a>  
        </div>
                
        <div className='text-black mt-3 mb-3 py-3 rounded-2xl h-12 bg-white bg-opacity-50 flex justify-center'> 
                <h5 className='text-xl text-center font-thin mb-2'>
                        {title}
                </h5>
        </div>
    </div>
  )
}
