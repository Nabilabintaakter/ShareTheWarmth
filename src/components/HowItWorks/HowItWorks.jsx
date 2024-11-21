import login from '../../assets/user.png';
import campaign from '../../assets/advertising.png';
import donation from '../../assets/healthcare.png';
import { Link } from 'react-router-dom';
import bg from '../../assets/how-bg-3.jpg'

const HowItWorks = () => {
    return (
        <section className="py-12 lg:mb-24 mb-[60px] " style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <p className=' text-4xl lg:text-6xl font-bold text-black text-center mb-10'>How it Works</p>
            {/* Steps Section */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 w-[95%] mx-auto">
                <Link to='/login'
                    className="p-6 bg-white shadow-lg rounded-lg text-center w-64"
                >
                    <img data-aos="fade-up"data-aos-duration="1200"
                data-aos-delay="200" className='w-14 h-14 mx-auto mb-5' src={login} alt="login" />
                    <h3 className="text-xl font-semibold mb-2">Sign Up/Login</h3>
                    <p className="text-gray-600">Create an account or log in to start donating.</p>
                </Link>
                <Link to='/donationCampaign'
                    className="p-6 bg-white shadow-lg rounded-lg text-center w-64"
                >
                    <img data-aos="fade-up"data-aos-duration="1200"
                data-aos-delay="200" className='w-14 h-14 mx-auto mb-5' src={campaign} alt="campaign" />
                    <h3 className="text-xl font-semibold mb-2">Choose a Campaign</h3>
                    <p className="text-gray-600">Select a donation campaign and view details.</p>
                </Link>
                <Link to='/donationCampaign'
                    className="p-6 bg-white shadow-lg rounded-lg text-center w-64"
                >
                    <img data-aos="fade-up"data-aos-duration="1200"
                data-aos-delay="200" className='w-14 h-14 mx-auto mb-5' src={donation} alt="donation" />
                    <h3 className="text-xl font-semibold mb-2">Submit Your Donation</h3>
                    <p className="text-gray-600">Fill out the form with your items and location.</p>
                </Link>
            </div>
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-blue-950 mb-4">Collection Points</h3>
                <p className="text-gray-600">
                    Drop off your donations at any of our collection points:
                </p>
                <p className="text-gray-700 font-semibold mt-2">
                    <span className='font-extrabold'>Dhaka: </span>Dhanmondi,Mirpur, Gulshan
                </p>
                <p className="text-gray-700 font-semibold mt-2">
                    <span className='font-extrabold'>Chattogram: </span>Agrabad, Panchlaish
                </p>
                <p className="text-gray-700 font-semibold mt-2">
                    <span className='font-extrabold'>Sylhet: </span>Zindabazar, Uposhohor
                </p>
            </div>
            <div className="text-center px-4">
                <h3 className="text-2xl font-bold text-blue-950 mb-6">Supported Divisions</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <span className="px-4 py-2 bg-blue-100 text-blue-950 rounded-full shadow">Dhaka</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-950 rounded-full shadow">Chattogram</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-950 rounded-full shadow">Sylhet</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-950 rounded-full shadow">Khulna</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-950 rounded-full shadow">Barishal</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-950 rounded-full shadow">Rajshahi</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-950 rounded-full shadow">Rangpur</span>
                    <span className="px-4 py-2 bg-blue-100 text-blue-950 rounded-full shadow">Mymensingh</span>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
