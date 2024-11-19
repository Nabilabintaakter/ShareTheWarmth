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

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
                element: <CardDetails></CardDetails>,
                loader: async({params})=>{
                    const res = await fetch('/donations.json')
                    const data = await res.json()
                    const singleData = data.find(d=> d.id == params.id)
                    return singleData;
                  }
            },
            {
                path: '/howToHelp',
                element: <HowToHelp></HowToHelp>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;