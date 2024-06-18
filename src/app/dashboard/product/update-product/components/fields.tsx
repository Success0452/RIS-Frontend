import {TextBox} from "src/components/field";
import {SelectBox} from "src/components/dropdown";

export const UpdateProductFields = (props:any) => {
    return (
        <div className={"flex flex-col w-full md:w-[50%]"}>
            <div className={"flex flex-col items-start justify-start w-full mt-10"}>
                <div className={"text-[14px] text-black font-[500] mb-3"}>Product Name</div>
                <TextBox value={props.productName} setValue={props.setProductName} height={40}
                         placeholder={'Product Name'}
                         inputType={'name'}/>
            </div>

            <div className={"flex flex-col items-start justify-start w-full mt-5"}>
                <div className={"text-[14px] text-black font-[500] mb-3"}>Product Description</div>
                <TextBox value={props.description} setValue={props.setDescription} isTextarea={true} height={100}
                         placeholder={'Description Name'}
                         inputType={'name'}/>
            </div>

            <div className={"flex flex-col items-start justify-start w-full mt-5"}>
                <div className={"text-[14px] text-black font-[500] mb-3"}>Price</div>
                <TextBox value={props.price} setValue={props.setPrice} height={40}
                         placeholder={'Price(NGN)'}
                         inputType={'name'}/>
            </div>

            <div className={"flex flex-col items-start justify-start w-full mt-5"}>
                <div className={"text-[14px] text-black font-[500] mb-3"}>Quantity</div>
                <TextBox value={props.quantity} setValue={props.setQuantity} height={40}
                         placeholder={'Quantity'}
                         inputType={'number'}/>
            </div>

            <div className={"flex flex-col items-start justify-start w-full mt-5"}>
                <div className={"text-[14px] text-black font-[500] mb-3"}>Quantity</div>
                <SelectBox value={props.categoryType} setValue={props.setCategoryType} optionId={true} height={40}
                         placeholder={'CategoryType'} list={['Select', ...props?.categories]}/>
            </div>
        </div>
    )
}
