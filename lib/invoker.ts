import axios, { AxiosInstance, AxiosResponse } from 'axios';
import crypto from 'crypto';
const apiRootUrl = 'https://api.bitflyer.com/v1/';

export class ApiInvoker {
    key: string;
    secret: string;
    isAuthReady: boolean = true;
    api: AxiosInstance;

    constructor(key?: string, secret?: string) {
        if(key == undefined || secret == undefined){
            this.isAuthReady = false;
        }
        this.secret = secret || '';
        this.key = key || '';

        this.api = axios.create({
            baseURL: apiRootUrl
        });
    }

    get defaultHeader () {
        return {
            'Content-Type': 'application/json'
        }
    }

    public async post<T>(path: string, params: object, isAuthRequired: boolean = true) {
        const headers = isAuthRequired ? this.buildHeader('post', path, params) : this.defaultHeader;
        return await this.api.post<T>(path, params, { headers });
    }

    public async get<T>(path: string, isAuthRequired: boolean = true) {
        const headers = isAuthRequired ? this.buildHeader('get', path) : this.defaultHeader;
        return await this.api.get<T>(path, { headers });
    }

    private buildHeader(method: string, path: string, params?: object) {
        if (!this.isAuthReady) {
            throw new Error('missing credentials');
        }
        const timestamp = Date.now().toString();
        const signature = this.sign(timestamp, method.toUpperCase(), `/v1/${path}`, params);
        return {
            'ACCESS-KEY': this.key,
            'ACCESS-TIMESTAMP': timestamp,
            'ACCESS-SIGN': signature,
            'Content-Type': 'application/json'
        }
    }

    private sign(timestamp: string | number , method: string, path: string, params?: object): string {
        let data = timestamp + method + path;
        if (params != undefined) {
            data += JSON.stringify(params);
        }
        return crypto.createHmac('sha256', this.secret).update(data).digest('hex');
    }
}