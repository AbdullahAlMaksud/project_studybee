import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FaRegSadTear, FaUser } from 'react-icons/fa';

import profile from '../../public/profile.png'
import { Helmet } from 'react-helmet-async';

const ManageService = () => {
    const [services, setService] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}/servicesByYou/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setService(data);
                console.log(data);
            });
    }, [user])

    // console.log(services)

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure to DELETE This Item?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8c5729",
            cancelButtonColor: "4f7550",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`${import.meta.env.VITE_SERVER}/services/${_id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted",
                                    text: "Selected Data has been Deleted",
                                    icon: "success"
                                });
                                const restOfData = services.filter(newService => newService._id !== _id)
                                setService(restOfData);
                            }
                        })
                }
            }
            )
    }

    return (
        <div className='container mx-auto w-11/12 mb-10'>
            <h2 className="pb-10 text-center text-3xl font-bold text-blue-950 dark:text-blue-50 mt-10 bg-[]">My Services</h2>
            <Helmet>
                <title>StudyBee | Manage My Service</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.length === 0 && <div className='col-span-3 flex flex-col justify-center items-center min-h-[calc(100vh-500px)]  gap-2 '>
                        <FaRegSadTear className='text-7xl opacity-30' />
                        <h2 className='font-bold opacity-50'>Sorry! You Do not add any services yet!</h2>
                    </div>
                }
                {
                    services.map(service =>

                        <div key={service._id}>
                            <div className='border-b-2 shadow-md relative'>
                                <div className='shadow-blue-800 border-b-8  border-blue-500 bg-blue-100/20 px-6 pt-6 rounded-sm'>
                                    <img className='object-cover w-full h-36 rounded-sm border-white border-4 border-b-0' src={service.imgURL} alt="" />
                                </div>

                                <div className='p-5 flex flex-col items-end'>
                                    <div className='flex border-b border-0 rounded-md w-full mb-3 px-1 py-0 mt-5 text-xs shadow-md'>
                                        <div className='flex pb-2 w-full p-1 rounded-full  items-center justify-between'>
                                            <div>
                                                <p className='font-hind rounded-full dark:text-white text-center flex gap-2 items-center mb-1'><span className='font-semibold text-base'><FaUser /></span> {service.providerName}</p>
                                                <p className='font-hind rounded-full dark:text-white text-center flex gap-2 items-center'><span className='font-semibold text-base'><FaMapLocationDot /></span> {service.serviceArea}</p>
                                            </div>
                                            <div>
                                                <img className='rounded-full w-10 h-10 object-cover object-right' src={service.providerPhoto ? service.providerPhoto : profile} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <h2 className='text-2xl font-bold  pb-2'>{service.serviceName}</h2>
                                            <p className=''>{service.description.slice(0, 100)}...</p>
                                        </div>

                                        <div className='flex justify-between'>
                                            <Link to={`/services/managed-service/update-service/${service._id}`} className=' bg-blue-800 text-white text-sm font-semibold py-2 shadow-inner active:shadow-none rounded-sm hover:bg-green-900 shadow-black/60 w-1/3 my-3 flex justify-center items-center'>
                                                <button>Update</button>
                                            </Link>
                                            <button onClick={() => handleDelete(service._id)} className=' bg-pink-800 text-white text-sm font-semibold py-2 shadow-inner active:shadow-none rounded-sm hover:bg-pink-900 shadow-black/60 w-1/3 my-3'>Delete</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageService;