const Card = ({ children, className }) => {
    return <div className={`bg-white mb-5 p-5 rounded-md shadow-sm hover:shadow-xl ${className}`}>{children}</div>;
};

export default Card;
