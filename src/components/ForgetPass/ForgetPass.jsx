import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import bg from '../../assets/how-bg-3.jpg';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from 'react';

const ForgetPass = () => {
    const { handleResetPassword, myEmail, setMyEmail } = useContext(AuthContext);

    useEffect(()=>{
        document.title = 'Forgot password | Share the Warmth';
    },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        handleResetPassword(myEmail)
            .then(() => {
                toast.success("Password reset email sent, please check your email.", {
                    position: "top-center"
                });
                setTimeout(() => {
                    window.open("https://mail.google.com/", "_blank");
                }, 2500)
            })
            .catch(() => {
                toast.error("Failed to send reset email. Please try again.", {
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
                <p data-aos="fade-down"
                data-aos-duration="1200"
                data-aos-delay="200" className="text-2xl lg:text-3xl text-center font-semibold text-gray-700">Please reset your password</p>
            </div>
            <div className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-lg w-[90%] md:w-[60%] lg:w-[40%] px-6 py-8 max-w-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                        <label className="block text-lg font-semibold text-gray-800 mb-1">Email :</label>
                        <input
                            onChange={(e) => setMyEmail(e.target.value)}
                            type="email"
                            name="email"
                            value={myEmail}
                            placeholder="Enter your email"
                            className="input input-bordered w-full py-3 px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <button
                            data-aos="zoom-in"
                            data-aos-duration="1200"
                            data-aos-delay="200"
                            type="submit"
                            className="flex items-center justify-center gap-3 bg-green-500 text-white py-3 rounded-md text-lg font-medium border-[1px] border-green-500 hover:bg-white hover:border hover:border-green-500 hover:text-green-500 hover:font-bold transition-all duration-300"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
};

export default ForgetPass;
