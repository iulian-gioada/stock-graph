import React, { useEffect, useReducer } from 'react'
import './App.css'
import { ACTIONS } from './constants'
import StockGraph from './StockGraph'
import Filters from './Filters'
import Loading from './Loading'
import { IAppProps, IAppState, IFilters } from './types'
import YahooFinanceApi from './YahooFinanceApi'
import { reducer } from './reducer'
import MockFetch from './MockFetch'

const App: React.FC<IAppProps> = () => {
  const initialState: IAppState = {
    points: [],
    filters: {
      symbol: '',
    },
    loading: false,
    error: '',
  }

  const [{ points, filters, loading, error }, dispatch] = useReducer(reducer, initialState)
  const { symbol } = filters
  const applyFilters = (filters: IFilters) => dispatch({ type: ACTIONS.SET_FILTERS, filters })

  useEffect(() => {
    const loadData = async () => {
      try {
        dispatch({ type: ACTIONS.LOAD_POINTS })
        const points = await new YahooFinanceApi(MockFetch).getChartData(filters)
        dispatch({ type: ACTIONS.SET_POINTS, points })
      } catch (e) {
        dispatch({ type: ACTIONS.SET_ERROR, error: e.message })
      }
    }
    loadData()
  }, [filters])

  return (
    <div className="App">
      <header className="App-header">
        Stock Graph
      </header>
      <div className="App-content">
        <div className="App-filters"><Filters filters={filters} applyFilters={applyFilters} /></div>
        <div className="App-graph">
          {loading ? <Loading symbol={symbol} /> : (error ? (<div> {error} </div>) : <StockGraph graphData={points} symbol={symbol} />)}
        </div>
      </div>
    </div>
  )
}

export default App
