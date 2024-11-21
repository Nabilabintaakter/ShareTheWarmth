import React from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Header from '../Header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DonationCamp = () => {
    useEffect(()=>{
        document.title = 'Campaigns | Share the Warmth';
    },[])
    const donations = useLoaderData();
    return (
        <div className='w-full bg-[#D7F1F2]'>
            <div className='py-6'><Header title='Join Our Mission' subTitle='Donation Campaigns'></Header></div>
            <div className=' pt-5 pb-12 md:pt-10 md:pb-24 w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14'>
                {
                    donations.map((donation) => <Card key={donation.id} donation={donation}></Card>)
                }
            </div>
            <ToastContainer/>
        </div>
    );
};

export default DonationCamp;