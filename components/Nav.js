import React from 'react'
import NavItem from './NavItem'

const Nav = () => {
    
    return (
        <ul className='flex justify-center space-x-10'>
            <NavItem schema='selected'>Menu</NavItem>
            <NavItem schema='light'>Features</NavItem>
            <NavItem schema='light'>About</NavItem>
            <NavItem schema='light'>Contact</NavItem>
        </ul>
    )
}

export default Nav
