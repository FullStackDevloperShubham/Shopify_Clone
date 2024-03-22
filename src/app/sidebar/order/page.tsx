import React from 'react'
import Side from '@/components/ui/Side'
import Topbar from '@/components/ui/SideBar-order-top/TopBar'
import Card from '@/components/ui/SideBar-order-top/Card/orderCard'

function page() {
    return (
        <>
            {/* side bar  */}
            <Side />
            {/*side bar end  */}


            {/* top bar */}
            <Topbar />
            {/* top bar end */}

            {/* main conponent */}
            <Card />





        </>
    )
}

export default page