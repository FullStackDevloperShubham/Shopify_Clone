import React from 'react'
import Link from 'next/link'

function Customer() {
    return (
        <>
            <div className=" w-2/3 h-2/3  bg-white  border-gray-300 shadow-lg rounded-lg overflow-hidden" style={{ top: '0', position: 'absolute', marginLeft: '20em', marginTop: '5em' }}>
                <div className="p-4 flex flex-col items-center">
                    <img src="/SideBar-Costomer.svg" alt="" />
                    <strong className="mt-2">Your orders will show here</strong>
                    <p className="text-center mt-2">
                        To get orders and accept payments from customers,<br />
                        you need to select a plan.<br />
                        You’ll only be charged for your plan after your free trial ends.
                    </p>
                    <button className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-2xl mt-4">
                        <Link href='/sidebar/customer/addCustomer'>Add Customer</Link>
                    </button>
                </div>
            </div >
            <Link href="/lernMore" className="absolute bottom-0 left-0 right-0 text-gray-600 underline text-center pb-4">Learn more about Customers</Link>
        </>
    )
}

export default Customer