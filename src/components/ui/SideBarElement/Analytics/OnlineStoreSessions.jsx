import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';



function SalesByChannle() {

    // graph
    const graphRef = useRef(null);

    useEffect(() => {
        const ctx = graphRef.current.getContext('2d', { alpha: true });
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Online store sessions',
                    data: [3, 2, 1, 1, 3, 2, 1],
                    backgroundColor: 'rgba(54, 162, 235, 1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <>
            <div className="bg-white  shadow-md rounded-lg p-6" style={{ height: '20em', width: '30em', position: 'absolute', top: '22em', marginLeft: '20em' }}>
                <div className="graph-container">
                    <canvas ref={graphRef}></canvas>
                </div>
            </div>
        </>
    )
}

export default SalesByChannle