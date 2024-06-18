import {toast} from "sonner";
import {apiRequest} from "src/server/index";

export const addCategory = async(name:string, setIsLoading:any) => {
    if(!name){
        toast.info('name is required');
        return;
    }
    setIsLoading(true)
    const apiResponse = await apiRequest('post', '/categories', {name: name});
    console.log(apiResponse);
    if(apiResponse.statusCode === 201){
        toast.success('new category added successfully.');
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

export const getAllCategories = async(setIsLoading:any) => {
    setIsLoading(true)
    const apiResponse = await apiRequest('get', '/categories');
    console.log(apiResponse);
    if(apiResponse.statusCode === 200){
        setIsLoading(false)
        //@ts-ignore
        return apiResponse?.data;
    }else{
        if ("message" in apiResponse) {
            toast.info(apiResponse.message);
        }
        setIsLoading(false);
        return apiResponse;
    }
}
