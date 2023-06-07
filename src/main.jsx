import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Auth/AuthProvider';
import Instractor from './Components/Instractor';
import Classes from './Components/Classes';
import Users from './Components/Users';
import DashBoard from './DashBoard/DashBoard';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient() 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path:'/instractor',
        element:<Instractor></Instractor>
      },
      {
        path:"/class",
        element:<Classes></Classes>
      }
    ]
  },
  {
    path:'/dash',
    element:<DashBoard></DashBoard>,
    children:[
      
      {
        path:'/dash/users',
        element:<Users></Users>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
)
