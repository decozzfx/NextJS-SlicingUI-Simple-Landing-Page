import classNames from 'classnames'
import React from 'react'

const NavItem = ({href, children, schema}) => {
    const schemes = {
        light : 'text-gray-500 hover:text-opacity-70',
        selected : 'text-orange-400 font-semibold hover:text-opacity-80'
    }
    const pickedSchema = schemes[schema]
    return (
        <li>
            <a href={href} className={classNames('text-md  ',pickedSchema)}>{children}</a>
        </li>
    )
}

export default NavItem
