import { useQuery } from '@tanstack/react-query'
import { getPost } from '../services/apiPosts'

const useFetchSinglePost = (id) => {
  const {
    isLoading,
    data: post,
    error,
  } = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id),
  })
  return { isLoading, error, post }
}

export default useFetchSinglePost
