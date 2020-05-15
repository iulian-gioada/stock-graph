import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { IStockGraphProps } from './types'

const StockGraph: React.FC<IStockGraphProps> = ({data}: IStockGraphProps) => 
    <ResponsiveContainer width={'100%'} aspect={3} debounce={1}>
        <LineChart data={data}>
            <Line type="monotone" dataKey="open" stroke="blue"  />
            <Line type="monotone" dataKey="close" stroke="red"  />
            <Line type="monotone" dataKey="avr.average" stroke="green"  />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis type="number" domain={['dataMin-10', 'dataMax+10']} />
        </LineChart>
    </ResponsiveContainer>

export default StockGraph