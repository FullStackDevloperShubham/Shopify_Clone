import React, { useState } from 'react';

const CurrencyCard = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('');

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-md p-6" style={{ position: 'absolute', top: '0', marginLeft: '50em', marginTop: '10em', width: '40em' }}>
            <h2 className="text-2xl  border-b-4 border-blue-500 font-semibold  mb-4">Currency Selection</h2>
            <div className="mb-4">
                {/* <label htmlFor="currency" className="block text-sm font-medium  border text-gray-700">Select Currency</label> */}
                <select id="currency" value={selectedCurrency} onChange={handleCurrencyChange} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select currency</option>
                    <option value="USD">US Dollar (USD)</option>
                    <option value="EUR">Euro (EUR)</option>
                    <option value="GBP">British Pound (GBP)</option>
                    <option value="JPY">Japanese Yen (JPY)</option>
                    {/* Add more currency options as needed */}
                </select>
            </div>
            {selectedCurrency && (
                <div>
                    <p className="text-lg font-semibold">Selected Currency:</p>
                    <p>{selectedCurrency}</p>
                </div>
            )}
        </div>
    );
};

export default CurrencyCard;
