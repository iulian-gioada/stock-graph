import ApiDataAdapter from './ApiDataAdapter'
import { IPoint, IFilters, IAPIData } from './types'

class YahooFinanceApi {
    private fetcher: any
    constructor (customFetcher: any) {
        this.fetcher = customFetcher || window.fetch
    }

    async getChartData (filters: IFilters): Promise<IPoint[]> {
        const data = await this.getRawChartData(filters)
        const apiAdapter = new ApiDataAdapter(data)
        return apiAdapter.getGraphData()
    }

    async getRawChartData (filters: IFilters): Promise<IAPIData> {
        try {
            const response = await this.fetcher('someURLHere')
            const data = await response.json()
            if (data.chart.error) {
                throw new Error(data.chart.error.description)
            }

            return data
        } catch (e) {
            console.log(e)
            throw new Error("API_PROBLEM")
        }
    }
}

export default YahooFinanceApi