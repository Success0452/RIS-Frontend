import {CustomButton} from "src/components/button";
import Lottie from "react-lottie";
import {defaultOptions} from "src/components/default-option";
import {updateProduct} from "src/server/product";
import {useRouter} from "next/navigation";

export const UpdateProductActions = (props:any) => {
    const router = useRouter();
    return (
        <div className={'flex flex-row items-center justify-center w-full mt-10 mb-5'}>
            {props?.isLoading ?
                <Lottie options={defaultOptions} width={100} height={50}/> :
                <CustomButton title={'Update'} onClick={() => {
                    updateProduct(
                        props?.productName,
                        props?.productDescription,
                        props?.price,
                        props?.quantity,
                        props?.categoryType,
                        props?.productId,
                        props?.setIsLoading
                    ).then((res) => {
                        router.back();
                    })
                }}/>
            }
        </div>
    )
}
