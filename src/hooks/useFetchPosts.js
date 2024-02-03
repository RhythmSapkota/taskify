import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../services/apiPosts'

// fetches lists of posts
const useFetchPosts = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })
  return { isLoading, error, data }
}

export default useFetchPosts
