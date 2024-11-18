
import Navbar from '../Navbar/Navbar';
import { Outlet ,useLocation} from 'react-router-dom';

const MainLayout = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <div className='font-lato'>
            <div className={`${pathname === '/' ? 'h-0': 'h-16'}`}>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;