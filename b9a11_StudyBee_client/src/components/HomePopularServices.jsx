import { Link } from "react-router-dom";
import ServicesCard from "../Shared/ServicesCard";
import PropTypes from 'prop-types';

const HomePopularServices = ({ servicesFromHome }) => {
    const services = [...servicesFromHome].reverse();

    return (
        <div className='container mx-auto w-11/12 mb-10'>
            <h2 className="pb-10 text-center text-3xl font-bold text-blue-950 dark:text-blue-50 -rotate-2 bg-[]"> Popular Servicces</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.slice(0, 6).map(service => <ServicesCard key={service._id} service={service} />)
                }
            </div>
            <div className="flex justify-center items-center my-10">
                <Link to={'/services'} className="bg-teal-600 px-10 py-3 rounded-sm shadow-md shadow-black/50 text-white">Show All</Link>
            </div>
        </div>
    );
};

export default HomePopularServices;

HomePopularServices.propTypes = {
    servicesFromHome: PropTypes.array
}