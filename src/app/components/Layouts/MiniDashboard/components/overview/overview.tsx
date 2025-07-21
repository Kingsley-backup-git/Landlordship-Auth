import React from "react";
import StaticProperties from "./components/properties";
import StaticTenants from "./components/tenants";
import StaticTenancies from "./components/tenancies";
import StaticRevenue from "./components/revenue";
import Timeline from "./components/timeline";
import RecentlyViewed from "./components/recentlyViewed";
import Maintenance from "./components/maintenance";
import RevenueChart from "./components/revenueChart";

export default function MiniOverview() {
  return (
    <div className="py-2 px-4 w-[100%]">
      <div className="sm:block ">
        <h1 className="text-white text-[11px]">Overview</h1>
      </div>

      <div className="xs:grid flex flex-nowrap xs:overflow-x-auto overflow-hidden lg:grid-cols-4 1md:grid-cols-2  md:grid-cols-2 sm:grid-cols-2 1sm:grid-cols-2 grid-cols-2  mt-5 sm:gap-5 gap-3">
        <StaticProperties />

        <StaticTenants />

        <StaticTenancies />

        <StaticRevenue />
      </div>

      <div className="grid grid-cols-12 sm:gap-4 gap-y-6 mt-6">
        <Timeline />

        <RecentlyViewed />

        <Maintenance />
        <RevenueChart />
        {/*



    </div>

    <div className='grid grid-cols-12 mt-6'>
<FinancialOverview />
 </div>
*/}
      </div>
    </div>
  );
}
