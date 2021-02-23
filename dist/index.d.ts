import { ApiInvoker } from './lib/invoker';
import { MarketResponse, BoardResponse, TickerResponse, ExecutionResponse, BoardStateResponse, HealthResponse, ChatResponse, BalanceResponse } from './lib/responseType';
import { ProductQuery, PageQuery } from './lib/requestType';
export default class LightningApi implements LightingPublicApi {
    invoker: ApiInvoker;
    constructor(key?: string, secret?: string);
    getMarkets(): Promise<MarketResponse[]>;
    getBoard(queryParam?: ProductQuery): Promise<BoardResponse>;
    getTicker(queryParam?: ProductQuery): Promise<TickerResponse>;
    getExecutions(productQuery?: ProductQuery, pageQuery?: PageQuery): Promise<ExecutionResponse>;
    getBoardState(queryParam?: ProductQuery): Promise<BoardStateResponse>;
    getHealth(queryParam?: ProductQuery): Promise<HealthResponse>;
    getChats(): Promise<Array<ChatResponse>>;
    getPermissions(): Promise<Array<string>>;
    getBalance(): Promise<Array<BalanceResponse>>;
    private validateResponse;
    private getProductQuery;
    private getQuery;
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
export {};
