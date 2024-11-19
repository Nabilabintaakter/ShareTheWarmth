import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className='flex flex-col items-center space-y-4'>
                <h1 className='text-7xl text-red-600 font-bold'>404</h1>
                <p className='text-black text-xl font-bold'>Page Not Found</p>
                <p>Sorry, the page you're looking for does not exist.</p>
                <Link to='/' className="btn btn-md bg-[#FEA501] rounded-md text-white hover:text-black hover:bg-[#faba43] font-bold  hover:border-[1px] hover:border-[#FEA501] transition-all duration-300">GO HOME</Link>
            </div>
        </div>
    );
};

export default ErrorPage;