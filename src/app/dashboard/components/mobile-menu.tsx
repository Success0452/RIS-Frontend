import {useRouter} from "next/navigation";
import Image from "next/image";
import {MenuItem} from "src/components/menu-item";
import {StaticCustomButton} from "src/components/button";
import {TextLogo} from "src/components/logo";

export const DashboardMobileMenu = (props:any) => {
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

            <div className="flex flex-col items-center justify-center mt-4 mb-4">
                <StaticCustomButton title={'Dashboard'} onClick={() => {
                    router.push('/dashboard');
                    props.setOpen(false);
                }}/>
                <div className={'h-4'}/>
                <StaticCustomButton title={'Category'} onClick={() => {
                    router.push('/dashboard/category');
                    props.setOpen(false);
                }}/>
                <div className={'h-4'}/>
                <StaticCustomButton title={'Product'} onClick={() => {
                    router.push('/dashboard/product');
                    props.setOpen(false);
                }}/>
            </div>

            <StaticCustomButton title={'Logout'} onClick={() => {
                props.setOpen(false);
            }}/>

        </div>
    );
};
