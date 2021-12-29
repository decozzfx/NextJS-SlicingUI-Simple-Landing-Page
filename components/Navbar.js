import React from 'react'
import Button from './Button'
import Logo from './Logo'
import Nav from './Nav'

const Navbar = () => {
    return (
        <nav className='flex items-center py-10 px-14'>
            <div className="w-3/12">
                <Logo/>
            </div>
            <div className="w-6/12">
                <Nav/>
            </div>
            <div className="w-3/12 text-right">
            <Button variant='primary'>Download</Button>
            </div>
        </nav>
    )
}

export default Navbar
