import { Helmet } from "react-helmet-async";

const About = () => {

    return (
        <div className='-mt-20 mb-10'>
            <div className="text-2xl pt-40 bg-blue-400/80 dark:bg-blue-950 md:text-3xl font-bold mb-20 text-center pb-20">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900 dark:text-blue-100 dark:text-white">Welcome to StudyBee</h2>
                <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-600 dark:text-gray-200">Empowering your learning journey with personalized education.</p>
            </div>
            <div className="w-11/12 container mx-auto ">
                <Helmet>
                    <title>StudyBee | About</title>
                </Helmet>
                <div className="join join-vertical w-full">

                    <section className="bg-blue-400/20 dark:text-blue-100 rounded-md shadow-sm shadow-black/30 text-gray-800">
                        <div className="container max-w-3xl p-6 py-20 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                            <div className="grid lg:gap-8 lg:grid-cols-2  lg:items-center">
                                <div>
                                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 dark:text-blue-100">Tailored Learning Paths</h3>
                                    <p className="mt-3 text-lg text-gray-600 dark:text-gray-200">At StudyBee, we believe in personalized education. Our platform offers tailored learning paths to match your unique learning style and pace. Whether you're a visual learner, an auditory learner, or a kinesthetic learner, we've got you covered.</p>
                                    <div className="mt-12 space-y-12">
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-blue-100">Expert Guidance</h4>
                                                <p className="mt-2 text-gray-600 dark:text-gray-200">Receive expert guidance from our qualified tutors who are dedicated to helping you succeed. Get personalized feedback and support to enhance your learning experience.</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-blue-100">Interactive Learning</h4>
                                                <p className="mt-2 text-gray-600 dark:text-gray-200">Engage in interactive learning experiences that make studying enjoyable and effective. Our platform is equipped with interactive tools and resources to make learning fun.</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="flex-shrink-0">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ml-4">
                                                <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-blue-100">Flexible Schedule</h4>
                                                <p className="mt-2 text-gray-600 dark:text-gray-200">Study at your own pace and convenience with our flexible scheduling options. Whether you are a morning person or a night owl, you can access our platform anytime, anywhere.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div aria-hidden="true" className="mt-10 lg:mt-0">
                                    <img src="./about-2.jpg" alt="StudyBee Features" className="mx-auto rounded-lg shadow-lg" />
                                </div>
                            </div>
                            <div>
                                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                                    <div className="lg:col-start-2">
                                        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900 dark:text-blue-100">Start Your Learning Journey Today</h3>
                                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-200">Embark on a transformative learning journey with StudyBee. Join our community of learners and tutors to unlock your full potential. Whether you are preparing for exams, learning a new skill, or seeking academic support, StudyBee has everything you need to succeed.</p>
                                        <div className="mt-12 space-y-12">
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-blue-100">Easy Access</h4>
                                                    <p className="mt-2 text-gray-600 dark:text-gray-200">Access StudyBee from any device, whether you are using a computer, tablet, or smartphone. Our platform is designed to be user-friendly and accessible to everyone.</p>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="ml-4">
                                                    <h4 className="text-lg font-medium leading-6 text-gray-900 dark:text-blue-100"
                                                    >
                                                        Seamless Integration
                                                    </h4>
                                                    <p className="mt-2 text-gray-600 dark:text-gray-200">
                                                        Seamlessly integrate StudyBee into your daily routine. Whether you are at home, on the go, or traveling, you can continue your learning journey without any interruptions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                        <img src={"./about-1.jpg"} alt="StudyBee Integration" className="mx-auto rounded-lg shadow-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>

            </div>
        </div>
    );
};

export default About;