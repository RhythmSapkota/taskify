import { useRef } from "react";
import Button from "./Button";
import useDeletePost from "../hooks/useDeletePost";
import { useNavigate } from "react-router-dom";

const Diaog = ({ onClose, post }) => {
    const modalRef = useRef(null)
    const navigate = useNavigate()

    // delete post
    const { deletePostMutaton } = useDeletePost()
    const handleDelete = () => {
        deletePostMutaton.mutate({ id: post?._id })
        navigate('/posts')
    }

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose()
        }
    }

    const handleCancel = () => {
        onClose();
    };
    return <section
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm text-white flex justify-center items-center"
    >
        <div className="mt-10 flex flex-col max-w-md mx-2 sm:mx-0">
            <div className="bg-white rounded-xl px-4 sm:px-10 py-10 flex flex-col items-center gap-5">
                <h1 className="text-xl font-medium text-black">
                    Are you absolutely sure?
                </h1>
                <p className=" text-md font-semibold text-center text-black/30">
                    This action cannot be undone. This will permanently delete your data.
                </p>
                <div className="flex items-center justify-end gap-8 w-full">
                    <Button type="button" className="bg-black text-white py-2 px-4 text-semibold rounded "
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button className="bg-red-500 text-white py-2 px-4 text-semibold rounded "
                        onClick={handleDelete}
                    >
                        Delete
                    </Button>
                </div>


            </div>
        </div>
    </section >
};

export default Diaog;
