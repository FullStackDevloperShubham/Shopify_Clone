import React from 'react'

function SalesByChannle() {
    return (
        <>
            <div className="relative bg-white shadow-md rounded-lg p-6" style={{ height: '20em', width: '30em', position: 'absolute', top: '0', marginLeft: '54em' }}>
                <h2 className="text-lg font-semibold mb-2">Sales by channel</h2>
                <div className="border-b border-dotted mb-4"></div>
                <h6 style={{ marginTop: '7em', marginLeft: '3em' }}>There was no data found for this date range.</h6>
            </div>
        </>
    )
}

export default SalesByChannle