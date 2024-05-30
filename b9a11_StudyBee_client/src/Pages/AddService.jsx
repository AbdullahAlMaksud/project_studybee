import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import service_IMG from "../../public/initalbg.jpg"


const AddService = () => {
    const { user } = useContext(AuthContext);
    const [img, setImg] = useState(service_IMG)

    const handleImg = e => {
        setImg(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const imgURL = form.imgURL.value;
        const serviceName = form.serviceName.value;
        const price = form.price.value;
        const serviceArea = form.serviceArea.value;
        const description = form.description.value;
        const providerEmail = user?.email;
        const providerPhoto = user.photoURL;
        const providerName = user?.displayName;

        const newServices = { imgURL, serviceName, serviceArea, price, description, providerEmail, providerPhoto, providerName }
        console.log(newServices)

        fetch(`${import.meta.env.VITE_SERVER}/services`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newServices)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your Services Added!')
                }
                else {
                    toast.error('Failed! Try Again.')
                }
            })
    }

    return (
        <div className="container mx-auto w-11/12 my-10 rounded-lg">
            <Helmet>
                <title>StudyBee | Add Your Service</title>
            </Helmet>

            <section className="px-20 py-14 mx-auto rounded-sm shadow-md bg-blue-200/50 dark:bg-gray-800/30">
                <h2 className="text-4xl text-center font-semibold text-gray-700 capitalize dark:text-white pb-10">Add Your Services</h2>
                <img className="h-40 md:h-96 rounded-md shadow-md shadow-black/40 mb-10 w-full object-cover" src={img} alt="" />

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Image URL</label>
                            <input onKeyUp={handleImg} type="text" name="imgURL" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="https://example.com/services.jpg" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Name</label>
                            <input type="text" name="serviceName" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="ex. House Tuitor" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Price</label>
                            <input type="number" name="price" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="100" required />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" >Service Area</label>
                            <input type="text" id="serviceArea" name="serviceArea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Farmgate, Dhaka" required />
                        </div>

                    </div>

                    <div className="mt-6">
                        <label className="text-gray-700 dark:text-gray-200">Description</label>
                        <textarea id="description" name="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Write about your services in details..." required />
                    </div>

                    <div className="flex justify-end mt-6">
                        <button type="submit" className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Add Services</button>
                    </div>
                </form>
            </section>

        </div>
    );
};

export default AddService;