import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaRegSadTear } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const BookedServerByMe = () => {
    const [bookedServices, setBookServices] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER}/myBookedService/${user?.email}`)
            setBookServices(data)
        }
        getData()
    }, [user])
    // console.log(bookedServices)

    return (
        <div className='w-11/12 container mx-auto my-10'>
            <Helmet>
                <title>StudyBee | Booked By, {user?.displayName}</title>
            </Helmet>
            {
                bookedServices.length === 0 && <div className='flex flex-col justify-center items-center min-h-[calc(100vh-850px)] gap-2 '>
                    <FaRegSadTear className='text-7xl opacity-30' />
                    <h2 className='font-bold opacity-50'>Sorry! You have no booked services yet!</h2>
                </div>
            }
            <section className={bookedServices.length === 0 && "hidden" || "container px-4 mx-auto"}>
                <h2 className='text-3xl font-bold text-center my-10'>My Booked Service</h2>
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50/30 dark:bg-gray-800">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                No.
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Service Name
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Service Provider
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                                            >
                                                Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            bookedServices.map((services, idx) =>
                                                <tr key={services._id}>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                        <div className="inline-flex items-center gap-x-3">

                                                            <span>{idx + 1}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        {services.serviceName}
                                                    </td>

                                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                        <div className="flex items-center gap-x-2">
                                                            <div>
                                                                <h2 className="text-sm font-medium text-gray-800 dark:text-white ">
                                                                    {services.providerName}
                                                                </h2>
                                                                <p className="text-xs font-normal text-gray-600 dark:text-gray-400">
                                                                    {
                                                                        services.providerEmail
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                        <div className={services.serviceStatus == 'pending' && "inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/60 capitalize dark:bg-gray-800" || "inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-yellow-500 bg-yellow-100/60 capitalize dark:bg-gray-800"}>
                                                            <h2 className="text-sm font-normal">{(services.serviceStatus)}</h2>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                        <div className="flex items-center gap-x-6">
                                                            <p className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none">
                                                                {services.serviceDate}
                                                            </p>

                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookedServerByMe;