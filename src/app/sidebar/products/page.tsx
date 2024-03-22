import React from 'react'
import Side from '@/components/ui/Side'
import Link from 'next/link'


function page() {
    return (
        <>
            <Side />




            {/* side bar end */}
            <div className="absolute top-0 w-2/3 mx-auto bg-white shadow-md rounded-2xl overflow-hidden" style={{ marginLeft: '24em', height: '40em' }}>
                <div className="flex">
                    <div className="p-4 flex-grow">
                        <h2 className="text-xl font-semibold text-gray-800" style={{ marginTop: '7em' }}>Add Products</h2>
                        <p className="text-gray-600 mt-2">Click the button below to add new products to your inventory.</p>
                        <button className="flex items-center justify-center bg-gray-400 text-white font-semibold py-2 px-4 rounded-2xl mt-4 hover:bg-gray-600">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                            <Link href='/CardPages/Accordien-one/AddProducts'>Add Products</Link>
                        </button>
                    </div>
                    <img src="/AddProducts.svg" alt="Add Products" className="w-50" style={{ marginTop: '7em', marginRight: '1em' }} />
                </div>
                <div className="bg-gray-200 p-6 rounded-lg shadow-md  " style={{ height: '15em', marginTop: '10em' }}>
                    <strong>Find products to sell</strong>
                    <p>Have dropshipping or print on demand products shipped directly from the supplier to your customer, and only pay for what you sell.</p>
                    <button className="bg-gray-400 rounded-2xl px-4 py-2 text-gray-800 font-semibold shadow-md hover:bg-gray-300">
                        Browse Products
                    </button>
                </div>
            </div>




        </>

    )
}

export default page