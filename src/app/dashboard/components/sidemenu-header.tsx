import {useRouter} from "next/navigation";
import Image from "next/image";

export const SideMenuHeader = (props:any) => {
    const router = useRouter();

    return (
        <div className={"flex flex-row w-full justify-between items-center z-20"}>
            <div className={"text-[30px] text-blue-600 font-[900] cursor-pointer"} onClick={() => {
                router.push("/dashboard");
            }}>RS
            </div>

            <div className={'flex md:hidden cursor-pointer'} onClick={() => {
                props.setOpen(!props.open);
            }}>
                <Image src={'/menu.svg'} alt={'menu svg'} width={20} height={20} />
            </div>
        </div>
    )
}
