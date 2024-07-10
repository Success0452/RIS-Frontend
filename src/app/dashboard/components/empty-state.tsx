import Lottie from "react-lottie";
import {emptyDefaultOptions} from "src/components/default-option";

export const EmptyState = (props:any) => {
    return (
        <div className={'flex flex-col items-center justify-center w-full h-full'}>
            <Lottie options={emptyDefaultOptions} width={100} height={100} />
            <div className={'text-black text-[14px]'}>{props?.message}</div>
        </div>
    )
}
