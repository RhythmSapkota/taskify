import React, { useId } from 'react'

const TextArea = React.forwardRef(function Imput(
    { label, className = '', ...props },
    ref,
) {
    const id = useId()
    return (
        <div className="">
            {label && (
                <label className="inline-block text-lg font-semibold mb-1 pl-1" htmlFor={id}>
                    {label}
                </label>
            )}

            <textarea
                className={`px-3 py-2 rounded-lg bg-gray-50 focus:border-black text-black outline-none focus:bg-white duration-200 border h-32 border-gray-200 w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default TextArea