'use client'
import {StaticCustomButton} from "src/components/button";
import {useRouter} from "next/navigation";

export const ProductTopItem = (props:any) => {
    const router = useRouter();
    return (
        <div className={"flex flex-col sm:flex-row items-center justify-between w-full mb-6 pl-3 pr-3 pt-3"}>
            <div className={'text-black text-[18px] md:text-[26px]'}>Products</div>
            <StaticCustomButton title={'Add New'} onClick={() => {
                router.push('/dashboard/product/create-product')
            }}/>
        </div>
    )
}
