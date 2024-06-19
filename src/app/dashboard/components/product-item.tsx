import Image from "next/image";
import {ProductBox} from "src/app/dashboard/components/product-box";

export const ProductItem = (props: any) => {
    return (
        <div className={"mb-4 flex flex-col items-center justify-center w-full"}>
            <div className={'w-full flex flex-row items-center justify-start'}>
                <div className={'text-black text-[14px]'}>{props?.product?.name}</div>
            </div>
            <ProductBox product={props?.product} setIsLoading={props?.setIsLoading} />
            <div className={'w-full flex flex-col md:flex-row items-center justify-between mt-3'}>
                <div className={'text-black text-[14px]'}>{`Q:${String(props?.product?.quantity)}`}</div>
                <div className={'text-black text-[14px]'}>{`Price: #${props?.product?.price}`}</div>
            </div>
        </div>
    )
}
