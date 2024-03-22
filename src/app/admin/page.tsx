
import React from 'react'
import Link from 'next/link'
import Side from '@/components/ui/Side'


// below code for accordian
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
// above code for accordien  

function page() {


    return (
        <>
            <button className=" absolute  flex items-center justify-center px-4 py-2 bg-gray-500 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" style={{ marginLeft: '85em' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0 3a1 1 0 0 1-1-1V5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1z" clipRule="evenodd" />
                </svg>
                <Link href='/'>Signup</Link>
            </button>
            <button className=" absolute flex items-center justify-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" style={{ marginLeft: '77em' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-1.293-.707l-2-2a1 1 0 1 1 1.414-1.414L9 9.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href='/login'>Login</Link>
            </button>


            {/* card */}
            <div className="absolute  mt-10 left-20  right-0 bg-white rounded-xl overflow-hidden shadow-lg mx-auto w-2/4">
                <div className="md:flex md:items-center">
                    <div className="md:flex-shrink-0">
                        <img src="/ecommerce-shopify-logo-hd-1.png" alt="Here is first page" className="h-48 w-full object-cover md:h-full md:w-48" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Setup guide</div>
                        <p className="mt-2 text-gray-600">Use this personalized guide to get your store up and running.</p>
                    </div>
                </div>


                {/* accordien */}
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Add your first product</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-row-reverse items-center justify-between rounded-lg shadow-lg p-4 bg-gray-100">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src="/home-onboarding-add-import-products-3ceb89e4fef1ee85d58fa00f9a3073a06b41d69463281060dcbee49c6d224904.svg" alt="Card image" />
                                <div className="max-w-xs">
                                    <h1 className='relative mt-0 text-xl'>Write a description, add photos, and set pricing for the products you plan to sell.</h1>
                                    <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">
                                        <Link href='/CardPages/Accordien-one/AddProducts'>Add Products</Link>
                                    </button>
                                    {/* <button className="mt-4 mx-4 hover:bg-slate-500 text-black py-2 px-1 rounded">Import Products</button> */}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* second */}
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Customize your online store</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-row-reverse items-center justify-between rounded-lg shadow-lg p-4 bg-gray-100">
                                <img src="/A-2.svg" alt="Here is first page" className="h-48 w-full object-cover md:h-full md:w-48" />
                                <div className="max-w-xs">
                                    <h1 className='relative mt-0 text-xl'>Choose a theme and add your logo, colors, and images to reflect your brand</h1>
                                    <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">
                                        <Link href='/CardPages/Accordien-Two/Customize-Theme'>Customise Theme</Link>
                                    </button>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* third */}
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Name your store</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-row-reverse items-center justify-between rounded-lg shadow-lg p-4 bg-gray-100">
                                <img src="/A-3.svg" alt="Here is first page" className="h-48 w-full object-cover md:h-full md:w-48" />
                                <div className="max-w-xs">
                                    <h1 className='relative mt-0 text-xl'>Your temporary store name is currently My Store. The store name appears in your admin and your online store.</h1>
                                    <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">
                                        <Link href='/CardPages/NameStore'> Name store</Link>
                                    </button>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* forth */}
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Set your shipping rates</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-row-reverse items-center justify-between rounded-lg shadow-lg p-4 bg-gray-100">
                                <img src="/A-4.svg" alt="Here is first page" className="h-48 w-full object-cover md:h-full md:w-48" />
                                <div className="max-w-xs">
                                    <h1 className='relative mt-0 text-xl'>Choose where you ship and how much you charge so your customers can see their shipping costs at checkout. </h1>
                                    <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">
                                        <Link href='/CardPages/Accordien-four'>Set shipping rate</Link>
                                    </button>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                {/* fifth */}
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Place a test order</AccordionTrigger>
                        <AccordionContent>
                            <div className="flex flex-row-reverse items-center justify-between rounded-lg shadow-lg p-4 bg-gray-100" style={{ height: '10.4em' }}>
                                <img src="/A-5.svg" alt="Here is first page" className="h-48 w-full object-cover md:h-full md:w-48" />
                                <div className="max-w-xs">
                                    <h1 className='relative mt-0 text-xl'>Make sure things are running smoothly by placing a test order from your own store.</h1>
                                    <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">
                                        <Link href='/CardPages/Accordien-five'> Lern about test order</Link>
                                    </button>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                {/* accordie end */}
            </div >
            {/* card end */}

            {/* sidebar */}
            <Side />
            {/* side bar end */}











        </>
    )
}

export default page