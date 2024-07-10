"use client"
import Image from "next/image";
import {CustomButton} from "src/components/button";
import {useRouter} from "next/navigation";
import {LandingCenterItem} from "src/app/landing/components/landing-center-item";

export const Landing = () => {
    const router = useRouter();
    return (
        <div className={"flex flex-col items-center justify-center w-full min-h-screen"}>
            <Image src={"/circle.svg"} fill alt={"logo"} className={"absolute z-0 animate-pulse object-contain"}/>

            <LandingCenterItem />

            <div className={"flex flex-col md:flex-row items-center justify-center w-full z-20"}>
                <CustomButton title={'Register'} onClick={() => {router.push("/acquisition/register")}} />
            </div>
        </div>
    )
}
