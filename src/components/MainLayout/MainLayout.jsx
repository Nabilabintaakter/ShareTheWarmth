
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Outlet ,useLocation} from 'react-router-dom';

const MainLayout = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <div className='font-nunito'>
            <div className={`${pathname === '/' ? 'h-0': 'h-16'}`}>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <footer>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default MainLayout;