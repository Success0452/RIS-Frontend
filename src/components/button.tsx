
export const CustomButton = (props:any) => {
    return (
        <div className={"w-full md:w-[100px] h-[36px] bg-blue-600 rounded-[10px] flex items-center justify-center cursor-pointer"} onClick={props.onClick}>
            <div className={"text-[14px] text-white font-[400] text-center"}>{props.title}</div>
        </div>
    )
}

export const StaticCustomButton = (props:any) => {
    return (
        <div className={"w-[100px] h-[36px] bg-blue-600 rounded-[10px] flex items-center justify-center cursor-pointer"} onClick={props.onClick}>
            <div className={"text-[14px] text-white font-[400] text-center"}>{props.title}</div>
        </div>
    )
}
