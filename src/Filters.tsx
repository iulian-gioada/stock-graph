import React, { useState } from 'react'
import { IFiltersProps } from './types'

const Filters: React.FC<IFiltersProps> = ({filters, applyFilters}: IFiltersProps) => {
    const [symbol, setSymbol] = useState(filters.symbol)

    return <div className="Filters">
        <input type="text" name="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)}/>
        <button onClick={() => applyFilters({symbol})}>Apply Filters</button>
    </div>
}

export default Filters