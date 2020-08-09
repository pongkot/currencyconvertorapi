interface IRates {
    USD: number
    THB: number
    CNY: number
    JPY: number
}

export default interface IFixerSimpleResponse {
    success: string
    timestamp: number
    base: string
    date: string
    rates: IRates
}
