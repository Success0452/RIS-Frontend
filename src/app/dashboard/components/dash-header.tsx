"use client"
import {useRouter} from "next/navigation";
import {StaticCustomButton} from "src/components/button";
import {SideMenuItem} from "src/app/dashboard/components/sidemenu-item";
import {SideMenuHeader} from "src/app/dashboard/components/sidemenu-header";
import {useState} from "react";
import {DashboardMobileMenu} from "src/app/dashboard/components/mobile-menu";
import {DashDesktopItem} from "src/app/dashboard/components/dash-desktop";
import Lottie from "react-lottie";
import {defaultOptions} from "src/components/default-option";

// @ts-ignore
export const DashboardCustomHeader = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-row items-start justify-start md:pl-6 md:pr-6 pr-3 pl-3 w-full min-h-screen">
            {isLoading ? <div className={'w-full min-h-screen flex flex-col items-center justify-center'}><Lottie options={defaultOptions} width={100} height={100} /></div> : <>
                {!open && <DashDesktopItem open={open} setOpen={setOpen}
                                           setIsLoading={setIsLoading}>{children}</DashDesktopItem>}

                {open && <DashboardMobileMenu setOpen={setOpen} open={open}/>}
            </>}
        </div>
    )
}
