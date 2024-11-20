import bg from '../../assets/how-bg-3.jpg';
import { FcGoogle } from "react-icons/fc";
import { NavLink } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {handleLogin,user,setUser}= useContext(AuthContext);

    const handleSubmit = e=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        handleLogin(email,password)
        .then(res=>{
            console.log(res.user);
            setUser(res.user);
            toast.success('Successfully logged in!',{
                position: 'top-center'
            })
        })
        .catch(err=>{
            toast.error(`${err.message.slice(10)}`, {
                position: "top-center"
            });
            setUser(null)
        })
    }
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
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <div className="form-control relative">
                        <label className="block text-lg font-semibold text-gray-800 mb-1">Password :</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                        {
                            showPassword ? <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute bg-white border-none right-4 top-[50px]'><IoMdEyeOff className='text-lg' /></button>
                                :
                                <button type='button' onClick={() => setShowPassword(!showPassword)} className='absolute bg-white border-none right-4 top-[50px]'><IoMdEye className='text-lg' /></button>
                        }
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
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Login;
