import { Link } from 'react-router-dom';
import profile from '../../public/profile.png'
import { FaUser } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import PropTypes from 'prop-types';

const ServicesCard = ({ service }) => {
    const { imgURL, serviceName, description, providerPhoto, providerName, serviceArea } = service;

    return (
        <div>
            <div className='border-b-2 shadow-md relative'>
                <div className='shadow-blue-800 border-b-8  border-blue-500 bg-blue-100/20 px-6 pt-6 rounded-sm'>
                    <img className='object-cover w-full h-36 rounded-sm border-white border-4 border-b-0' src={imgURL} alt="" />
                </div>
                <div className='p-5 flex flex-col items-end flex-grow'>
                    <div className='flex border-b border-0 rounded-md w-full mb-3 px-1 py-0 mt-5 text-xs shadow-md'>
                        <div className='flex pb-2 w-full p-1 rounded-full  items-center justify-between'>
                            <div>
                                <p className='font-hind rounded-full dark:text-white text-center flex gap-2 items-center mb-1'><span className='font-semibold text-base'><FaUser /></span> {providerName}</p>
                                <p className='font-hind rounded-full dark:text-white text-center flex gap-2 items-center'><span className='font-semibold text-base'><FaMapLocationDot /></span> {serviceArea}</p>
                            </div>
                            <div>
                                <img className='rounded-full w-10 h-10 object-cover object-right' src={providerPhoto ? providerPhoto : profile} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-2xl font-bold pb-2'>{serviceName}</h2>
                            <p className=''>{description.slice(0, 100)}...</p>
                        </div>
                        <div className='mt-auto'>
                            <Link to={`/services/${service._id}`}>
                                <button className=' bg-blue-800 text-white text-sm font-semibold py-2 shadow-md active:shadow-none rounded-sm hover:bg-blue-900 shadow-black/60 w-full my-3'>View Details</button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;

ServicesCard.propTypes = {
    service: PropTypes.object
}