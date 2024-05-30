import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <>
            <div className='h-16 lg:h-20'>
                <Navbar />
            </div>
            <div className='min-h-[calc(100vh-330px)]'>
                <Outlet />
            </div>
            <Footer />
            <Toaster />
        </>
    );
};

export default Root;