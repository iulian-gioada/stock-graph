import React, { useState } from 'react'
import { TextInput, Button, Select, Heading } from 'grommet'
import { IFiltersProps } from './types'

const Filters: React.FC<IFiltersProps> = ({ filters, applyFilters }: IFiltersProps) => {
    const [symbol, setSymbol] = useState(filters.symbol)
    const [range, setRange] = useState(filters.range)

    const symbolChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setSymbol(e.target.value.toUpperCase())
    const rangeChangeHandler = (e: any) => setRange(e.value.value)

    const rangeOptions = [
        { value: '1d', name: '1 day' },
        { value: '5d', name: '5 days' },
        { value: '3mo', name: '3 months' },
        { value: '6mo', name: '6 months' },
        { value: '1y', name: '1 year' },
        { value: '5y', name: '5 years' },
        { value: 'max', name: 'Maximum possible' },
    ]

    const selectedRange = rangeOptions.find(({ value }) => value === range)

    return <div className="Filters">
        <Heading size="small" level={2}>Filters</Heading>
        <div className="Filter">
            <label htmlFor={"symbol"}>Symbol</label>
            <TextInput className="Filters-symbol" placeholder="Enter Symbol" id="symbol" name="symbol" value={symbol} onChange={symbolChangeHandler} />
        </div>
        <div className="Filter">
            <label htmlFor={"range-selector"}>Range</label>
            <Select placeholder="Range" id="range-selector" margin={{ bottom: "medium" }} onChange={rangeChangeHandler} options={rangeOptions} labelKey={"name"} valueKey={"value"} value={selectedRange} />
        </div>
        <Button primary onClick={() => applyFilters({ symbol, range })} label="Apply Filters" />
    </div>
}

export default Filters