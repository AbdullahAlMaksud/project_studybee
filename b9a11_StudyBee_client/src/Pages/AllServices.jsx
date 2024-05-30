import axios from 'axios';
import { useEffect, useState } from 'react';
import ServicesCard from '../Shared/ServicesCard';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const AllServices = () => {
    const cardPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(0)
    const [search, setSearch] = useState('');
    const [searchText, setSearchText] = useState('')
    const [displeyServices, setDisplayServices] = useState([])
    const services = [...displeyServices].reverse();

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER}/allServices?page=${currentPage}&size=${cardPerPage}&search=${search}`)
            setDisplayServices(data)
        }
        getData()
    }, [currentPage, cardPerPage, search])

    useEffect(() => {
        const getCount = async () => {
            const { data } = await axios(`${import.meta.env.VITE_SERVER}/totalService?search=${search}`)
            setCount(data.count)
        }
        getCount()
    }, [search])

    // console.log(count)
    const numberOfPages = Math.ceil(count / cardPerPage)
    const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

    const handlePagination = value => {
        console.log(value)
        setCurrentPage(value)
    }

    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText);
    }

    console.log(search)

    return (
        <div className='container mx-auto w-11/12 my-10'>
            <Helmet>
                <title>StudyBee | All Services </title>
            </Helmet>
            <h2 className='text-4xl text-center font-bold mb-10 font-poppins'>All Services</h2>
            <div className='w-full'>
                <form onSubmit={handleSearch}>
                    <div className='flex justify-center items-center'>
                        <input
                            className='lg:w-1/3 w-full pb-2 bg-transparent border-b-2 border-b-black dark:border-blue-300 focus:outline-0  placeholder:text-xl dark:placeholder:text-white/50  placeholder:text-black text-2xl font-semi'
                            onChange={e => setSearchText(e.target.value)}
                            value={searchText} type="text" name='search'
                            placeholder='Find your services...' />
                        <button ><FaMagnifyingGlass /> </button>
                    </div>
                </form>
            </div>
            <div className='grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 md:min-h-[950px]'>
                {services.map(service => (
                    <ServicesCard key={service._id} service={service} />
                ))}
            </div>
            <div className='w-full flex justify-center items-center flex-wrap my-10'>
                <div className='flex gap-5'>
                    <button className='flex justify-center items-center gap-2 px-3 rounded-md border-blue-300 dark:border-white w-32 border-b-2' disabled={currentPage === 1} onClick={() => { handlePagination(currentPage - 1) }}><span><FaArrowLeft /></span>Previous</button>

                    {
                        pages.map((buttonNumber) => <button onClick={() => handlePagination(buttonNumber)} className={`hidded ${currentPage === buttonNumber ? 'bg-blue-400' : ''} btn btn-circle`} key={buttonNumber}>{buttonNumber}</button>)
                    }

                    <button className='flex justify-center items-center gap-2 px-3 w-32 rounded-md border-blue-300 dark:border-white border-b-2' disabled={currentPage === numberOfPages} onClick={() => handlePagination(currentPage + 1)}>Next<span><FaArrowRight /></span></button>
                </div>
            </div>
        </div>
    );
};

export default AllServices;