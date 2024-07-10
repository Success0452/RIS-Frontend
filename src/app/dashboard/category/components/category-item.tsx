import {formatDate} from "src/server/util";

export const CategoryItem = (props: any) => {
    return (
        <div className={"mb-4 flex flex-col items-center justify-center"}>
            <div
                className={"bg-blue-400 p-3 rounded-[10px] w-full md:w-[250px] h-[120px] flex flex-col justify-between items-center"}>
                <div className={'text-white text-[16px] font-[600]'}>
                    {`${props?.category?.name}`}
                </div>
                <div className={'flex flex-col items-center justify-center'}>
                    <div className={'text-white text-[12px]'}>
                        {`Date Added`}
                    </div>
                    <div className={'text-white text-[12px]'}>
                        {`${formatDate(props?.category?.created_at)}`}
                    </div>
                </div>
                <div className={'flex flex-col items-center justify-center mt-2'}>
                    <div className={'text-white text-[12px]'}>
                        {`Date Updated`}
                    </div>
                    <div className={'text-white text-[12px]'}>
                        {`${formatDate(props?.category?.updated_at)}`}
                    </div>
                </div>
            </div>
        </div>
    )
}
