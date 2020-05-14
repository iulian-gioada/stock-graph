import React from 'react';
import './App.css';
import StockGraph from './StockGraph';
import * as mockData from './mockData.json'
import { IPoint, IData, AppProps } from './types';

const {timestamp, indicators: { quote }}: IData = mockData.chart.result[0]
const averageStore = {
  average: 0
}
const data: IPoint[] = timestamp.map((stamp: number, index: number) => {
  const close = quote[0].close[index]
  const open = quote[0].open[index]
  averageStore.average = (close + averageStore.average * (index))/(index+1)
  const point = {
    close,
    open,
    name: new Date(stamp).toString(),
    avr: averageStore
  }
  return point
})

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        Stock Graph
      </header>
      <StockGraph data={data} />
    </div>
  );
}

export default App;
