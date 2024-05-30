import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_SERVER}/faq`)
            .then(res => res.json())
            .then(data => setFaqs(data))
    }, [])

    return (
        <div className='-mt-20 mb-10'>
            <h1 className="text-2xl pt-40 bg-blue-400/80 md:text-3xl font-bold dark:bg-blue-950 mb-20 text-center pb-20">Frequently Asked Questions</h1>
            <div className="w-11/12 container mx-auto ">
            <Helmet>
                <title>StudyBee | FAQ</title>
            </Helmet>
            <div className="join join-vertical w-full">
            {faqs.map((faq, index) => (<div key={index} className="collapse collapse-plus join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        {faq.question}
                    </div>
                    <div className="collapse-content">
                        <p>{faq.answer}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default FAQ;