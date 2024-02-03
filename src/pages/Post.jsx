import { Link, useParams } from "react-router-dom";
import Card from "../components/Card";
import useFetchSinglePost from "../hooks/useFetchSinglePost";
import Spinner from "../components/Spinner";
import { useErrorBoundary } from "react-error-boundary";

const Post = () => {
    const { id } = useParams()
    const { isLoading, error, post } = useFetchSinglePost(id)
    const { showBoundary } = useErrorBoundary()

    if (isLoading) return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Spinner />
        </div>
    )

    if (error) {
        showBoundary(error)
    }

    if (!post || post.length === 0) return <p className="flex justify-center items-center">No Posts avilable</p>
    return post && (
        <div className="flex  justify-center items-center h-full">
            <div className="max-w-lg mt-16">
                <Card>
                    <h2 className="font-semibold capitalize text-lg">{post.data.title}</h2>
                    <p>{post.data.description}</p>
                    <p className="postCredit mt-8">
                        <Link to={`/post/edit/${post.data._id}`}>Edit Post</Link>
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default Post;
