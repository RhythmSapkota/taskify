import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updatePost } from '../services/apiPosts'
import { useNavigate } from 'react-router-dom'

const useUpdatePost = (id) => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const updateMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => {
      navigate(`/posts/${id}`)
      queryClient.invalidateQueries(['posts'])
    },
    onError: () => {
      console.log('Error in Post bro')
    },
  })
  return { updateMutation }
}

export default useUpdatePost
