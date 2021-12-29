import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section >
            <div className='flex'>
            <div className='w-6/12 ml-10 px-8'>
                <h1 className='text-6xl mt-14 font-semibold'>The eastiest way to manage financials</h1>
                <p className='mt-10 text-md text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, reiciendis! Dignissimos</p>
                <div className='flex items-center mt-10'>
                    <Button variant='secondary'>Get Started</Button>
                    <div className='flex ml-20 items-center rounded-lg border-pumpkin-500 hover:border '>
                        <img src="play.svg" className='py-2 px-2 ml-2' />
                        <h3 className='font-semibold text-pumpkin-500 items-center mr-4'>Play Preview</h3>
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
