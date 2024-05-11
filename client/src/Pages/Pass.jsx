import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import Navbar from "../Components/Navbar";

const Pass = () => {
    const { user, isAuthenticated, loginWithRedirect } = useAuth0();
    const [isMAHEStudent, setIsMAHEStudent] = useState(null);
    const [maheRegNo, setMaheRegNo] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSendReqClick = () => {
        const type = isMAHEStudent ? 'mahe' : 'nonmahe';
        const regParam = isMAHEStudent && maheRegNo ? `&reg=${maheRegNo}` : '';
        const phoneParam = phoneNumber ? `&phone=${encodeURIComponent(phoneNumber)}` : '';
        const url = `https://pay.ecellmit.com?type=${type}${regParam}${phoneParam}&name=${encodeURIComponent(user.name)}&email=${encodeURIComponent(user.email)}`;
        window.location.href = url;
    };

    // If user is not authenticated, show login button
    // if (!isAuthenticated) {
    //     return (
    //         <>
    //             <Navbar />
    //             <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black flex justify-center items-center" style={{ backgroundImage: "url('img.jpg')" }}>

    //                 <button onClick={() => loginWithRedirect()} className="bg-white text-teal-500 font-semibold py-2 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 mt-4">
    //                     Log In
    //                 </button>
    //             </div>
    //         </>
    //     );
    // }
    
        // If user is authenticated, show pass page layout with the added HTML content
        return (
            <>
                <Navbar />
                <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black flex justify-center items-center" style={{ backgroundImage: "url('img.jpg')" }}>
                    <div className="text-center">
                        <h1 className="text-center text-white font-bold py-7 text-lg md:text-[1.75rem]">Hello, {user.name} !</h1>
                        <h1 className="text-5xl text-white font-bold mb-4">Get Your Pass Today!</h1>
                        <p className="text-lg text-gray-200">Unlock exclusive access to our premium events & workshops.</p>

                        {/* Add the given HTML content here */}
                        <div className="mx-auto text-lg  flex flex-col items-center">
                            <h2 className="text-xl font-semibold mb-4">Your Pass Includes Exclusive Access:</h2>
                            <ul className="list-none space-y-4 w-full md:w-8/12 lg:w-11/12 mb-8">
                                <li className="flex items-center justify-center text-white">
                                    <svg className="h-12 w-12 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    An engaging Keynote Session with Aman Gupta.
                                </li>
                                <li className="flex items-center justify-center text-white">
                                    <svg className="h-12 w-12 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    An intimate Chai pe Charcha with Prafull Billore.
                                </li>
                                <li className="flex items-center justify-center text-white">
                                    <svg className="h-12 w-12 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Exclusive Entry to the Founders Panel Discussion.
                                </li>
                                <li className="flex items-center justify-center text-white">
                                    <svg className="h-12 w-12 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    Access to the Creators Panel Discussion.
                                </li>
                            </ul>
                        </div>

                        {/* The rest of the form and content */}
                        <div className="text-md text-white mb-4">
                            Are you a MAHE student?
                            <div className="inline-block ml-2 mr-5">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="yes"
                                        name="isMAHEStudent"
                                        className="form-radio h-4 w-4 text-teal-600"
                                        onChange={() => setIsMAHEStudent(true)}
                                    /><span className="ml-2 text-white">Yes</span>
                                </label>
                            </div>
                            <div className="inline-block">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        value="no"
                                        name="isMAHEStudent"
                                        className="form-radio h-4 w-4 text-teal-600"
                                        onChange={() => setIsMAHEStudent(false)}
                                    /><span className="ml-2 text-white">No</span>
                                </label>
                            </div>

                        </div>
                        {isMAHEStudent && (
                            <div className="mb-4">
                                <label className="block text-white">
                                    Regd. No:
                                    <input
                                        type="text"
                                        value={maheRegNo}
                                        onChange={(e) => setMaheRegNo(e.target.value)}
                                        maxLength="9"
                                        className="ml-2 px-2 py-1 rounded"
                                    />
                                </label>
                            </div>
                        )}

                        <div className="mb-4">
                            <label className="block text-white">
                                Phone Number:
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="ml-2 px-2 py-1 rounded"
                                />
                            </label>
                        </div>
                        <button onClick={handleSendReqClick} className="bg-white text-teal-500 font-semibold py-2 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 mt-4">
                            Send Req
                        </button>
                    </div>
                </div>
            </>
        );
    }

;

export default Pass;
