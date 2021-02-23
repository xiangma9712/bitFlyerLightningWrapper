export type MarketResponse = {
    product_code: string,
    market_type: 'SPOT' | 'FX' | 'Futures',
    alias?: string
}

type Liquidity = {
    price: number,
    size: number
}

export type BoardResponse = {
    mid_price: number,
    bits: Array<Liquidity>,
    asks: Array<Liquidity>
}

export type TickerResponse = {
    product_code: string,
    state: State,
    timestamp: string,
    tick_id: number,
    best_bid: number,
    best_ask: number,
    best_bid_size: number,
    best_ask_size: number,
    total_bid_depth: number,
    total_ask_depth: number,
    market_bid_size: number,
    market_ask_size: number,
    ltp: number,
    volume: number,
    volume_by_product: number
}

export type ExecutionResponse = {
    id: number,
    side: 'BUY' | 'SELL',
    price: number,
    size: number,
    exec_date: string,
    buy_child_order_acceptance_id: string,
    sell_child_order_acceptance_id: string
}

type Health = 'NORMAL' | 'BUSY' | 'VERY BUSY' | 'SUPER BUSY' | 'NO ORDER' | 'STOP';
type State = 'RUNNING' | 'CLOSED' | 'STARTING' | 'PREOPEN' | 'CIRCUIT BREAK' | 'AWAITING SQ' | 'MATURED';

export type BoardStateResponse = {
    health: Health,
    state: State,
    data?: {
        special_quotation: number
    }
}

export type HealthResponse = {
    health: Health
}

export type ChatResponse = {
    nickname: string,
    message: string,
    date: string
}

export type BalanceResponse = {
    currency_code: string,
    amount: number,
    available: number
}