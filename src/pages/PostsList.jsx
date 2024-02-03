import Card from "../components/Card";
import { Link } from "react-router-dom";
import useFetchPosts from "../hooks/useFetchPosts";
import Spinner from "../components/Spinner";
import { useErrorBoundary } from 'react-error-boundary'

const PostsList = () => {
    const { isLoading, data: post, error } = useFetchPosts()
    const { showBoundary } = useErrorBoundary()

    if (isLoading) {
        return (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Spinner />
            </div>
        )
    }
    if (error) {
        showBoundary(error)
    }

    if (!post || post.data.length === 0) return (
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"> + Add Some Posts</p>
    )

    return <div className="mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        {
            post && post.data.map((posts) => (
                <Card key={posts._id} className="mb-4">
                    <h1 className="font-semibold text-lg capitalize">{posts.title}</h1>
                    <p>{posts?.description.substring(0, 75)}...</p>
                    <p className="postCredit -ml-7">
                        <Link to={`/posts/${posts._id}`}>View Post</Link>
                    </p>
                </Card>
            ))
        }
    </div>;
};

export default PostsList;
