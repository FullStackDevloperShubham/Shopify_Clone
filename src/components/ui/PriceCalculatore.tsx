import React, { useState } from 'react';

const ProfitMarginCalculator = () => {
    const [price, setPrice] = useState('');
    const [comparePrice, setComparePrice] = useState('');
    const [costPerItem, setCostPerItem] = useState('');
    const [profitMargin, setProfitMargin] = useState('');

    const calculateProfitMargin = () => {
        const priceFloat = parseFloat(price);
        const comparePriceFloat = parseFloat(comparePrice);
        const costPerItemFloat = parseFloat(costPerItem);

        if (!isNaN(priceFloat) && !isNaN(comparePriceFloat) && !isNaN(costPerItemFloat)) {
            const margin = ((priceFloat - costPerItemFloat) / priceFloat) * 100;
            setProfitMargin(margin.toFixed(2) + '%');
        } else {
            setProfitMargin('');
        }
    };

    return (
        <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60em">
            <div className="p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="price"
                        type="text"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comparePrice">
                        Compare Price
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="comparePrice"
                        type="text"
                        placeholder="Enter compare price"
                        value={comparePrice}
                        onChange={(e) => setComparePrice(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="costPerItem">
                        Cost Per Item
                    </label>
                    <input
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="costPerItem"
                        type="text"
                        placeholder="Enter cost per item"
                        value={costPerItem}
                        onChange={(e) => setCostPerItem(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={calculateProfitMargin}
                    >
                        Calculate Profit Margin
                    </button>
                </div>
                {profitMargin && (
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Profit Margin</label>
                        <p className="text-gray-700">{profitMargin}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfitMarginCalculator;
