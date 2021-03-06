import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const Home = () => {
    const container = useRef(null);
    const container2 = useRef(null);
    const container3 = useRef(null);
    const container4 = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/corona.json')
        });
        lottie.loadAnimation({
            container: container2.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/JSON/01.json')
        })
        lottie.loadAnimation({
            container: container3.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/JSON/02.json')
        })
        lottie.loadAnimation({
            container: container4.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../assets/JSON/03.json')
        })
    }, [])
    return (
        <div className=" bg-gray-50 w-full font-body  h-screen text-center">
            <div className="md:flex sm:flex-row  w-full h-5/6 items-center justify-around">
                {/*Left  */}
                <div className=" md:flex mt-5 p-8 bg-gray-50 rounded-3xl ml-8 shadow-lg h-auto w-1/3 flex-col">
                    <h1 className="text-4xl text-blue-700 font-bold">Current Outbreak The Coronavirus (COVID-19)</h1>
                    <p className=" mt-8 text-center font-extralight text-gray-600  font-serif">Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness.</p>
                </div>
                {/* Right */}
                <div className="flex sm:flex-row h-auto w-auto sm:max-h-md sm:max-w-md " ref={container}>

                </div>
            </div>
            {/*Prevention  Animation */}
            <div className="flex h-screen w-full mt-10 items-center justify-center bg-gray-50">
                {/* Heading */}
                <div className="block  h-3/4 shadow-lg rounded-3xl p-5 bg-gray-50  w-3/6">
                    <h1 className="text-blue-800 text-6xl">Symptoms</h1>
                    <div className="flex justify-between p-4">


                        <div className="block">
                            <h1 className="text-3xl text-blue-600 font-bold mb-4">Most common </h1>
                            <ul className="text-lg text-red-800 font-semibold space-y-3">
                                <li>Fever</li>
                                <li>Cough</li>
                                <li>Tiredness</li>
                                <li>Loss of Taste</li>
                            </ul>
                        </div>
                        <div className="block">
                            <h1 className="text-3xl text-blue-600 font-bold mb-4">Less common </h1>
                            <ul className="text-lg text-red-800 font-semibold space-y-3">
                                <li>Sore Throat</li>
                                <li>Headache</li>
                                <li>Aches And Pain</li>
                                <li>Diarrhoea</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block py-10 bg-gray-50">
                <h1 className="text-6xl bg-gray-50 ">Preventions</h1>
            </div>
            <div className="flex h-screen w-full justify-around items-center bg-gray-50 ">

                <div className="flex flex-col h-auto w-auto sm:max-h-md sm:max-w-md " ref={container2}>

                </div>
                {/*Left  */}
                <div className="flex border justify-center items-center mt-10 p-8 bg-gray-50 rounded-3xl ml-8 shadow-lg h-auto lg:h-96 w-1/3 flex-col">
                    <h1 className="text-4xl text-blue-700 font-bold">1- Wash Your Hand</h1>
                    <p className=" mt-8 text-center font-extralight text-gray-600  font-serif">Wash your hands regularly with soap and water or clean them with alcohol-based hand rub.</p>
                </div>
                {/* Right */}

            </div>

            {/* Third Container */}
            <div className="flex h-screen w-full justify-around items-center bg-gray-50 ">


                {/*Left  */}
                <div className="flex border justify-center items-center mt-10 p-8 bg-gray-50 rounded-3xl ml-8 shadow-lg h-auto lg:h-96 w-1/3 flex-col">
                    <h1 className="text-4xl text-blue-700 font-bold">2- Always Wear Your Mask</h1>
                    <p className=" mt-8 text-center font-extralight text-gray-600  font-serif">Wear a properly fitted mask when physical distancing is not possible or when in poorly ventilated settings.</p>
                </div>
                {/* Right */}
                <div className="flex flex-col h-auto w-auto sm:max-h-md sm:max-w-md " ref={container3}>

                </div>
            </div>
            {/* Fourth Container */}
            <div className="sm:flex md:inline-flex h-screen w-full justify-around items-center bg-gray-50 ">

                <div className="flex flex-col h-auto w-auto sm:max-h-md sm:max-w-md " ref={container4}>

                </div>
                {/*Left  */}
                <div className="flex border justify-center items-center mt-10 p-8 bg-gray-50 rounded-3xl ml-8 shadow-lg h-auto lg:h-96 w-1/3 flex-col">
                    <h1 className="text-4xl text-blue-700 font-bold">3- Use Sanitizer</h1>
                    <p className=" mt-8 text-center font-extralight text-gray-600  font-serif">Wash Your Hands With Sanitizer.</p>
                </div>
                {/* Right */}

            </div>
            {/* Footer */}
            <div className="md:flex justify-around bg-blue-300 text-gray-800 h-auto">
                <div className="block mt-8  p-5">
                    {/* Left */}
                    <h1 className="block text-2xl font-semibold cursor-pointer">Regions</h1>
                    <ul className=" cursor-pointer mt-4 block space-y-2">
                        <li>Africa</li>
                        <li>America</li>
                        <li>Mediterranean</li>
                        <li>Europe</li>
                        <li>Western Pacific</li>
                    </ul>
                </div>

                {/* Middle */}
                <div className="block mt-8  p-5">
                    <h1 className="block text-2xl font-semibold cursor-pointer">Policies</h1>
                    <ul className=" cursor-pointer mt-4 block space-y-2">
                        <li>Cyber Security</li>
                        <li>Ethics</li>
                        <li>Permisission and Licensing</li>
                        <li>Terms Of Use</li>
                    </ul>
                </div>
                {/* Right */}
                <div className="block mt-8  p-5">
                    <h1 className="block text-2xl font-semibold cursor-pointer">About Us</h1>
                    <ul className=" cursor-pointer mt-4 block space-y-2">
                        <li>Careers</li>
                        <li>Library</li>
                        <li>Procurement</li>
                        <li>Publications</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
