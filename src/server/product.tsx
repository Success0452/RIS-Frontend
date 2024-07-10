import {toast} from "sonner";
import {apiRequest} from "src/server/index";

export const addProduct = async(name:string, description:string, price:string, quantity:number, categoryId:string, setIsLoading:any) => {
    if(!name){
        toast.info('name is required');
        return;
    }
    if(!description){
        toast.info('description is required');
        return;
    }
    if(!price){
        toast.info('price is required');
        return;
    }
    if(!quantity){
        toast.info('quantity is required');
        return;
    }
    if(!categoryId){
        toast.info('categoryId is required');
        return;
    }
    setIsLoading(true)
    const apiResponse = await apiRequest(
        'post',
        '/products',
        {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            categoryId: categoryId
        }
        );
    if(apiResponse.statusCode === 201){
        toast.success('new product added successfully.');
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

export const getAllProducts = async(setIsLoading:any) => {
    setIsLoading(true)
    const apiResponse = await apiRequest('get', '/products');
    if(apiResponse.statusCode === 200){
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

export const getSingleProduct = async(productId:string, setIsLoading:any) => {
    setIsLoading(true)
    const apiResponse = await apiRequest('get', '/products');
    if(apiResponse.statusCode === 200){
        //@ts-ignore
        const singleProduct = apiResponse?.data?.filter((item) => String(item.id) === productId);
        setIsLoading(false);
        return {
            statusCode: apiResponse.statusCode,
            data: singleProduct[0]
        };
    }else{
        if ("message" in apiResponse) {
            toast.info(apiResponse.message);
        }
        setIsLoading(false);
        return apiResponse;
    }
}

export const getCategorizedProducts = async(setIsLoading:any) => {
    setIsLoading(true)
    const apiResponse = await apiRequest('get', '/products');
    if(apiResponse.statusCode === 200){
        const categoryResponse = await apiRequest('get', '/categories');
        setIsLoading(false)
        if(categoryResponse.statusCode === 200){
            return {
                statusCode: categoryResponse.statusCode,
                // @ts-ignore
                data: groupProductsByCategory(apiResponse?.data, categoryResponse?.data)
            };
        }else {
            return categoryResponse;
        }
    }else{
        if ("message" in apiResponse) {
            toast.info(apiResponse.message);
        }
        setIsLoading(false);
        return apiResponse;
    }
}

const groupProductsByCategory = (products: any, categories: any) => {
    const categorizedList:any[] = [];

    categories.forEach((category: any) => {
        const categoryProducts = products.filter((product: any) => product.categoryId === category.id);
        if (categoryProducts.length > 0) {
            categorizedList.push({
                category: category.name,
                data: categoryProducts
            });
        }
    });

    return categorizedList;
}


export const updateProduct = async(name:string, description:string, price:string, quantity:number, categoryId:string, productId:string, setIsLoading:any) => {
    setIsLoading(true)
    const apiResponse = await apiRequest(
        'put',
        '/products',
        {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            categoryId: categoryId,
            productId: productId,
        }
        );
    if(apiResponse.statusCode === 200){
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

export const deleteProduct = async(productId:string, setIsLoading:any) => {
    setIsLoading(true)
    const apiResponse = await apiRequest(
        'delete',
        '/products',
        {
            productId: productId,
        }
    );
    if(apiResponse.statusCode === 200){
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

export const searchProducts = (names: any[], searchTerm: string) => {
    return names.filter((item:any) => String(item.categoryId) === String(searchTerm));
}

export const searchProductsByName = (names: any[], searchTerm: string) => {
    return names.filter((item:any) => String(item?.category).toLowerCase().includes(String(searchTerm).toLowerCase()));
}

export const searchCategoryByName = (names: any[], searchTerm: string) => {
    return names.filter((item:any) => String(item?.name).toLowerCase().includes(String(searchTerm).toLowerCase()));
}
