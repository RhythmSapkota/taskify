import { Navigate, Route, Routes } from "react-router-dom";
import AddPosts from "./pages/AddPOsts";
import Navbar from "./components/Navbar";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import PostsList from "./pages/PostsList";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Navigate replace to="posts" />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/post/edit/:id" element={<EditPost />} />
        <Route path="/add" element={<AddPosts />} />
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
    </>
  )
};

export default App;
