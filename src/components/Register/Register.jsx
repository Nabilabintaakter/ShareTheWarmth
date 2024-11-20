import bg from '../../assets/how-bg-3.jpg';
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { toast ,ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const {handleSignUp,setUser,handleUpdateProfile} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const handleSubmit = e =>{
        setError('')
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;

        if(password.length < 6){
            setError('Password must be at least 6 characters long!')
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter!");
            setUser(null);
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter!");
            setUser(null);
            return;
        }
        handleSignUp(email, password)
        .then(res=>{
            setUser(res.user)
            console.log(res.user);
                // update profile
                handleUpdateProfile(name,photo)
                .then(res=>{
                    console.log(res);
                })
                .catch(err=>{
                    toast.error(`${err.message.slice(10)}`, {
                        position: "top-center"
                    });
                })
            toast.success("Successfully Registered!", {
                position: "top-center"
            });
            setTimeout(()=>{
                navigate('/')
            },2000)
        })
        .catch(err => {
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
                <h1 className="text-4xl lg:text-5xl font-extrabold mb-2">Create Your Account!</h1>
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
                        <label className="block text-lg font-semibold text-gray-800 mb-1">Photo URL :</label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter your photo url"
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
                    {error && <p className='text-red-500 font-medium text-lg'>{error}</p>}
                    <div className="form-control mt-4">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg border-[1px] border-blue-600 font-medium hover:bg-white hover:text-blue-600 hover:border-[1px] hover:border-blue-600 duration-300 transition-all hover:font-bold"
                        >
                            Register
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
                    Already have an account?
                    <NavLink
                        to="/login"
                        className="text-blue-600 ml-1 font-semibold hover:underline"
                    >
                        Login
                    </NavLink>
                </p>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default Register;
