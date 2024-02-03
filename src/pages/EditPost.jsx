import { useParams } from "react-router-dom";
import PostForm from "../components/PostForm";
import useFetchSinglePost from "../hooks/useFetchSinglePost";


const EditPost = () => {
    const { id } = useParams()
    const { post } = useFetchSinglePost(id)
    return (
        <div>
            <PostForm post={post.data} />
        </div>
    );
};

export default EditPost;
