import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useCreatePosts from "../hooks/useCreatePosts";
import useUpdatePost from "../hooks/useUpdatePost";
import { useState } from "react";
import Diaog from "./Diaog";

const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().min(8).required(),
});

const PostForm = ({ post }) => {

    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            title: post?.title || "",
            description: post?.description || "",
        }
    });

    // create post
    const { createPostMutaton } = useCreatePosts()

    // update post
    const id = post?._id
    const { updateMutation } = useUpdatePost(id)

    //   update / create posts
    const submit = async (data) => {
        if (post) {
            updateMutation.mutate({
                title: data.title,
                description: data.description,
                id: post?._id
            })
        } else {
            createPostMutaton.mutate({
                title: data.title,
                description: data.description,
            });
        }
    }
    return (
        <div className="flex justify-center items-center p-4">
            <form onSubmit={handleSubmit(submit)} className="w-full max-w-lg flex flex-col gap-6">
                <h1 className="text-center text-lg font-medium"> {post ? "Update Post" : "Create Post"}</h1>
                <Input
                    label="Title:"
                    placeholder="Enter Title"
                    className={`${errors.title ? "border-red-500" : "border-gray-200"} `}
                    {...register("title")} />
                {errors.title && (
                    <span className="text-red-500 first-letter:capitalize">{errors.title.message}</span>
                )}
                <TextArea label="Description:"
                    placeholder="Enter Description"
                    className={`${errors.description ? "border-red-500" : "border-gray-200"} `}
                    {...register("description")} />
                {errors.description && (
                    <span className="text-red-500 first-letter:capitalize">{errors.description.message}</span>
                )}
                <Button type="submit" disabled={updateMutation.isPending || createPostMutaton.isPending} className={`${updateMutation.isPending || createPostMutaton.isPending ? "cursor-not-allowed" : "cursor-pointer"} bg-green-500 py-2 font-semibold text-lg text-white rounded hover:bg-green-400`}>{post ? "Update Post" : "Create Post"}</Button>
                {post && <Button type="button" onClick={() => setIsOpen(true)} className="bg-red-500 font-semibold py-2 rounded  text-white text-lg hover:bg-red-400">Delete</Button>}
                {isOpen && <Diaog onClose={() => setIsOpen(false)} post={post} />}
            </form>
        </div >
    );
};

export default PostForm;
