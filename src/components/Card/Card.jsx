import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ donation }) => {
    const {id,image,title,description,division} = donation || {}
    return (
        <div className="card card-compact bg-white shadow-lg">
            <figure className='relative'>
                <img
                    className='w-full h-[280px] xl:h-[360px]  object-cover rounded-xl'
                    src={image}
                    alt="Shoes" />
                <p className='absolute top-5 left-5 badge badge-lg bg-[#FEA501] border-none text-white'>{division}</p>
            </figure>
            <div className="card-body relative">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <p className='text-gray-500 font-medium mb-5'>{description}</p>
                <div className="">
                    <Link to={`/donationCampaign/${id}`} className="absolute -bottom-5 right-1 left-1 w-[90%] mx-auto btn bg-[#191919] text-white hover:bg-[#FEA501] hover:text-black rounded-full font-bold transition-all duration-300 hover:font-extrabold">Donate Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;