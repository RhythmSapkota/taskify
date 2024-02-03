import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createPost } from '../services/apiPosts'
import { useNavigate } from 'react-router-dom'

const useCreatePosts = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const createPostMutaton = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      navigate('/posts')
      queryClient.invalidateQueries(['posts'])
    },
    onError: () => {
      console.log('Error in Post bro')
    },
  })
  return { createPostMutaton }
}

export default useCreatePosts
