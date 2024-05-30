import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateServices = () => {
    const services = useLoaderData()
    const { _id,
        serviceName, imgURL, serviceArea, price, description, providerEmail, providerPhoto, providerName
    } = services;
    const [img, setImg] = useState(imgURL);
    
    const handleImage = e => {
        const newimf = e.target.value;
        setImg(newimf)
        // console.log('maksud', img)
    }
    // console.log('form upadate', services)

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const serviceName = form.serviceName.value;
        const imgURL = form.imgURL.value;
        const serviceArea = form.serviceArea.value;
        const price = form.price.value;
        const description = form.description.value;
        const providerEmail = services.providerEmail;
        const providerPhoto = services.providerPhoto;
        const providerName = services.providerName;
        const upadatedService = {serviceName, serviceArea, imgURL, price, description, providerEmail, providerPhoto, providerName}
        console.log(upadatedService)

        fetch(`${import.meta.env.VITE_SERVER}/services/${_id}`,{
            method: 'PUT',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(upadatedService)
        })
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            if(data.modifiedCount){
                Swal.fire({
                    title: "Done",
                    text: "Your Service has been Updated!",
                    icon: 'success'
                })
            }
        })
        
    }
    // console.log(img)
    // console.log(serviceName)

    return (
        <div className='w-11/12 mx-auto container bg-black/10 pt-10'>
            <Helmet>
                <title>StudyBee | Update Services</title>
            </Helmet>
            <img className='h-80 w-11/12 object-cover mx-auto mb-10 rounded-md shadow-md shadow-black' src={img} alt="" />
            <h2 className='text-3xl text-center font-bold font-poppins my-5'>Update your services!</h2>


            <div>
                <form onSubmit={handleUpdate} className='grid grid-cols-1 p-5 md:p-10 gap-5 md:grid-cols-2'>
                    <div className='rounded-sm col-span-2 md:col-span-1'>
                        <span className='text-lg font-semibold '>Service Name:</span>
                        <input type="text" name="serviceName" defaultValue={serviceName} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md' />
                    </div>
                    <div className='rounded-sm col-span-2 md:col-span-1'>
                        <span className='text-lg font-semibold '>ImageURL:</span>
                        <input onKeyUp={handleImage} type="text" name="imgURL" defaultValue={imgURL} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md' />
                    </div>
                    <div className='rounded-sm col-span-2 md:col-span-2'>
                        <span className='text-lg font-semibold '>Description:</span>
                        <textarea type="text" name="description" defaultValue={description} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md h-40' />
                    </div>
                    <div className='rounded-sm col-span-2 md:col-span-1'>
                        <span className='text-lg font-semibold '>Price:</span>
                        <input type="text" name="price" defaultValue={price} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md' />
                    </div>
                    <div className='rounded-sm col-span-2 md:col-span-1'>
                        <span className='text-lg font-semibold '>Area:</span>
                        <input type="text" name="serviceArea" defaultValue={serviceArea} className='w-full py-1 pl-3 border-white border bg-white/30 rounded-md' />
                    </div>
                    <div className='col-span-2 flex justify-between items-center border-t rounded-lg py-3 px-5 =py-1 bg-white/20 shadow-md'>
                        <img className='h-12 rounded-full object-cover' src={providerPhoto} alt="" />
                        <div>
                            <span className='font-semibold'>Provider Name:</span>
                            <h2 className=''>{providerName}</h2>
                        </div>
                        <div>
                            <span className='font-semibold'>Provider Email:</span>
                            <h2 className=''>{providerEmail}</h2>
                        </div>
                    </div>
                    <input type="submit" value={'Update'} className='btn btn-primary bg-blue-700 border-blue-700 col-span-2' />
                </form>
            </div>
        </div>
    );
};

export default UpdateServices;