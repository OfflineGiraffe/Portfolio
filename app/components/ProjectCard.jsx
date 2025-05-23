import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl, language}) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group' 
                style={{
                        background: `url(${imgUrl})`, 
                        backgroundSize: "cover"
                        }}>

        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[white] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-40 transition-all duration-500'>
                <Link 
                        href={gitUrl} 
                        target="_blank"
                        className='h-14 w-14 border-2 mr-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <CodeBracketIcon 
                                className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'>

                        </CodeBracketIcon>
                </Link>
                <Link 
                        href={previewUrl} 
                        target="_blank"
                        className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'>
                        <EyeIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'>

                        </EyeIcon>
                </Link>
        </div>

        </div>
        <div className='text-white rounded-b-xl mt-3 bg-blue-300 py-6 px-4'> 
                <h5 className='text-xl font-semibold mb-2'>
                        {title}
                </h5>
                <h5 className=' font-semibold mb-2'>
                        {language}
                </h5>
                <p className='text-#ADB7BE'> 
                        {description}
                </p>
        </div>
    </div>
  )
}
