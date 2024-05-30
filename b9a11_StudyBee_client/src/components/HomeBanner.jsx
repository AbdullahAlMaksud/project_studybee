// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const HomeBanner = ({ services }) => {

    return (
        <div className="-mt-20 pt-20 bg-cover bg-bottom  md:h-[500px] lg:h-[600px] dark:bg-black bg-[url('../public/banner-bg.jpg')] mb-10">
            <div className="w-11/12 container mx-auto h-full mb-32 flex justify-between py-5">
                <div className='w-full py-5'>
                    <>
                        <Swiper
                            slidesPerView={'auto'}
                            spaceBetween={30}
                            pagination={{
                                dynamicBullets: true,
                                clickable: true,
                            }}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper h-full"
                        >
                            {
                                services.slice(0, 6).map((service => <SwiperSlide key={service._id}>
                                    <div className='flex h-full flex-col sm:flex-row w-full justify-between items-center gap-3'>
                                        <div className=''>
                                            <h2 className='text-4xl font-bold text-white'>{service.serviceName}</h2>
                                            <p className='pt-3 text-blue-200 mb-5'>{(service.description).slice(0, 100)}...</p>
                                            <Link to={`/services/${service._id}`} className='px-5 py-2 bg-blue-600 text-white font-semibold shadow-sm shadow-black'>Learn More</Link>
                                        </div>

                                        <div className='min-w-80 h-full flex justify-center items-center'>
                                            <img src={service.imgURL} className='rounded-md border mt-3 sm:mt-0  sm:w-[600px] h-full object-cover shadow-md' alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>))
                            }
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;

HomeBanner.propTypes = {
    services: PropTypes.array
}