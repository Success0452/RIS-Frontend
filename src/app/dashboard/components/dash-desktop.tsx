"use client"
import {SideMenuHeader} from "src/app/dashboard/components/sidemenu-header";
import {SideMenuItem} from "src/app/dashboard/components/sidemenu-item";
import {logout} from "src/server/acquisition";
import {useRouter} from "next/navigation";
import {useState} from "react";

export const DashDesktopItem = (props:any) => {
    const router = useRouter();

    return (
        <>
            <div className={"w-[200px] hidden md:flex flex-col items-start justify-start mr-6 mt-6"}>
                <SideMenuHeader setOpen={props.setOpen} open={props?.open}/>
                <SideMenuItem svg={'/cat1.svg'} alt={"dashboard"} title={"Dashboard"} route={'dashboard'}/>
                <SideMenuItem svg={'/cat2.svg'} alt={"category"} title={"Category"} route={'dashboard/category'}/>
                <SideMenuItem svg={'/cat3.svg'} alt={"product"} title={"Product"} route={'dashboard/product'}/>
                <div onClick={() => {
                    logout(props?.setIsLoading).then(r => {
                        router.replace('/');
                    });
                }}>
                    <SideMenuItem svg={'/logout.svg'} alt={"logout"} title={"Logout"} route={'/dashboard/logout'} noClick={true} />
                </div>
            </div>

            <div className={'min-h-screen bg-blue-400 w-[1px] hidden md:flex'}/>

            <div
                className={"flex flex-col items-start justify-start md:pl-8 md:pr-8 pr-2 pl-2 pt-2 w-full h-screen overflow-x-hidden"}>

                <div className={'flex md:hidden w-full'}>
                    <SideMenuHeader setOpen={props.setOpen} open={props.open}/>
                </div>

                {props.children}
            </div>
        </>
    )
}
