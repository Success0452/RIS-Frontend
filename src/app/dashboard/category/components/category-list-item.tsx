import {CategoryItem} from "src/app/dashboard/category/components/category-item";

export const CategoryListItem = (props:any) => {
    return (
        <div
            className={"flex flex-wrap gap-10 scrollbar-hide overflow-y-scroll items-center justify-center mt-10"}>
            {props?.filteredList?.map((item:any, index:number) => (
                <div className={''} key={index}>
                    <CategoryItem category={item} />
                </div>
            ))}
        </div>
    )
}
