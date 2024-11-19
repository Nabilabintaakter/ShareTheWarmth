// import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png'
// import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const { pathname } = useLocation();
    // const {user,handleSignOut} = useContext(AuthContext);
    const links = <>
        <NavLink className={({ isActive }) => isActive ? 'text-[#FEA501]  mr-4 xl:mr-8 font-semibold ' : 'text-white mr-4 xl:mr-8 '} to='/'>HOME</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-[#FEA501]  mr-4 xl:mr-8 font-semibold ' : 'text-white mr-4 xl:mr-8 '} to='/donationCampaign'>DONATION CAMPAIGN</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-[#FEA501]  mr-4 xl:mr-8 font-semibold ' : 'text-white mr-4 xl:mr-8 '} to='/howToHelp'>HOW TO HELP</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-[#FEA501]  font-semibold ' : 'text-white '} to='/dashboard'>DASHBOARD</NavLink>
    </>
    return (
        <div className={` text-white fixed backdrop-blur-md z-50 w-full ${pathname === '/' ? 'bg-[#001f3f9c]' : 'bg-[#001f3f]'}`}>
            <div className="navbar w-full md:w-[95%] mx-auto p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>
                        <ul
                            tabIndex={0}
                            className="bg-blue-950 pl-3 menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className=' gap-2 items-center hidden md:flex'>
                        <div><img className='w-8 h-8 xl:w-10 xl:h-10' src={logo} alt="" /></div>
                        <a className="btn btn-ghost text-3xl font-semibold font-poiret p-0">Share the Warmth</a>
                    </div>
                </div>
                <div className="navbar-center ">
                    <div className='hidden lg:flex'>
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className=' gap-1 items-center flex md:hidden'>
                        <div><img className='w-8 h-8 xl:w-10 xl:h-10' src={logo} alt="" /></div>
                        <a className="btn btn-ghost text-3xl font-semibold font-poiret p-0">Share the Warmth</a>
                    </div>
                </div>
                <div className="navbar-end mr-3 md:mr-0">
                    <NavLink to='/login' className=" bg-white rounded-md border-none md:px-8 text-blue-950 font-semibold btn btn-sm md:btn-md md:text-lg ">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;