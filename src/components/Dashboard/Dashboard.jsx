import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import cover from "../../assets/cover.jpg";
import { Link } from "react-router-dom";
import bg from '../../assets/how-bg-3.jpg';
import { ThreeDots } from 'react-loader-spinner';
import { useEffect } from 'react';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    useEffect(() => {
        document.title = 'Dashboard | Share the Warmth';
    }, [])

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#193070"
                    ariaLabel="three-dots-loading"
                />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" />;
    }

    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }} className="pt-10 pb-12 lg:pb-16 flex justify-center items-center">
            <div data-aos="fade"
                data-aos-duration="1200"
                data-aos-delay="200" className="flex flex-col items-center space-y-8 w-[97%] md:w-[80%] mx-auto">
                <h1 data-aos="fade-down"
                    data-aos-duration="1200"
                    data-aos-delay="200" className="text-center text-3xl font-semibold text-blue-950 font-poppins">
                    Welcome, <br className="block md:hidden" /> {user?.displayName}!
                </h1>
                <div className="card card-compact bg-white rounded-md w-[95%] md:w-[70%] lg:w-[40%] xl:w-[30%] max-w-2xl shadow-md relative">
                    <figure>
                        <img
                            src={cover}
                            alt="Cover"
                            className="w-full h-36 object-cover"
                        />
                        <img
                            src={user?.photoURL}
                            alt="User"
                            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-36 h-36 md:w-28 md:h-28 object-cover rounded-full bg-white p-1 shadow-md z-10"
                        />
                    </figure>
                    <div className="p-4 flex flex-col items-center">
                        <div className="mb-2 mt-20 md:mt-12 text-center">
                            <span className="text-sm font-medium text-gray-500 tracking-wide">
                                Username
                            </span>
                            <h1 className="text-2xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text">
                                {user?.displayName}
                            </h1>
                        </div>
                        <div className="mb-5 text-center">
                            <span className="text-sm font-medium text-gray-500 tracking-wide">
                                Email
                            </span>
                            <p className="text-lg font-semibold text-gray-800">
                                {user?.email}
                            </p>
                        </div>
                        <Link
                            data-aos="zoom-in"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                            to="/updateProfile"
                        >
                            <button className="btn btn-sm lg:btn-md bg-gradient-to-r from-blue-700 to-purple-500 text-white font-medium hover:font-bold transition-all duration-300 rounded-md shadow-lg border-none">
                                Update Profile
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
