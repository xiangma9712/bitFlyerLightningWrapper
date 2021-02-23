import { AxiosInstance, AxiosResponse } from 'axios';
export declare class ApiInvoker {
    key: string;
    secret: string;
    isAuthReady: boolean;
    api: AxiosInstance;
    constructor(key?: string, secret?: string);
    get defaultHeader(): {
        'Content-Type': string;
    };
    post<T>(path: string, params: object, isAuthRequired?: boolean): Promise<AxiosResponse<T>>;
    get<T>(path: string, isAuthRequired?: boolean): Promise<AxiosResponse<T>>;
    private buildHeader;
    private sign;
}
