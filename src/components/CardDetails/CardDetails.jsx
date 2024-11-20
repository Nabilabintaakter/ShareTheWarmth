import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
    const singleData = useLoaderData();
    const { title, image, description, status, contactInfo, division } = singleData || {};

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thank you! We will reach your destination soon", {
            position: "top-center"
        });
        e.target.reset();
    };

    return (
        <div className="w-[75%] max-w-7xl mx-auto pt-5 pb-12 md:pt-10 md:pb-24">
            <div className="flex flex-col lg:flex-row rounded-2xl bg-base-100 shadow-lg">
                <figure className='w-full lg:w-1/2'>
                    <img
                        className="w-full h-full object-cover rounded-t-2xl lg:rounded-l-2xl lg:rounded-r-none"
                        src={image}
                        alt="Album"
                    />
                </figure>
                <div className="w-full lg:w-1/2 p-5 lg:px-6 flex flex-col gap-3 lg:justify-between">
                    <h2 className="card-title text-2xl font-semibold">{title}</h2>
                    <p className="text-gray-500">{description}</p>
                    <p className={`w-fit badge badge-md border-[1px] ${status === 'Ongoing' ? 'bg-green-400 border-green-700' : 'bg-gray-300 border-gray-600'}`}>{status}</p>
                    <p><span className="font-bold">Contact Info:</span> {contactInfo}</p>
                    <p className="text-[#FEA501]"><span className="font-bold text-gray-800">Division:</span> {division}</p>
                </div>
            </div>
            <p className="text-3xl lg:text-4xl font-bold text-black text-center mt-10 lg:mt-16 mb-4 lg:mb-5">Complete Your Donation</p>
            <div className="w-[90%] lg:w-[50%] xl:[70%] mx-auto max-w-7xl bg-[#D7F1F2] p-10 rounded-xl">
                <form onSubmit={handleSubmit}>
                    <label className="block text-lg font-bold text-gray-900">Quantity of Items:</label>
                    <input
                    required
                        type="text"
                        className="mt-2 py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g., 2 jackets, 3 blankets"
                    />

                    <label className="block text-lg font-bold text-gray-900 mt-4">Item Type:</label>
                    <select
                    required
                        className="mt-2 py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option>Blanket</option>
                        <option>Jacket</option>
                        <option>Sweater</option>
                    </select>

                    <label className="block text-lg font-bold text-gray-900 mt-4">Pickup Location:</label>
                    <input
                    required
                        type="text"
                        className="mt-2 py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka"
                    />

                    <label className="block text-lg font-bold text-gray-900 mt-4">Additional Notes (Optional):</label>
                    <textarea
                        className="mt-2 py-2 px-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Write your notes here..."
                    ></textarea>

                    <button
                        type="submit"
                        className="mt-4 w-full btn btn-md bg-[#FEA501] rounded-md text-white hover:text-black hover:bg-white font-bold border-none transition-all duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default CardDetails;
