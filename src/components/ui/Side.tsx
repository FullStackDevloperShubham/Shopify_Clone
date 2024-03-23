import React from 'react'
import Link from 'next/link'

function Side() {
    return (
        <>
            {/* sidebar */}
            <div className="   bg-gray-100 text-black h-screen w-64 flex flex-col justify-between ">
                {/* Sidebar content */}
                <div className="p-4">
                    <ul className="mt-4">
                        <li className="py-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-6 h-6 mr-2 text-black">
                                <path fill="none" stroke=" #000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.65721519,18.7714023 L6.65721519,15.70467 C6.65719744,14.9246392 7.29311743,14.2908272 8.08101266,14.2855921 L10.9670886,14.2855921 C11.7587434,14.2855921 12.4005063,14.9209349 12.4005063,15.70467 L12.4005063,15.70467 L12.4005063,18.7809263 C12.4003226,19.4432001 12.9342557,19.984478 13.603038,20 L15.5270886,20 C17.4451246,20 19,18.4606794 19,16.5618312 L19,16.5618312 L19,7.8378351 C18.9897577,7.09082692 18.6354747,6.38934919 18.0379747,5.93303245 L11.4577215,0.685301154 C10.3049347,-0.228433718 8.66620456,-0.228433718 7.51341772,0.685301154 L0.962025316,5.94255646 C0.362258604,6.39702249 0.00738668938,7.09966612 0,7.84735911 L0,16.5618312 C0,18.4606794 1.55487539,20 3.47291139,20 L5.39696203,20 C6.08235439,20 6.63797468,19.4499381 6.63797468,18.7714023 L6.63797468,18.7714023" transform="translate(2.5 2)"></path>
                            </svg>
                            <Link href='/admin' className='text-black hover:text-gray-300'>Home</Link>
                        </li>

                        <li className="py-2 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="w-9 h-9 text-gray-300" style={{ marginLeft: '-10px' }}>
                                <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="40" d="m544.93 341.77 45.62 45.62 86.84-86.85M302.94 343.96h149.14"></path>
                                <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="40" d="M770.24 343.96h150.2l-104.4 312.96H407.39L302.98 343.96l-43.56-130.57H103.56"></path>
                                <circle cx="480.59" cy="786.46" r="78" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="40"></circle>
                                <circle cx="742.84" cy="786.46" r="78" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="40"></circle>
                                <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="40" d="M770.24 343.96c0 87.86-71.22 159.08-159.07 159.08-87.86 0-159.08-71.22-159.08-159.08 0-87.85 71.22-159.07 159.08-159.07 87.85 0 159.07 71.22 159.07 159.07z"></path>
                            </svg>
                            <Link href='/sidebar/order' className='text-black hover:text-white'>Order</Link>
                        </li>


                        <li className="py-2 flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mr-2 text-black"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.22 19.78a3 3 0 01-2.12.88H5.9a3 3 0 01-2.12-.88L2 18.12V8a2 2 0 012-2h16a2 2 0 012 2v10.12l-1.78 1.66zM15 13a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <Link href="/sidebar/products" className="text-black hover:text-white">Products</Link>
                        </li>


                        <li className="py-2">
                            <Link href='/sidebar/customer' className='text-black hover:text-white'>Customer</Link>
                        </li>

                        <li className="py-2">
                            <Link href='/sidebar/analytics' className='text-black hover:text-white'>Analytics</Link>
                        </li>

                        <li className="py-2">
                            {/* <a href="#" className="text-gray-300 hover:text-white">Marketing</a> */}
                            <Link href='/' className='text-black hover:text-white'>Marketing</Link>
                        </li>

                        <li className="py-2">
                            {/* <a href="#" className="text-gray-300 hover:text-white">Discount</a> */}
                            <Link href='/' className='text-black hover:text-white'>Discount</Link>
                        </li>
                    </ul>
                </div>
                {/* Sidebar footer */}
                <div className="p-4">
                    <p className="text-gray-400">Your Company</p>
                </div>
            </div >
            {/* siderbar end */}
        </>
    )
}

export default Side