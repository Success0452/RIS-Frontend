import {FilteredProduct} from "src/app/dashboard/product/components/filtered-product";

export const ProductListItem = (props:any) => {
    return (
        <div
            className={"flex flex-col gap-10 scrollbar-hide overflow-y-scroll items-center justify-start mt-10 w-full"}>
            {props?.filteredList.map((item:any, index:number) => (
                <div key={index} className={'w-full'}>
                    <FilteredProduct product={item} setIsLoading={props.setIsLoading} />
                </div>
            ))}
        </div>
    )
}
