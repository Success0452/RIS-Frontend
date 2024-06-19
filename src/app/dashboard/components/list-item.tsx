import {ProductItem} from "src/app/dashboard/components/product-item";

export const ListItem = (props: any) => {
    return (
        <div className={"flex flex-wrap gap-10 overflow-y-scroll scrollbar-hide items-center justify-center mt-10"}>
            {props?.products?.map((item:any, index:number) => (
                <div key={index}>
                    <ProductItem product={item} setIsLoading={props.setIsLoading} />
                </div>
            ))}
        </div>
    )
}
