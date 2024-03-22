'use client'
import React, { useState } from 'react';

function Card() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    function toggleAccordion() {
        setIsAccordionOpen(!isAccordionOpen);
    }

    return (
        <div className="flex flex-col space-y-4 ">
            {/* Accordion */}
            <div className="bg-gray-100 border border-grey-200 rounded-2xl">
                <button className="w-full  py-2 px-4 text-left underline" onClick={toggleAccordion}>Desktop</button>
                <div className={`p-4 ${isAccordionOpen ? '' : 'hidden'}`}>
                    <ol>
                        <li>From your Shopify admin, go to Settings  Payments.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Card;
