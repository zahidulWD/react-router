import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './assets/Component/Home';
import About from './assets/Component/About/About';
import Contact from './assets/Component/Contact/Contact';
import Users from './assets/Component/Users/Users';
import Posts from './assets/Component/Posts/Posts';
import PostDetails from './assets/Component/PostDetails/PostDetails';
import ErrorPage from './assets/Component/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path:'/post/:postId',
        // Daynamic data load
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
    ]
  },
  // {
  //   path: '/about',
  //   element: <div className='centered '>I am in the about page</div>,
  // },
  // {
  //   path: '/contact',
  //   element: <div className='centered '>Call me right now</div>,
  // }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
