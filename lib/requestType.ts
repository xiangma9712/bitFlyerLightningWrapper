export type ProductQuery = {
    productCode?: string,
    alias?: string
}

export type PageQuery = {
    count?: number,
    before?: number,
    after?: number
}

export type GeneralQuery = {
    [P in string]: number | string | undefined
}