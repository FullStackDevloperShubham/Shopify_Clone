'use client'
import React, { useState } from 'react';

const OrderDetails = () => {
    // States for input values
    const [totalNumber, setTotalNumber] = useState('');
    const [orderTime, setOrderTime] = useState('');
    const [orderOverTime, setOrderOverTime] = useState('');
    const [returnValue, setReturnValue] = useState('');
    const [fulfillOrderTime, setFulfillOrderTime] = useState('');
    const [timeToFullfill, setTimeToFullfill] = useState('');

    // Function to handle changes in input fields
    const handleInputChange = (e: any, setValue: any) => {
        setValue(e.target.value);
    };

    // Displaying date
    const CurrentDate = new Date()

    return (
        <div className="absolute top-0  container  p-4" style={{ marginLeft: '20em', width: '60em' }}>
            <div className="flex flex-wrap gap-8">
                <button
                    className="border bg-blue-100 text-blue-900 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Total Number:
                </button>

                <button
                    className="border bg-blue-100 text-blue-900 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Order Time:
                </button>

                <button
                    className="border bg-blue-100 text-blue-900 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Order Over Time:{CurrentDate.toDateString()}
                </button>

                <button
                    className="border bg-blue-100 text-blue-900 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Return:
                </button>

                <button
                    className="border bg-blue-100 text-blue-900 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Fulfill Order Time:
                </button>

                <button
                    className="border bg-blue-100 text-blue-900 rounded-2xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Time to Fulfill:
                </button>
            </div>
        </div>
    );
};

export default OrderDetails;
