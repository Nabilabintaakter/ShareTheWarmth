import { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/finalLogo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { BiLogOut } from "react-icons/bi";
import userPro from '../../assets/userPro.webp'

const Navbar = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const { pathname } = useLocation();
    const { user, handleSignOut } = useContext(AuthContext);
    const links = <>
        <NavLink onClick={scrollToTop} className={({ isActive }) => isActive ? 'text-[#FEA501] hover:text-[#FEA501]  mr-4 xl:mr-8 font-semibold ' : 'text-white mr-4 xl:mr-8 hover:text-[#FEA501]'} to='/'>HOME</NavLink>
        <NavLink onClick={scrollToTop} className={({ isActive }) => isActive ? 'text-[#FEA501] hover:text-[#FEA501]  mr-4 xl:mr-8 font-semibold ' : 'text-white mr-4 xl:mr-8 hover:text-[#FEA501]'} to='/donationCampaign'>DONATION CAMPAIGN</NavLink>
        <NavLink onClick={scrollToTop} className={({ isActive }) => isActive ? 'text-[#FEA501] hover:text-[#FEA501]  mr-4 xl:mr-8 font-semibold ' : 'text-white mr-4 xl:mr-8 hover:text-[#FEA501]'} to='/howToHelp'>HOW TO HELP</NavLink>
        <NavLink onClick={scrollToTop} className={({ isActive }) => isActive ? 'text-[#FEA501]  font-semibold hover:text-[#FEA501]' : 'text-white hover:text-[#FEA501]'} to='/dashboard'>DASHBOARD</NavLink>
    </>
    return (
        <div className={` text-white fixed backdrop-blur-md z-50 w-full ${pathname === '/' ? 'bg-[#001f3f9c]' : 'bg-[#001f3f]'}`}>
            <div className="navbar w-[95%] mx-auto p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-0 w-fit lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>
                        <ul
                            tabIndex={0}
                            className="bg-blue-950  menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 shadow space-y-2 py-4 pl-6">
                            {links}
                        </ul>
                    </div>
                    <div className=' gap-2 items-center hidden lg:flex'>
                        <div><img className='w-auto h-16' src={logo} alt="" /></div>
                    </div>
                </div>
                <div className="navbar-center ">
                    <div className='hidden lg:flex'>
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className=' gap-1 items-center flex justify-center lg:hidden'>
                        <div><img className='w-[140px] md:w-[180px] h-auto' src={logo} alt="" /></div>
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 md:w-12 rounded-full">
                                        <img
                                            className='object-cover'
                                            alt="Tailwind CSS Navbar component"
                                            src={user?.photoURL || userPro} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-64 p-4 shadow-lg text-black bg-gradient-to-br from-blue-950 to-blue-600"
                                >
                                    <div className="flex flex-col items-center gap-4 mb-4">
                                        <div >
                                            <img
                                                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                                                src={user?.photoURL}
                                                alt="User Profile"
                                            />
                                        </div>
                                        <h1
                                            className="text-[#D8F2F1] text-2xl font-extrabold capitalize tracking-wide text-center bg-gradient-to-r from-teal-300 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
                                        >
                                            {user?.displayName}
                                        </h1>

                                        <Link to='/dashboard'>
                                            <button
                                                className="btn btn-sm lg:btn-md bg-gradient-to-r from-white to-yellow-100 text-blue-950 font-bold hover:font-bold hover:from-blue-950 hover:to-blue-600 hover:text-white transition-all duration-500 rounded-lg shadow-md border-none w-full"
                                            >
                                                View Profile
                                            </button>
                                        </Link>
                                        <Link to='/'>
                                            <button onClick={handleSignOut}
                                                className="btn btn-sm lg:btn-md bg-red-500 text-white font-bold hover:bg-white hover:text-red-500 hover:border-white hover:font-bold transition-all duration-500 rounded-lg border-red-500 shadow-md flex items-center justify-center gap-2 w-full"
                                            >
                                                <BiLogOut className="text-xl" />
                                                Log Out
                                            </button>
                                        </Link>
                                    </div>
                                </ul>

                            </div> :
                            <NavLink to='/login' className=" bg-white rounded-md border-none md:px-8 text-blue-950 font-semibold btn btn-sm md:btn-md md:text-lg ">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;