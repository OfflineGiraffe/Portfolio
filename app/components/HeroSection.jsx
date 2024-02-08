"use client"
import React from 'react'
import Image from 'next/image'
import ExampleComponent from '../styles/animation'
import { motion } from 'framer-motion'
import Sunrising from '../styles/Sunrising'

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'> 
          <motion.div 
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-300'>
                Hello, I'm
                </span>
                <br></br>
                <ExampleComponent/>
            </h1>
            <p className='text-[white] text-base sm:text-lg mb-6 lg:text-xl'>
              
            </p>
            
          <div>
              <button className='px-1 py-1 w-fit sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 to-secondary-200 hover:bg-slate-200 text-white'>
                <span className='block bg-[blue-300] hover:bg-slate-200 hover:text-[black] rounded-full px-5 py-2'>
                  Hire me!
                </span>
              </button>
              <a href="https://docs.google.com/document/d/10lOQtXBmrTcF-ANOKAHEBF8TWTSGKG-yPZSvTKpODfw/edit" target="_blank">
                <button className='px-1 py-1 w-fit sm:w-fit rounded-full bg-gradient-to-br from-primary-400 to-secondary-200 text-white'>
                  <span className='block bg-[blue-300] hover:bg-slate-200 hover:text-[black] rounded-full px-5 py-2'>
                    Check out my resume!
                  </span>
                </button>
              </a>
          </div>

          </motion.div>
          <motion.div 
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          className='col-span-5 place-self-center mt-4 lg:mt-0
              relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>

              <Image 
              src="/images/boy.png"
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={200}
              height={200}>
              </Image>
          </motion.div>
        </div>

      </section>
  )
}

export default HeroSection