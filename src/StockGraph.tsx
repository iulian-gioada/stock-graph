import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { StockGraphProps } from './types'

const StockGraph: React.FC<StockGraphProps> = ({data}: StockGraphProps) => 
    <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="open" stroke="blue" dot={false} />
        <Line type="monotone" dataKey="close" stroke="red" dot={false} />
        <Line type="monotone" dataKey="avr.average" stroke="green" dot={false} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={['dataMin-10', 'dataMax+10']} />
    </LineChart>

export default StockGraph