import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import DonationCamp from "../components/DonationCamp/DonationCamp";
import HowToHelp from "../components/HowToHelp/HowToHelp";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import CardDetails from "../components/CardDetails/CardDetails";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ForgetPass from "../components/ForgetPass/ForgetPass";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donationCampaign',
                element: <DonationCamp></DonationCamp>,
                loader: ()=> fetch('/donations.json'),
            },
            {
                path: '/donationCampaign/:id',
                element: <PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
                loader: async({params})=>{
                    const res = await fetch('/donations.json')
                    const data = await res.json()
                    const singleData = data.find(d=> d.id == params.id)
                    if (data){
                        return singleData;
                    }
                    return null;
                  }
            },
            {
                path: '/howToHelp',
                element: <HowToHelp></HowToHelp>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/forgetPass',
                element: <ForgetPass></ForgetPass>
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
        ]
    },
]);

export default router;