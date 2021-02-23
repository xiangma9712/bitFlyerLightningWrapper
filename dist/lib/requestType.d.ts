export declare type ProductQuery = {
    productCode?: string;
    alias?: string;
};
export declare type PageQuery = {
    count?: number;
    before?: number;
    after?: number;
};
export declare type GeneralQuery = {
    [P in string]: number | string | undefined;
};
