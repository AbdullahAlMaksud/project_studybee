import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    
    return (
        <div className="min-h-[200px] bg-blue-700/10 backdrop-blur-md rounded-t-lg pt-10">
            <div className="w-11/12 mx-auto container">
                <div>
                    <div className="flex flex-col md:flex-row justify-between md:items-end">
                        <div>
                            <h2 className="text-3xl font-bold text-center md:text-left">Study<span className="text-blue-600">Bee</span></h2>
                            <p className="pt-1 pb-4 text-center md:text-left">Dhaka, Bangladesh</p>

                            <div className="flex gap-6 text-xl mb-5 justify-center md:justify-normal">
                                <a href="tel:01767211795"><FaPhone /></a>
                                <a href="mailto:maksud.workspace@gmail.com"><FaEnvelope /></a>
                                <a href="https://facebook.com/maksud51"><FaFacebook /></a>

                                <a href="https://github.com/AbdullahAlMaksud"><FaGithub /></a>
                                <a href="https://linkedin.com/in/AbdullahAlMaksud"><FaLinkedin /></a>
                                <a href="https://x.xcom/aamaksud"><FaTwitter /></a>
                            </div>
                        </div>
                        <div>
                            <ul className="flex flex-wrap justify-center gap-4 mb-5">
                                <li>
                                    <Link to={'/'} className="hover:text-blue-600">Home</Link>
                                </li>

                                <li>
                                    <Link to={'/services'} className="hover:text-blue-600">Services</Link>
                                </li>

                                <li>
                                    <Link to={'/about'} className="hover:text-blue-600">About</Link>
                                </li>

                                <li>
                                    <Link to={'/login'} className="hover:text-blue-600">Login</Link>
                                </li>

                                <li>
                                    <Link to={'/registration'} className="hover:text-blue-600">Registration</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm text-center py-7 border-t">© All Right Reserved | StudyBee @2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;