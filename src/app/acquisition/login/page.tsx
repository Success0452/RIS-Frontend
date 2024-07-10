"use client";
import {AuthCustomHeader} from "src/app/acquisition/components/auth-header";
import {useState} from "react";
import {CustomButton} from "src/components/button";
import {useRouter} from "next/navigation";
import {LoginFields} from "src/app/acquisition/login/components/fields";
import {AcquisitionHeader} from "src/app/acquisition/components/header";
import {login} from "src/server/acquisition";
import Lottie from "react-lottie";
import {defaultOptions} from "src/components/default-option";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    return (
        <AuthCustomHeader>
            <div className={"flex flex-col items-center justify-center w-full md:w-[50%] mt-16"}>
                <AcquisitionHeader title={'Sign In'} />

                <LoginFields
                   username={username}
                   setUsername={setUsername}
                   password={password}
                   setPassword={setPassword}
                   address={address}
                   setAddress={setAddress}
                />

                {isLoading ?
                    <Lottie options={defaultOptions} width={100} height={50}/> :
                    <CustomButton title={'Login'} onClick={() => {
                        login(username, password, setIsLoading).then((res) => {
                            if(res?.statusCode === 200){
                                router.replace('/dashboard')
                            }
                        })
                    }}/>
                }
            </div>
        </AuthCustomHeader>
    )
}
