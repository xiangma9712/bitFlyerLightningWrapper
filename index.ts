import { AxiosResponse } from 'axios';
import { ApiInvoker } from './lib/invoker';
import { MarketResponse, BoardResponse, TickerResponse, ExecutionResponse, BoardStateResponse, HealthResponse, ChatResponse, BalanceResponse } from './lib/responseType';
import { ProductQuery, PageQuery, GeneralQuery } from './lib/requestType';

export default class LightningApi implements LightingPublicApi{
    invoker: ApiInvoker;

    constructor(key?: string, secret?: string) {
        this.invoker = new ApiInvoker(key, secret);
    }

    public async getMarkets() {
        const response =  await this.invoker.get<Array<MarketResponse>>('markets', false);
        return this.validateResponse(response);
    }

    public async getBoard(queryParam: ProductQuery = {}) {
        const response = await this.invoker.get<BoardResponse>(`board${this.getProductQuery(queryParam)}`, false);
        return this.validateResponse(response);
    }

    public async getTicker(queryParam: ProductQuery = {}) {
        const response = await this.invoker.get<TickerResponse>(`ticker${this.getProductQuery(queryParam)}`, false);
        return this.validateResponse(response);
    }

    public async getExecutions(productQuery: ProductQuery = {}, pageQuery: PageQuery = {}) {
        const productQueryStr = this.getProductQuery(productQuery, false);
        const pageQueryStr = this.getQuery(pageQuery, false);
        const hasBothQuery = productQueryStr !== '' && pageQueryStr !== '';
        const hasNoQuery = productQueryStr === '' && pageQueryStr === '';
        const query = `${hasNoQuery ? '' : '?'}${productQueryStr}${hasBothQuery ? '&' : ''}${pageQueryStr}`;
        const response = await this.invoker.get<ExecutionResponse>(`executions${query}`, false);
        return this.validateResponse(response);
    }

    public async getBoardState(queryParam: ProductQuery = {}){
        const response = await this.invoker.get<BoardStateResponse>(`getboardstate${this.getProductQuery(queryParam)}`, false);
        return this.validateResponse(response);
    }

    public async getHealth(queryParam: ProductQuery = {}) {
        const response = await this.invoker.get<HealthResponse>(`gethealth${this.getProductQuery(queryParam)}`, false);
        return this.validateResponse(response);
    }

    public async getChats(): Promise<Array<ChatResponse>>{
        const response = await this.invoker.get<Array<ChatResponse>>('getchats', false);
        return this.validateResponse(response);
    }

    public async getPermissions(): Promise<Array<string>>{
        const response = await this.invoker.get<Array<string>>('me/getpermissions');
        return this.validateResponse(response);
    }

    public async getBalance(): Promise<Array<BalanceResponse>>{
        const response = await this.invoker.get<Array<BalanceResponse>>('me/getbalance');
        return this.validateResponse(response);
    }

    private validateResponse<T>(response: AxiosResponse<T>){
        if (response.data != undefined) {
            return response.data;
        }
        else {
            throw new Error(`${response.status}: ${JSON.stringify(response.data)}`);
        }
    }

    private getProductQuery(queryParam: ProductQuery, withQuestionMark: boolean = true): string {
        if (queryParam.productCode == undefined && queryParam.alias == undefined) {
            return '';
        }
        const query: string = queryParam.productCode ? queryParam.productCode as string : queryParam.alias as string;
        return `${withQuestionMark ? '?' : ''}product_code=${query}`;
    }

    private getQuery(queryParam: GeneralQuery, withQuestionMark: boolean = true): string {
        const query = Object.keys(queryParam).map(key => `${key}=${queryParam[key]}`).join('&');
        return withQuestionMark ? '?' + query : query;
    }
} 

interface LightingPublicApi {
    getMarkets(): Promise<Array<MarketResponse>>;
    getBoard(queryParam: ProductQuery): Promise<BoardResponse>;
    getTicker(queryParam: ProductQuery): Promise<TickerResponse>;
    getExecutions(productQuery: ProductQuery, pageQuery: PageQuery): Promise<ExecutionResponse>;
    getBoardState(queryParam: ProductQuery): Promise<BoardStateResponse>;
    getHealth(queryParam: ProductQuery): Promise<HealthResponse>;
    getChats(): Promise<Array<ChatResponse>>;
}