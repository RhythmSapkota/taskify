import Button from "./Button";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
    return (
        <div className="  flex items-center justify-center p-12">
            <div className="bg-white border border-gray-100 rounded-md p-12 flex-1 max-w-lg text-center">
                <h1 className="mb-4">
                    Something went wrong
                </h1>
                <p className="font-poppins text-gray-500 mb-8">
                    Please check your internet connection
                </p>
                <Button classsName="bg-black text-white" onClick={resetErrorBoundary}>
                    Try again
                </Button>
            </div>
        </div>
    )
};

export default ErrorFallback;