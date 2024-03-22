import React, { useState } from 'react';

const TimeAndCard = () => {
    const [timeZone, setTimeZone] = useState('');
    const [unitSystem, setUnitSystem] = useState('metric');
    const [weightUnit, setWeightUnit] = useState('kg');

    const handleTimeZoneChange = (e) => {
        setTimeZone(e.target.value);
    };

    const handleUnitSystemChange = (e) => {
        setUnitSystem(e.target.value);
    };

    const handleWeightUnitChange = (e) => {
        setWeightUnit(e.target.value);
    };

    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-md p-6" style={{ width: '30em', position: 'absolute', top: '0', marginLeft: '18em', marginTop: '10em' }}>
            <h2 className="text-2xl font-semibold mb-4">Settings</h2>
            <div className="mb-4">
                <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">Time Zone</label>
                <select id="timezone" value={timeZone} onChange={handleTimeZoneChange} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="GMT-12">{new Date().toDateString()}</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="unitsystem" className="block text-sm font-medium text-gray-700">Unit System</label>
                <select id="unitsystem" value={unitSystem} onChange={handleUnitSystemChange} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="metric">Metric</option>
                    <option value="imperial">Imperial</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="weightunit" className="block text-sm font-medium text-gray-700">Weight Unit</label>
                <select id="weightunit" value={weightUnit} onChange={handleWeightUnitChange} className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                    <option value="kg">Kilograms (kg)</option>
                    {unitSystem === 'imperial' && <option value="lbs">Pounds (lbs)</option>}
                    {unitSystem === 'imperial' && <option value="oz">Ounces (oz)</option>}
                </select>
            </div>
        </div >
    );
};

export default TimeAndCard;
