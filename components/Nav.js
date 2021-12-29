import classNames from 'classnames'
import React from 'react'
import NavItem from './NavItem'

const Nav = ({dir}) => {
    const dirs = {
        vertical : 'flex-col text-center space-y-10 mt-16',
        horizontal : 'justify-center space-x-10'
    }
    const pickedDir = dirs[dir]
    return (
        <ul className={classNames("flex",pickedDir)}>
            <NavItem schema='selected'>Menu</NavItem>
            <NavItem schema='light'>Features</NavItem>
            <NavItem schema='light'>About</NavItem>
            <NavItem schema='light'>Contact</NavItem>
        </ul>
    )
}

export default Nav
