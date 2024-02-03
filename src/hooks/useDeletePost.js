import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deletePost } from '../services/apiPosts'
import { useNavigate } from 'react-router-dom'

const useDeletePost = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const deletePostMutaton = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      navigate('/posts')
      queryClient.invalidateQueries(['posts'])
    },
    onError: () => {
      console.log('Error in Post bro')
    },
  })
  return { deletePostMutaton }
}

export default useDeletePost
