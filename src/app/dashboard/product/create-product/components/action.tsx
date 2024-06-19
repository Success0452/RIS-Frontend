import {CustomButton} from "src/components/button";
import {addProduct} from "src/server/product";
import {defaultOptions} from "src/components/default-option";
import Lottie from "react-lottie";
import {useRouter} from "next/navigation";

export const CreateProductActions = (props:any) => {
    const router = useRouter();
    return (
        <div className={'flex flex-row items-center justify-center w-full mt-10 mb-5'}>
            {props?.isLoading ? <Lottie options={defaultOptions} width={100} height={50}/> :
                <CustomButton title={'Create'} onClick={() => {
                addProduct(props?.productName, props?.productDescription, props?.price, props?.quantity, props?.categoryType, props?.setIsLoading)
                    .then((res) => {
                        props?.setProductName('');
                        props?.setProductDescription('');
                        props?.setPrice('');
                        props?.setQuantity('');
                        props?.setCategoryType('');
                        router.replace('/dashboard');
                    })
            }}/>}
        </div>
    )
}
