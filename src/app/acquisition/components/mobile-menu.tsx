import Image from "next/image";
import {StaticCustomButton} from "src/components/button";
import {TextLogo} from "src/components/logo";
import {useRouter} from "next/navigation";

export const AuthMobileMenu = (props:any) => {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-start w-full">

            <div
                className="bg-[#FFE0CC] w-[50px] h-[50px] rounded-full mt-10 flex items-center justify-center"
                onClick={() => props.setOpen(false)}
            >
                <Image src={'/back.svg'} width={50} height={50} alt={'back'} />
            </div>

            <TextLogo />

            <StaticCustomButton title={'Login'} onClick={() => {
                router.push('/acquisition/login');
                props.setOpen(false);
            }}/>

            <div className={'h-4'} />

            <StaticCustomButton title={'Register'} onClick={() => {
                router.push("/acquisition/register");
                props.setOpen(false);
            }}/>

        </div>
    );
};
