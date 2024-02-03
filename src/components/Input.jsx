import React, { useId } from 'react'

const Input = React.forwardRef(function Imput(
    { label, type = 'text', className = '', ...props },
    ref,
) {
    const id = useId()
    return (
        <div className="flex flex-col">
            {label && (
                <label className="inline-block mb-1 pl-1 text-lg font-semibold" htmlFor={id}>
                    {label}
                </label>
            )}

            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-gray-50 focus:border-black text-black outline-none focus:bg-white duration-200 border border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input