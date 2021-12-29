import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section >
            <div className='flex xl:h-[400px] md:h-[300px] sm:h-[250px]'>
                <div className='w-6/12 ml-10 px-8 2xl:mt-16 xl:mt-4 xl:ml-10 lg:mt-0 sm:mt-0 sm:ml-0'>
                <h1 className='2xl:text-6xl mt-14 font-semibold xl:text-5xl lg:text-4xl lg:mt-8 md:text-3xl md:mt-2 sm:mt-0 sm:text-2xl'>The eastiest way to manage financials</h1>
                <p className='2xl:mt-10 2xl:text-lg text-gray-500 lg:text-sm lg:mt-8 md:text-sm sm:mt-2 sm:text-xs md:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, consequuntur? Omnis rerum totam tempora consequatur iure maxime ut repellendus rem? Fugit sit, saepe voluptatum praesentium officiis doloribus voluptates illum tempore.</p>
                
                <div className='flex items-center mt-10 '>
                    <Button variant='secondary'>Get Started</Button>
                    <div className='flex ml-20 sm:ml-5  md:ml-10 xl:py-1 xl:px-3 items-center space-x-1 rounded-lg px-2 py-2 border-pumpkin-500 hover:border sm:px-1 sm:py-0 '>
                        <img src="play.svg" className='py-2 md:px-1 lg:ml-0 md:ml-2 sm:h-8 ' />
                        <h3 className='font-semibold text-pumpkin-500 items-center sm:text-sm'>Play Preview</h3>
                    </div>
                </div>                
                </div>
                <div className='w-6/12'>
                    <img src="e.svg" className='h-full w-full'/>
                </div>
            </div>
            
        </section>
    )
}

export default Hero
