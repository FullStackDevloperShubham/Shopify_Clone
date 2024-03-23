'use client'
import React from 'react';
import GraphComponent from '../../../components/ui/SideBarElement/Analytics/GraphComponent'
import Side from '@/components/ui/Side';
import SalesByChannle from '@/components/ui/SideBarElement/Analytics/SalesByChannle'
import OnlineStoreSession from '@/components/ui/SideBarElement/Analytics/OnlineStoreSessions'
import TopSallingProducts from '@/components/ui/SideBarElement/Analytics/TopSallingProducts'
const Home = () => {
    return (
        <div>
            <Side />

            <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
                <GraphComponent />
                <SalesByChannle />
                <OnlineStoreSession />
                <TopSallingProducts />

            </div>




        </div>
    );
};

export default Home;
