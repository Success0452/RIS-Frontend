import {ProductItem} from "src/app/dashboard/components/product-item";

export const FilteredProduct = (props:any) => {
    return (
        <div className={"flex flex-col items-start justify-start w-full"}>
            <div className={'text-black text-[26px]'}>{props?.product?.category}</div>
            <div
                className={"flex flex-row overflow-x-scroll scrollbar-hide items-center justify-start w-full"}>
                {props?.product?.data.map((item:any, index:number) => (
                    <div key={index} className={'ml-6 w-full'}>
                        <ProductItem product={item} refreshList={props?.refreshList} setIsLoading={props?.setIsLoading} />
                    </div>
                ))}
            </div>
        </div>
    )
}
