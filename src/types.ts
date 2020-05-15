export interface IPoint {
    close: number,
    open: number,
    name: string
    avr: {
        average: number
    }
}

export interface IData {
    timestamp: number[],
    indicators: {
        quote: {
        close: number[],
        open: number[],
        }[]
    }
}

export interface IAppProps {}

export interface IStockGraphProps {
    data: IPoint[]
}