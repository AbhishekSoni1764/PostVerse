import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@coreui/coreui/dist/css/coreui.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PostList from './components/PostList.jsx'
import AddPost from './components/AddPost.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { path: "/", element: <PostList /> },
    { path: "/create-post", element: <AddPost /> },
  ],
  errorElement: <ErrorPage />
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
