"use client"
import {StaticCustomButton} from "src/components/button";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {AuthMobileMenu} from "src/app/acquisition/components/mobile-menu";
import Image from "next/image";

// @ts-ignore
export const AuthCustomHeader = ({children}) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    return (
        <div className="flex flex-col items-center justify-start p-10 w-full min-h-screen">
            {!open && <>
                <div className={"flex flex-row w-full justify-between items-center z-20"}>

                    <div className={"text-[30px] text-blue-600 font-[900] cursor-pointer"} onClick={() => {
                        router.push("/");
                    }}>RS
                    </div>

                    <div className={'hidden md:flex'}>
                        <StaticCustomButton title={'Login'} onClick={() => {
                            router.push("/acquisition/login");
                        }}/>
                    </div>

                    <div className={'flex md:hidden cursor-pointer'} onClick={() => {
                        setOpen(!open);
                    }}>
                        <Image src={'/menu.svg'} alt={'menu svg'} width={20} height={20}/>
                    </div>

                </div>

                {children}
            </>}

            {open && <AuthMobileMenu setOpen={setOpen} open={open}/>}
        </div>
    )
}
