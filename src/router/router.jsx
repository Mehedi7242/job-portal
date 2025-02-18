import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/myApplications";
import ViewApplications from "../pages/viewApplications/ViewApplications";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Route not found</h2>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>, 
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
          path:'/myApplication',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>,
          
        },
        {
          path:'/viewApplications/:job_id',
          element:<PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:3000/job-application/jobs/${params.job_id}`)
        },
        {
          path:`/jobsApply/:id`,
          element:<JobApply></JobApply>,
        },
        {
            path:"/register",
            element:
            <Register></Register>
        },
        {
          path:"/signIn",
          element:<SignIn></SignIn>
        },
        ]
    },
  ]);

  export default router