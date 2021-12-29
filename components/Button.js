import React from 'react'
import classNames from 'classnames'

const Button = ({variant, children, className}) => {
    const variants = {
        primary : 'btn ',
        secondary : 'bg-orange-400 hover:bg-orange-300 hover:border-orange-500 border-b-4 border-orange-600 inline-block rounded-lg text-white',
        outline : 'bg-transparent text-orange-500 font-semibold border-yellow-500 py-2 px-8 rounded-lg hover:border'
    }
    const pickedVarian = variants[variant]
    return (
        <button className={classNames("text-lg lg:py-3 font-semibold lg:px-8 md:text-sm md:py-2 sm:text-sm sm:font-normal sm:py-1 sm:px-2 sm:py-2",pickedVarian, className)}>
            <a>{children}</a>
        </button>
    )
}

export default Button
