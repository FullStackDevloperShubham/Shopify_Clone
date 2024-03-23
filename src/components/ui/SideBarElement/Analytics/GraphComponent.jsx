// components/InteractiveGraphCard.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GraphComponent = () => {
    const graphRef = useRef(null);

    useEffect(() => {
        const ctx = graphRef.current.getContext('2d', { alpha: true });
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Total orders',
                    data: [25, 59, 80, 81, 56, 55, 40],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
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
        <div className="bg-white  shadow-md rounded-lg p-6" style={{ height: '20em', width: '30em', position: 'absolute', top: '0', marginLeft: '20em' }}>
            <div className="graph-container">
                <canvas ref={graphRef}></canvas>
            </div>
        </div>
    );
};

export default GraphComponent;



