import React, { Fragment, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { CheckBox, Heading, Paragraph } from 'grommet'
import { IStockGraphProps, IPoint } from './types'

const Chart: React.FC<{ graphData: IPoint[] }> = ({ graphData }: { graphData: IPoint[] }) => {
    const [showAverage, setShowAverage] = useState(false)

    return <Fragment>
        <ResponsiveContainer width={'100%'} aspect={3} debounce={1}>
            <LineChart data={graphData}>
                <Line type="monotone" name="open" dataKey="open" stroke="blue" />
                <Line type="monotone" name="close" dataKey="close" stroke="red" />
                {showAverage ? <Line type="monotone" name="average" dataKey="av.average" stroke="green" /> : null}
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis type="number" domain={['dataMin-10', 'dataMax+10']} />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
            </LineChart>
        </ResponsiveContainer>
        <CheckBox id="show-average" label={"Show Average"} checked={showAverage} onChange={(e) => setShowAverage(e.target.checked)} />
    </Fragment>
}
const StockGraph: React.FC<IStockGraphProps> = ({ graphData, symbol }: IStockGraphProps) =>
    <div className="Graph-section">
        {symbol ? <Heading level={3}>Symbol: {symbol}</Heading> : null}
        {graphData.length ?
            <Chart graphData={graphData} />
            : <Paragraph margin={"medium"}>No data to draw the chart. Please asjust the filters on the left side of the screen</Paragraph>}
    </div>

export default StockGraph