import {TextBox} from "src/components/field";

export const SearchItem = (props: any) => {
    return (
        <div className={'w-full flex flex-row items-center justify-center'}>
            <div className={"flex flex-row items-center justify-center w-full md:w-[50%]"}>
                <TextBox value={props.searchTerm} setValue={props?.filterProduct} placeholder={'Search'}/>
            </div>
        </div>
    )
}
