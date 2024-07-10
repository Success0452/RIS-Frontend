import {TextBox} from "src/components/field";
import LocationAutoSuggest from "src/app/acquisition/login/components/autocomplete";

export const LoginFields = (props:any) => {
    return (
        <div className={"flex flex-col w-full"}>
            <div className={"flex flex-col items-start justify-start w-full mt-10"}>
                <div className={"text-[14px] text-black font-[500] mb-3"}>Username</div>
                <TextBox value={props.username} setValue={props.setUsername} height={40}
                         placeholder={'fill username here'}
                         inputType={'username'}/>
            </div>

            <div className={"flex flex-col items-start justify-start w-full mt-6 mb-10"}>
                <div className={"text-[14px] text-black font-[500] mb-3"}>Password</div>
                <TextBox value={props.password} setValue={props.setPassword} height={40}
                         placeholder={'fill password here'}
                         inputType={'password'}/>
            </div>

            <div className={"flex flex-col items-start justify-start w-full mt-6 mb-10"}>
                <div className={"text-[14px] text-black font-[500] mb-3"}>Location</div>
                <LocationAutoSuggest setQuery={props.setAddress} query={props.address} />
            </div>
        </div>
    )
}
