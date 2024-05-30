import { Link, useLoaderData } from "react-router-dom";
import { Helmet } from 'react-helmet-async';


const ServiceDetails = () => {
    const job = useLoaderData()
    const { _id, imgURL, serviceName,
        serviceArea, price, description, providerEmail, providerPhoto, providerName } = job;
    // console.log(job)
    
    return (
        <div className="w-11/12 container mx-auto min-h-[calc(100vh-200px) my-10">
            <Helmet>
                <title>StudyBee | {serviceName} - {providerName}</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
                <div className="md:col-span-8 bg-white/10 rounded-sm backdrop-blur-lg shadow-md ">
                    <img className="h-40 md:h-72 object-cover w-full rounded-sm p-2" src={imgURL} alt="" />
                    <div className="px-6 lg:px-10 pb-5 pt-5">
                        <h3 className=" text-blue-950 dark:text-blue-300 font-semibold text-sm py-1 w-2/3 pl-2 pr-4 rounded-sm border-l-4 border-blue-950 dark:border-blue-300">Name:</h3>
                        <p>{serviceName}</p>
                    </div>
                    <div className="px-6 lg:px-10 pb-5">
                        <h3 className=" text-blue-950 dark:text-blue-300 font-semibold text-sm py-1 w-2/3 pl-2 pr-4 rounded-sm border-l-4 border-blue-950 dark:border-blue-300">Price:</h3>
                        <p>৳ {price}/<span className="text-xs">month</span></p>
                    </div>
                    <div className="px-6 lg:px-10 pb-5">
                        <h3 className=" text-blue-950 dark:text-blue-300 font-semibold text-sm py-1 w-2/3 pl-2 pr-4 rounded-sm border-l-4 border-blue-950 dark:border-blue-300">Area:</h3>
                        <p>{serviceArea}</p>
                    </div>
                    <div className="px-6 lg:px-10 pb-10">
                        <h3 className=" text-blue-950 dark:text-blue-100 font-semibold text-sm py-1 w-2/3 pl-2 pr-4 rounded-sm border-l-4 border-blue-950 dark:border-blue-300">Description:</h3>
                        <p>{description}</p>
                        <Link to={`/services/booking-services/${_id}`}>
                            <div className="mt-10 bg-blue-600 text-white w-full text-center uppercase shadow-xl shadow-black/30 py-2">Book Now</div>
                        </Link>
                    </div>
                </div>
                <div className="md:col-span-4 bg-white/10 rounded-sm backdrop-blur-lg shadow-md h-fit sticky">
                    <h2 className="text-center py-5 text-2xl font-thin">Provider Information</h2>
                    <div className="flex flex-col items-center justify-center my-5">
                        <img className="w-20 rounded-full" src={providerPhoto} alt="" />
                        <div className="flex flex-col items-center mt-3">
                            <p>{providerName}</p>
                            <p>{providerEmail}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;