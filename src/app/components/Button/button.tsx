import React from 'react'
// - - - -

const Button = ({ children }: any) => {
    return (
        <div
            className="bg-orange-400"
        >
            <button>{children}</button>
        </div>
    )
}

export default Button
