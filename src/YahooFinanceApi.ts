import ApiDataAdapter from "./ApiDataAdapter";
import { API_BASE_URL, API_HEADERS } from "./config";
import { IPoint, IFilters, IAPIData } from "./types";

class YahooFinanceApi {
  private fetcher: any;
  private apis = {
    market: {
      getCharts: "/market/get-charts",
    },
  };
  constructor(customFetcher?: any) {
    this.fetcher = customFetcher || window.fetch.bind(window);
  }

  async getChartData(filters: IFilters): Promise<IPoint[]> {
    const data = await this.getRawChartData(filters);
    const apiAdapter = new ApiDataAdapter(data);
    return apiAdapter.getGraphData();
  }

  async getRawChartData(filters: IFilters): Promise<IAPIData> {
    try {
      const response = await this.fetcher(
        `${API_BASE_URL}${this.apis.market.getCharts}?region=US&lang=en&symbol=${filters.symbol}&range=${filters.range}&interval=1d`,
        { method: "GET", headers: API_HEADERS }
      );
      const data = await response.json();
      if (data.chart.error) {
        throw new Error(data.chart.error.description);
      }

      return data;
    } catch (e) {
      console.log(e);
      throw new Error(
        "A problem occured while loading the needed informations"
      );
    }
  }
}

export default YahooFinanceApi;
