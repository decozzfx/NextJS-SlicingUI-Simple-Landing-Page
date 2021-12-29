import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className='ml-14 px-4 mt-5'>
                <h3 className='uppercase text-gray-400 font-bold text-lg'>Featured On</h3>
                    <div className='flex justify-left space-x-5 '>
                        <div className='w-20 h-20 mt-4'>
                            <img src="google.svg" />
                        </div>
                        <div className='w-20 h-20 mt-4'>
                            <img src="forbes.svg" />
                        </div>
                        <div className='w-20 h-20 mt-4'>
                            <img src="cnn.svg" />
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer
