"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LogOut, LucideIcon, UserCircle2 } from "lucide-react";

import { logout } from "@/actions/auth/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

import { cn } from "@/lib/utils";

const UserProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = async () => {
    logout()
      .then(() => {
        //! IMPORTANT: This reload is only temporary solution
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  const user = useCurrentUser();

  const MENU_ITEMS: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    link?: string;
  }[] = [
    {
      label: "Manage Profile",
      icon: UserCircle2,
      onClick: () => {
        setIsProfileOpen(false);
      },
      link: "/user/settings",
    },
  ];

  return (
    <div className="relative">
      <Image
        src={user?.image || "/images/default-profile.png"}
        alt="profile"
        width={100}
        height={100}
        className="rounded-full cursor-pointer h-9 w-9 group-hover:opacity-70 object-contain"
        onClick={() => setIsProfileOpen((currValue) => !currValue)}
      />

      <div
        className={cn(
          "absolute right-0 z-30 px-2 py-3 rounded-md shadow-md w-56 top-14 bg-background border border-border text-foreground duration-300",
          isProfileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        )}
      >
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="px-2 py-3 font-medium rounded-md text-muted-foreground">
              @{user?.email?.split("@")[0]}
            </h3>
          </li>

          <hr className="bg-border" />

          {MENU_ITEMS.map((item, index) => {
            return (
              <li
                key={index}
                onClick={item.onClick}
                className="flex items-center gap-3 px-2 font-medium transition-colors rounded-md cursor-pointer hover:bg-muted border border-transparent hover:border-border"
              >
                {item.link ? (
                  <Link href={item.link}>
                    <div className="flex items-center gap-3">
                      <item.icon className="w-auto py-3 h-11" />
                      <h3>{item.label}</h3>
                    </div>
                  </Link>
                ) : (
                  <div className="flex items-center gap-3">
                    <item.icon className="w-auto py-3 h-11" />
                    <h3>{item.label}</h3>
                  </div>
                )}
              </li>
            );
          })}

          <li
            onClick={handleLogout}
            className="flex items-center gap-3 px-2 font-medium transition-colors rounded-md cursor-pointer hover:bg-muted border border-transparent hover:border-border"
          >
            <LogOut className="w-auto py-3 h-11" />
            <h3>Logout</h3>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
