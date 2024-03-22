import React from 'react'
import Add from '@/components/ui/Customize-Theme/CustomThemeAddButton/Add'

function Customize() {
    return (
        <>
            <div class="relative ">
                {/* <!-- Outer card --> */}
                <div class="absolute  bg-white rounded-lg shadow-lg p-6 text-gray-800 dark:text-white  " style={{ width: '69em', marginLeft: '20em', height: '36em' }}>
                </div>

                {/* <!-- Inner card positioned at the top of the outer card --> */}
                <div class="absolute bg-white top-0 left-0 border border-gray-300 rounded-e-sm shadow-lg p-6 text-gray-800 " style={{ width: '30em', height: '16em', marginLeft: '23em', marginTop: '1em' }}>
                    {/* <!-- Inner card content --> */}
                    <div>
                        <img src="/Accordien-2-card-1.avif" alt="Image" class="object-cover rounded " style={{ height: '10em', width: '30em' }} />
                        <Add />
                    </div>
                </div>

                {/* second inner cars */}
                <div class="absolute top-0 left-0 bg-white border border-gray-300 rounded-e-sm shadow-lg p-6 text-gray-800 " style={{ width: '30em', height: '16em', marginLeft: '55em', marginTop: '1em' }}>
                    {/* <!-- Inner card content --> */}
                    <div>
                        <img src="/Accordien-2-card-1-innercard-2.avif" alt="Image" class="object-cover rounded " style={{ height: '10em', width: '30em' }} />
                        <Add />
                    </div>
                </div>

                {/* third inner card */}
                <div class="absolute top-0 left-0 bg-white border border-gray-300 rounded-e-sm shadow-lg p-6 text-gray-800 " style={{ width: '30em', height: '16em', marginLeft: '23em', marginTop: '18em' }}>
                    {/* <!-- Inner card content --> */}
                    <div>
                        <img src="/Accordien-2-card-1-innercard-3.avif" alt="Image" class="object-cover rounded  " style={{ height: '10em', width: '30em' }} />
                        <Add />
                    </div>
                </div>

                {/* forth */}
                <div class="  absolute top-0 left-0 bg-white border border-gray-300 rounded-e-sm shadow-lg p-6 text-gray-800 " style={{ width: '30em', height: '16em', marginLeft: '55em', marginTop: '18em' }}>
                    {/* <!-- Inner card content --> */}
                    <div>
                        <img src="/Accordien-2-card-1-innercard-4.avif" alt="Image" class="object-cover rounded  " style={{ height: '10em', width: '30em' }} />
                        <Add />
                    </div>
                </div>

            </div >


        </>
    )
}

export default Customize