'use client'
import React from 'react'
import Side from '@/components/ui/Side'
import { useState } from 'react';
import Link from 'next/link';


function page() {
    const [previewURL, setPreviewURL] = useState('');

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
            setPreviewURL(objectURL);
        } else {
            setPreviewURL('');
        }
    };

    return (
        <>
            {/* file uploader */}

            <div className="static file-uploader" style={{ marginLeft: '27rem', width: '60em', position: 'absolute' }}>
                <label htmlFor="file-upload" className="relative cursor-pointer flex items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50 hover:bg-gray-100">
                    {previewURL ? (
                        <div className="w-full h-full rounded-full">
                            <img src={previewURL} alt="File Preview" className="w-full h-full object-cover rounded-lg" />
                            <p className="text-sm text-gray-500 mt-2 inline-block bg-gray-100 hover:bg-gray-400 rounded-md py-2 px-4 cursor-pointer" style={{ marginLeft: '25em' }}>Click to upload or drag and drop</p>
                        </div>
                    ) : (
                        <>
                            <svg className="w-8 h-8 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="text-sm text-gray-500 mt-2">Click to upload or drag and drop</p>
                        </>
                    )}
                    <input id="file-upload" type="file" onChange={handleFileChange} className="hidden" />
                </label>
            </div>

            {/* checkbox */}
            <div className=" max-w-md mx-auto  bg-white  hover:shadow-2xl  shadow-lg rounded-lg overflow-hidden" style={{ marginLeft: '20rem', width: '60em', position: 'absolute', marginTop: '20em' }}>
                <div className="px-6 py-4 text-xs font-mono">
                    <div className="font-bold text-xl mb-2">Publishing</div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                            <span className="ml-2">Online Store</span>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                            <span className="ml-2">Point of Sale</span>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                            <span className="ml-2">India and International</span>
                        </label>
                    </div>
                </div>
            </div>
            {/* checkbox filed end */}

            {/* price calculatore button */}
            <button className=" max-w-md mx-auto  bg-white  hover:shadow-2xl hover:bg-gray-300 shadow-lg rounded-lg overflow-hidden  text-bold" style={{ marginLeft: '20rem', width: '60em', position: 'absolute', marginTop: '37em' }}>
                <Link href='/CardPages/Accordien-one/PriceCalulatore'>Price Calculatore</Link>
            </button>
            {/* price calculatore end */}

            {/* Product organization card */}
            <div className="max-w-md mx-auto  bg-white rounded-lg overflow-hidden shadow-md" style={{ marginLeft: '60rem', width: '60em', position: 'absolute', marginTop: '20em' }}>
                <div className="p-6">
                    <strong className='mt-6'>Product organization</strong>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor=" Product type">
                            Product type
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Product type" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Vendor">
                            Vendor
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Vendor" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Collections">
                            Collections
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Collections" type="Collections" placeholder="Collections" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                            Tags
                        </label>
                        <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="text" placeholder="Tags" />
                    </div>
                </div>
            </div>

            {/* Product organization end */}










            {/* side bar */}
            < Side />
            {/* sidebar end */}


        </>
    )
}

export default page