'use client'
import {StaticCustomButton} from "src/components/button";
import {useRouter} from "next/navigation";

export const CategoryTopItem = (props:any)  => {
    const router = useRouter();
    return (
        <div className={"flex flex-col sm:flex-row items-center justify-between w-full mb-6 mt-4"}>
            <div className={'text-black text-[18px] md:text-[26px]'}>Category</div>
            <StaticCustomButton title={'Add'} onClick={() => {
                router.push('/dashboard/category/create-category')
            }} />
        </div>
    )
}
