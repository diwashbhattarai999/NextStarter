import React from "react";
import { Metadata } from "next";

import Sidebar from "@/components/sections/dashboard/Sidebar";
import Topbar from "@/components/sections/dashboard/Topbar";

export const metadata: Metadata = {
  title: {
    template: "%s - Dashboard | DB-NextStarter",
    default:
      "DB-NextStarter | Your Next.js Boilerplate with Authentication and more...",
  },
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex-1">
        {/* Topbar */}
        <Topbar />
        {/* Main content */}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
