import axios from 'axios'

const baseURL = 'https://api.freeapi.app/api/v1'

// axios context
const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
})

// list all posts
export const getPosts = async () => {
  try {
    const { data } = await Axios.get('/todos')
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// list single post
export const getPost = async (id) => {
  try {
    const { data } = await Axios.get(`/todos/${id}`)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// create post
export const createPost = async ({ title, description }) => {
  try {
    const { data } = await Axios.post('/todos', {
      title,
      description,
    })
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// update post
export const updatePost = async ({ title, description, id }) => {
  try {
    const { data } = await Axios.patch(`/todos/${id}`, {
      title,
      description,
    })
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// delete post
export const deletePost = async ({ id }) => {
  try {
    const { data } = await Axios.delete(`/todos/${id}`)
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
