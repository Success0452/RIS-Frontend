"use client";
import {AuthCustomHeader} from "src/app/acquisition/components/auth-header";
import {useState} from "react";
import {CustomButton} from "src/components/button";
import {useRouter} from "next/navigation";
import {RegisterFields} from "src/app/acquisition/register/components/fields";
import {AcquisitionHeader} from "src/app/acquisition/components/header";
import Lottie from "react-lottie";
import {defaultOptions} from "src/components/default-option";
import {register} from "src/server/acquisition";

export default function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <AuthCustomHeader>
            <div className={"flex flex-col items-center justify-center w-full md:w-[50%] mt-16"}>
                <AcquisitionHeader title={"Sign Up"} />

                <RegisterFields
                   username={username}
                   setUsername={setUsername}
                   password={password}
                   setPassword={setPassword}
                />

                {isLoading ?
                    <Lottie options={defaultOptions} width={100} height={50}/>
                    : <CustomButton title={'Register'} onClick={() => {
                        register(username, password, setIsLoading).then((res) => {
                            if(res?.statusCode === 201){
                                router.replace('/dashboard')
                            }
                        })
                    }} />
                }
            </div>
        </AuthCustomHeader>
    )
}
