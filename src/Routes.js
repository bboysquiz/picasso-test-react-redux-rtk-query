import { Route, Routes } from "react-router-dom"
import PostsList from "./components/PostsList";
import PostDetails from "./components/PostDetails";

const Routes = () => {
  return (
    <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/:postId" element={<PostDetails />}/>
    </Routes>
  )
}

export default Routes