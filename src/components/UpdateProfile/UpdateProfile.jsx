import bg from '../../assets/how-bg-3.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const UpdateProfile = () => {
    const { handleUpdateProfile,setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError]= useState();

    const handleSubmit = (e) => {
        setError('')
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const imageRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|svg)(\?.*)?(#.*)?)$/i;

        if (!imageRegex.test(photo)) {
            setError("Invalid photo URL. Please provide a valid image link.");
            return;
        }


        handleUpdateProfile(name,photo) 
            .then(() => {
                setLoading(false);
                toast.success("Profile updated successfully! Redirecting to your dashboard...", {
                    position: "top-center"
                });
                setTimeout(()=>{
                    navigate('/dashboard')
                },2500)
            })
            .catch(() => {
                toast.error("Failed to update profile. Please try again.", {
                    position: "top-center"
                });
            })

    };

    return (
        <div
            className="pt-5 pb-12 lg:pt-10 lg:pb-16 relative flex flex-col items-center min-h-screen"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="text-center mb-8">
                <p className="text-2xl lg:text-3xl text-center font-semibold text-gray-700">Please update your information</p>
            </div>
            <div className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-lg w-[90%] md:w-[60%] lg:w-[40%] px-6 py-8 max-w-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                        <label className="block text-lg font-semibold text-gray-800 mb-1">Name :</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="block text-lg font-semibold text-gray-800 mb-1">Photo URL :</label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter your photo url"
                            className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>
                    {error && <p className='text-red-500 font-medium text-lg'>{error}</p>}
                    <div className="form-control">
                        <button
                            type="submit"
                            className="flex items-center justify-center gap-3 bg-green-500 text-white py-3 rounded-md text-lg font-medium border-[1px] border-green-500 hover:bg-white hover:border hover:border-green-500 hover:text-green-500 hover:font-bold transition-all duration-300"
                        >
                           Update Information
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default UpdateProfile;
