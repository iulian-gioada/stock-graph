import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { IStockGraphProps } from './types'

const StockGraph: React.FC<IStockGraphProps> = ({graphData, symbol}: IStockGraphProps) =>
    <div>
    <span>Symbol: {symbol}</span>
    <ResponsiveContainer width={'100%'} aspect={3} debounce={1}>
        <LineChart data={graphData}>
            <Line type="monotone" name="open" dataKey="open" stroke="blue" />
            <Line type="monotone" name="close" dataKey="close" stroke="red" />
            <Line type="monotone" name="average" dataKey="av.average" stroke="green" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={['dataMin-10', 'dataMax+10']} />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
        </LineChart>
    </ResponsiveContainer>
    </div>

export default StockGraph