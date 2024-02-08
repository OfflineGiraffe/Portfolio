import React from 'react'
import Image from 'next/image'
import { Contactcard } from './Contactcard'

const projectsData = [
        {
                id: 1,
                title: "Instagram: geoffrey_mok",
                image: "/images/instagram.png",
                urllink:"https://www.instagram.com/geoffrey__mok/"
        },
        {
                id: 2,
                title: "Facebook: Geoffrey Mok",
                image: "/images/facebook.png",
                urllink: "https://www.facebook.com/geoffrey.mok.33"
        },
        {
                id: 3,
                title: "LinkedIn: Geoffrey Mok",
                image: "/images/linkedin.png",
                urllink: "https://www.linkedin.com/in/geoffrey-mok-378839210/"
        },
]


const Contact = ( {id} ) => {
  return (
        <section  id={id} className='overflow-hidden relative'>
                <h1 className='text-center text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-300'>
                                My Contacts!
                        </span>
                </h1>

                <div
                        style={{
                                background:
                                'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
                        }}
                                className='from-red-300 to-transparent rounded-full h-80 w-80 z-0 blur-lg transform absolute right-16 translate-x-72 translate-y-4'>

                </div>

                <div 
                        style={{
                                background:
                                'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
                        }}
                                className='from-red-300 to-transparent rounded-full h-80 w-80 z-0 blur-lg transform absolute -translate-x-3/4 translate-y-3/4'>

                </div>
                        
                
                <div className='md:grid md:grid-cols-2 items-center px-40 mb-8'>
                        <div>
                                <Image 
                                src="/images/1648621193570.jpeg"
                                alt='hero image' 
                                className='rounded-2xl mt-10'
                                width={500}
                                height={500}>
                                </Image>
                        </div>

                        <ul className='gap-8 md:gap-12 py-8 translate-y-6'>
                        {projectsData.map((project) => (

                        <Contactcard key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        urllink={project.urllink}
                        />
                        ))}

                        </ul>
                        

                </div>
                
                
        </section>
  )
}

export default Contact