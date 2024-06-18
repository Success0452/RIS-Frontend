import {TextBox} from "src/components/field";

export const CreateCategoryFields = (props:any) => {
    return (
        <div className={"flex flex-col w-full md:w-[50%]"}>
            <div className={"flex flex-col items-start justify-start w-full mt-10"}>
                <div className={"text-[14px] text-black font-[500] mb-3"}>Category Name</div>
                <TextBox value={props.categoryName} setValue={props.setCategoryName} height={40} placeholder={'Category Name'}
                         inputType={'name'}/>
            </div>
        </div>
    )
}
