'use client'
import Side from '@/components/ui/Side'
import TimeAndCard from '@/components/ui/nameStore/TimeAndWeight'
import Currency from '@/components/ui/nameStore/Currency'
import React, { useState } from 'react'
import axios from 'axios'



import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"








function page() {
    // initialize the form data
    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
    })

    // handle for input changes
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // handle submit
    const handleSubmit = async (e) => {
        // e.preventDefault()
        try {
            const response = await axios.post('/api/users/store', formData);
            toast.success(' saved successfully')

        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <>
            {/* component from  component folder*/}
            <Side />
            {/* end */}



            {/* shadcn component  */}
            <Dialog>
                <div className="absolute top-0 left-0 right-0  flex justify-center items-center p-4" style={{ marginTop: '-46em' }}>
                    <DialogTrigger className="bg-blue-500 text-black px-4 py-2 rounded-full" style={{ marginLeft: '-80em' }} >Open Message</DialogTrigger>
                </div>
                <DialogContent>
                    <DialogHeader>
                        {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
                        <DialogDescription>
                            <div className="max-w-md mx-auto  bg-white shadow-md rounded-lg p-6">
                                <h2 className="text-2xl font-semibold mb-4">Edit profile</h2>
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-medium text-black">Store name</label>
                                        <input type="text" id="name" name="name" placeholder="Your name" className="mt-1  focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" style={{ height: '2em' }} />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="number" className="block text-sm font-medium text-red-700" >Store Number</label>
                                        <input type="number" id="number" name="number" placeholder="Your number" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" style={{ height: '2em' }} />
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            {/* shadcn component end */}

            {/* component from name store */}
            <TimeAndCard />
            {/* /end */}

            {/* component from name store */}
            <Currency />
            {/* end */}

            <div className=" mx-auto w-full bg-white shadow-md rounded-lg p-6" style={{ position: 'absolute', top: '20em', marginLeft: '50em', width: '40em' }} >
                <h2 className="text-2xl font-semibold mb-4">Edit profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-black">Store name</label>
                        <input value={formData.name} onChange={handleInputChange} type="text" id="name" name="name" placeholder="Your name" className="mt-1  focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" style={{ height: '2em' }} />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="number" className="block text-sm font-medium text-red-700" >Store Number</label>
                        <input value={formData.number} onChange={handleInputChange} type="number" id="number" name="number" placeholder="Your number" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" style={{ height: '2em' }} />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="email" className="block text-sm font-medium text-red-700" >Email</label>
                        <input value={formData.email} onChange={handleInputChange} type="emaill" id="email" name="email" placeholder="Store Email" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" style={{ height: '2em' }} />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Submit
                        </button>
                    </div>
                </form >
            </div >






        </>
    )
}

export default page