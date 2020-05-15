import React from 'react';
import './App.css';
import StockGraph from './StockGraph';
import * as mockData from './mockData.json'
import { IPoint, IData, IAppProps } from './types';

const {timestamp, indicators: { quote }}: IData = mockData.chart.result[0]

const data: {points: IPoint[]} = timestamp.reduce((result: any, stamp: number, index: number) => {
  const close = quote[0].close[index]
  const open = quote[0].open[index]
  result.averageStore.average = (close + result.averageStore.average * (index))/(index+1)
  const point = {
    close,
    open,
    name: new Date(stamp).toString(),
    avr: result.averageStore
  }
  result.points = [...result.points, point]
  return result
}, {points: [], averageStore: {average: 0}})

const App: React.FC<IAppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        Stock Graph
      </header>
      <div className="App-content">
        <div className="App-filters">Filters</div>
        <div className="App-graph"><StockGraph data={data.points} /></div>
      </div>
    </div>
  );
}

export default App;
