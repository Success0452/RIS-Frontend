"use client"
import {useRouter, usePathname} from "next/navigation";
import {FC} from "react";
import Image from "next/image";

interface SideMenuProps {
    svg: string;
    title?: string;
    route?: string;
    alt?: string;
    noClick?: boolean
}

export const SideMenuItem: FC<SideMenuProps> = ({ svg, title, route, noClick, alt}) => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className={`flex flex-row items-center start w-full ${pathname.split('/').pop() === route?.split('/').pop() && 'bg-[#F8F8F8]'} hover:bg-[#F8F8F8] cursor-pointer rounded-[6px] h-[38px] mt-3`} onClick={() => {
            if (!noClick) {
                router.push(`/${route}`)
            }
        }}>
            <div className={"flex flex-row items-center justify-start w-full lg:pl-3"}>
                <Image src={svg} width={20} height={20} alt={'alt'}/>
                <div className={"w-4"}/>
                <div className={`text-[#101010] text-center hover:font-[600] ${pathname.split('/').pop() === route?.split('/').pop() ? 'font-[600]' : 'font-[400]'} leading-[22px]`}>{title}</div>
            </div>
        </div>
    )
}
