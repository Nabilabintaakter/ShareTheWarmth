import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const singleData = useLoaderData();
    const {title,image,description,status,contactInfo,division} = singleData || {}

    return (
        <div className='w-[75%] max-w-7xl mx-auto pt-5 pb-12 md:pt-10 md:pb-24'>
            <div className="card lg:card-side bg-base-100 shadow-lg">
                <figure>
                    <img
                    className='w-full h-full object-cover'
                        src={image}
                        alt="Album" />
                </figure>
                <div className="p-5 lg:px-6 flex flex-col gap-3 lg:justify-between">
                    <h2 className="card-title text-2xl font-semibold">{title}</h2>
                    <p className='text-gray-500'>{description}</p>
                    <p className={`w-fit badge badge-md border-[1px] ${status === 'Ongoing' ? 'bg-green-400 border-green-700' : 'bg-gray-400 border-gray-600'}`}>{status}</p>
                    <p><span className='font-bold'>Contact Info:</span> {contactInfo}</p>
                    <p className='text-[#FEA501]'><span className='font-bold text-gray-800'>Division:</span> {division}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;