import {ThreeDots } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';

const PrivateRoute = ({ children }) => {
    const { user, loading,setLoading } = useContext(AuthContext);
    if (loading) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <ThreeDots
                    visible={true}
                    height="80"
                    width="80"
                    color="#193070"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
        )
    }
    if (!user) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;