import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const Login = () => {
    const navigate = useNavigate();
    const loaction = useLocation()
    const {
        user,
        signInWithGoogole,
        loading,
        logInWithEmailAndPassword,
    } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false)

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])

    const from = loaction.state || '/'

    const handleShowPassword = e => {
        setShowPass(e.target.checked)
        console.log(showPass)
    }

    const loginHandler = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const userInfo = { email, password }
        console.log(userInfo)
        try {
            const result = await logInWithEmailAndPassword(email, password)
            console.log('Login User', result.user)
            navigate(from, { replace: true })
            toast.success('Log In Successfull')

        }
        catch (error) {
            console.log(error)
            toast.error(error?.message)
        }
    }

    const googleHandler = async () => {
        try {
            const result = await signInWithGoogole();
            console.log(result.user)
            toast.success('Log In Successfully')
            navigate(from, { replace: true })
        }
        catch (error) {
            console.log(error)
            toast.error(error?.message)
        }
    }

    if (user || loading) {
        return
    }


    return (
        <div>
            <Helmet>
            <title>StudyBee | Login</title>
            </Helmet>
            <div className=" bg-white/20 backdrop-blur-md dark:bg-gray-900">
                <div className="flex justify-center min-h-screen">
                    <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)' }}>
                        <div className="flex items-center lg:h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 className="text-2xl font-bold text-white sm:text-3xl">StudyBee | Login</h2>
                                <p className="max-w-xl mt-3 text-gray-300">
                                    Sign in to connect with a diverse network of experienced tutors who can help you master any subject, from math and science to history and languages.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div className="flex-1">
                            <div className="text-center">
                                <div className="flex justify-center mx-auto mt-3 text-gray-900 dark:text-gray-300 text-2xl font-semibold">
                                    <h2>Login to Access Study<span className="text-blue-600">Bee!</span></h2>
                                    {/* <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" /> */}
                                </div>
                                {/* <p className="mt-1 text-gray-900 dark:text-gray-300 lg:text-xl">Login to access your account</p> */}
                            </div>

                            <button onClick={googleHandler} className="flex w-full items-center justify-center px-6 py-3 mt-4 text-gray-900 transition-colors duration-300 transform border rounded-md dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900 border-gray-500 hover:border-gray-50 dark:hover:border-gray-600">
                                <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                    <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                    <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                    <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                </svg>
                                <span className="mx-2">Sign in with Google</span>
                            </button>
                            <div className="flex items-center justify-between mt-4">
                                <span className="w-1/4 border-b border-black dark:border-gray-900 lg:w-1/4"></span>

                                <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                                    with email</a>

                                <span className="w-1/4 border-b border-black dark:border-gray-400 lg:w-1/4"></span>
                            </div>
                            <div className="mt-8">

                                <form onSubmit={loginHandler}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-gray-900 dark:text-gray-200">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="mt-6">
                                        <div className="flex justify-between mb-2">
                                            <label htmlFor="password" className="text-gray-900 dark:text-gray-200">Password</label>
                                            <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline hidden">Forgot password?</a>
                                        </div>
                                        <input type={showPass ? "text" : "password"} name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-900 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                    <div className="flex gap-2 mt-4">
                                        <input type="checkbox" name="check" className="checkbox-sm checkbox-primary text-blue-900 checkbox" onChange={handleShowPassword} />
                                        <p>Show Password</p>
                                    </div>

                                    <div className="mt-6">
                                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">Log in</button>
                                    </div>
                                </form>


                            </div>
                            <p className="mt-6 text-sm text-center text-gray-400">Dont have an account yet? <Link to={'/registration'} className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;