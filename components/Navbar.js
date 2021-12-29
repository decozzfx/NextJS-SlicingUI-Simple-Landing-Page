import React, { useState } from 'react'
import Button from './Button'
import Logo from './Logo'
import Nav from './Nav'
import classNames from 'classnames'

const Navbar = () => {
    const [offCanvas, setOffCanvas] = useState(false)
    return (
        <>
        <nav>
            <div className='flex items-center xl:ml-5 py-10 px-14 md:px-8 sm:px-2'>
                <div className="w-3/12">
                    <Logo/>
                </div>
                <div className="w-6/12 md:block hidden">
                    <Nav dir='horizontal'/>
                </div>
                <div className="w-3/12 text-right md:block md:ml-4 sm:ml-56">
                <Button variant='primary'>Download</Button>
                </div>
                <div className="w-1/12 text-right md:hidden items-center right-0">
                    <img src="menu.svg" className='inline-block w-8' onClick={() => setOffCanvas(true)}/>
                </div>
            </div>
            <div className={classNames("fixed w-full h-full top-0 -bottom-20 p-10 z-10 bg-white mt-0 md:hidden transition-all", offCanvas ? 'right-0' : '-right-full')}>
                <img src="menu.svg" className='absolute right-16 top-12 w-8' onClick={() => setOffCanvas(false)}/>
                 <Nav dir='vertical'/>            
            </div>
        </nav>
        </>
    )
}

export default Navbar
