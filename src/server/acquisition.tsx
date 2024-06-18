import {toast} from "sonner";
import {apiRequest} from "src/server/index";

export const register = async(username:string, password:string, setIsLoading:any) => {
    if(!username || !password){
        toast.info('username and password is required');
        return;
    }
    setIsLoading(true)
    const apiResponse = await apiRequest('post', '/register', {name: username, password: password});
    console.log(apiResponse);
    if(apiResponse.statusCode === 201){
        toast.success('registration successful');
        setIsLoading(false)
        return apiResponse;
    }else{
        if ("message" in apiResponse) {
            toast.info(apiResponse.message);
        }
        setIsLoading(false)
    }
}

export const login = async(username:string, password:string, setIsLoading:any) => {
    if(!username || !password){
        toast.info('username and password is required');
        return;
    }
    setIsLoading(true)
    const apiResponse = await apiRequest('post', '/login', {name: username, password: password});
    console.log(apiResponse);
    if(apiResponse.statusCode === 200){
        toast.success('login success');
        localStorage.setItem('username', username);
        setIsLoading(false)
        return apiResponse;
    }else{
        if ("message" in apiResponse) {
            toast.info(apiResponse.message);
        }
        setIsLoading(false);
        return apiResponse;
    }
}

export const logout = async(setIsLoading:any) => {
    const apiResponse = await apiRequest('post', '/logout');
    if(apiResponse.statusCode === 200){
        toast.success('account logged out successfully');
        return apiResponse;
    }else{
        if ("message" in apiResponse) {
            toast.info(apiResponse.message);
        }
        return apiResponse;
    }
}
