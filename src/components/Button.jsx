const Button = ({
    children,
    type,
    classsName = '',
    ...props
}) => {
    return (
        <button
            className={`px-4 py-2 rounded-lg ${classsName}`}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
