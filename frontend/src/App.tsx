
import {BrowserRouter,Routes,Route} from "react-router-dom"

import {Signin,Signup,Blog,Blogs,ReadBlog} from "./pages";
import NewBlog from "./pages/NewBlog";


function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/blog/:id" element={<Blog />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/read/:id" element={<ReadBlog/>} />
    <Route path="/new" element={<NewBlog/>} />
    
  </Routes>
</BrowserRouter>
}

export default App
