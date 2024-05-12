import { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <div className="flex items-center justify-center gap-4 mt-72">
        <Link href={"/"}>
          <Button>Go to Home</Button>
        </Link>

        <Link href={"/settings"}>
          <Button variant={"secondary"}>Go to Settings</Button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
