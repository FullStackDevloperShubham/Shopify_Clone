import React from 'react'

function TopSallingProducts() {
    return (
        <div className="bg-white  shadow-md rounded-lg p-6" style={{ height: '20em', width: '30em', position: 'absolute', top: '22em', marginLeft: '54em' }}>
            <h2 className="text-lg font-semibold mb-2">Top selling products</h2>
            <div className="border-b border-dotted mb-4"></div>
            <h6 style={{ marginTop: '7em', marginLeft: '3em' }}>There was no data found for this date range.</h6>
        </div>
    )
}

export default TopSallingProducts