// import { useContext } from 'react';
import {NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
// import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    // const {user,handleSignOut} = useContext(AuthContext);
    const links = <>
        <NavLink className={({ isActive }) => isActive ? 'text-[#FEA501]  mr-8 font-semibold ' : 'text-white mr-8 '} to='/'>HOME</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-[#FEA501]  mr-8 font-semibold ' : 'text-white mr-8 '} to='/donationCampaign'>DONATION CAMPAIGN</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-[#FEA501]  mr-8 font-semibold ' : 'text-white mr-8 '} to='/howToHelp'>HOW TO HELP</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-[#FEA501]  font-semibold ' : 'text-white '} to='/dashboard'>DASHBOARD</NavLink>
    </>
    return (
        <div className="bg-[#001F3F] text-white">
            <div className="navbar container mx-auto">
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
                    <div className='flex gap-1 items-center'>
                        <div><img className='w-10 h-10' src={logo} alt="" /></div>
                        <a className="btn btn-ghost text-xl font-extrabold">Share the Warmth</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end mr-5">
                    <NavLink to='/login' className=" bg-white rounded-md border-none md:px-8 text-blue-950 font-semibold btn md:text-lg ">Login</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;