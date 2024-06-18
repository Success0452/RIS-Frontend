"use client"
import {CustomButton} from "src/components/button";
import {useState} from "react";
import {addCategory} from "src/server/category";
import {defaultOptions} from "src/components/default-option";
import Lottie from "react-lottie";

export const CreateCategoryActions = (props:any) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className={'flex flex-row items-center justify-center w-full mt-10'}>
            {isLoading ? <Lottie options={defaultOptions} width={100} height={50}/> : <CustomButton title={'Create'} onClick={() => {
                addCategory(props?.name, setIsLoading).then((res) => {
                    props?.setName('')
                })
            }}/>}
        </div>
    )
}
