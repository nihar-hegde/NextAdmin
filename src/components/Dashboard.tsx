import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <>
        

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link href={'/'}>Products</Link>
            </li>
            <li>
              <Link href={'/'}>Orders</Link>
            </li>
            <li>
              <Link href={'/'}>Users</Link>
            </li>
            
            
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
