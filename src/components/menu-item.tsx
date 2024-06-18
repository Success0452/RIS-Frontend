import {useRouter} from "next/navigation";

export const MenuItem = (props:any) => {
    const router = useRouter();
    return (
        <div
            className={`text-[#4F4F4F]  font-[500] leading-[24px]`}
            onClick={() => {
                router.push(props.link)
                props.setOpen(false);
            }}
        >
            {props.title}
        </div>
    )
}
