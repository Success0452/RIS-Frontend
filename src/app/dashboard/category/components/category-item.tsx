import {formatDate} from "src/server/util";

export const CategoryItem = (props: any) => {
    return (
        <div className={"mb-4 flex flex-col items-center justify-center"}>
            <div
                className={"bg-blue-400 p-3 rounded-[10px] w-full md:w-[250px] h-[120px] flex flex-col justify-between items-center"}>
                <div className={'text-white text-[14px]'}>
                    {`Category: ${props?.name}`}
                </div>
                <div className={'text-white text-[12px]'}>
                    {`Date Added: ${formatDate(props?.created_at)}`}
                </div>
                <div className={'text-white text-[12px]'}>
                    {`Date Updated: ${formatDate(props?.updated_at)}`}
                </div>
            </div>
        </div>
    )
}
