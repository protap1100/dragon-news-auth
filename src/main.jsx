import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage';
import Root from './Components/Root';
import Home from './Components/StaticComponents/Home';
import Login from './Components/AuthCompo/Login';
import Register from './Components/AuthCompo/Register';
import Career from './Components/Pages/Career';
import About from './Components/Pages/About';
import AuthProvider from './AuthProvider/AuthProvider';
import News from './Components/Pages/News';
import PrivateRoute from './PrivateRoutes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children : [
      {
        path:'/home',
        element:<Home></Home>,
        loader: () => fetch('/news.json'),
      },
      {
        path: '/news/:id',
        element : <PrivateRoute>
          <News></News>
        </PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/career',
        element:<Career></Career>
      },
      {
        path:'/About',
        element:<About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
