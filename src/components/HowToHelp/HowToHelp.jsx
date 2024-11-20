import React from 'react';
import bgImage from '../../assets/how-bg-3.jpg';
import { Link } from 'react-router-dom';

const HowToHelp = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
            className=" px-5 lg:px-20 text-white"
        >
            <div className="bg-bue-950 bg-opacity-30 p-8 rounded-lg max-w-7xl mx-auto text-blue-950">
                {/* Hero Section */}
                <div className='py-7 flex flex-col justify-center items-center mx-auto w-full lg:w-[60%]'>
                    <p className=' text-4xl lg:text-6xl font-bold text-black mb-3 text-center'>How You Can Help</p>
                    <h1 className=' text-center text-base mb-3  md:text-lg font-semibold'>Together, we can make this winter warmer for those in need. Explore how you can contribute and make an impact.</h1>
                </div>

                {/* Steps to Help */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Donate Clothes */}
                    <Link to='/donationCampaign' className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Donate Winter Clothes</h2>
                        <p className="text-base mb-6">
                            Share warmth by donating winter essentials like jackets, sweaters, blankets, socks, and caps. Every piece makes a difference.
                        </p>
                        <button className="btn bg-[#FEA501] text-white hover:bg-blue-600 transition rounded-md px-5 py-2">
                            Donate Clothes
                        </button>
                    </Link>

                    {/* Financial Support */}
                    <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Make a Financial Contribution</h2>
                        <p className="text-base mb-6">
                            Help us buy warm clothing for those in need. For just 1000 BDT, you can provide a blanket for a family.
                        </p>
                        <button className="btn bg-[#FEA501] text-white hover:bg-blue-600 transition rounded-md px-5 py-2">
                            Donate Money
                        </button>
                    </div>

                    {/* Spread Awareness */}
                    <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Spread Awareness Among People</h2>
                        <p className="text-base mb-6">
                            Inspire others to contribute by sharing our mission on social media or hosting a local drive in your community.
                        </p>
                        <button className="btn bg-[#FEA501] text-white hover:bg-blue-600 transition rounded-md px-5 py-2">
                            Share Now
                        </button>
                    </div>
                </div>

                {/* Why Help Matters */}
                <div className="mt-16 w-full lg:w-[60%] mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Your Help Matters</h2>
                    <p className="text-center text-lg">
                        Winter is a harsh season for underprivileged families in Bangladesh. Your contributions can save lives by providing warmth and hope to those who need it most.
                    </p>
                </div>

                {/* Call to Action */}
                <div className="flex justify-center mt-12">
                    <button className="btn btn-sm lg:btn-md bg-gradient-to-r from-blue-950 to-blue-600 text-white font-medium hover:font-bold transition-all duration-300 rounded-lg shadow-md border-none">
                        Join the Cause Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowToHelp;
