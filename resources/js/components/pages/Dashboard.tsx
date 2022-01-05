import React from "react";

// Components
import DashboardContainer from "../common/dashboard/container.dashboard";
import DashNav from "../common/dashboard/dashNav";
import SidebarDashboard from "../common/dashboard/sidebar.dashboard";

const Dashboard = () => {
    return (
        <div>
            <DashNav />

            <div className="flex flex-row">
                <div className=" w-64 bg-red-800">
                    <SidebarDashboard />
                </div>
                <DashboardContainer />
            </div>
        </div>
    );
};

export default Dashboard;
