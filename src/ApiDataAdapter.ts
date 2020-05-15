import moment from 'moment';
import { IAPIData, IGraphData, IQuote, IPoint } from './types';

class ApiDataAdapter {
    private timestamps: number[]
    private quote: IQuote

    constructor({chart: {result}}: IAPIData) {
        this.timestamps = result[0].timestamp
        this.quote = result[0].indicators.quote[0]
    }

    getGraphData(): IPoint[] {
        const graphData: IGraphData = this.timestamps.reduce((result: IGraphData, stamp: number, index: number) => {
            const close = this.quote.close[index]
            const open = this.quote.open[index]
            result.averageStore.average = (close + result.averageStore.average * (index))/(index+1)
            const point = {
              close,
              open,
              name: moment(stamp * 1000).format('MMMM Do YYYY'),
              av: result.averageStore
            }
            result.points = [...result.points, point]
            return result
          }, {points: [], averageStore: {average: 0}})
        
        return graphData.points
    }
}

export default ApiDataAdapter