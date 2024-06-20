import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const BASE_URL = 'https://681gpctgg1.execute-api.us-east-1.amazonaws.com/dev';

interface SuccessResponse<T = any> {
    success: true;
    statusCode: number;
    data: T;
}

interface ErrorResponse {
    success: false;
    statusCode: number;
    message: string;
}

type ApiResponse<T = any> = SuccessResponse<T> | ErrorResponse;

const handleSuccessResponse = (response: AxiosResponse): SuccessResponse => {
    return {
        success: true,
        statusCode: response.status,
        data: response.data.data ?? response.data,
    };
};

const handleErrorResponse = (error: AxiosError): ErrorResponse => {
    let errorMessage = 'An error occurred';
    let statusCode = 500;
    if (error.response) {
        console.log(error.response);
        statusCode = error.response.status;
        // @ts-ignore
        errorMessage = error.response.data.message || errorMessage;
    } else if (error.request) {
        errorMessage = 'No response from server';
    } else {
        errorMessage = error.message;
    }

    return {
        success: false,
        statusCode: statusCode,
        message: errorMessage,
    };
};

export const apiRequest = async <T = any>(method: 'get' | 'post' | 'put' | 'delete', url: string, data: any = null): Promise<ApiResponse<T>> => {
    try {
        const token = Cookies.get('token');
        const api = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        });
        let response: AxiosResponse<T>;

        if (method === 'delete' && data) {
            response = await api.request<T>({
                method: 'delete',
                url: url,
                data: data
            });
        } else {
            response = await api[method](url, data);
        }
        return handleSuccessResponse(response);
    } catch (error) {
        console.error(error);
        return handleErrorResponse(error as AxiosError);
    }
};

