import ShowBlogs from './components/ShowBlogs'
import AddBlogs from './components/AddBlog'
import SingleBlog from './components/SinglesBlog'

export default[
  {path:'/',component:ShowBlogs},
  {path:'/add',component:AddBlogs},
  {path:'/blog/:id',component:SingleBlog},
]
