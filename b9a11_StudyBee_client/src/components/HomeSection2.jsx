import PropTypes from 'prop-types';

const HomeSection2 = ({services}) => {

    return (
        <div className="w-11/12 container mx-auto my-10">
            <div className="grid bg-transparent rounded-md grid-cols-1 gap-5 md:grid-cols-3 shadow-sm shadow-black/30 py-10 ">

                <div className="flex flex-col items-center justify-center ">
                    <div className="stat-title dark:text-gray-300">Total Services</div>
                    <div className="stat-value">{services.length}</div>
                    
                    
                    <div className="stat-desc dark:text-blue-100">May 15th - Till now</div>
                </div>

                <div className="flex flex-col items-center justify-center border-y md:border-y-0 py-5 md:border-x">
                    <div className="stat-title dark:text-gray-300">Total Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc dark:text-blue-100">↗︎ 400 (22%)</div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="stat-title dark:text-gray-300">Total Categoy</div>
                    <div className="stat-value">12+</div>
                    <div className="stat-desc dark:text-blue-100">↘︎ 90 (14%)</div>
                </div>
            </div>
        </div>
    );
};

export default HomeSection2;

HomeSection2.propTypes = {
    services: PropTypes.array
}