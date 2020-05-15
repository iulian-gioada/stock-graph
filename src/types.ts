import { ACTIONS } from './constants'

export type IPoint = {
    close: number,
    open: number,
    name: string
    av: {
        average: number
    }
}

export type IQuote = {
    close: number[],
    open: number[],
}

export type IAPIData = {
    chart: {
        result: {
            timestamp: number[],
            indicators: {
                quote: IQuote[]
            }
        }[]
    }
}

export type IAppProps = {}

export type IStockGraphProps = {
    graphData: IPoint[]
    symbol: string
}

export type IGraphData = {
    points: IPoint[]
    averageStore: {
        average: number
    }
}

export type IFilters = {
    symbol: string
}

export type IFiltersProps = {
    filters: IFilters
    applyFilters (filters: IFilters): void
}

export type IAppState = {
    filters: IFilters
    points: IPoint[]
    loading: boolean
    error: string
}

export type IAction = 
| {
    type: ACTIONS.SET_FILTERS,
    filters: {
        symbol: string
    }
}
| {
    type: ACTIONS.SET_POINTS,
    points: IPoint[]
}
| {
    type: ACTIONS.LOAD_POINTS,
}
| {
    type: ACTIONS.SET_ERROR,
    error: string
}