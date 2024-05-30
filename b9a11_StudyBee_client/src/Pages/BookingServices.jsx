import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';


const BookingServices = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData()
    const { _id, imgURL, serviceName, price, providerEmail, providerName } = service;
    // console.log(user)
    // const [startDate, setStartDate] = useState(new Date());
    // console.log(startDate)

    const handlePurchase = e => {
        e.preventDefault()
        const form = e.target;
        const serviceId = _id;
        const serviceName = service.serviceName;
        const serviceImage = service.imgURL;
        const providerEmail = service.providerEmail;
        const providerName = service.providerName;
        const price = service.price;
        const userEmail = user?.email;
        const userName = user?.displayName;
        const serviceDate = form.date.value;
        const instructions = form.instruction.value;
        const serviceStatus = 'pending';

        const bookedService = {
            serviceId, serviceName, serviceImage, providerEmail, providerName, price,
            userEmail, userName, serviceDate, instructions, serviceStatus
        }
        console.log(bookedService)

        fetch(`${import.meta.env.VITE_SERVER}/bookedService`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Done",
                        text: "You have succesfully book this service!",
                        icon: 'success'
                    })
                }
            })
    }

    return (
        <div className='lg:w-11/12 container mx-auto bg-transparent'>
            <Helmet>
                <title>StudyBee | Purchase {serviceName} - {providerName}</title>
            </Helmet>
            <form onSubmit={handlePurchase}>
                <div>
                    <img src={imgURL} alt="" className='h-40 md:h-80 object-cover w-full rounded-sm' />
                </div>

                <div className='bg-teal-800/5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-4'>
                        <div className='rounded-sm  col-span-2 md:col-span-1'>
                            <span className='text-lg font-semibold '>Services Id</span>
                            <input type="text" name="id" defaultValue={_id} disabled className='w-full py-1 pl-3 border-white border bg-black/5 rounded-md' />
                        </div>
                        <div className='rounded-sm col-span-2 md:col-span-1'>
                            <span className='text-lg font-semibold '>Services Name</span>
                            <input type="text" name="name" defaultValue={serviceName} disabled className='w-full py-1 pl-3 border-white border bg-black/5 rounded-md' />
                        </div>
                        <div className='rounded-sm col-span-2 md:col-span-1'>
                            <span className='text-lg font-semibold '>Provider Name</span>
                            <input type="text" name="name" defaultValue={providerName} disabled className='w-full py-1 pl-3 border-white border bg-black/5 rounded-md' />
                        </div>

                        <div className='rounded-sm col-span-2 md:col-span-1'>
                            <span className='text-lg font-semibold '>Provider Email:</span>
                            <input type="text" name="name" defaultValue={providerEmail} disabled className='w-full py-1 pl-3 border-white border bg-black/5 rounded-md' />
                        </div>

                        <div className='rounded-sm  col-span-2 md:col-span-1'>
                            <span className='text-lg font-semibold '>Current User Email</span>
                            <input type="text" name="name" defaultValue={user?.email} disabled className='w-full py-1 pl-3 border-white border bg-black/5 rounded-md' />
                        </div>
                        <div className='rounded-sm  col-span-2 md:col-span-1'>
                            <span className='text-lg font-semibold '>Current User Name</span>
                            <input type="text" name="name" defaultValue={user?.displayName} disabled className='w-full py-1 pl-3 border-white border bg-black/5 rounded-md' />
                        </div>

                        <div className='rounded-sm col-span-2 md:col-span-1'>
                            <span className='text-lg font-semibold '>Price:</span>
                            <input type="number" name="newPrice" value={price} className='w-full py-1 pl-3 border-white border bg-black/5 rounded-md' disabled />
                        </div>

                        <div className='rounded-sm  col-span-2 md:col-span-1'>
                            <span className='text-lg font-semibold '>Service Taking Date:</span>
                            <input type="date" name="date" className='w-full py-1 pl-3 border-blue-500 shadow-md border bg-white/60 rounded-md focus:border-0' />
                            {/* 
                            <DatePicker type="date" className='w-full py-1 pl-3 border-blue-500 shadow-md border bg-white/60 rounded-md focus:border-0' format="MM/dd/y" selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                        </div>

                        <div className='rounded-sm col-span-2'>
                            <span className='text-lg font-semibold '>Special Instraction:</span>
                            <textarea type="text" name="instruction" className='w-full py-1 pl-3 border-blue-500 shadow-md border bg-white/60 rounded-md' placeholder='You can write here your others information.Like Address, Area, Customized service plan, etc...' />
                        </div>
                        <input type='submit' value={'Purchase'} className='col-span-2 btn btn-primary rounded-b-sm shadow-md' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default BookingServices;