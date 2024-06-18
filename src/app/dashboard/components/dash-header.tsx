"use client"
import {useRouter} from "next/navigation";
import {StaticCustomButton} from "src/components/button";
import {SideMenuItem} from "src/app/dashboard/components/sidemenu-item";
import {SideMenuHeader} from "src/app/dashboard/components/sidemenu-header";
import {useState} from "react";
import {DashboardMobileMenu} from "src/app/dashboard/components/mobile-menu";
import {DashDesktopItem} from "src/app/dashboard/components/dash-desktop";

// @ts-ignore
export const DashboardCustomHeader = ({children}) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-row items-start justify-start md:pl-6 md:pr-6 pr-3 pl-3 w-full min-h-screen">
            {!open && <DashDesktopItem open={open} setOpen={setOpen}>{children}</DashDesktopItem>}

            {open && <DashboardMobileMenu setOpen={setOpen} open={open} />}
        </div>
    )
}
