'use client'
import Side from '@/components/ui/Side'
import Link from 'next/link'
import { useState } from 'react';


function page() {

    return (
        <>
            <Side />

            <h1 style={{ position: 'absolute', top: '0', marginLeft: '17em', marginTop: '1em', fontSize: '1em', fontWeight: 'bold' }}>Shipping and delivery</h1>            <div className="absolute top-0 left-0 w-1/3 flex items-center" style={{ position: 'absolute', top: '0', marginLeft: '30em', marginTop: '4em' }}>
                <div className="bg-white shadow-md rounded-lg overflow-hidden" style={{ marginLeft: '-13em' }}>
                    <div className="px-4 py-2">
                        <h2 className="text-xl font-bold text-gray-800">Shipping</h2>
                        <p className="text-gray-600 mt-2">
                            Choose where you ship and how much you charge for shipping at checkout.
                        </p>
                    </div>
                    <hr className="border-t border-gray-300 my-4" />

                    {/* General Shipping Rates */}
                    <Link href='/' className='hover:bg-slate-900'>
                        <div className="  px-4 py-2 border-t border-gray-200 flex justify-between">
                            <div>
                                <p className="text-gray-600">General</p>
                                <p className="text-gray-600">0 products</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-600 font-bold">Rates for</p>
                                <ul className="list-disc list-inside text-gray-600">
                                    <li>Domestic</li>
                                    <li>International</li>
                                </ul>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>

            {/* second card */}
            <div className=" bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden" style={{ position: 'absolute', top: '4em', width: '30em', marginLeft: '60em' }}>
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">Local Delivery</h2>
                    <p className="text-gray-700" >We offer local delivery options for customers in the nearby area. Get your products delivered quickly and conveniently!
                    </p>

                </div>
            </div>

            <div className=" bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden" style={{ position: 'absolute', top: '13em', width: '30em', marginLeft: '60em' }}>
                <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2">Local pickup</h2>
                    <p className="text-gray-700" >We offer local delivery options for customers in the nearby area. Get your products delivered quickly and conveniently!

                    </p>
                </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden" style={{ position: 'absolute', top: '22em', width: '30em', marginLeft: '60em' }}>
                <h2 className="text-lg font-semibold mb-4">Delivery customizations</h2>
                <p className="text-gray-700">
                    There are no apps installed with delivery customizations. Visit the
                    <Link href='/' className='text-blue-500 hover:underline' style={{ color: 'blue' }}>Shopify App Store</Link> to install one.                    to install one.
                </p>
            </div >


        </>

    )
}

export default page