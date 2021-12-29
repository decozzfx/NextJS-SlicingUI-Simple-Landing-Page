import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='ml-14 px-4 xl:mt-10 sm:mt-8 sm:ml-4' >
                <h3 className='uppercase text-gray-400 font-bold text-lg md:text-sm md:mt-10 sm:text-sm'>Featured On</h3>
                    <div className='flex justify-left space-x-5 mt-4 2xl:w-80 xl:w-60 mb-5 lg:w-60 md:w-48 sm:w-36'>
                        <div>
                            <img src="google.svg" />
                        </div>
                        <div >
                            <img src="forbes.svg" />
                        </div>
                        <div >
                            <img src="cnn.svg" />
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer
