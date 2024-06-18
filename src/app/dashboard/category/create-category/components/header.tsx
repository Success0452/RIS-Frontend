import {useRouter} from "next/navigation";
import Image from "next/image";

export const CreateCategoryHeader = (props:any) => {
    const router = useRouter();
    return (
        <div className={"flex flex-row items-center justify-between w-full mt-4"}>
            <div className={"text-[20px] text-black font-[600]"}>{props.title}</div>
            <div className={"cursor-pointer"} onClick={() => {
                router.back();
            }}>
                <Image src={"/back.svg"} width={40} height={40} alt={"logo"}/>
            </div>
        </div>
    )
}
