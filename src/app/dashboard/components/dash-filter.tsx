import {SelectBox} from "src/components/dropdown";

export const DashFilter = (props: any) => {

    return (
        <div className={'w-full flex flex-row items-center justify-center'}>
            <div className={"flex flex-row items-center justify-center w-full md:w-[50%]"}>
                <SelectBox value={props?.searchTerm} setValue={props?.setSearchTerm} optionId={true}
                           list={[{name: "Filter by category", id:''}, ...(props?.categories || [])]} placeholder={'Filter'}/>
            </div>
        </div>
    )
}
