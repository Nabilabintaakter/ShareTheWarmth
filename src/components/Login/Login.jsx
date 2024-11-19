import bg from '../../assets/how-bg-3.jpg';
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div 
            className="py-16 lg:py-24 relative flex flex-col items-center min-h-screen" 
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="text-center mb-8">
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-2">Welcome Back!</h1>
                <p className="text-2xl lg:text-3xl font-semibold text-gray-700">Please Log In</p>
            </div>
            <div className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-lg w-[90%] md:w-[60%] lg:w-[40%] px-6 py-8 max-w-xl">
                <form className="space-y-6">
                    <div className="form-control">
                        <label className="block text-lg font-semibold text-gray-800 mb-1">Email :</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                            required 
                        />
                    </div>
                    <div className="form-control">
                        <label className="block text-lg font-semibold text-gray-800 mb-1">Password :</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter your password" 
                            className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none" 
                            required 
                        />
                    </div>
                    <div className="text-right">
                        <NavLink 
                            to="#" 
                            className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </NavLink>
                    </div>
                    <div className="form-control mt-4">
                        <button 
                            type="submit" 
                            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg border-[1px] border-blue-600 font-medium hover:bg-white hover:text-blue-600 hover:border-[1px] hover:border-blue-600 duration-300 transition-all hover:font-bold"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className="my-6 border-t border-gray-300"></div>
                <div className="form-control">
                    <NavLink 
                        to="#"
                        className="flex items-center justify-center gap-3 bg-red-500 text-white py-3 rounded-md text-lg font-medium border-[1px] border-red-500 hover:bg-white hover:border hover:border-red-500 hover:text-red-500 hover:font-bold transition-all duration-300"
                    >
                        <FcGoogle className="text-2xl" />
                        Login with Google
                    </NavLink>
                </div>
                <p className="text-center mt-6 text-gray-700">
                    Don't have an account?  
                    <NavLink 
                        to="/register" 
                        className="text-blue-600 ml-1 font-semibold hover:underline"
                    >
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;
