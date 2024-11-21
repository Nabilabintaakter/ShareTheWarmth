import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import cover from "../../assets/cover.jpg";
import { Link } from "react-router-dom";
import bg from '../../assets/how-bg-3.jpg';
import { ThreeDots } from 'react-loader-spinner';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext); 
    console.log(user);

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
        }} className="pt-5 pb-12 lg:pt-10 lg:pb-16 flex justify-center items-center">
            <div className="flex flex-col items-center space-y-8 w-[90%] md:w-[80%] mx-auto">
                <h1 className="text-center text-3xl font-medium text-blue-950 font-playfair">
                    Welcome, {user?.displayName}!
                </h1>
                <div className="card card-compact bg-white rounded-md w-[80%] md:w-[70%] lg:w-[40%] max-w-3xl shadow-md relative">
                    <figure>
                        <img
                            src={cover}
                            alt="Cover"
                            className="w-full h-36 object-cover"
                        />
                        <img
                            src={user?.photoURL}
                            alt="User"
                            className="absolute top-20 left-1/2 transform -translate-x-1/2 w-28 h-28 object-cover rounded-full bg-white p-1 shadow-md z-10"
                        />
                    </figure>
                    <div className="p-4 flex flex-col items-center">
                        <div className="mb-2 mt-12 text-center">
                            <span className="text-lg font-medium text-gray-700">
                                Username
                            </span>
                            <h1 className="text-lg font-bold text-gray-900">
                                {user?.displayName}
                            </h1>
                        </div>
                        <div className="mb-5 text-center">
                            <span className="text-lg font-medium text-gray-700">
                                Email
                            </span>
                            <p className="text-lg font-bold text-gray-900">
                                {user?.email}
                            </p>
                        </div>
                        <Link to="/updateProfile">
                            <button className="btn btn-sm lg:btn-md bg-gradient-to-r from-blue-950 to-blue-600 text-white font-medium hover:font-bold transition-all duration-300 rounded-md shadow-md border-none">
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
