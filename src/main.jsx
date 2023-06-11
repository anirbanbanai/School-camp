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

import MySelect from './Components/MySelect';
import PrivetRoute from './Auth/PrivetRoute';
import StudentHome from './DashBoard/Student/StudentHome';
import MySelectedClass from './DashBoard/Student/MySelectedClass';
import MyEnrolClass from './DashBoard/Student/MyEnrolClass';
import MyPay from './DashBoard/Student/MyPay';
import InstractorHome from './DashBoard/Instractor/InstractorHome';
import MyClass from './DashBoard/Instractor/MyClass';
import AddClass from './DashBoard/Instractor/AddClass';
import ManageClass from './DashBoard/Admin/ManageClass';
import AdminHome from './DashBoard/Admin/AdminHome';
import ErrorPage from './Components/ErrorPage';
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
        path: '/instractor',
        element: <Instractor></Instractor>
      },
      {
        path: "/class",
        element: <Classes></Classes>
      },
      {
        path: '/selected',
        element: <PrivetRoute>
          <MySelect></MySelect>
        </PrivetRoute>
      },
    ]
  },
  {
    path: '/dash',
    element: <DashBoard></DashBoard>,
    children: [

      {
        path: '/dash/users',
        element: <Users></Users>
      },
      {
        path:'/dash/manageClass',
        element:<ManageClass></ManageClass>
      },
      {
        path:"/dash/AdminHome",
        element:<AdminHome></AdminHome>
      },
      // student dashboard
      {
        path:'/dash/studentHome',
        element:<StudentHome></StudentHome>
      },
      {
        path:'/dash/myselectedclass',
        element:<MySelectedClass></MySelectedClass>
      },
      {
        path:"/dash/myenrolclass",
        element:<MyEnrolClass></MyEnrolClass>
      },
      {
        path:"/dash/mypay",
        element:<MyPay></MyPay>
      },
      // Instractor Dashboard

      {
        path:'/dash/instractorHome',
        element:<InstractorHome></InstractorHome>
      },
      {
        path:'/dash/myclass',
        element:<MyClass></MyClass>
      },
      {
        path:"/dash/addClass",
        element:<AddClass></AddClass>
      }
    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </AuthProvider>
)
