"use client"
import Image from "next/image";
import {useRouter} from "next/navigation";
import {deleteProduct} from "src/server/product";

export const ProductBox = (props: any) => {
    const router = useRouter();
    return (
        <div
            className={"bg-blue-400 p-3 rounded-[10px] w-[250px] h-[200px] flex flex-col justify-between items-center"}>
            <div className={'text-white text-[16px]'}>
                {props?.product?.description}
            </div>
            <div className={"flex flex-row items-center justify-between w-full"}>
                <div
                    className={"cursor-pointer bg-white w-[25px] h-[25px] rounded-[10px] flex items-center justify-center"} onClick={() => {
                        deleteProduct(props?.product?.id, props?.setIsLoading).then((data) => {
                            if(data?.statusCode === 200){
                                window.location.reload();
                            }
                        })
                }}>
                    <Image src={'/delete.svg'} width={20} height={20} alt={'delete button'}/>
                </div>
                <div
                    className={"cursor-pointer bg-white w-[25px] h-[25px] rounded-[10px] flex items-center justify-center z-20"} onClick={() => {
                        router.push(`/dashboard/product/update-product/${props?.product?.id}`);
                }}>
                    <Image src={'/edit.svg'} width={20} height={20} alt={'edit button'}/>
                </div>
            </div>
        </div>
    );
}
